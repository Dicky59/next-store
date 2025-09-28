import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  // Check for session cart cookie
  if (!request.cookies.get('sessionCartId')) {
    // Generate new session cart id cookie
    const sessionCartId = crypto.randomUUID()

    // Create response and add the cookie
    const response = NextResponse.next()
    response.cookies.set('sessionCartId', sessionCartId)

    return response
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
