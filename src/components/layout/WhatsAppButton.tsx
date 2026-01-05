import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const whatsappLink =
    "https://wa.me/6281234567890?text=Halo%2C%20saya%20tertarik%20dengan%20jasa%20aluminium%20%26%20kaca";

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Chat via WhatsApp"
    >
      <div className="relative">
        {/* Pulse animation ring */}
        <div className="absolute inset-0 bg-whatsapp rounded-full animate-ping opacity-30" />
        
        {/* Main button */}
        <div className="relative w-14 h-14 bg-whatsapp rounded-full flex items-center justify-center shadow-elevated hover:bg-whatsapp-hover transition-all duration-300 hover:scale-110">
          <MessageCircle className="w-7 h-7 text-white" />
        </div>

        {/* Tooltip */}
        <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-card text-foreground px-4 py-2 rounded-lg shadow-card opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
          <span className="text-sm font-medium">Chat via WhatsApp</span>
          <div className="absolute left-full top-1/2 -translate-y-1/2 border-8 border-transparent border-l-card" />
        </div>
      </div>
    </a>
  );
};

export default WhatsAppButton;
