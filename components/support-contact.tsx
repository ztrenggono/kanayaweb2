import { Button } from "@/components/ui/button"
import { Phone, MessageCircle, Mail, Clock } from "lucide-react"

export default function SupportContact() {
  return (
    <div className="mt-16 mx-auto max-w-4xl">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 p-8 shadow-lg">
        {/* Background decoration */}
        <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-blue-200/30"></div>
        <div className="absolute -left-16 -bottom-16 h-64 w-64 rounded-full bg-blue-200/30"></div>

        <div className="relative z-10">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900">Masih Punya Pertanyaan Lain?</h3>
            <p className="mt-2 text-gray-600">
              Tim support kami siap membantu Anda 24/7. Pilih cara yang paling nyaman untuk menghubungi kami.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-xl bg-white p-6 shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                <Phone className="h-6 w-6 text-blue-600" />
              </div>
              <h4 className="mb-2 text-lg font-semibold">Telepon</h4>
              <p className="mb-4 text-gray-600">Bicara langsung dengan tim support kami</p>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">0800-123-4567</Button>
            </div>

            <div className="rounded-xl bg-white p-6 shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                <MessageCircle className="h-6 w-6 text-blue-600" />
              </div>
              <h4 className="mb-2 text-lg font-semibold">Live Chat</h4>
              <p className="mb-4 text-gray-600">Chat langsung dengan tim support kami</p>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">Mulai Chat</Button>
            </div>

            <div className="rounded-xl bg-white p-6 shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                <Mail className="h-6 w-6 text-blue-600" />
              </div>
              <h4 className="mb-2 text-lg font-semibold">Email</h4>
              <p className="mb-4 text-gray-600">Kirim pertanyaan Anda melalui email</p>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">support@kanaya.net</Button>
            </div>
          </div>

          <div className="mt-8 flex flex-col md:flex-row items-center justify-between rounded-xl bg-white p-6 shadow-md">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                <Clock className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h4 className="text-lg font-semibold">Jam Operasional</h4>
                <p className="text-gray-600">24 jam sehari, 7 hari seminggu</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-green-500"></div>
              <span className="text-green-600 font-medium">Tim Support Online</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
