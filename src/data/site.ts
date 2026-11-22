export const SITE = {
  name: 'B.R.F.B services',
  url: 'https://brfbservices.ma',
  phones: ['06 61 09 75 19', '06 89 13 91 09'],
  whatsapp: '212689139109',
  email: 'Brfbbureau@gmail.com',
  address: ['Résidence Saad Allah N 719', 'Talloujte II Amerciche, Marrakech'],
  hours: [
    { days: 'Lundi – Vendredi', time: '8h00 – 18h00' },
    { days: 'Samedi', time: '9h00 – 12h00' },
  ],
  geo: { lat: 31.659278, lng: -7.995444 },
  mapsUrl: 'https://www.google.com/maps?q=31.659278,-7.995444',
};

export const waLink = (message: string) =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;

export const telLink = (p: string) => `tel:+212${p.replace(/\s/g, '').slice(1)}`;
