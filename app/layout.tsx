import type React from "react"
import { DM_Sans, Marcellus, Roboto_Slab } from "next/font/google"
import "./globals.css"

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
})

const marcellus = Marcellus({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-marcellus",
})

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  variable: "--font-roboto-slab",
})

export const metadata = {
  title: "ANANDA ENTERPRISES | Construction Material Supply",
  description: "Your trusted partner in construction material supply. B2B and Bulk supplier of Premium TMT Steel, Cement & Construction Materials in Bangalore.",
  generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${marcellus.variable} ${robotoSlab.variable} font-sans`}>{children}</body>
    </html>
  )
}
