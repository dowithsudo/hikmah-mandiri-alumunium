import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Phone,
    label: "Kontak 1 (Telepon & WhatsApp)",
    value: "0856-8903-652",
    href: "https://wa.me/628568903652",
  },
  {
    icon: Phone,
    label: "Kontak 2 (Telepon & WhatsApp)",
    value: "0857-1105-9130",
    href: "https://wa.me/6285711059130",
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
    value:
      "Perumahan Griya Setu Permai 2, Blok DD3/10, RT008/015, Setu, Bekasi, Jawa Barat",
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

    await new Promise((resolve) => setTimeout(resolve, 1000));

    const message = `Halo, saya ${formData.nama}.\n\nPesan: ${formData.pesan}\n\nNo. HP: ${formData.telepon}`;
    const whatsappUrl = `https://wa.me/6285711059130?text=${encodeURIComponent(
      message
    )}`;

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
              Ada pertanyaan atau ingin konsultasi? Hubungi kami melalui berbagai
              channel yang tersedia.
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
                            target={
                              info.href.startsWith("http") ? "_blank" : undefined
                            }
                            rel={
                              info.href.startsWith("http")
                                ? "noopener noreferrer"
                                : undefined
                            }
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
                  href="https://wa.me/6285711059130?text=Halo%20saya%20tertarik%20dengan%20jasa%20aluminium%20dan%20kaca"
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
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Nama Lengkap
                  </label>
                  <Input
                    name="nama"
                    value={formData.nama}
                    onChange={handleChange}
                    required
                    className="h-12"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Nomor HP / WhatsApp
                  </label>
                  <Input
                    name="telepon"
                    type="tel"
                    value={formData.telepon}
                    onChange={handleChange}
                    required
                    className="h-12"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Pesan
                  </label>
                  <Textarea
                    name="pesan"
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
                  {isSubmitting ? "Mengirim..." : <> <Send className="w-5 h-5" /> Kirim Pesan </>}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="py-20 bg-secondary/50">
        <div className="container">
          <div className="rounded-2xl overflow-hidden shadow-elevated">
            <iframe
              src="https://www.google.com/maps?q=-6.344830366339012, 107.04422068978651&hl=id&z=17&output=embed"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi Workshop Hikmah Mandiri Aluminium & Kaca"
              className="w-full"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Kontak;
