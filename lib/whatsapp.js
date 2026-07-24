export const WHATSAPP_NUMBER = '447490301370';

export function getWhatsAppLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}${message ? `?text=${encodeURIComponent(message)}` : ''}`;
}
