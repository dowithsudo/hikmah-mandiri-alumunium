import { useState } from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import CTASection from "@/components/sections/CTASection";
import { mainGalleryItems as galleryItems } from "@/data/mainGalerry";

const categories = ["Semua", "Pintu", "Jendela", "Etalase", "Canopy", "Railing", "Partisi", "Custom"];

const Galeri = () => {
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredItems = selectedCategory === "Semua"
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "auto";
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? filteredItems.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) => 
      prev === filteredItems.length - 1 ? 0 : prev + 1
    );
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
              Portfolio
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Galeri Hasil Pekerjaan Kami
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Lihat berbagai proyek yang telah kami kerjakan dengan kualitas 
              terbaik dan hasil yang memuaskan.
            </p>
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 bg-card border-b border-border sticky top-[72px] z-30">
        <div className="container">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? "bg-accent text-accent-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-accent/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                onClick={() => openLightbox(index)}
                className="group relative aspect-square rounded-xl overflow-hidden shadow-soft cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-accent/80 flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300">
                      <ZoomIn className="w-6 h-6 text-accent-foreground" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span className="inline-block px-3 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-full mb-2">
                      {item.category}
                    </span>
                    <h3 className="text-primary-foreground font-semibold mb-1">
                      {item.title}
                    </h3>
                    <p className="text-primary-foreground/70 text-sm">
                      📍 {item.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">
                Tidak ada hasil untuk kategori ini.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-primary/95 flex items-center justify-center">
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center text-primary-foreground transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation */}
          <button
            onClick={goToPrevious}
            className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center text-primary-foreground transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center text-primary-foreground transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image */}
          <div className="max-w-5xl w-full px-6">
            <img
              src={filteredItems[currentImageIndex]?.image}
              alt={filteredItems[currentImageIndex]?.title}
              className="w-full max-h-[70vh] object-contain rounded-lg"
            />
            <div className="text-center mt-6">
              <span className="inline-block px-3 py-1 bg-accent text-accent-foreground text-sm font-medium rounded-full mb-3">
                {filteredItems[currentImageIndex]?.category}
              </span>
              <h3 className="text-primary-foreground text-xl font-semibold mb-2">
                {filteredItems[currentImageIndex]?.title}
              </h3>
              <p className="text-primary-foreground/70">
                📍 {filteredItems[currentImageIndex]?.location}
              </p>
              <p className="text-primary-foreground/50 text-sm mt-4">
                {currentImageIndex + 1} / {filteredItems.length}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* CTA */}
      <CTASection
        title="Tertarik dengan Hasil Kerja Kami?"
        subtitle="Konsultasikan proyek Anda dan wujudkan bersama tim profesional kami."
      />
    </>
  );
};

export default Galeri;
