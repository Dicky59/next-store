import { getToken } from 'next-auth/jwt'
import { NextRequest, NextResponse } from 'next/server'

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Check for session cart cookie
  if (!request.cookies.get('sessionCartId')) {
    // Generate new session cart id cookie
    const sessionCartId = crypto.randomUUID()

    // Create response and add the cookie
    const response = NextResponse.next()
    response.cookies.set('sessionCartId', sessionCartId)

    return response
  }

  // Define protected paths (matching your auth.ts configuration)
  const protectedPaths = [
    /\/shipping-address/,
    /\/payment-method/,
    /\/place-order/,
    /\/profile/,
    /\/user\/(.*)/,
    /\/order\/(.*)/,
    /\/admin/,
  ]

  // Check if the current path is protected
  const isProtectedPath = protectedPaths.some(path => path.test(pathname))

  if (isProtectedPath) {
    // Check for NextAuth session cookie
    const sessionCookie = request.cookies.get(
      process.env.NODE_ENV === 'production'
        ? '__Secure-next-auth.session-token'
        : 'next-auth.session-token'
    )

    // If no session cookie (user not authenticated), redirect to sign-in
    if (!sessionCookie) {
      const signInUrl = new URL('/sign-in', request.url)
      signInUrl.searchParams.set('callbackUrl', request.url)
      return NextResponse.redirect(signInUrl)
    }

    // Also try to get the JWT token as a backup check
    try {
      const token = await getToken({
        req: request,
        secret: process.env.NEXTAUTH_SECRET,
      })

      // If token is also null, redirect to sign-in
      if (!token) {
        const signInUrl = new URL('/sign-in', request.url)
        signInUrl.searchParams.set('callbackUrl', request.url)
        return NextResponse.redirect(signInUrl)
      }
    } catch {
      // If there's an error getting the token, redirect to sign-in
      const signInUrl = new URL('/sign-in', request.url)
      signInUrl.searchParams.set('callbackUrl', request.url)
      return NextResponse.redirect(signInUrl)
    }
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
