import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-lg">HMA</span>
              </div>
              <div>
                <span className="font-bold text-lg">Hikmah</span>
                <span className="font-medium text-sm block -mt-1 opacity-80">
                  Mandiri Alumunium
                </span>
              </div>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Spesialis jasa alumunium dan kaca berkualitas untuk rumah, ruko,
              kantor, dan bangunan komersial. Pengerjaan profesional dengan hasil
              terbaik.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Menu</h4>
            <nav className="flex flex-col gap-2">
              {[
                { name: "Home", href: "/" },
                { name: "Layanan", href: "/layanan" },
                { name: "Galeri", href: "/galeri" },
                { name: "Tentang Kami", href: "/tentang" },
                { name: "Kontak", href: "/kontak" },
              ].map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Layanan</h4>
            <ul className="flex flex-col gap-2 text-sm text-primary-foreground/70">
              <li>Pintu & Jendela Alumunium</li>
              <li>Etalase / Display Kaca</li>
              <li>Canopy & Pagar</li>
              <li>Tangga & Railing</li>
              <li>Custom Alumunium & Kaca</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Kontak</h4>
            <div className="flex flex-col gap-3 text-sm">
              <a
                href="https://wa.me/6285711059130"
                className="flex items-center gap-3 text-primary-foreground/70 hover:text-accent transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>0856-8903-652 / 0857-1105-9130</span>
              </a>
              <a
                href="mailto:info@alumuniumkaca.com"
                className="flex items-center gap-3 text-primary-foreground/70 hover:text-accent transition-colors"
              >
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>info@alumuniumkaca.com</span>
              </a>
              <div className="flex items-start gap-3 text-primary-foreground/70">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>
                  Perumahan Griya Setu Permai 2, Blok DD3/10, RT008/015, Setu,
                  Bekasi, Jawa Barat
                </span>
              </div>
              <div className="flex items-center gap-3 text-primary-foreground/70">
                <Clock className="w-4 h-4 flex-shrink-0" />
                <span>Senin - Sabtu: 08.00 - 17.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © {currentYear} Hikmah Mandiri Alumunium. Hak Cipta Dilindungi.
          </p>

          <p className="text-primary-foreground/60 text-sm">
            Melayani area Jabodetabek dan sekitarnya
          </p>

          <p className="text-primary-foreground/50 text-xs">
            Website development by{" "}
            <a
              href="https://dowithsudo.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent underline"
            >
              dowithsudo
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
