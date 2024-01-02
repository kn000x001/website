import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Head from 'next/head'
import logo from "../../../public/logo.png"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nika Ivanidze',
  description: 'Personal website of Nika Ivanidze a Software Engineer.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex h-screen flex-col`}>
        <Header />
        <main className="flex flex-col items-center justify-between py-10 bg-gray-900">
        {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
