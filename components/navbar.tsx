"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-blue-600">Kanaya</span>
              <span className="text-2xl font-bold text-gray-900">.net</span>
            </Link>
          </div>
          <nav className="hidden md:flex md:space-x-1">
            <Link
              href="#"
              className="px-4 py-2 text-gray-700 hover:text-blue-600 rounded-md hover:bg-blue-50 transition-colors"
            >
              Beranda
            </Link>
            <Link
              href="#"
              className="px-4 py-2 text-gray-700 hover:text-blue-600 rounded-md hover:bg-blue-50 transition-colors"
            >
              Paket
            </Link>
            <Link
              href="#"
              className="px-4 py-2 text-gray-700 hover:text-blue-600 rounded-md hover:bg-blue-50 transition-colors"
            >
              Jangkauan
            </Link>
            <Link
              href="#"
              className="px-4 py-2 text-gray-700 hover:text-blue-600 rounded-md hover:bg-blue-50 transition-colors"
            >
              Tentang Kami
            </Link>
            <Link
              href="#"
              className="px-4 py-2 text-gray-700 hover:text-blue-600 rounded-md hover:bg-blue-50 transition-colors"
            >
              FAQ
            </Link>
          </nav>
          <div className="hidden md:flex md:items-center">
            <Button className="bg-blue-600 hover:bg-blue-700 rounded-full px-6">
              <span className="mr-2">Daftar Sekarang</span>
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Button>
          </div>
          <div className="flex md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-4 pb-3 pt-2">
            <Link
              href="#"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Beranda
            </Link>
            <Link
              href="#"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Paket
            </Link>
            <Link
              href="#"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Jangkauan
            </Link>
            <Link
              href="#"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Tentang Kami
            </Link>
            <Link
              href="#"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </Link>
            <div className="mt-4 flex flex-col space-y-3">
              <Button className="bg-blue-600 hover:bg-blue-700">Daftar Sekarang</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
