import React, { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { Link } from "wouter"
import { motion } from "framer-motion"

import realEstateImg from "@assets/stock_images/real_estate_hero.jpg"
import hostelImg from "@assets/stock_images/hostel_hero.jpg"
import studentItemsImg from "@assets/stock_images/student_items_hero.jpg"

const SLIDES = [
  {
    id: 1,
    image: realEstateImg,
    title: "Find Your Dream Property",
    subtitle: "Premium apartments, lands, and shops tailored to your needs in Ile-Ife.",
    cta: "Explore Real Estate",
    link: "/listings?category=real-estate",
    align: "left"
  },
  {
    id: 2,
    image: studentItemsImg,
    title: "Student Essentials Marketplace",
    subtitle: "Buy and sell quality items. Laptops, books, gadgets & more at great prices.",
    cta: "Shop Now",
    link: "/listings?category=student-items",
    align: "right"
  },
  {
    id: 3,
    image: hostelImg,
    title: "Comfortable Student Hostels",
    subtitle: "Secure and affordable accommodation close to OAU campus.",
    cta: "Find a Room",
    link: "/listings?category=hostels",
    align: "center"
  }
]

export function HeroSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000 })])
  const [selectedIndex, setSelectedIndex] = useState(0)

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
  }, [emblaApi, onSelect])

  return (
    <div className="relative overflow-hidden bg-background h-[500px] md:h-[600px] w-full" ref={emblaRef}>
      <div className="flex h-full">
        {SLIDES.map((slide, index) => (
          <div className="relative flex-[0_0_100%] h-full min-w-0" key={slide.id}>
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
              <img 
                src={slide.image} 
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
            </div>

            {/* Content */}
            <div className={`relative container mx-auto px-4 h-full flex flex-col justify-center ${
              slide.align === 'right' ? 'items-end text-right' : 
              slide.align === 'center' ? 'items-center text-center' : 
              'items-start text-left'
            }`}>
              <div className="max-w-2xl text-white space-y-4 md:space-y-6">
                <motion.h1 
                  key={`title-${selectedIndex}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: index === selectedIndex ? 1 : 0, y: index === selectedIndex ? 0 : 20 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight"
                >
                  {slide.title}
                </motion.h1>
                
                <motion.p 
                  key={`sub-${selectedIndex}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: index === selectedIndex ? 1 : 0, y: index === selectedIndex ? 0 : 20 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-base md:text-lg text-gray-200"
                >
                  {slide.subtitle}
                </motion.p>
                
                <motion.div
                  key={`btn-${selectedIndex}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: index === selectedIndex ? 1 : 0, y: index === selectedIndex ? 0 : 20 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <Link href={slide.link}>
                    <a className="inline-block">
                      <Button size="lg" className="bg-primary hover:bg-primary/90 text-white border-0 text-base md:text-lg h-11 md:h-12 px-6 md:px-8 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105">
                        {slide.cta} <ArrowRight className="ml-2 h-4 md:h-5 w-4 md:w-5" />
                      </Button>
                    </a>
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dots Navigation */}
      <div className="absolute bottom-6 md:bottom-8 left-0 right-0 flex justify-center gap-3">
        {SLIDES.map((_, index) => (
          <button
            key={index}
            className={`w-2 md:w-3 h-2 md:h-3 rounded-full transition-all duration-300 ${
              index === selectedIndex ? "bg-primary w-6 md:w-8" : "bg-white/50 hover:bg-white/80"
            }`}
            onClick={() => emblaApi?.scrollTo(index)}
          />
        ))}
      </div>
    </div>
  )
}
