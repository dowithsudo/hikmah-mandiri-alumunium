import { Award, Users, Target, Heart, CheckCircle, MapPin } from "lucide-react";
import CTASection from "@/components/sections/CTASection";
import heroBg from "@/assets/hero-bg.jpg";

const values = [
  {
    icon: Award,
    title: "Profesional",
    description: "Tim kami terdiri dari tenaga ahli yang berpengalaman dan terlatih dalam bidang aluminium dan kaca.",
  },
  {
    icon: Heart,
    title: "Transparan",
    description: "Tidak ada biaya tersembunyi. Kami memberikan penawaran yang detail dan jelas sebelum pengerjaan.",
  },
  {
    icon: Target,
    title: "Bertanggung Jawab",
    description: "Setiap proyek dilengkapi dengan garansi dan komitmen untuk kepuasan pelanggan.",
  },
];


const areas = [
  "Jakarta Selatan",
  "Jakarta Pusat",
  "Jakarta Barat",
  "Jakarta Timur",
  "Jakarta Utara",
  "Tangerang",
  "Tangerang Selatan",
  "Bekasi",
  "Depok",
  "Bogor",
];

const Tentang = () => {
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
              Tentang Kami
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              HIKMAH MANDIRI ALUMUNIUM
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Lebih dari 10 tahun pengalaman melayani kebutuhan aluminium dan kaca 
              untuk berbagai jenis bangunan di Jabodetabek.
            </p>
          </div>
        </div>
      </section>

      {/* Profile Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-3 block">
                Profil Usaha
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Mitra Terpercaya untuk Proyek Aluminium & Kaca
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <strong className="text-foreground">Hikmah Mandiri Aluminium</strong> adalah penyedia jasa 
                  aluminium dan kaca profesional yang telah melayani ratusan pelanggan di area 
                  Jabodetabek dan sekitarnya.
                </p>
                <p>
                  Berawal dari usaha kecil, kami terus berkembang berkat kepercayaan pelanggan 
                  dan komitmen kami terhadap kualitas. Setiap proyek yang kami kerjakan 
                  mengutamakan presisi, estetika, dan daya tahan.
                </p>
                <p>
                  Dengan tim profesional yang berpengalaman dan didukung oleh material 
                  berkualitas tinggi, kami siap mewujudkan kebutuhan aluminium dan kaca 
                  Anda dengan hasil terbaik.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-foreground mb-1">10+</div>
                  <div className="text-muted-foreground text-sm">Tahun Pengalaman</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-foreground mb-1">400+</div>
                  <div className="text-muted-foreground text-sm">Proyek Selesai</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-foreground mb-1">10+</div>
                  <div className="text-muted-foreground text-sm">Tim Profesional</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-elevated">
                <img
                  src={heroBg}
                  alt="Tim Aluminium & Kaca"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating card */}
              <div className="absolute -bottom-6 -right-6 bg-card rounded-xl p-6 shadow-elevated">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full gradient-accent flex items-center justify-center">
                    <Users className="w-7 h-7 text-accent-foreground" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">95%</div>
                    <div className="text-muted-foreground text-sm">Kepuasan Pelanggan</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-secondary/50">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-3 block">
              Nilai-Nilai Kami
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Prinsip yang Kami Pegang
            </h2>
            <p className="text-muted-foreground">
              Tiga nilai utama yang menjadi landasan dalam setiap pekerjaan kami.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-8 text-center shadow-soft hover:shadow-card transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl gradient-primary text-primary-foreground mb-6">
                  <value.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

     
      {/* Area Coverage */}
      <section className="py-20 bg-secondary/50">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-3 block">
                Area Layanan
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Melayani Jabodetabek dan Sekitarnya
              </h2>
              <p className="text-muted-foreground mb-8">
                Kami melayani berbagai area di Jabodetabek. Untuk area di luar 
                daftar berikut, silakan hubungi kami untuk informasi lebih lanjut.
              </p>

              <div className="grid grid-cols-2 gap-3">
                {areas.map((area, index) => (
                  <div key={index} className="flex items-center gap-2 text-foreground">
                    <MapPin className="w-4 h-4 text-accent flex-shrink-0" />
                    <span className="text-sm">{area}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-soft">
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Target className="w-6 h-6 text-accent" />
                Visi & Komitmen
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">
                    Menjadi penyedia jasa aluminium dan kaca terpercaya dengan 
                    standar kualitas tertinggi di Indonesia.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">
                    Memberikan solusi terbaik dengan harga yang kompetitif dan 
                    pelayanan yang memuaskan.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">
                    Mengutamakan kepuasan pelanggan melalui pengerjaan yang 
                    tepat waktu dan hasil yang presisi.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">
                    Terus berinovasi dan mengikuti perkembangan teknologi 
                    dalam industri aluminium dan kaca.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      {/* CTA */}
      <CTASection
        title="Mari Bekerja Sama"
        subtitle="Hubungi kami untuk konsultasi gratis dan wujudkan proyek aluminium & kaca impian Anda."
      />
    </>
  );
};

export default Tentang;
