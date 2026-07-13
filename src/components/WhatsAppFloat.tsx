import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "../lib/whatsapp";

const DEFAULT_MESSAGE =
  "Hi, I'm interested in your steel structure & industrial construction services. Could you share more details?";

const WhatsAppFloat = () => {
  const url = getWhatsAppUrl(DEFAULT_MESSAGE);

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] shadow-lg hover:scale-110 transition-transform duration-200"
    >
      <MessageCircle className="w-7 h-7 text-white" fill="white" />
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-40" />
    </a>
  );
};

export default WhatsAppFloat;
