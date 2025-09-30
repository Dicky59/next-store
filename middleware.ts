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
    // Get the JWT token to check authentication
    const token = await getToken({
      req: request,
      secret: process.env.NEXTAUTH_SECRET,
    })

    // If no token (user not authenticated), redirect to sign-in
    if (!token) {
      return NextResponse.redirect(new URL('/sign-in', request.url))
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
