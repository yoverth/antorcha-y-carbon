"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FaChevronDown } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/img/equipo.jpg"
          alt="Chef preparando carne a la parrilla"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center pt-20">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <div className="relative w-24 h-24 md:w-32 md:h-32">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logoantorcha-2IRvwG3IpOQdj7hiMMtW0QXSvQVZR3.jpg"
              alt="Antorcha & Carbón Logo"
              fill
              className="object-contain rounded-full"
            />
          </div>
        </div>

        {/* Main Title */}
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-balance">
          El Brillo del Hogar <span className="text-primary">en Pasto</span>
        </h1>

        {/* Subtitle */}
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 text-balance">
          Sabor ancestral forjado en el corazón de Nariño. Donde la brasa se
          encuentra con la tradición.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg"
            onClick={() => {
              document
                .getElementById("menu")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Ver Nuestra Carta
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="border-foreground/30 text-foreground hover:bg-foreground/10 px-8 py-6 text-lg"
            onClick={() => {
              document
                .getElementById("historia")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Nuestra Historia
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <FaChevronDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
}
