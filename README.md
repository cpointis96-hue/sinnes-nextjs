# Sinnes Automobiles

## Mon projet principal

J'ai consacré plus de trois mois à ce projet, avec un investissement quotidien très important. Ce travail a porté sur la conception du site, le référencement naturel (SEO), l'étude du secteur et des concurrents, et l'amélioration de la présentation sur ordinateur et téléphone.

Le site présente une activité de serrurerie automobile à Nice. Il permet de comprendre les services, de trouver une réponse à une situation concrète (clé perdue, double de clé, programmation) et de rejoindre les moyens de contact.

## Le travail de référencement et de contenu

- Des pages consacrées aux besoins des clients : perte de clé, reproduction, programmation, dépannage et tarifs.
- Des contenus locaux autour de Nice et de la zone d'intervention.
- Des pages par marque automobile pour répondre à des recherches plus précises.
- Des liens entre les pages pour faciliter la navigation et relier les sujets.
- Des titres et descriptions propres aux pages pour présenter leur contenu dans les moteurs de recherche.
- Des questions fréquentes et des informations structurées sur l'entreprise et ses services, lisibles par les moteurs de recherche.
- Un plan du site et des consignes d'exploration pour les moteurs de recherche.

J'ai également étudié les différents concurrents pendant ce travail. Les documents d'analyse conservés dans mes archives pourront compléter cette présentation après leur sélection. Cette fiche ne revendique pas de résultat de classement ou de trafic mesuré.

## Voir le site sur son ordinateur

Le site n'est pas hébergé pour cette présentation. Les captures ci-dessous permettent de le découvrir directement, sans installation.

![Accueil sur ordinateur](docs/screenshots/home-desktop.png)

Pour ouvrir le site et naviguer entre ses pages, il faut télécharger le projet et le lancer sur son ordinateur. Télécharger seulement le ZIP ne suffit pas à l'ouvrir comme un document.

1. Installer Node.js depuis [son site officiel](https://nodejs.org/), en choisissant la version LTS. Fermer puis rouvrir le terminal après l'installation.
2. [Télécharger le dossier du site](https://github.com/cpointis96-hue/sinnes-nextjs/archive/HEAD.zip), puis extraire le ZIP.
3. Sur Windows : double-cliquer sur `ouvrir-le-site.bat`. Sur Mac : utiliser `ouvrir-le-site.command` (voir la précision ci-dessous).
4. Au premier lancement, laisser le programme télécharger les composants et préparer le site. Internet est nécessaire ; cela peut prendre plusieurs minutes. Les fichiers sont installés dans le dossier téléchargé.
5. Le navigateur s'ouvre sur le site. Garder la fenêtre de lancement ouverte pendant la visite. Pour arrêter, revenir dans cette fenêtre et appuyer sur Ctrl+C.

Si le navigateur ne s'ouvre pas, saisir `http://127.0.0.1:4187` dans sa barre d'adresse.

Sur Mac, le ZIP GitHub peut ne pas conserver l'autorisation d'exécuter le fichier. Dans ce cas : ouvrir Terminal, taper `sh` suivi d'un espace, glisser `ouvrir-le-site.command` dans la fenêtre, puis appuyer sur Entrée. Si un ordinateur professionnel interdit l'installation de programmes, consulter les captures ou demander une aide informatique.

Le lanceur démarre une version locale de démonstration. Les captures peuvent être regardées sans installer Node.js ni exécuter de fichier. Les étapes Windows sont préparées mais doivent encore être testées sur Windows.

## Informations techniques

<details>
<summary>Technologies, vérifications et éléments à reprendre</summary>

**Ce que c’est :** un site vitrine pour une activité de serrurerie automobile à Nice.

**À quoi il sert :** présenter les services et les marques, organiser des pages locales et orienter un visiteur vers une prise de contact.

**Ce qui a été réalisé :** pages de services, contenu local, vidéo d’accueil, navigation responsive et contrôles du build et du parcours navigateur.

**Technologies :** Next.js 16, React 19, TypeScript, rendu statique, Framer Motion et Swiper.

Le contenu métier historique est conservé mais les avis, tarifs, disponibilités et promesses commerciales n’ont pas été revérifiés.

Le design existant est conservé. Les avis, tarifs, disponibilités et promesses commerciales visibles proviennent du contenu historique ; ils n’ont pas été revérifiés ici. Ce n’est ni un système de réservation ni une garantie de positionnement Google.

## Lancer le site

Node.js20.9+ compatible avec Next16 ; Node26.7.0 utilisé pour cette vérification, pas une validation de toutes les versions.

```sh
npm ci --ignore-scripts
npm run build
npm start -- --hostname 127.0.0.1 --port 4187
```

Ouvrir http://127.0.0.1:4187. En développement : `npm run dev`. Aucun nouveau déploiement de production n’est annoncé ici.

## Vérifications

Build et TypeScript réussis,27pages générées dans le build dont les routes techniques. Les17tests Chromium existants passent sur le serveur local : titres, navigation/téléphone, vidéo hero, pages de services et certains textes. L’accueil à390px a une largeur de document390px ; vidéo en lecture et44images chargées. Trois captures réelles : accueil desktop/mobile et service.

```sh
PLAYWRIGHT_BASE_URL=http://127.0.0.1:4187 npx playwright test --project=chromium
```

Le paramètre d’environnement a été ajouté pour éviter de lancer les tests sur le site distant. Sans ce paramètre, la configuration conserve son URL de production historique. Mobile Safari non testé ici ; les tests sont ciblés, pas une validation exhaustive du site.

Le lint échoue avec391erreurs et2avertissements, principalement liens internes HTML et caractères JSX non échappés. Audit npm :17alertes, dont1critique,13élevées,2modérées et1faible. Revoir ces dépendances avant nouveau déploiement ; aucune migration ni correction UI générale effectuée pendant cette préparation.

## Reprise

Corriger le lint, mettre à jour les dépendances avec tests de non-régression, confirmer le contenu métier et les droits des médias, vérifier clavier/mobile et contacts sans envoyer de demandes de test à l’entreprise. Le dépôt distant à `e96244a8c89e220a9c0c1771116b7b26a3cfb0c2` sert de référence ; l’archive Sinnes-demo comprend aussi des notes SEO/mirrors non destinés à être republiés en bloc.

Voir [VERIFICATION.md](VERIFICATION.md).

## Dépôt et téléchargement

[Voir le dépôt](https://github.com/cpointis96-hue/sinnes-nextjs) · [Télécharger les sources ZIP](https://github.com/cpointis96-hue/sinnes-nextjs/archive/HEAD.zip). Le ZIP contient les sources, pas un site hébergé par ce dépôt.

</details>
