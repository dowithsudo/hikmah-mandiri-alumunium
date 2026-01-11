import { CheckCircle, ArrowRight, HelpCircle, MessageSquare, Ruler, FileText, Hammer, Package } from "lucide-react";
import CTASection from "@/components/sections/CTASection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import heroBg from "@/assets/hero-bg.jpg";
import pintuAlumunium from "@/assets/gallery/pintu_alumunium.png";
import kusenJendela from "@/assets/gallery/kusen_jendela.png";
import railingKaca from "@/assets/gallery/railing_kaca.png";
import kanopiKaca from "@/assets/gallery/kanopi_kaca.png";
import partisiKaca from "@/assets/gallery/partisi_kaca.png";  
import etalaseKaca from "@/assets/gallery/etalase_kaca.png";

const services = [
  {
    title: "Pintu Aluminium",
    description: "Pintu aluminium modern dengan berbagai pilihan model swing, sliding, dan folding. Tersedia dalam berbagai warna dan finishing.",
    features: ["Tahan karat", "Desain modern", "Berbagai pilihan warna", "Garansi pekerjaan"],
    icon: "🚪",
    image: pintuAlumunium,
  },
  {
    title: "Jendela Aluminium",
    description: "Jendela aluminium berkualitas tinggi dengan pilihan geser, casement, dan fixed. Cocok untuk rumah modern.",
    features: ["Kedap suara", "Hemat energi", "Perawatan mudah", "Tahan lama"],
    icon: "🪟",
    image: kusenJendela,
  },
  {
    title: "Etalase / Display Kaca",
    description: "Solusi display profesional untuk toko, showroom, dan outlet. Desain custom sesuai kebutuhan bisnis Anda.",
    features: ["Kaca tempered", "Desain custom", "Pencahayaan optimal", "Keamanan tinggi"],
    icon: "🏪",
    image: etalaseKaca,
  },
  {
    title: "Canopy & Pagar",
    description: "Perlindungan area outdoor dengan canopy kaca dan aluminium. Pagar aluminium untuk keamanan dan estetika.",
    features: ["Tahan cuaca", "Desain minimalis", "Struktur kokoh", "Anti karat"],
    icon: "🏠",
    image: kanopiKaca,
  },
  {
    title: "Tangga & Railing",
    description: "Railing tangga dan balkon dengan kombinasi aluminium dan kaca tempered untuk tampilan elegan.",
    features: ["Kaca tempered", "Aluminium premium", "Desain elegan", "Keamanan tinggi"],
    icon: "🔧",
    image: railingKaca,
  },
  {
    title: "Partisi & Sekat Kaca",
    description: "Pembatas ruangan modern dengan kaca untuk kantor, rumah, dan area komersial.",
    features: ["Frameless option", "Soundproof", "Maksimalkan cahaya", "Instalasi cepat"],
    icon: "📐",
    image: partisiKaca,
  },
];

const materials = [
  {
    category: "Aluminium",
    items: [
      { name: "Aluminium Standar", desc: "Ekonomis dengan kualitas baik" },
      { name: "Aluminium Premium", desc: "Kualitas tinggi, finishing lebih halus" },
      { name: "Aluminium YKK/Superex", desc: "Brand ternama, garansi panjang" },
    ],
  },
  {
    category: "Kaca",
    items: [
      { name: "Kaca Bening", desc: "Transparansi tinggi, standar" },
      { name: "Kaca Riben/Tinted", desc: "Mengurangi silau dan panas" },
      { name: "Kaca Tempered", desc: "5x lebih kuat, keamanan tinggi" },
      { name: "Kaca Laminated", desc: "Pecah tidak berhamburan" },
    ],
  },
];

const projectTypes = [
  { icon: "🏠", title: "Rumah Tinggal", desc: "Renovasi dan pembangunan baru" },
  { icon: "🏪", title: "Ruko & Toko", desc: "Etalase dan fasad komersial" },
  { icon: "🏢", title: "Kantor", desc: "Partisi dan interior office" },
  { icon: "🏗️", title: "Proyek Besar", desc: "Bangunan komersial skala besar" },
];

const workflow = [
  {
    step: 1,
    title: "Konsultasi Awal",
    desc: "Diskusi kebutuhan dan preferensi Anda",
    icon: MessageSquare,
  },
  {
    step: 2,
    title: "Survey & Pengukuran",
    desc: "Tim kami akan survey lokasi dan mengukur dengan presisi",
    icon: Ruler,
  },
  {
    step: 3,
    title: "Penawaran Harga",
    desc: "Estimasi biaya detail dan transparan",
    icon: FileText,
  },
  {
    step: 4,
    title: "Proses Pengerjaan",
    desc: "Produksi dan pemasangan oleh tim profesional",
    icon: Hammer,
  },
  {
    step: 5,
    title: "Finishing & Serah Terima",
    desc: "Quality check dan serah terima proyek",
    icon: Package,
  },
];

