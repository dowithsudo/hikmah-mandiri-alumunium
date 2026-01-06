import { Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
}

const CTASection = ({
  title = "Siap Mewujudkan Proyek Impian Anda?",
  subtitle = "Konsultasikan kebutuhan aluminium dan kaca Anda dengan tim profesional kami. Gratis survey dan estimasi biaya!",
}: CTASectionProps) => {
  const whatsappLink =
    "https://wa.me/6285711059130?text=Halo%20saya%20tertarik%20dengan%20jasa%20aluminium%20dan%20kaca";

  return (
    <section className="py-20 gradient-hero relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-accent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            {title}
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-10">
            {subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button variant="whatsapp" size="xl" className="w-full sm:w-auto">
                <Phone className="w-5 h-5" />
                Konsultasi via WhatsApp
              </Button>
            </a>

            <a href="/kontak">
              <Button variant="hero-outline" size="xl" className="w-full sm:w-auto">
                Lihat Kontak
                <ArrowRight className="w-5 h-5" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
