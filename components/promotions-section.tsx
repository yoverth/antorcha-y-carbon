"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FaPercent, FaClock, FaWhatsapp, FaFire, FaGift } from "react-icons/fa";
import { MdLocalOffer } from "react-icons/md";

interface Promotion {
  id: string;
  title: string;
  description: string;
  discount: string;
  originalPrice?: number;
  promoPrice?: number;
  image: string;
  validUntil: string;
  badge: string;
  badgeColor: "primary" | "accent" | "secondary";
}

const promotions: Promotion[] = [
  {
    id: "promo-1",
    title: "2x1 en Bagre",
    description:
      "Todos los martes disfruta de nuestra parrillada especial al 2x1. Perfecta para compartir en familia.",
    discount: "50%",
    originalPrice: 220000,
    promoPrice: 110000,
    image: "/img/bagresalsa.jpg",
    validUntil: "Solo Martes",
    badge: "Oferta Estrella",
    badgeColor: "primary",
  },
  {
    id: "promo-2",
    title: "Almuerzo Ejecutivo",
    description:
      "De lunes a viernes, el almuerzo ejecutivo más completo de Pasto con sopa, plato fuerte y jugo.",
    discount: "25%",
    originalPrice: 24000,
    promoPrice: 18000,
    image: "/img/menudia.jpg",
    validUntil: "Lun - Vie 12pm-3pm",
    badge: "Diario",
    badgeColor: "accent",
  },
  {
    id: "promo-3",
    title: "Noche de Mariscos",
    description:
      "Los jueves toda la carta de mariscos con 20% de descuento. Frescura del Pacífico en tu mesa.",
    discount: "20%",
    image: "/img/sierra carta.jpg",
    validUntil: "Solo Jueves",
    badge: "Imperdible",
    badgeColor: "secondary",
  },
  {
    id: "promo-4",
    title: "Combo Familiar",
    description:
      "Parrillada completa + 4 bebidas + postre para toda la familia. Ahorra más compartiendo.",
    discount: "30%",
    originalPrice: 280000,
    promoPrice: 196000,
    image: "/img/chicharon.jpg",
    validUntil: "Fines de Semana",
    badge: "Familiar",
    badgeColor: "primary",
  },
];

function PromotionCard({ promo }: { promo: Promotion }) {
  const badgeColors = {
    primary: "bg-primary text-primary-foreground",
    accent: "bg-accent text-accent-foreground",
    secondary: "bg-secondary text-secondary-foreground",
  };

  return (
    <Card className="group overflow-hidden border-border/50 bg-card hover:border-primary/50 transition-all duration-300">
      <div className="relative aspect-[16/9] overflow-hidden">
        <Image
          src={promo.image}
          alt={promo.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />

        {/* Discount Badge */}
        <div className="absolute top-4 right-4 bg-primary text-primary-foreground rounded-full w-16 h-16 flex flex-col items-center justify-center shadow-lg">
          <span className="text-xl font-bold leading-none">
            {promo.discount}
          </span>
          <span className="text-xs">OFF</span>
        </div>

        {/* Category Badge */}
        <Badge
          className={`absolute top-4 left-4 ${badgeColors[promo.badgeColor]}`}
        >
          <FaGift className="w-3 h-3 mr-1" /> {promo.badge}
        </Badge>
      </div>

      <CardContent className="p-6">
        <h3 className="font-serif text-xl font-bold text-foreground mb-2">
          {promo.title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {promo.description}
        </p>

        {/* Price */}
        {promo.originalPrice && promo.promoPrice && (
          <div className="flex items-center gap-3 mb-4">
            <span className="text-muted-foreground line-through text-sm">
              ${promo.originalPrice.toLocaleString("es-CO")}
            </span>
            <span className="text-primary font-bold text-2xl">
              ${promo.promoPrice.toLocaleString("es-CO")}
            </span>
          </div>
        )}

        {/* Valid Until */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          <FaClock className="w-4 h-4 text-primary" />
          <span>{promo.validUntil}</span>
        </div>

        {/* CTA */}
        <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
          <FaWhatsapp className="w-4 h-4 mr-2" /> Reservar Promo
        </Button>
      </CardContent>
    </Card>
  );
}

export default function PromotionsSection() {
  return (
    <section id="promociones" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge
            variant="outline"
            className="mb-4 border-primary/50 text-primary"
          >
            <MdLocalOffer className="w-4 h-4 mr-2" /> OFERTAS ESPECIALES
          </Badge>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Promociones <span className="text-primary">del Mes</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Aprovecha nuestras promociones exclusivas y disfruta del mejor sabor
            de Pasto a precios increíbles.
          </p>
        </div>

        {/* Featured Promotion Banner */}
        <div className="relative mb-12 rounded-2xl overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/img/ceviche.jpg"
              alt="Promoción destacada"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
          </div>
          <div className="relative z-10 py-12 px-8 md:px-12">
            <div className="max-w-lg">
              <Badge className="mb-4 bg-primary text-primary-foreground">
                <FaFire className="w-3 h-3 mr-1" /> PROMO DESTACADA
              </Badge>
              <h3 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-3">
                Cumpleañeros Gratis
              </h3>
              <p className="text-muted-foreground mb-6">
                El día de tu cumpleaños tu plato principal es cortesía de la
                casa. Solo presenta tu documento de identidad y disfruta.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  <FaWhatsapp className="w-5 h-5 mr-2" /> Reservar Ahora
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-foreground/30 text-foreground hover:bg-foreground/10"
                >
                  Ver Condiciones
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Promotions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {promotions.map((promo) => (
            <PromotionCard key={promo.id} promo={promo} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            ¿Tienes un evento especial? Contáctanos para ofertas personalizadas.
          </p>
          <Button
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            <FaPercent className="w-4 h-4 mr-2" /> Solicitar Cotización
          </Button>
        </div>
      </div>
    </section>
  );
}
