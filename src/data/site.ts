export const SITE = {
  name: 'B.R.F.B services',
  url: 'https://brfbservices.ma',
  phones: ['06 61 09 75 19', '06 89 13 91 09'],
  whatsapp: '212689139109',
  email: 'Brfbbureau@gmail.com',
  address: ['TR3-189, LOT ABOUAB WAHAT NAKHIL', 'Marrakech 40000'],
  addressQuery: 'TR3-189, LOT ABOUAB WAHAT NAKHIL, Marrakech 40000',
  hours: [
    { days: 'Lundi – Vendredi', time: '8h00 – 18h00' },
    { days: 'Samedi', time: '9h00 – 12h00' },
  ],
  geo: { lat: 31.7091568, lng: -8.0465806 },
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=31.7091568,-8.0465806',
  mapsEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27153.97317975833!2d-8.046580589160143!3d31.709156799999988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafed84263d2d6f%3A0xfd7a2d79a09e692e!2slibrairie%20et%20Imprimerie%20B.R.F.B%20Services!5e0!3m2!1sfr!2sma!4v1795446586409!5m2!1sfr!2sma',
};

export const waLink = (message: string) =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;

export const telLink = (p: string) => `tel:+212${p.replace(/\s/g, '').slice(1)}`;
