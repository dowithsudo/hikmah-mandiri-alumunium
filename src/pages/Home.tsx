import { Phone, ArrowRight, Home as HomeIcon, Building2, Store, Warehouse, Clock, CheckCircle, Sparkles, Award, Users, Wrench } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import CTASection from "@/components/sections/CTASection";
import heroBg from "@/assets/hero-bg.jpg";
import { galleryPreview } from "@/data/galleryPreview";

const stats = [
  { icon: Award, value: "10+", label: "Tahun Pengalaman" },
  { icon: CheckCircle, value: "400+", label: "Proyek Selesai" },
  { icon: Users, value: "10+", label: "Tenaga Profesional" },
  { icon: Sparkles, value: "100%", label: "Material Berkualitas" },
];

const services = [
  {
    title: "Pintu & Jendela Aluminium",
    description: "Desain modern dengan berbagai pilihan warna dan model sesuai kebutuhan.",
    icon: "🚪",
  },
  {
    title: "Etalase / Display Kaca",
    description: "Solusi display profesional untuk toko dan showroom Anda.",
    icon: "🏪",
  },
  {
    title: "Canopy & Pagar",
    description: "Perlindungan dan keamanan dengan sentuhan estetika modern.",
    icon: "🏠",
  },
  {
    title: "Tangga & Railing",
    description: "Desain kokoh dan elegan untuk interior maupun eksterior.",
    icon: "🔧",
  },
  {
    title: "Partisi Kaca",
    description: "Pembatas ruangan modern dengan pencahayaan optimal.",
    icon: "🪟",
  },
  {
    title: "Custom Projects",
    description: "Pengerjaan khusus sesuai desain dan kebutuhan spesifik Anda.",
    icon: "⚙️",
  },
];

const areas = [
  { icon: HomeIcon, title: "Rumah Tinggal", desc: "Renovasi dan pembangunan baru" },
  { icon: Store, title: "Ruko & Toko", desc: "Etalase dan fasad modern" },
  { icon: Building2, title: "Kantor", desc: "Partisi dan interior profesional" },
  { icon: Warehouse, title: "Bangunan Komersial", desc: "Proyek skala besar" },
];

const whyUs = [
  { icon: Clock, title: "Tepat Waktu", desc: "Komitmen penyelesaian sesuai jadwal yang disepakati" },
  { icon: CheckCircle, title: "Pengerjaan Rapi", desc: "Hasil pekerjaan presisi dengan standar kualitas tinggi" },
  { icon: Wrench, title: "Harga Transparan", desc: "Tidak ada biaya tersembunyi, penawaran detail dan jelas" },
];

const testimonials = [
  {
    name: "Budi Santoso",
    role: "Pemilik Rumah",
    content: "Hasil pengerjaan sangat memuaskan. Jendela aluminium terpasang dengan rapi dan presisi. Recommended!",
  },
  {
    name: "Ibu Ratna",
    role: "Pemilik Toko",
    content: "Etalase kaca untuk toko saya dikerjakan dengan cepat dan hasilnya sangat profesional. Terima kasih!",
  },
  {
    name: "Pak Ahmad",
    role: "Kontraktor",
    content: "Sudah beberapa kali menggunakan jasa mereka untuk proyek-proyek saya. Kualitas konsisten dan harga bersaing.",
  },
];



const Home = () => {
  const whatsappLink =
    "https://wa.me/6285711059130?text=Halo%2C%20saya%20tertarik%20dengan%20jasa%20aluminium%20%26%20kaca";

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 gradient-hero opacity-90" />
        
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        </div>

        <div className="container relative z-10 pt-24 pb-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-4 py-2 mb-8">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-primary-foreground/90 text-sm font-medium">
                Spesialis Aluminium & Kaca Terpercaya
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
              Solusi Terbaik untuk{" "}
              <span>Aluminium & Kaca</span>{" "}
              Berkualitas
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
              Lebih dari 10 tahun pengalaman melayani kebutuhan pintu, jendela, etalase, 
              dan berbagai pekerjaan aluminium & kaca dengan hasil profesional.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button variant="whatsapp" size="xl" className="w-full sm:w-auto">
                  <Phone className="w-5 h-5" />
                  Konsultasi via WhatsApp
                </Button>
              </a>
              <Link to="/galeri">
                <Button variant="hero-outline" size="xl" className="w-full sm:w-auto">
                  Lihat Galeri
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card relative -mt-20">
        <div className="container">
          <div className="bg-card rounded-2xl shadow-elevated p-8 md:p-10">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-accent/10 text-accent mb-4">
                    <stat.icon className="w-7 h-7" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-3 block">
              Layanan Kami
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Solusi Lengkap Aluminium & Kaca
            </h2>
            <p className="text-muted-foreground">
              Kami menyediakan berbagai layanan aluminium dan kaca untuk memenuhi 
              kebutuhan properti Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-card rounded-xl p-6 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-accent/20"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/layanan">
              <Button variant="outline" size="lg">
                Lihat Semua Layanan
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Area Section */}
      <section className="py-20 bg-secondary/50">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-3 block">
              Area Layanan
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Hikmah Mandiri Alumunium Melayani Berbagai Jenis Bangunan
            </h2>
            <p className="text-muted-foreground">
              Dari rumah tinggal hingga bangunan komersial, kami siap membantu 
              mewujudkan kebutuhan aluminium dan kaca Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {areas.map((area, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 text-center shadow-soft hover:shadow-card transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl gradient-primary text-primary-foreground mb-4">
                  <area.icon className="w-8 h-8" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{area.title}</h3>
                <p className="text-muted-foreground text-sm">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-3 block">
                Mengapa Memilih Kami
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Komitmen Kami untuk Kepuasan Anda
              </h2>
              <p className="text-muted-foreground mb-8">
                Kami berkomitmen memberikan pelayanan terbaik dengan kualitas 
                pengerjaan yang tidak perlu diragukan lagi.
              </p>

              <div className="space-y-6">
                {whyUs.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                      <p className="text-muted-foreground text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-elevated">
                <img
                  src={heroBg}
                  alt="Profesional bekerja"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating card */}
              <div className="absolute -bottom-6 -left-6 bg-card rounded-xl p-6 shadow-elevated max-w-xs">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <span className="font-semibold text-foreground">Garansi Pekerjaan</span>
                </div>
                <p className="text-muted-foreground text-sm">
                  Setiap proyek dilengkapi garansi untuk kepuasan Anda.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview Section */}
      <section className="py-20 bg-secondary/50">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-3 block">
              Portfolio
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Hasil Pekerjaan Kami
            </h2>
            <p className="text-muted-foreground">
              Lihat berbagai proyek yang telah kami selesaikan dengan kualitas terbaik.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {galleryPreview.map((item) => (
              <div
                key={item.id}
                className="group relative aspect-square rounded-xl overflow-hidden shadow-soft"
              >
                <img
                  src={item.image || heroBg}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-primary-foreground font-medium text-sm">
                    {item.title}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/galeri">
              <Button variant="default" size="lg">
                Lihat Galeri Lengkap
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-3 block">
              Testimoni
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Apa Kata Pelanggan Kami
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 shadow-soft border border-border"
              >
                <div className="flex items-center gap-1 text-accent mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <p className="text-foreground mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                    <span className="text-accent font-semibold">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-sm">
                      {testimonial.name}
                    </div>
                    <div className="text-muted-foreground text-xs">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </>
  );
};

export default Home;
