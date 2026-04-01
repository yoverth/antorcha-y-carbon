import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FaArrowRight, FaUtensils } from "react-icons/fa";

const dishes = [
  {
    id: 1,
    name: "Trucha en salsa de Camaron",
    description:
      "600g de suavidad extrema, madurada y sellada a la brasa viva.",
    price: "$72.000",
    image: "/img/truchaensaladecamaron.jpg",
    featured: true,
    badge: "IMPERDIBLE",
  },
  {
    id: 2,
    name: "Bande Paisa",
    description: "Filete de salmón ahumado con hierbas frescas.",
    price: "$48.000",
    image: "/img/bandejapaisa.jpg",
    featured: false,
  },
  {
    id: 3,
    name: "Chuleton",
    description: "Hamburguesa artesanal sellada al carbón.",
    price: "$32.000",
    image: "/img/chuleton.jpg",
    featured: false,
  },
  {
    id: 4,
    name: "Arroz de Pollo",
    description: "Perfecta para compartir entre 4 personas.",
    price: "$115.000",
    image: "/img/arrozdepollo.jpg",
    featured: false,
  },
  {
    id: 5,
    name: "Arroz Antorcha",
    description: "Arroz con chorizo, carne y patacones tradicionales.",
    price: "$35.000",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/arrozantorcha-25Vl8zyEgQxZrGDzafdHwiMW30ajEB.jpg",
    featured: false,
  },
];

export default function ChefSelection() {
  return (
    <section id="carta" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-2 italic">
              La Selección del Chef
            </h2>
            <p className="text-muted-foreground">
              Nuestros platos más icónicos, forjados en el fuego.
            </p>
          </div>
          <Link
            href="#carta"
            className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mt-4 md:mt-0"
          >
            Explorar menú completo
            <FaArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Dishes Grid - Bento Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Featured Large Card */}
          <Card className="md:row-span-2 overflow-hidden group bg-card border-border">
            <CardContent className="p-0 relative h-full min-h-[400px]">
              <Image
                src={dishes[0].image}
                alt={dishes[0].name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                {dishes[0].badge && (
                  <Badge className="mb-3 bg-primary text-primary-foreground">
                    {dishes[0].badge}
                  </Badge>
                )}
                <h3 className="font-serif text-2xl font-bold text-foreground mb-2">
                  {dishes[0].name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {dishes[0].description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-primary text-xl font-bold">
                    {dishes[0].price}
                  </span>
                  <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                    <FaUtensils className="w-4 h-4 text-foreground" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Other Dishes */}
          {dishes.slice(1).map((dish) => (
            <Card
              key={dish.id}
              className="overflow-hidden group bg-card border-border"
            >
              <CardContent className="p-0 relative h-[250px]">
                <Image
                  src={dish.image}
                  alt={dish.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="font-serif text-lg font-bold text-foreground mb-1">
                    {dish.name}
                  </h3>
                  <p className="text-muted-foreground text-xs mb-2 line-clamp-1">
                    {dish.description}
                  </p>
                  <span className="text-primary font-bold">{dish.price}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
