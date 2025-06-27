import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import Header from "./Components/Header"
import { CartProvider } from "./context/CartContext"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Fake Store - Your Online Shopping Destination",
  description: "Discover amazing products at great prices",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <Header />
          <main className="min-h-screen">{children}</main>
        </CartProvider>
      </body>
    </html>
  )
}