"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

interface FAQItem {
  question: string
  answer: string
}

export default function FAQAccordion() {
  const [openItem, setOpenItem] = useState<number | null>(0)

  const faqItems: FAQItem[] = [
    {
      question: "Bagaimana cara berlangganan internet Kanaya.net?",
      answer:
        "Anda dapat berlangganan internet Kanaya.net dengan mengisi formulir pendaftaran online di website kami, menghubungi customer service kami di 0800-123-4567, atau mengunjungi kantor kami. Tim kami akan segera menghubungi Anda untuk proses instalasi.",
    },
    {
      question: "Berapa lama proses instalasi internet Kanaya.net?",
      answer:
        "Proses instalasi internet Kanaya.net biasanya memakan waktu 1-3 hari kerja setelah survei lokasi. Waktu instalasi dapat bervariasi tergantung pada lokasi dan kondisi teknis di tempat Anda.",
    },
    {
      question: "Apakah ada biaya instalasi?",
      answer:
        "Untuk paket Family dan Pro, kami memberikan gratis biaya instalasi. Untuk paket Basic, ada biaya instalasi sebesar Rp 300.000 yang dapat dicicil dalam tagihan bulanan Anda.",
    },
    {
      question: "Bagaimana jika terjadi gangguan pada koneksi internet saya?",
      answer:
        "Jika terjadi gangguan pada koneksi internet Anda, Anda dapat menghubungi tim support kami yang tersedia 24/7 melalui hotline 0800-123-4567 atau melalui live chat di website kami. Tim teknisi kami akan segera membantu menyelesaikan masalah Anda.",
    },
    {
      question: "Apakah ada batasan penggunaan data (FUP)?",
      answer:
        "Tidak, semua paket internet Kanaya.net tidak memiliki batasan penggunaan data (FUP). Anda dapat menggunakan internet sepuasnya tanpa khawatir kecepatan akan menurun.",
    },
    {
      question: "Bagaimana cara pembayaran tagihan internet Kanaya.net?",
      answer:
        "Anda dapat membayar tagihan internet Kanaya.net melalui transfer bank, e-wallet, minimarket, atau melalui auto debit dari rekening atau kartu kredit Anda. Kami juga menyediakan opsi pembayaran melalui aplikasi mobile kami.",
    },
  ]

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index)
  }

  return (
    <div className="space-y-6">
      {faqItems.map((item, index) => (
        <div
          key={index}
          className={`rounded-2xl overflow-hidden transition-all duration-300 ${
            openItem === index
              ? "bg-white shadow-lg border-blue-100 border"
              : "bg-gray-50 hover:bg-gray-100 border border-gray-100"
          }`}
        >
          <button
            onClick={() => toggleItem(index)}
            className="flex w-full items-center justify-between p-6 text-left focus:outline-none"
          >
            <span className={`text-lg font-semibold ${openItem === index ? "text-blue-600" : "text-gray-800"}`}>
              {item.question}
            </span>
            <div
              className={`ml-4 flex-shrink-0 rounded-full p-2 ${
                openItem === index ? "bg-blue-100 text-blue-600" : "bg-gray-200 text-gray-600"
              }`}
            >
              {openItem === index ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
            </div>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openItem === index ? "max-h-96" : "max-h-0"
            }`}
          >
            <div className="border-t border-gray-100 p-6 text-gray-600">
              <div className="relative">
                <div className="absolute -left-2 top-0 bottom-0 w-1 bg-blue-100 rounded-full"></div>
                <p className="pl-4">{item.answer}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
