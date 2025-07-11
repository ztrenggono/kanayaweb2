import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle, Wifi, Zap, Shield, MapPin, Clock, HelpCircle, MessageSquare } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PricingCard from "@/components/pricing-card"
import TestimonialCard from "@/components/testimonial-card"
import FAQAccordion from "@/components/faq-accordion"
import SupportContact from "@/components/support-contact"
import GoogleMap from "@/components/google-map"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section id="hero" className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 z-0 bg-[#f8fafc]">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] opacity-5 bg-cover bg-center" />
        </div>
        <div className="container relative z-10 mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                  Koneksi Internet <span className="text-blue-600">Cepat & Stabil</span>
                </h1>
                <p className="mt-6 max-w-3xl text-xl text-gray-500">
                  Nikmati pengalaman internet tanpa batas dengan Kanaya.net. Koneksi super cepat, stabil, dan terjangkau
                  untuk rumah dan bisnis Anda.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Cek Ketersediaan
                </Button>
                <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                  Lihat Paket
                </Button>
              </div>
              <div className="flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700">Tanpa FUP</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700">24/7 Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700">Instalasi Cepat</span>
                </div>
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
              <div className="relative">
                <div className="absolute -inset-4 rounded-xl bg-blue-100/50 blur-xl"></div>
                <Image
                  src="/4799410.jpg"
                  alt="Internet connection illustration"
                  width={600}
                  height={600}
                  className="relative z-10 mx-auto rounded-xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Mengapa Memilih Kanaya.net?</h2>
            <p className="mt-4 text-lg text-gray-500">
              Kami menyediakan layanan internet terbaik dengan teknologi terkini untuk memenuhi kebutuhan digital Anda.
            </p>
          </div>
          <div className="mt-16 flex flex-wrap justify-center gap-6">
            <div className="flex-1 min-w-[280px] max-w-[320px] rounded-2xl bg-white p-8 shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group">
              <div className="mb-6 h-16 w-16 rounded-2xl bg-gradient-to-br from-blue-400 to-blue-600 p-4 shadow-md group-hover:rotate-3 transition-transform">
                <Wifi className="h-8 w-8 text-white" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-gray-800">Koneksi Stabil</h3>
              <p className="text-gray-600">
                Nikmati koneksi internet yang stabil tanpa gangguan untuk aktivitas online Anda.
              </p>
            </div>

            <div className="flex-1 min-w-[280px] max-w-[320px] rounded-2xl bg-white p-8 shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group">
              <div className="mb-6 h-16 w-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 p-4 shadow-md group-hover:rotate-3 transition-transform">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-gray-800">Kecepatan Tinggi</h3>
              <p className="text-gray-600">
                Kecepatan download dan upload yang tinggi untuk streaming, gaming, dan bekerja.
              </p>
            </div>

            <div className="flex-1 min-w-[280px] max-w-[320px] rounded-2xl bg-white p-8 shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group">
              <div className="mb-6 h-16 w-16 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 p-4 shadow-md group-hover:rotate-3 transition-transform">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-gray-800">Keamanan Terjamin</h3>
              <p className="text-gray-600">Sistem keamanan jaringan terbaik untuk melindungi data dan privasi Anda.</p>
            </div>

            <div className="flex-1 min-w-[280px] max-w-[320px] rounded-2xl bg-white p-8 shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group">
              <div className="mb-6 h-16 w-16 rounded-2xl bg-gradient-to-br from-blue-700 to-blue-900 p-4 shadow-md group-hover:rotate-3 transition-transform">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-gray-800">Support 24/7</h3>
              <p className="text-gray-600">Tim dukungan teknis siap membantu Anda 24 jam sehari, 7 hari seminggu.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="paket" className="bg-gray-50 py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iLjA1Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00bTAtMTZjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00bTE2IDE2YzAtMi4yIDEuOC00IDQtNHM0IDEuOCA0IDQtMS44IDQtNCA0LTQtMS44LTQtNG0tMTYgMGMwLTIuMiAxLjgtNCA0LTRzNCAxLjggNCA0LTEuOCA0LTQgNC00LTEuOC00LTRtLTE2IDBjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00bTE2LTE2YzAtMi4yIDEuOC00IDQtNHM0IDEuOCA0IDQtMS44IDQtNCA0LTQtMS44LTQtNG0tMTYgMGMwLTIuMiAxLjgtNCA0LTRzNCAxLjggNCA0LTEuOCA0LTQgNC00LTEuOC00LTRtLTE2IDBjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00bTE2LTE2YzAtMi4yIDEuOC00IDQtNHM0IDEuOCA0IDQtMS44IDQtNCA0LTQtMS44LTQtNG0tMTYgMGMwLTIuMiAxLjgtNCA0LTRzNCAxLjggNCA0LTEuOCA0LTQgNC00LTEuOC00LTQiLz48L2c+PC9nPjwvc3ZnPg==')]"></div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Paket Internet Terbaik</h2>
            <p className="mt-4 text-lg text-gray-500">
              Pilih paket internet yang sesuai dengan kebutuhan Anda dengan harga terjangkau.
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
            <PricingCard
              name="Basic"
              speed="30 Mbps"
              price="299.000"
              features={["Unlimited Kuota", "Cocok untuk 1-3 perangkat", "Streaming HD", "Support 24/7"]}
              popular={false}
              icon="basic"
            />
            <PricingCard
              name="Family"
              speed="50 Mbps"
              price="399.000"
              features={[
                "Unlimited Kuota",
                "Cocok untuk 3-5 perangkat",
                "Streaming 4K",
                "Support 24/7",
                "Gratis Instalasi",
              ]}
              popular={true}
              icon="family"
            />
            <PricingCard
              name="Pro"
              speed="100 Mbps"
              price="599.000"
              features={[
                "Unlimited Kuota",
                "Cocok untuk 5+ perangkat",
                "Streaming 4K",
                "Gaming Optimal",
                "Support 24/7 Prioritas",
                "Gratis Instalasi",
              ]}
              popular={false}
              icon="pro"
            />
          </div>
        </div>
      </section>

      {/* Coverage Section */}
      <section id="jangkauan" className="bg-white py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Area Jangkauan Kami</h2>
                <p className="mt-4 text-lg text-gray-500">
                  Kanaya.net terus memperluas jangkauan layanan untuk menjangkau lebih banyak area di Indonesia.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-blue-600" />
                  <div>
                    <h3 className="text-lg font-semibold">Jakarta</h3>
                    <p className="text-gray-500">
                      Jakarta Pusat, Jakarta Selatan, Jakarta Barat, Jakarta Timur, Jakarta Utara
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-blue-600" />
                  <div>
                    <h3 className="text-lg font-semibold">Bogor</h3>
                    <p className="text-gray-500">Kota Bogor, Kabupaten Bogor, Cibinong, Sentul, Cileungsi</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-blue-600" />
                  <div>
                    <h3 className="text-lg font-semibold">Depok</h3>
                    <p className="text-gray-500">Seluruh area Depok</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-blue-600" />
                  <div>
                    <h3 className="text-lg font-semibold">Tangerang</h3>
                    <p className="text-gray-500">Kota Tangerang, Tangerang Selatan, BSD</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-blue-600" />
                  <div>
                    <h3 className="text-lg font-semibold">Bekasi</h3>
                    <p className="text-gray-500">Kota Bekasi, Kabupaten Bekasi, Cikarang</p>
                  </div>
                </div>
              </div>
              <Button className="bg-blue-600 hover:bg-blue-700">Cek Ketersediaan di Area Anda</Button>
            </div>
            <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
              <div className="relative">
                <div className="absolute -inset-4 rounded-xl bg-blue-100/50 blur-xl"></div>
                <div className="relative z-10">
                  <GoogleMap height="500px" zoom={10} center={{ lat: -6.2088, lng: 106.8456 }} className="shadow-xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-50 py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iLjA1Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00bTAtMTZjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00bTE2IDE2YzAtMi4yIDEuOC00IDQtNHM0IDEuOCA0IDQtMS44IDQtNCA0LTQtMS44LTQtNG0tMTYgMGMwLTIuMiAxLjgtNCA0LTRzNCAxLjggNCA0LTEuOCA0LTQgNC00LTEuOC00LTRtLTE2IDBjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00bTE2LTE2YzAtMi4yIDEuOC00IDQtNHM0IDEuOCA0IDQtMS44IDQtNCA0LTQtMS44LTQtNG0tMTYgMGMwLTIuMiAxLjgtNCA0LTRzNCAxLjggNCA0LTEuOCA0LTQgNC00LTEuOC00LTRtLTE2IDBjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00bTE2LTE2YzAtMi4yIDEuOC00IDQtNHM0IDEuOCA0IDQtMS44IDQtNCA0LTQtMS44LTQtNG0tMTYgMGMwLTIuMiAxLjgtNCA0LTRzNCAxLjggNCA0LTEuOCA0LTQgNC00LTEuOC00LTQiLz48L2c+PC9nPjwvc3ZnPg==')]"></div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center justify-center rounded-full bg-blue-100 p-3 mb-4">
              <MessageSquare className="h-6 w-6 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Apa Kata Pelanggan Kami</h2>
            <p className="mt-4 text-lg text-gray-500">
              Ribuan pelanggan telah mempercayai Kanaya.net untuk kebutuhan internet mereka.
            </p>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <TestimonialCard
              name="Budi Santoso"
              role="Pengusaha"
              content="Saya sudah menggunakan Kanaya.net selama 2 tahun dan sangat puas dengan kecepatan dan stabilitas koneksinya. Support teknisnya juga sangat responsif."
              rating={5}
            />
            <TestimonialCard
              name="Siti Rahayu"
              role="Content Creator"
              content="Sebagai content creator, saya membutuhkan koneksi internet yang stabil untuk upload video. Kanaya.net tidak pernah mengecewakan saya."
              rating={5}
            />
            <TestimonialCard
              name="Andi Wijaya"
              role="Gamer"
              content="Ping rendah dan koneksi stabil membuat pengalaman gaming saya jadi lebih menyenangkan. Rekomendasi banget buat para gamer!"
              rating={4}
            />
          </div>
          <div className="mt-12 text-center">
            <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
              Lihat Semua Testimonial
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="bg-white py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center justify-center rounded-full bg-blue-100 p-3 mb-4">
              <HelpCircle className="h-6 w-6 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Pertanyaan yang Sering Diajukan
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Temukan jawaban untuk pertanyaan umum tentang layanan Kanaya.net.
            </p>
          </div>
          <div className="mt-16 mx-auto max-w-3xl">
            <FAQAccordion />
          </div>

          <SupportContact />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Siap Bergabung dengan Kanaya.net?
            </h2>
            <p className="mt-4 text-xl text-blue-100">
              Dapatkan koneksi internet cepat dan stabil untuk rumah atau bisnis Anda sekarang.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                Daftar Sekarang
              </Button>
              <Button size="lg" variant="outline" className="border-white text-blue-600 hover:bg-blue-50">
                Hubungi Kami
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
