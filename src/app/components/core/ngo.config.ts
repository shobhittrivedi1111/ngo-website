export const NGO = {
  name: 'Naya Savera Utthan Welfare Society',
  nameHindi: 'नया सवेरा उत्थान वेलफेयर सोसाइटी',
  address: 'Plot 27, Kedar Vihar, Goshala Road, Lucknow, Uttar Pradesh 226003',
  phone: '7007408522',
  registration: { act: 'Societies Registration Act, 1860', number: 'LUC/04314/2023-2024', date: '27 Sep 2023' },
  eightyG: { urn: 'AAJAN2784NF20241', status: 'Provisional approval' }, // update after final approval
  upi: { vpa: 'nayas70074636@barodampay', payeeName: 'Naya Savera Utthan Welfare Society' },
  membership: [
    { type: 'General Member', fee: 101, note: 'Annual' },
    { type: 'Life Member', fee: 5100, note: 'One-time' },
  ],
};
export const COMMITTEE = [
  { name: 'Ajay Tiwari', role: 'President' },
  { name: 'Deepali Tiwari', role: 'Vice President' },
  { name: 'Abhishek Srivastava', role: 'Secretary' },
  { name: 'Bandana Devi', role: 'Treasurer' },
  { name: 'Pulkit Garg', role: 'Member' },
  { name: 'Rishi Kant Dixit', role: 'Member' },
  { name: 'Ritika Tiwari', role: 'Member' },
];

export const OBJECTIVES = [
  'Social, mental, ethical, cultural and creative development of children and adolescents',
  'Educational development through schools, colleges and vocational education for underprivileged and differently-abled children',
  'Free arrangements for orphanages, hospitals, mobile clinics, old-age homes, widow homes and night shelters',
  'Free treatment camps for the disabled, orphans and the underprivileged',
  'Cultural programmes, seminars, sports competitions, blood donation and health camps',
  'Computer education centres',
  'Skill training for women — tailoring, weaving, handicrafts, art, dance and creative writing',
  'Welfare of the deaf, disabled, orphans, widows, elderly and the differently-abled',
  'Community welfare across all sections of society, without discrimination',
  'Disaster relief for floods, droughts, accidents, epidemics and similar emergencies',
];

export const EVENTS = [
  {
    title: 'Free Health Check-up Camp',
    date: '2026-10-12',
    location: 'Kedar Vihar, Lucknow',
    description: 'General health check-up, blood pressure and sugar screening, free of cost for all.',
  },
  {
    title: 'Blood Donation Drive',
    date: '2026-11-02',
    location: 'Goshala Road, Lucknow',
    description: 'Join hands to save lives — donate blood at our community drive.',
  },
  {
    title: 'Winter Clothes Distribution',
    date: '2026-12-20',
    location: 'Lucknow Chowk',
    description: 'Distribution of blankets and warm clothes to underprivileged families.',
  },
];

export const GALLERY = [
  { src: 'gallery/photo1.png', caption: 'Health camp, October 2026' },
  { src: 'gallery/photo2.png', caption: 'Blood donation drive' },
  { src: 'gallery/photo3.png', caption: 'Winter clothes distribution' },
  // add more as you get real photos
];

export const EMAILJS = {
  serviceId: 'service_wrbmrao',
  templateId: 'template_io7ya0m',
  publicKey: '2V-L4j_VtRCX1_LKe',
};