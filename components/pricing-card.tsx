import { Button } from "@/components/ui/button"
import { CheckCircle, Zap, Wifi, Shield } from "lucide-react"

interface PricingCardProps {
  name: string
  speed: string
  price: string
  features: string[]
  popular?: boolean
  icon?: "basic" | "family" | "pro"
}

export default function PricingCard({
  name,
  speed,
  price,
  features,
  popular = false,
  icon = "basic",
}: PricingCardProps) {
  const getIcon = () => {
    switch (icon) {
      case "family":
        return <Wifi className="h-6 w-6 text-white" />
      case "pro":
        return <Zap className="h-6 w-6 text-white" />
      default:
        return <Shield className="h-6 w-6 text-white" />
    }
  }

  const getBgGradient = () => {
    switch (icon) {
      case "family":
        return "from-blue-500 to-blue-600"
      case "pro":
        return "from-blue-600 to-indigo-700"
      default:
        return "from-blue-400 to-blue-500"
    }
  }

  return (
    <div
      className={`relative rounded-2xl ${
        popular ? "border-2 border-blue-600 shadow-xl" : "border border-gray-200 shadow-md"
      } bg-white p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer overflow-hidden group`}
    >
      {/* Background decoration - fixed z-index and positioning */}
      <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-blue-50 opacity-70 group-hover:bg-blue-100 transition-colors z-0"></div>
      <div className="absolute -left-16 -bottom-16 h-40 w-40 rounded-full bg-blue-50 opacity-70 group-hover:bg-blue-100 transition-colors z-0"></div>

      {popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-1.5 text-sm font-medium text-white shadow-md z-20">
          Terpopuler
        </div>
      )}

      <div className="relative z-10">
        {/* Icon - fixed positioning and z-index */}
        <div
          className={`absolute top-0 right-0 h-14 w-14 rounded-full bg-gradient-to-r ${getBgGradient()} flex items-center justify-center shadow-md transform transition-transform group-hover:rotate-12 z-10`}
        >
          {getIcon()}
        </div>

        <div className="mb-6 text-left pt-4">
          <h3 className="text-2xl font-bold text-gray-800">{name}</h3>
          <div className="mt-2 text-4xl font-bold text-blue-600">{speed}</div>
        </div>

        <div className="mb-6 rounded-xl bg-gradient-to-r from-blue-50 to-blue-100 p-4">
          <div className="text-sm text-gray-600 font-medium">Mulai dari</div>
          <div className="flex items-baseline flex-wrap">
            <span className="text-2xl font-bold text-gray-800">Rp</span>
            <span className="text-4xl font-bold text-gray-800">{price}</span>
            <span className="ml-1 text-gray-600">/bulan</span>
          </div>
        </div>

        <ul className="mb-6 space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>

        <Button
          className={`w-full group relative overflow-hidden rounded-xl h-12 ${
            popular ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-900 hover:bg-gray-800"
          }`}
        >
          <span className="relative z-10 flex items-center justify-center gap-2 font-medium">
            Pilih Paket
            <svg
              className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </span>
          <span className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shimmer"></span>
        </Button>
      </div>
    </div>
  )
}
