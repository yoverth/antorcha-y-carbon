import Link from "next/link"
import { FaTiktok, FaWhatsapp, FaFacebook, FaInstagram, FaFire } from "react-icons/fa"

const socialLinks = [
  { icon: FaTiktok, href: "#", label: "TikTok" },
  { icon: FaWhatsapp, href: "#", label: "WhatsApp" },
  { icon: FaFacebook, href: "#", label: "Facebook" },
  { icon: FaInstagram, href: "#", label: "Instagram" },
]

const footerLinks = [
  { href: "#", label: "Privacidad" },
]

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <FaFire className="w-5 h-5 text-primary" />
            <span className="font-serif text-lg font-bold text-foreground">
              Antorcha & Carbón
            </span>
          </Link>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            {socialLinks.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <social.icon className="w-5 h-5" />
              </Link>
            ))}
            {footerLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-xs text-muted-foreground text-center md:text-right">
            © 2024 ANTORCHA & CARBÓN - EL BRILLO DEL HOGAR, PASTO, NARIÑO.
          </p>
        </div>
      </div>
    </footer>
  )
}
