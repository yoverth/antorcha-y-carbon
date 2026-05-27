"use client";

import { useState } from "react";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FaPlus, FaUtensils, FaStar, FaFish, FaWhatsapp } from "react-icons/fa";
import { GiMeat } from "react-icons/gi";
import { MdRestaurantMenu } from "react-icons/md";

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  isPopular?: boolean;
  isNew?: boolean;
}

interface MenuCategory {
  id: string;
  name: string;
  icon: React.ReactNode;
  items: MenuItem[];
}

const menuData: MenuCategory[] = [
  {
    id: "carta",
    name: "Platos Carta",
    icon: <MdRestaurantMenu className="w-4 h-4" />,
    items: [
      {
        id: "carta-1",
        name: "Bandeja Paisa",
        description:
          "600g de suavidad extrema, madurada y sellada a la brasa viva con chimichurri casero.",
        price: 22000,
        image: "/img/bandejapaisa.jpg",
        isPopular: true,
      },
      {
        id: "carta-2",
        name: "Costilla carta",
        description:
          "450g de carne de res premium con papas rústicas y ensalada fresca.",
        price: 18000,
        image: "/img/bandejacostilla.jpg",
      },
      {
        id: "carta-3",
        name: "Toston",
        description:
          "Costillas de cerdo bañadas en salsa BBQ ahumada, cocidas lentamente por 8 horas.",
        price: 15000,
        image: "/img/toston.jpg",
        isNew: true,
      },
      {
        id: "carta-4",
        name: "Siera carta",
        description:
          "350g de lomo fino sellado al carbón con reducción de vino tinto.",
        price: 28000,
        image: "/img/sierra carta.jpg",
      },
      {
        id: "carta-5",
        name: "Tilapia carta",
        description:
          "Para compartir: chorizos, morcilla, carne, pollo, cerdo y guarniciones.",
        price: 115000,
        image: "/img/tilapia.jpg",
        isPopular: true,
      },
      {
        id: "carta-6",
        name: "ceviche",
        description:
          "300g de entraña jugosa con papas al horno y vegetales grillados.",
        price: 52000,
        image: "/img/ceviche.jpg",
      },
    ],
  },
  {
    id: "especiales",
    name: "Platos Especiales",
    icon: <FaStar className="w-4 h-4" />,
    items: [
      {
        id: "esp-1",
        name: "Biste a Caballo",
        description:
          "1kg de corte premium con hueso, madurado 28 días. Ideal para 2 personas.",
        price: 180000,
        image: "/img/bistcaballo.jpg",
        isPopular: true,
      },
      {
        id: "esp-2",
        name: "Chorizo",
        description:
          "Lo mejor de nuestra parrilla para 4 personas con todos los cortes premium.",
        price: 220000,
        image: "/img/chorizo.jpg",
      },
      {
        id: "esp-3",
        name: "Arroz Antorcha",
        description:
          "Arroz tradicional con carnes mixtas, chorizo y verduras, servido en cazuela de barro.",
        price: 38000,
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/arrozantorcha-25Vl8zyEgQxZrGDzafdHwiMW30ajEB.jpg",
        isNew: true,
      },
      {
        id: "esp-4",
        name: "Chicharron",
        description:
          "800g de T-Bone madurado con mantequilla de hierbas y papas trufadas.",
        price: 145000,
        image: "/img/chicharon.jpg",
      },
    ],
  },
  {
    id: "corrientes",
    name: "Platos Corrientes",
    icon: <FaUtensils className="w-4 h-4" />,
    items: [
      {
        id: "corr-1",
        name: "Almuerzo Ejecutivo",
        description:
          "Sopa del día, arroz, proteína a elección, ensalada y jugo natural.",
        price: 18000,
        image:
          "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&h=600&fit=crop",
        isPopular: true,
      },
      {
        id: "corr-2",
        name: "Chuleton",
        description:
          "Frijoles, arroz, chicharrón, carne molida, chorizo, huevo, aguacate y arepa.",
        price: 25000,
        image: "/img/chuleton.jpg",
      },
      {
        id: "corr-3",
        name: "Pollo ensalsa",
        description:
          "Medio pollo marinado y asado al carbón con papas y ensalada.",
        price: 28000,
        image: "/img/polloensalsa.jpg",
      },
      {
        id: "corr-4",
        name: "Rollito de carne",
        description:
          "Frijoles con chicharrón, costilla, plátano maduro y arroz.",
        price: 22000,
        image: "/img/rolode carne.jpg",
      },
      {
        id: "corr-5",
        name: "Sancocho de Gallina",
        description:
          "Tradicional sancocho con gallina criolla, papa, yuca y plátano.",
        price: 24000,
        image:
          "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&h=600&fit=crop",
        isNew: true,
      },
    ],
  },
  {
    id: "mariscos",
    name: "Mariscos",
    icon: <FaFish className="w-4 h-4" />,
    items: [
      {
        id: "mar-1",
        name: "Pargo",
        description:
          "Filete de salmón ahumado en madera de cerezo con puré de coliflor.",
        price: 48000,
        image: "/img/pargo.jpg",
        isPopular: true,
      },
      {
        id: "mar-2",
        name: "Camarones al Ajillo",
        description:
          "Camarones gigantes salteados en aceite de oliva, ajo y guindilla.",
        price: 52000,
        image:
          "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=800&h=600&fit=crop",
      },
      {
        id: "mar-3",
        name: "Cazuela de Mariscos",
        description:
          "Camarones, calamares, pulpo y pescado en salsa de coco con arroz.",
        price: 58000,
        image: "/img/casuela.jpg",
        isNew: true,
      },
      {
        id: "mar-4",
        name: "Trucha ensalsa",
        description:
          "Trucha fresca de río sellada al carbón con limón y hierbas finas.",
        price: 42000,
        image: "/img/truchaensaladecamaron.jpg",
      },
      {
        id: "mar-5",
        name: "Arroz con Camarones",
        description:
          "Arroz marinero con camarones, calamar y vegetales salteados.",
        price: 45000,
        image:
          "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=800&h=600&fit=crop",
      },
    ],
  },
];

