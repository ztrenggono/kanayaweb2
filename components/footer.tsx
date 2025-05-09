import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center">
              <span className="text-2xl font-bold text-blue-400">Kanaya</span>
              <span className="text-2xl font-bold text-white">.net</span>
            </div>
            <p className="mb-4 text-gray-400">
              Penyedia layanan internet cepat dan stabil untuk rumah dan bisnis Anda.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-blue-400">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-400">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-400">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-400">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Layanan</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-blue-400">
                  Internet Rumah
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-blue-400">
                  Internet Bisnis
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-blue-400">
                  Dedicated Internet
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-blue-400">
                  Hosting & Domain
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-blue-400">
                  CCTV
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Perusahaan</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-blue-400">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-blue-400">
                  Karir
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-blue-400">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-blue-400">
                  Syarat & Ketentuan
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-blue-400">
                  Kebijakan Privasi
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Kontak</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-blue-400" />
                <span className="text-gray-400">Jl. Raya Kanaya No. 123, Jakarta Selatan, 12345</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 flex-shrink-0 text-blue-400" />
                <span className="text-gray-400">0800-123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 flex-shrink-0 text-blue-400" />
                <span className="text-gray-400">info@kanaya.net</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Kanaya.net. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
