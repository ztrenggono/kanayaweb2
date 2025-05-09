"use client"

import { useState, useEffect } from "react"

interface GoogleMapProps {
  width?: string
  height?: string
  zoom?: number
  center?: { lat: number; lng: number }
  className?: string
}

export default function GoogleMap({
  width = "100%",
  height = "500px",
  zoom = 11,
  center = { lat: -6.2088, lng: 106.8456 }, // Jakarta coordinates
  className = "",
}: GoogleMapProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Set loaded state after component mounts to avoid SSR issues
    setIsLoaded(true)
  }, [])

  if (!isLoaded) {
    return (
      <div className={`flex items-center justify-center bg-gray-100 rounded-xl ${className}`} style={{ width, height }}>
        <div className="animate-pulse text-gray-400">Loading map...</div>
      </div>
    )
  }

  return (
    <div className={`rounded-xl overflow-hidden shadow-lg ${className}`} style={{ width, height }}>
      <iframe
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src={`https://www.google.com/maps/embed/v1/view?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&center=${center.lat},${center.lng}&zoom=${zoom}`}
      ></iframe>
    </div>
  )
}