const faqs = [
  {
    question: "Apakah bisa custom desain sesuai keinginan?",
    answer: "Ya, kami menerima custom desain sesuai dengan kebutuhan dan preferensi Anda. Tim kami akan membantu mewujudkan desain yang Anda inginkan.",
  },
  {
    question: "Apakah tersedia layanan survey lokasi?",
    answer: "Ya, kami menyediakan layanan survey lokasi GRATIS untuk area Jabodetabek. Untuk area luar kota, biaya survey akan diinformasikan terlebih dahulu.",
  },
  {
    question: "Berapa lama estimasi pengerjaan?",
    answer: "Waktu pengerjaan tergantung pada kompleksitas dan ukuran proyek. Umumnya 3-14 hari kerja untuk proyek rumahan, dan bisa lebih lama untuk proyek besar.",
  },
  {
    question: "Area layanan meliputi mana saja?",
    answer: "Kami melayani area Jabodetabek dan sekitarnya. Untuk area di luar Jabodetabek, silakan hubungi kami untuk informasi lebih lanjut.",
  },
  {
    question: "Apakah ada garansi pekerjaan?",
    answer: "Ya, setiap pekerjaan kami dilengkapi dengan garansi. Durasi garansi bervariasi tergantung jenis pekerjaan dan material yang digunakan.",
  },
];

const Layanan = () => {
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
              Layanan Kami
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Solusi Lengkap Aluminium & Kaca Profesional
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Dari konsultasi hingga pemasangan, kami menyediakan layanan lengkap 
              untuk semua kebutuhan aluminium dan kaca Anda.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-all duration-300 group"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                  <span className="absolute bottom-4 left-4 text-4xl">{service.icon}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                        <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials Section */}
      <section className="py-20 bg-secondary/50">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-3 block">
              Material Berkualitas
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Pilihan Material Terbaik
            </h2>
            <p className="text-muted-foreground">
              Kami hanya menggunakan material berkualitas tinggi untuk 
              hasil pekerjaan yang tahan lama.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {materials.map((mat, index) => (
              <div key={index} className="bg-card rounded-2xl p-8 shadow-soft">
                <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center text-primary-foreground text-lg">
                    {mat.category === "Aluminium" ? "Al" : "🪟"}
                  </div>
                  {mat.category}
                </h3>
                <div className="space-y-4">
                  {mat.items.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-foreground">{item.name}</div>
                        <div className="text-muted-foreground text-sm">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Types */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-3 block">
              Jenis Proyek
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Melayani Berbagai Jenis Proyek
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {projectTypes.map((type, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 text-center shadow-soft hover:shadow-card transition-all duration-300"
              >
                <span className="text-5xl mb-4 block">{type.icon}</span>
                <h3 className="font-semibold text-foreground mb-2">{type.title}</h3>
                <p className="text-muted-foreground text-sm">{type.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="py-20 bg-secondary/50">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-3 block">
              Alur Pengerjaan
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Proses Kerja Kami
            </h2>
            <p className="text-muted-foreground">
              Proses transparan dari awal hingga proyek selesai.
            </p>
          </div>

          <div className="relative">
            {/* Connection line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {workflow.map((item, index) => (
                <div
                  key={index}
                  className="bg-card rounded-xl p-6 text-center shadow-soft relative group"
                >
                  {/* Step number */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full gradient-accent text-accent-foreground font-bold text-sm flex items-center justify-center shadow-soft">
                    {item.step}
                  </div>
                  
                  <div className="mt-4">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-accent/10 text-accent mb-4 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                      <item.icon className="w-7 h-7" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>

                  {/* Arrow */}
                  {index < workflow.length - 1 && (
                    <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-accent">
                      <ArrowRight className="w-6 h-6" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-14">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-3 block">
                FAQ
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Pertanyaan yang Sering Diajukan
              </h2>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card rounded-xl px-6 shadow-soft border-none"
                >
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:text-accent hover:no-underline py-5">
                    <div className="flex items-center gap-3">
                      <HelpCircle className="w-5 h-5 text-accent flex-shrink-0" />
                      {faq.question}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5 pl-8">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Butuh Konsultasi untuk Proyek Anda?"
        subtitle="Tim kami siap membantu memberikan solusi terbaik untuk kebutuhan aluminium dan kaca Anda."
      />
    </>
  );
};

export default Layanan;
