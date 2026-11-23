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
  geo: { lat: 31.6295, lng: -7.9811 }, // centre de Marrakech (approximatif) : à affiner avec les coordonnées exactes
  mapsUrl: 'https://www.google.com/maps?q=' + encodeURIComponent('TR3-189, LOT ABOUAB WAHAT NAKHIL, Marrakech 40000'),
};

export const waLink = (message: string) =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;

export const telLink = (p: string) => `tel:+212${p.replace(/\s/g, '').slice(1)}`;
