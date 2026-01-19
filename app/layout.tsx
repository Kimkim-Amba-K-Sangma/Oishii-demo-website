import "./globals.css"
import { Playfair_Display, Inter } from "next/font/google"

const serif = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-serif",
})

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body className="bg-[#F6F2EC] text-[#2A2A2A]">
        {children}
      </body>
    </html>
  )
}
