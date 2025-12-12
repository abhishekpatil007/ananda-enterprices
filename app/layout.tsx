import type React from "react"
import "./globals.css"
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
      <body>{children}</body>
    </html>
  )
}
