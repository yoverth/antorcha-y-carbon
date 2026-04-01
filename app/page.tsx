import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import TraditionSection from "@/components/tradition-section"
import ChefSelection from "@/components/chef-selection"
import MenuSection from "@/components/menu-section"
import PromotionsSection from "@/components/promotions-section"
import TestimonialSection from "@/components/testimonial-section"
import Footer from "@/components/footer"
import LocationSection from "@/components/location-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <TraditionSection />
      <ChefSelection />
      <MenuSection />
      <PromotionsSection />
      <LocationSection />
      <TestimonialSection />
      <Footer />
    </main>
  )
}
