import { spawn, spawnSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { createServer } from 'node:net';

const root = fileURLToPath(new URL('../', import.meta.url));
const url = 'http://127.0.0.1:4187';
const next = fileURLToPath(new URL('../node_modules/next/dist/bin/next', import.meta.url));

try {
  if (Number(process.versions.node.split('.')[0]) < 22) {
    throw new Error('Installez une version LTS de Node.js 22 ou supérieure depuis https://nodejs.org/.');
  }
  // Refuse an occupied port rather than opening another local application.
  await new Promise((resolve, reject) => {
    const probe = createServer();
    probe.once('error', error => reject(new Error(error.code === 'EADDRINUSE'
      ? 'Le port 4187 est déjà utilisé. Fermez la précédente fenêtre du site puis réessayez.'
      : `Impossible de lancer un serveur local (${error.code}). Vérifiez les autorisations de votre ordinateur.`)));
    probe.listen(4187, '127.0.0.1', () => probe.close(resolve));
  });
  if (!existsSync(next)) {
    console.log('Première ouverture : téléchargement des composants du site. Internet est nécessaire.');
    const install = spawnSync(process.platform === 'win32' ? 'npm.cmd' : 'npm',
      ['ci', '--ignore-scripts', '--no-audit', '--no-fund'],
      { cwd: root, stdio: 'inherit', shell: process.platform === 'win32' });
    if (install.error || install.status !== 0) throw new Error('Installation interrompue. Vérifiez votre connexion et la présence de Node.js, puis réessayez.');
  }
  console.log('Préparation du site. Gardez cette fenêtre ouverte pendant la visite.');
  const server = spawn(process.execPath, [next, 'dev', '--hostname', '127.0.0.1', '--port', '4187'],
    { cwd: root, stdio: 'inherit' });
  let stopped = false;
  server.once('exit', code => { stopped = true; process.exitCode = code ?? 1; });
  process.once('SIGINT', () => server.kill('SIGINT'));
  process.once('SIGTERM', () => server.kill('SIGTERM'));
  let ready = false;
  const deadline = Date.now() + 180000;
  while (!stopped && Date.now() < deadline) {
    try {
      const response = await fetch(url, { signal: AbortSignal.timeout(5000) });
      if (response.ok) { ready = true; break; }
    } catch {}
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
  if (!stopped && !ready) {
    server.kill();
    throw new Error('Le site ne répond pas encore. Conservez le message affiché dans cette fenêtre pour demander de l’aide.');
  }
  if (ready) {
    console.log(`Site prêt : ${url}\nPour terminer la visite, revenez ici et appuyez sur Ctrl+C.`);
    if (!process.argv.includes('--sans-navigateur')) {
      const command = process.platform === 'darwin' ? 'open' : process.platform === 'win32' ? 'cmd' : 'xdg-open';
      const args = process.platform === 'win32' ? ['/c', 'start', '', url] : [url];
      const browser = spawn(command, args, { stdio: 'ignore' });
      browser.on('error', () => console.log(`Ouvrez votre navigateur et saisissez : ${url}`));
    }
  }
} catch (error) {
  console.error(`\n${error.message}`);
  process.exitCode = 1;
}
