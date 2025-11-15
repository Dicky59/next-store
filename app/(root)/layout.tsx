import Footer from "@/components/footer"
import Header from "@/components/shared/header"

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Header />
      {/* main stretches, but no bg-background here */}
      <main className="min-h-screen">
        {children}
      </main>
      <Footer />
    </>
  )
}
