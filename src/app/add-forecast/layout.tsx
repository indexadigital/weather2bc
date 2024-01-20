import Navbar from "@/components/Navbar"

export default function ForecastLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main>
      <Navbar />
      {children}
    </main>
  )
}
