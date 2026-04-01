import Image from "next/image";
import { FaFire, FaLeaf, FaMedal } from "react-icons/fa";
import { Badge } from "@/components/ui/badge";

const features = [
  {
    icon: FaFire,
    title: "Brasas Real",
    description: "Brasa, solo carbón seleccionado.",
  },
  {
    icon: FaLeaf,
    title: "Origen Nariño",
    description: "Ingredientes de productores locales.",
  },
];

export default function TraditionSection() {
  return (
    <section id="nosotros" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/img/costilascarta.jpg"
                alt="Chef cocinando a la parrilla"
                fill
                className="object-cover"
              />
            </div>

            {/* Experience Badge */}
            <div className="absolute -bottom-6 left-6 bg-card border border-border rounded-lg p-4 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <FaMedal className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-accent">15 Años</p>
                  <p className="text-xs text-muted-foreground">
                    Perfeccionando el arte de la leña
                    <br />y el carbón en Pasto.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="lg:pl-8">
            <Badge
              variant="outline"
              className="mb-4 text-primary border-primary"
            >
              NUESTRA TRADICIÓN
            </Badge>

            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
              Pasión por el Carbón, <br className="hidden md:block" />
              Amor por <span className="text-primary">Nuestra Tierra.</span>
            </h2>

            <p className="text-muted-foreground mb-4 leading-relaxed">
              En el corazón de Pasto, Nariño,{" "}
              <strong className="text-foreground">Antorcha & Carbón</strong>{" "}
              nació de un deseo simple pero poderoso: devolverle a la cocina el
              respeto por el fuego elemental.
            </p>

            <p className="text-muted-foreground mb-8 leading-relaxed">
              No solo cocinamos; rendimos homenaje a la técnica ancestral de la
              brasa. Seleccionamos los mejores cortes y la pesca más fresca para
              que cada bocado lleve consigo el aroma ahumado que solo el
              verdadero carbón puede otorgar.
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature) => (
                <div key={feature.title} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
