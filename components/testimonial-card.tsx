import { Star, Quote } from "lucide-react"
import Image from "next/image"

interface TestimonialCardProps {
  name: string
  role: string
  content: string
  rating: number
  imagePath?: string
}

export default function TestimonialCard({ name, role, content, rating, imagePath }: TestimonialCardProps) {
  // Generate a random pastel color for avatars without images
  const getInitialBgColor = () => {
    const colors = [
      "bg-blue-100 text-blue-600",
      "bg-purple-100 text-purple-600",
      "bg-green-100 text-green-600",
      "bg-amber-100 text-amber-600",
      "bg-rose-100 text-rose-600",
    ]
    return colors[Math.floor(name.length % colors.length)]
  }

  return (
    <div className="group relative h-full overflow-hidden rounded-2xl bg-white p-1 transition-all duration-300 hover:shadow-xl">
      {/* Gradient border */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

      {/* Card content */}
      <div className="relative h-full rounded-xl bg-white p-6 shadow-md">
        {/* Quote icon */}
        <div className="absolute -right-2 -top-2 text-blue-100">
          <Quote className="h-16 w-16 rotate-180" />
        </div>

        {/* Rating */}
        <div className="mb-4 flex">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star
              key={index}
              className={`h-5 w-5 ${index < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
            />
          ))}
        </div>

        {/* Content */}
        <p className="mb-6 text-gray-700 relative z-10">{content}</p>

        {/* User info */}
        <div className="mt-auto flex items-center gap-3">
          {imagePath ? (
            <Image
              src={imagePath || "/placeholder.svg"}
              alt={name}
              width={48}
              height={48}
              className="h-12 w-12 rounded-full object-cover border-2 border-blue-100"
            />
          ) : (
            <div className={`flex h-12 w-12 items-center justify-center rounded-full ${getInitialBgColor()}`}>
              <span className="text-lg font-bold">{name.charAt(0)}</span>
            </div>
          )}
          <div>
            <div className="font-semibold text-gray-900">{name}</div>
            <div className="text-sm text-blue-600">{role}</div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute -bottom-8 -left-8 h-16 w-16 rounded-full bg-blue-50 opacity-70"></div>
        <div className="absolute -right-8 -top-8 h-16 w-16 rounded-full bg-blue-50 opacity-70"></div>
      </div>
    </div>
  )
}
