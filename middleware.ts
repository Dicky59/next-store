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

    // Debug logging (remove after fixing)
    console.log('Protected path:', pathname)
    console.log('Token exists:', !!token)
    console.log('NEXTAUTH_SECRET exists:', !!process.env.NEXTAUTH_SECRET)
    console.log('Cookies:', request.cookies.getAll().map(c => c.name))

    // If no token (user not authenticated), redirect to sign-in
    if (!token) {
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
     * - sign-in (to avoid conflicts with NextAuth)
     * - sign-up (to avoid conflicts with NextAuth)
     * - _next (Next.js internal routes)
     */
    '/((?!api|_next|favicon.ico|sign-in|sign-up).*)',
  ],
}
