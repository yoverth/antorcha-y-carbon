import { FaQuoteLeft } from "react-icons/fa"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function TestimonialSection() {
  return (
    <section className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Quote Icon */}
          <div className="flex justify-center mb-8">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
              <FaQuoteLeft className="w-8 h-8 text-primary" />
            </div>
          </div>

          {/* Quote */}
          <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl italic text-foreground mb-10 leading-relaxed text-balance">
            {'"'}La cocina no es solo fuego, es la memoria de nuestras raíces nariñenses servida en un plato.{'"'}
          </blockquote>

          {/* Author */}
          <div className="flex items-center justify-center gap-4">
            <Avatar className="w-14 h-14 border-2 border-primary">
              <AvatarImage src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=2662&auto=format&fit=crop" alt="Chef Principal" />
              <AvatarFallback className="bg-primary text-primary-foreground">CH</AvatarFallback>
            </Avatar>
            <div className="text-left">
              <p className="font-semibold text-foreground">Chef Principal</p>
              <p className="text-sm text-muted-foreground">Antorcha & Carbón</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
