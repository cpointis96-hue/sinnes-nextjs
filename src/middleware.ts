import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Bloque tout le trafic en production (Vercel) avec un code HTTP 503
  // Laisse le trafic passer en développement (localhost)
  if (process.env.NODE_ENV === 'production') {
    return new NextResponse(
      `<!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="robots" content="noindex, nofollow">
          <title>Site en maintenance</title>
          <style>
            body { font-family: system-ui, sans-serif; display: flex; align-items: center; justify-content: center; height: 100vh; margin: 0; background: #0A0A0A; color: white; text-align: center; }
            h1 { font-size: 2rem; margin-bottom: 1rem; }
            p { color: rgba(255,255,255,0.7); }
          </style>
        </head>
        <body>
          <div>
            <h1>En maintenance</h1>
            <p>Le site est temporairement indisponible. Veuillez revenir plus tard.</p>
          </div>
        </body>
      </html>`,
      { 
        status: 503, 
        headers: {
          'Content-Type': 'text/html',
          'Retry-After': '3600'
        }
      }
    )
  }

  return NextResponse.next()
}

// Intercepte toutes les requêtes (pages, api, images, etc.)
export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
}
