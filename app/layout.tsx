import "@/assets/styles/globals.css"
import { Toaster } from "@/components/ui/toaster"
import { APP_DESCRIPTION, APP_NAME, SERVER_URL } from "@/lib/constants"
import type { Metadata } from "next"
import { ThemeProvider } from "next-themes"
import localFont from "next/font/local"

// BDO Grotesk font configuration
// Add your font files to app/fonts/ directory (see app/fonts/README.md for details)
const bdoGrotesk = localFont({
  src: [
    {
      path: "./fonts/BDOGrotesk-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/BDOGrotesk-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/BDOGrotesk-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/BDOGrotesk-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-bdo-grotesk",
  display: "swap",
  fallback: ["Helvetica Neue", "Helvetica", "Arial", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
})

export const metadata: Metadata = {
  title: {
    template: `%s | Next Store`,
    default: APP_NAME,
  },
  description: APP_DESCRIPTION,
  metadataBase: new URL(SERVER_URL),
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* ❌ no bg-background here, just font + min-h */}
      <body className={bdoGrotesk.variable}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
