import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Phone,
    label: "Telepon / WhatsApp",
    value: "0812-3456-7890",
    href: "https://wa.me/6281234567890",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@aluminiumkaca.com",
    href: "mailto:info@aluminiumkaca.com",
  },
  {
    icon: MapPin,
    label: "Alamat",
    value: "Jl. Industri No. 123, Jakarta Selatan 12345",
    href: "https://maps.google.com",
  },
  {
    icon: Clock,
    label: "Jam Kerja",
    value: "Senin - Sabtu: 08.00 - 17.00 WIB",
    href: null,
  },
];

const Kontak = () => {
  const [formData, setFormData] = useState({
    nama: "",
    telepon: "",
    pesan: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Create WhatsApp message
    const message = `Halo, saya ${formData.nama}.\n\nPesan: ${formData.pesan}\n\nNo. HP: ${formData.telepon}`;
    const whatsappUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, "_blank");

    toast({
      title: "Pesan Terkirim!",
      description: "Anda akan diarahkan ke WhatsApp untuk mengirim pesan.",
    });

    setFormData({ nama: "", telepon: "", pesan: "" });
    setIsSubmitting(false);
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-72 h-72 bg-accent rounded-full blur-3xl" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-3 block">
              Hubungi Kami
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Siap Membantu Kebutuhan Anda
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Ada pertanyaan atau ingin konsultasi? Hubungi kami melalui 
              berbagai channel yang tersedia.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
                Informasi Kontak
              </h2>

              <div className="grid gap-6 mb-10">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="bg-card rounded-xl p-6 shadow-soft hover:shadow-card transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <div className="text-muted-foreground text-sm mb-1">
                          {info.label}
                        </div>
                        {info.href ? (
                          <a
                            href={info.href}
                            target={info.href.startsWith("http") ? "_blank" : undefined}
                            rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="text-foreground font-semibold hover:text-accent transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <div className="text-foreground font-semibold">
                            {info.value}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick WhatsApp CTA */}
              <div className="bg-whatsapp/10 border border-whatsapp/20 rounded-xl p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-whatsapp flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">Chat Langsung</h3>
                    <p className="text-muted-foreground text-sm">
                      Respon cepat via WhatsApp
                    </p>
                  </div>
                </div>
                <a
                  href="https://wa.me/6281234567890?text=Halo%2C%20saya%20tertarik%20dengan%20jasa%20aluminium%20%26%20kaca"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="whatsapp" size="lg" className="w-full">
                    <Phone className="w-5 h-5" />
                    Chat via WhatsApp
                  </Button>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
                Kirim Pesan
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="nama"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Nama Lengkap
                  </label>
                  <Input
                    id="nama"
                    name="nama"
                    placeholder="Masukkan nama Anda"
                    value={formData.nama}
                    onChange={handleChange}
                    required
                    className="h-12"
                  />
                </div>

                <div>
                  <label
                    htmlFor="telepon"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Nomor HP / WhatsApp
                  </label>
                  <Input
                    id="telepon"
                    name="telepon"
                    type="tel"
                    placeholder="08xxxxxxxxxx"
                    value={formData.telepon}
                    onChange={handleChange}
                    required
                    className="h-12"
                  />
                </div>

                <div>
                  <label
                    htmlFor="pesan"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Pesan
                  </label>
                  <Textarea
                    id="pesan"
                    name="pesan"
                    placeholder="Tuliskan kebutuhan atau pertanyaan Anda..."
                    value={formData.pesan}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  variant="cta"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Mengirim..."
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Kirim Pesan
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="py-20 bg-secondary/50">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Lokasi Kami
            </h2>
            <p className="text-muted-foreground">
              Kunjungi workshop kami atau hubungi untuk penjadwalan survey lokasi proyek Anda.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-elevated">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126920.29279968756!2d106.7588371!3d-6.2297465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e945e34b9d%3A0x5371bf0fdad786a2!2sJakarta%20Selatan%2C%20Kota%20Jakarta%20Selatan%2C%20Daerah%20Khusus%20Ibukota%20Jakarta!5e0!3m2!1sid!2sid!4v1699999999999!5m2!1sid!2sid"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi Aluminium & Kaca"
              className="w-full"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Kontak;