function MenuItemCard({
  item,
  onAddToCart,
}: {
  item: MenuItem
  onAddToCart: (item: MenuItem) => void
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="group cursor-pointer overflow-hidden border-border/50 bg-card hover:border-primary/50 transition-all duration-300">
          <div className="relative aspect-4/3 overflow-hidden">
            <Image
              src={item.image}
              alt={item.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-linear-to-t from-background/90 via-background/20 to-transparent" />
            {item.isPopular && (
              <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">
                <FaStar className="w-3 h-3 mr-1" /> Popular
              </Badge>
            )}
            {item.isNew && (
              <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground">
                Nuevo
              </Badge>
            )}
            <div className="absolute bottom-3 left-3 right-3">
              <h3 className="font-serif text-lg font-semibold text-foreground mb-1">
                {item.name}
              </h3>
              <p className="text-primary font-bold text-xl">
                ${item.price.toLocaleString("es-CO")}
              </p>
            </div>
          </div>
        </Card>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md bg-card border-border">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl">{item.name}</DialogTitle>
        </DialogHeader>
        <div className="relative aspect-video w-full overflow-hidden rounded-lg">
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-cover"
          />
        </div>
        <p className="text-muted-foreground leading-relaxed">
          {item.description}
        </p>
        <div className="flex flex-col gap-3 pt-4 sm:flex-row sm:items-center sm:justify-between">
          <span className="text-2xl font-bold text-primary">
            ${item.price.toLocaleString("es-CO")}
          </span>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <DialogClose asChild>
              <Button
                onClick={() => onAddToCart(item)}
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <FaPlus className="w-4 h-4 mr-2" /> Agregar
              </Button>
            </DialogClose>
            <a
              href={`https://wa.me/573207850354?text=${encodeURIComponent(
                `Hola, quiero pedir:\n- ${item.name} - $${item.price.toLocaleString(
                  "es-CO",
                )}`,
              )}`}
              target="_blank"
              rel="noreferrer"
            >
              <Button className="bg-[#25D366] hover:bg-[#25D366]/90 text-white">
                <FaWhatsapp className="w-4 h-4 mr-2" /> WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default function MenuSection() {
  const [activeTab, setActiveTab] = useState("carta");
  const [cartItems, setCartItems] = useState<MenuItem[]>([]);

  const whatsappPhone = "573207850354";
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);
  const cartMessage = cartItems.length
    ? `Hola, quiero hacer un pedido:\n${cartItems
        .map(
          (item, index) => `${index + 1}. ${item.name} - $${item.price.toLocaleString("es-CO")}`,
        )
        .join("\n")}\nTotal: $${totalPrice.toLocaleString("es-CO")}`
    : "Hola, quiero pedir, pero aún no he agregado ningún producto.";
  const whatsappLink = `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(
    cartMessage,
  )}`;

  const addToCart = (item: MenuItem) => {
    setCartItems((current) => [...current, item]);
  };

  return (
    <section id="menu" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge
            variant="outline"
            className="mb-4 border-primary/50 text-primary"
          >
            <MdRestaurantMenu className="w-4 h-4 mr-2" /> NUESTRA CARTA
          </Badge>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Menú <span className="text-primary">Completo</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Descubre todos nuestros platos, preparados con los mejores
            ingredientes y el sabor único de la brasa tradicional nariñense.
          </p>
        </div>

        <div className="mb-10 grid gap-6 lg:grid-cols-[1.8fr_1fr]">
          <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-2">
              Reserva tu pedido
            </p>
            <h3 className="font-serif text-3xl font-bold text-foreground mb-3">
              Haz tu pedido por WhatsApp
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Agrega tus platos favoritos al carrito y envía el pedido directamente a nuestro WhatsApp. Así podemos prepararlo rápido y con atención personalizada.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              {cartItems.length > 0 ? (
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto"
                >
                  <Button className="w-full sm:w-auto bg-[#25D366] hover:bg-[#25D366]/90 text-white">
                    <FaWhatsapp className="w-4 h-4 mr-2" /> Enviar pedido
                  </Button>
                </a>
              ) : (
                <Button
                  disabled
                  className="w-full sm:w-auto bg-[#25D366]/70 text-white cursor-not-allowed"
                >
                  <FaWhatsapp className="w-4 h-4 mr-2" /> Enviar pedido
                </Button>
              )}
              {cartItems.length > 0 && (
                <Button
                  onClick={() => setCartItems([])}
                  className="w-full sm:w-auto border border-border bg-transparent text-foreground hover:bg-secondary/10"
                >
                  Vaciar carrito
                </Button>
              )}
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-2">
              Carrito de pedidos
            </p>
            <div className="flex items-center justify-between mb-4">
              <span className="text-lg font-semibold text-foreground">
                {cartItems.length} ítem{cartItems.length === 1 ? "" : "s"}
              </span>
              <span className="text-sm text-muted-foreground">
                Total
              </span>
            </div>
            <div className="space-y-3 mb-4">
              {cartItems.length > 0 ? (
                cartItems.map((item, index) => (
                  <div
                    key={`${item.id}-${index}`}
                    className="rounded-2xl border border-border/50 bg-background/60 p-3"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-sm font-medium text-foreground">
                        {item.name}
                      </span>
                      <span className="text-sm text-primary font-semibold">
                        ${item.price.toLocaleString("es-CO")}
                      </span>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-sm text-muted-foreground">
                  Añade platos al carrito para verlos aquí.
                </p>
              )}
            </div>
            <div className="mb-4 flex flex-col gap-3">
              {cartItems.length > 0 ? (
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full"
                >
                  <Button className="w-full bg-[#25D366] hover:bg-[#25D366]/90 text-white">
                    <FaWhatsapp className="w-4 h-4 mr-2" /> Enviar pedido
                  </Button>
                </a>
              ) : (
                <Button
                  disabled
                  className="w-full bg-[#25D366]/70 text-white cursor-not-allowed"
                >
                  <FaWhatsapp className="w-4 h-4 mr-2" /> Enviar pedido
                </Button>
              )}
            </div>
            <div className="rounded-2xl bg-secondary/10 p-4 text-sm text-muted-foreground">
              El carrito se envía con el botón de WhatsApp aquí. Guarda tu pedido y confirma con un mensaje.
            </div>
          </div>
        </div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="w-full flex flex-wrap justify-center gap-2 bg-transparent h-auto p-2 mb-8">
            {menuData.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="flex items-center gap-2 px-6 py-3 rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground border border-border data-[state=active]:border-primary transition-all"
              >
                {category.icon}
                <span className="hidden sm:inline">{category.name}</span>
                <span className="sm:hidden">
                  {category.name.split(" ")[1] || category.name}
                </span>
              </TabsTrigger>
            ))}
          </TabsList>

          {menuData.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {category.items.map((item) => (
                  <MenuItemCard
                    key={item.id}
                    item={item}
                    onAddToCart={addToCart}
                  />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
