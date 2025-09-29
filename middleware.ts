import { auth } from '@/auth'
import { NextResponse } from 'next/server'

export default auth(req => {
  const { auth, nextUrl } = req

  // Check for session cart cookie
  if (!req.cookies.get('sessionCartId')) {
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

  // If user is not authenticated and trying to access protected routes
  if (!auth && protectedPaths.some(path => path.test(nextUrl.pathname))) {
    return NextResponse.redirect(new URL('/sign-in', nextUrl))
  }

  return NextResponse.next()
})

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
