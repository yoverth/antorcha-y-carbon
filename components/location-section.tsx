import { FaMapMarkerAlt, FaClock, FaPhone, FaWhatsapp } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const contactInfo = [
  {
    icon: FaMapMarkerAlt,
    title: "Dirección",
    details: ["Calle 18 #25-30, Centro", "Pasto, Nariño, Colombia"],
  },
  {
    icon: FaClock,
    title: "Horario",
    details: [
      "Lunes - Jueves: 12:00 PM - 10:00 PM",
      "Viernes - Domingo: 12:00 PM - 11:00 PM",
    ],
  },
  {
    icon: FaPhone,
    title: "Teléfono",
    details: ["+57 (2) 723 4567", "+57 315 123 4567"],
  },
];

export default function LocationSection() {
  return (
    <section id="ubicacion" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Encuéntranos en <span className="text-primary">Pasto</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Te esperamos en el corazón de la ciudad para brindarte una
            experiencia gastronómica inolvidable.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Map */}
          <div className="relative h-100 rounded-lg overflow-hidden border border-border">
            <iframe
              src="https://www.google.com/maps?q=PARQUE+BOLIVAR+calle+21+carrera+7-15+Pasto+Nariño&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Antorcha & Carbón"
              className="grayscale"
            />
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center">
            <div className="grid gap-6">
              {contactInfo.map((info) => (
                <Card key={info.title} className="bg-card border-border">
                  <CardContent className="flex items-start gap-4 p-6">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">
                        {info.title}
                      </h3>
                      {info.details.map((detail, index) => (
                        <p
                          key={index}
                          className="text-sm text-muted-foreground"
                        >
                          {detail}
                        </p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* WhatsApp Button */}
            <a href="https://wa.me/573207850354">
              <Button
                size="lg"
                className="mt-6 bg-[#25D366] hover:bg-[#25D366]/90 text-white"
              >
                <FaWhatsapp className="w-5 h-5 mr-2" />
                Reservar por WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
