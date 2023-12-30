import type { Metadata } from 'next'
import './globals.css'
import React from 'react'
import { Nunito } from 'next/font/google'


export const metadata: Metadata = {
  title: 'Biblioteca | Luis Miguel Urbez',
  description: 'Biblioteca con GraphQL y Neo4j',
}
const font = Nunito({subsets: ['latin']})
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  )
}

