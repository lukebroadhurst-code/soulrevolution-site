/**
 * Single source of truth for every fact on the site.
 * Change a date, price or link here and it updates everywhere
 * (pages, countdown, calculator, structured data, FAQ).
 */

export const SITE = {
  name: 'Soul Revolution Festival',
  short: 'Soul Revolution',
  tagline: 'The Revolution Starts Within',
  theme: 'The Rising',
  description:
    'A five-day alcohol and substance-free festival of world music, ceremony, holistic health and community at Weston Park, Shropshire. 27–31 May 2027.',
  url: 'https://soulrevolutionfestival.com',

  // Gates open Thu 12:00, depart by Mon 14:00 (per ticketing platform)
  start: '2027-05-27T12:00:00+01:00',
  end: '2027-05-31T14:00:00+01:00',
  dateShort: '27–31 May 2027',
  dateLong: 'Thursday 27 – Monday 31 May 2027',
  capacity: 3000,

  venue: {
    name: 'Weston Park',
    locality: 'Weston-under-Lizard, near Shifnal',
    region: 'Shropshire / Staffordshire border',
    postcode: 'TF11 8LE',
    country: 'GB',
    lat: 52.6786,
    lng: -2.2753,
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Weston+Park+Weston-under-Lizard+Shifnal+TF11+8LE',
  },

  links: {
    tickets: 'https://dandelion.events/e/soulrevolutionfestival2027',
    glamping: 'https://soul-revolution-festival-2027.mysetup.uk/',
    volunteers: 'https://festivalpro.com/form/EGwbLDRjBtJNnjunQjmm/0',
    musicArtists:
      'https://docs.google.com/forms/d/e/1FAIpQLSdCzb3L0RRQXCaOyln6385OJ4QPmrX8BCVeARf0ZPcWxxvfjA/viewform?usp=dialog',
    facilitators:
      'https://docs.google.com/forms/d/e/1FAIpQLSfuyZUWLp4vZhnoCE1EadNm1GihBx-YqgX8nHr8v06C1Yp8ww/viewform?usp=dialog',
    instagram: 'https://www.instagram.com/soul.revolution.festival/',
    facebook: 'https://www.facebook.com/SoulRevolutionFestival/',
    youtube: 'https://www.youtube.com/@soulrevolutionfestival/',
    documentary: 'https://youtu.be/2D_vBEdfZ2M',
    labCharity: 'https://www.labcharity.org/donate',
  },

  emails: {
    general: 'hello@soulrevolutionfestival.com',
    support: 'community@soulrevolutionfestival.com',
    media: 'imani@soulrevolutionfestival.com',
    operations: 'savanna@soulrevolutionfestival.com',
    founder: 'alex@soulrevolutionfestival.com',
  },

  // Applications close (for the 2027 edition)
  applicationDeadline: '11 November 2026',
  // Date the ticket data below was last checked against the ticketing platform
  ticketsCheckedOn: '6 October 2026',
};

export type Ticket = {
  id: string;
  name: string;
  price: number;
  note: string;
  kind: 'adult' | 'child' | 'addon' | 'community';
  tag?: string;
};

export const TICKETS: Ticket[] = [
  { id: 'early', name: 'Early Bird', price: 255, kind: 'adult', note: 'Adult · all five days', tag: 'Final 100' },
  { id: 'general', name: 'General Release', price: 288, kind: 'adult', note: 'Adult · all five days' },
  { id: 'final', name: 'Final Release', price: 333, kind: 'adult', note: 'Adult · all five days' },
  { id: 'u16', name: 'Under 16', price: 10, kind: 'child', note: 'Ages 5–15' },
  { id: 'u5', name: 'Under 5', price: 0, kind: 'child', note: 'Free, but must be booked' },
  { id: 'car', name: 'Car Park Pass', price: 15, kind: 'addon', note: 'Per vehicle' },
  { id: 'live-in', name: 'Live-in Vehicle Pass', price: 60, kind: 'addon', note: 'Campervan or motorhome' },
  { id: 'sauna', name: 'Sacred Self Sauna', price: 50, kind: 'addon', note: 'Weekend add-on' },
  { id: 'pif', name: 'Pay It Forward', price: 20, kind: 'community', note: 'Fund a place for someone else' },
];

export const PAYMENT_PLAN_MONTHS = [3, 4, 5, 6, 7, 8];

export const STAGES = [
  {
    id: 'soul-revolution',
    name: 'Soul Revolution',
    kind: 'Main stage',
    blurb:
      'The heartbeat of the weekend. Artists and genres from around the globe, curated to build a heart-opening, joy-filled celebration of life.',
    facts: ['Live music from across the world', 'Daytime through to late'],
    photo: 'music',
  },
  {
    id: 'soul-temple',
    name: 'Soul Temple',
    kind: 'Ceremonial space · separately ticketed',
    blurb:
      'A curated, intimate space for profound journeys. In 2026 it hosted Yawanawa and Huni Kuin guides from the Brazilian Amazon, cacao ceremonies and a world-renowned South African healer. Spaces are limited and need a festival ticket to enter.',
    facts: ['Book ahead, or at the box office tent next door', 'Limited spaces'],
    photo: 'ceremony',
  },
  {
    id: 'ignite',
    name: 'Ignite',
    kind: 'DJ tent',
    blurb: 'Where the dancefloor catches fire. Sunrise-to-sunset conscious dance, DJs and a lot of bare feet.',
    facts: ['DJs and conscious dance', 'Alcohol-free, every night'],
    photo: 'ignite',
  },
  {
    id: 'soap-box',
    name: 'The Soap Box',
    kind: 'Talks',
    blurb: 'Revolutionary talks and big conversations. Take a seat, bring your questions, leave with a different view.',
    facts: ['Inspiring talks', 'Open to everyone'],
    photo: 'talks',
  },
  {
    id: 'connection',
    name: 'Connection',
    kind: 'Workshops · free',
    blurb:
      'Hands-on workshops across movement, breath, voice, relationship and healing. Free to join, first come first served.',
    facts: ['Free with your ticket', 'First come, first served'],
    photo: 'workshop',
  },
  {
    id: 'children',
    name: 'Children Of The Revolution',
    kind: 'Children’s tent',
    blurb: 'A safe, playful, creative space for little ones, in a festival built from the start to be family-friendly.',
    facts: ['Under 13s must be accompanied', 'Ear defenders recommended near loud stages'],
    photo: 'family',
  },
  {
    id: 'healing',
    name: 'The Healing Village',
    kind: 'Around 25 practitioners',
    blurb: 'Massage, reiki, cold-water therapy and more, offered by hand-picked healers in a village of their own.',
    facts: ['~25 healers', '30+ traders nearby'],
    photo: 'healing',
  },
];

export const OFFERINGS = [
  'Fire walking',
  'Sweat lodge',
  'Cold plunge',
  'Sacred Self Sauna',
  'The haka',
  'Indigenous ceremonies',
  'Cacao ceremonies',
  'African drumming',
  'Foraging',
  'Inspiring talks',
  'Men’s & women’s circles',
  'Movement & dance',
  'Healing Village',
  'Art gallery',
  'Children’s area',
  'Morning yoga',
];

export const VALUES = [
  { name: 'Integrity', text: 'Staying true to principles, even when it is difficult.' },
  { name: 'Compassion', text: 'Extending love and understanding to ourselves and to others.' },
  { name: 'Service', text: 'Using our skills, energy and resources to work for the greater good.' },
  { name: 'Bravery', text: 'Facing challenges and embracing growth, even in the presence of fear.' },
  { name: 'Humility', text: 'Staying grounded, leaving ego at the door and remembering that no one is above another.' },
  { name: 'Responsibility', text: 'Owning our choices, our impact and the part each of us plays in creating the world around us.' },
  { name: 'Discipline', text: 'Staying committed to growth and alignment.' },
];

export const REALIGN_STEPS = [
  ['Pause and reflect', 'Acknowledge where ego might be driving your actions.'],
  ['Reconnect with Source', 'Through prayer, meditation or intentional stillness, seek guidance and grounding.'],
  ['Extend grace', 'To yourself and to others. Imperfection is part of being human.'],
  ['Take responsibility', 'Make amends where necessary and recommit to your values.'],
  ['Serve others', 'Step outside yourself and focus on giving back.'],
];

export const PACKING = [
  { group: 'Essentials', items: ['Ticket / wristband confirmation', 'Reusable water bottle', 'Cup, bowl and cutlery (we are plastic-light)', 'Cash and card', 'Phone charger / power bank'] },
  { group: 'Sleep', items: ['Tent, or confirmation of your pre-pitched / glamping booking', 'Sleeping bag and mat', 'Pillow', 'Torch or head torch', 'Ear plugs (highly recommended)'] },
  { group: 'Body & soul', items: ['Yoga mat', 'Towel (for the sauna and cold plunge)', 'Layers for unpredictable British weather', 'Waterproofs', 'Sun cream and a hat', 'Swimwear'] },
  { group: 'Care', items: ['Any medication you need', 'Wet wipes and biodegradable toiletries', 'Ear defenders for children', 'A little something for your altar'] },
];

export type Faq = { q: string; a: string; group: string };

export const FAQ_GROUPS = ['Tickets', 'Getting here', 'Staying', 'On site', 'Families', 'Access', 'Rules & welfare'];

export const FAQS: Faq[] = [
  // Tickets
  { group: 'Tickets', q: 'When and where is Soul Revolution Festival 2027?', a: 'Thursday 27 to Monday 31 May 2027 at Weston Park, Weston-under-Lizard, near Shifnal, on the Shropshire and Staffordshire border. Gates open at 12 noon on Thursday and you need to be off site by 2pm on Monday.' },
  { group: 'Tickets', q: 'How many tickets are there?', a: 'Capacity is capped at 3,000 tickets. That is deliberate. It keeps the gathering intimate and keeps the land healthy.' },
  { group: 'Tickets', q: 'Can I buy a ticket for just one day?', a: 'No. Soul Revolution is a single five-day journey, so every adult ticket covers the full festival, Thursday to Monday.' },
  { group: 'Tickets', q: 'Can I pay in instalments?', a: 'Yes. Payment plans run over 3 to 8 months through Klarna or GoCardless, depending on how far away the festival is when you book.' },
  { group: 'Tickets', q: 'What if I cannot afford a full-price ticket?', a: 'Fill in the Community Care form. It exists so that finances are not a barrier. If you are able, you can also buy a Pay It Forward ticket (£20) to fund a place for someone else.' },
  { group: 'Tickets', q: 'Are children’s tickets different?', a: 'Under 5s are free (but still need to be booked so we know they are coming). Under 16s are £10. Children must be accompanied by an adult at all times if under 13.' },
  { group: 'Tickets', q: 'Can I get a refund or transfer my ticket?', a: 'Tickets are non-refundable except where the law requires it, or if the date or venue materially changes. Programme changes do not qualify for a refund. Tickets can be transferred to another person, but not resold for profit.' },
  { group: 'Tickets', q: 'What is Soul Temple and do I need a separate ticket?', a: 'Soul Temple is a ceremonial space with its own ticketed activities. You need a festival ticket to enter and a separate booking for each Soul Temple experience. Spaces are limited. Book ahead online, or at the box office tent beside Soul Temple if any remain.' },

  // Getting here
  { group: 'Getting here', q: 'Where exactly is the festival?', a: 'Weston Park, Weston-under-Lizard, Shifnal, TF11 8LE. It is a 1,000 acre estate on the Shropshire and Staffordshire border, about 20 minutes from Telford and Wolverhampton.' },
  { group: 'Getting here', q: 'Is there a shuttle bus?', a: 'Yes. A shuttle service runs from Shifnal and Telford stations. Full timings are published closer to the festival.' },
  { group: 'Getting here', q: 'Do I need a car park pass?', a: 'Yes, a Car Park Pass (£15 per vehicle) is needed if you are driving. Live-in vehicles such as campervans need a Live-in Vehicle Pass (£60). We encourage car sharing, and there is a community WhatsApp group to find people travelling from your area.' },
  { group: 'Getting here', q: 'Can I cycle?', a: 'Yes. Cycle parking is available where practical. Travel lighter, share the journey.' },

  // Staying
  { group: 'Staying', q: 'Where can I sleep?', a: 'Choose from self-pitch camping, pre-pitched tents via Camplight, or fully set-up glamping (bell tents through Posh Bells and Karma Canvas). If you would rather sleep off site, there are hotels and B&Bs near Shifnal and Telford.' },
  { group: 'Staying', q: 'Can I stay in a campervan?', a: 'Yes, with a Live-in Vehicle Pass (£60). Spaces are limited.' },
  { group: 'Staying', q: 'Are there showers and toilets?', a: 'Yes, toilets and showers run 24 hours a day, with plenty of water points. We use compost toilets. Please use only the toilets provided, never the woodland. We also ask you to keep showers to three minutes.' },

  // On site
  { group: 'On site', q: 'Is the festival really alcohol-free?', a: 'Yes. No alcohol or illegal substances are sold or permitted. It is what lets the whole site, from the late-night dancefloor to the children’s tent, feel safe, clear and welcoming.' },
  { group: 'On site', q: 'What is there to eat?', a: 'Organic vegan meals throughout the weekend, plus organic meat and wild-caught options from carefully chosen traders. More than 30 traders will be on site. Bring a reusable bottle, cup and cutlery.' },
  { group: 'On site', q: 'What stages and spaces are there?', a: 'More than a dozen music and facilitation spaces, including the Soul Revolution main stage, Soul Temple, Ignite (DJs), The Soap Box (talks), Connection (free workshops), Children Of The Revolution, and the Healing Village with around 25 practitioners.' },
  { group: 'On site', q: 'When is the programme released?', a: 'The full daily programme goes live about a month before the festival. Names are announced in waves through our mailing list and social channels in the run-up.' },
  { group: 'On site', q: 'Will there be mobile signal and cash machines?', a: 'Signal can be patchy in a 1,000 acre park. Bring both cash and card, and download anything you need before you arrive.' },

  // Families
  { group: 'Families', q: 'Is Soul Revolution suitable for children?', a: 'Very. It is built to be family-friendly. There is a dedicated children’s tent, Children Of The Revolution, and a safe, substance-free site. Children under 13 must be accompanied by an adult at all times. Ear defenders are recommended near loud stages.' },
  { group: 'Families', q: 'Can I bring my dog?', a: 'No, with the exception of registered assistance dogs and emotional support dogs. Please send proof before the festival. Dogs are never allowed in tents.' },

  // Access
  { group: 'Access', q: 'What accessibility support is there?', a: 'There is a 15% discount on tickets and a free carer ticket (with proof of disability), accessible toilets, showers and campsite area, wheelchair charging stations, mostly flat terrain, and an onsite accessibility lead. Email us before you book and we will help you plan.' },
  { group: 'Access', q: 'Is there a quiet space?', a: 'Yes. PsyCare UK run a 24-hour welfare tent for anyone who needs to step back, decompress or talk.' },

  // Rules & welfare
  { group: 'Rules & welfare', q: 'What are the main rules?', a: 'Keep your wristband on at all times. No alcohol or illegal substances. No fires or naked flames except festival-managed fires. Nudity is not permitted outside the saunas (it is a family site). Designated smoking areas only. Amplified music stops according to our licence, and the campsite is quiet after 11pm. Respect each other and the staff and volunteers.' },
  { group: 'Rules & welfare', q: 'What welfare and safeguarding is in place?', a: 'There is 24-hour security and a medical team on site, plus PsyCare UK offering mental-health and emotional support at any hour. The festival reserves the right to exclude anyone for safeguarding concerns, disruptive behaviour or safety risks.' },
  { group: 'Rules & welfare', q: 'Who runs the festival?', a: 'A core team of three directors, around twenty managers and about 300 volunteers.' },
];

export const FACTS = [
  { n: 5, label: 'days of The Rising' },
  { n: 3000, label: 'souls, no more', format: true },
  { n: 1000, label: 'acres of parkland', format: true },
  { n: 200, label: 'facilitators & faith leaders', plus: true },
  { n: 25, label: 'healers in the village', approx: true },
  { n: 0, label: 'drops of alcohol sold' },
];

export const TEAM = [
  { name: 'Alex Dudgon', role: 'Founder & Managing Director', email: SITE.emails.founder },
  { name: 'Imani Chimo-Daniel', role: 'Culture & Media Director · Strategy & Partnerships', email: SITE.emails.media },
  { name: 'Savanna Morrish', role: 'Operations & Visual Arts Director', email: SITE.emails.operations },
];

export const RETREATS = [
  {
    name: 'Sophia Kai: Journal Of The Soul Live',
    when: 'Saturday 26 September 2026 · 7pm',
    where: 'OMNOM, Birmingham',
    what: 'An intimate evening of music, poetry and storytelling exploring grief, grace, love and longing, with spoken word from Soul Revolution’s Imani Chimo-Daniel.',
    url: 'https://dandelion.events/e/sophiakailive',
    date: '2026-09-26',
  },
  {
    name: 'Samhain Autumn Alignment Day Retreat',
    when: 'Saturday 31 October 2026 · 10am–10pm',
    where: 'Haybarn, Shropshire',
    what: 'A full day marking the turning of the year in the Shropshire countryside, with practices that nourish body, heart and soul: music, connection and mindfulness.',
    url: 'https://dandelion.events/e/samhainautumnretreat',
    date: '2026-10-31',
  },
  {
    name: 'Soul Constellations 4-Day Retreat',
    when: 'Thursday 11 – Sunday 14 February 2027',
    where: 'Shallowford House, Staffordshire',
    what: 'A residential retreat pairing Systemic Family Constellations with meditation, embodiment, movement, music and community, to illuminate unseen familial and relational patterns.',
    url: 'https://dandelion.events/e/soulconstellations',
    date: '2027-02-11',
  },
];

/** The 2026 line-up, transcribed from the official poster. Kept as a living archive until 2027 is announced. */
export const LINEUP_2026 = {
  headliners: ['Lubiana', 'Curawaka', 'Hannah Wants', 'Facesoul', 'Satsang'],
  music: [
    'Olivia Fern', 'Antarma', 'Omega Nebula', 'An Dannsa Dub', 'Jagannātha Dās', 'Sari Seramor', 'Genevieve & Milo',
    'Šárka Elias', 'Arachai', 'Cheetah Ram', 'Moyah', 'Omer Gonen-Haela', 'Hajara Singh', 'Bonnie Medicine',
    'Aria Delyth', 'Aliya Lily', 'Mohamed Errebbaa', 'Lana Jagger', 'Kaya Ori', 'Blue Lions', 'Simran', 'Luc Saha',
    'Moshe Halperin', 'Koné', 'Aimee Lea Francis', 'Makam Salam', 'Om Jai', 'IAM13E', 'Gurpreet & Rajan',
    'Billie Maree', 'Blousy Haorang', 'Emily Cobie & Hannah Rose', 'Bexi Owen', 'Luca Di Caro', 'Josie & Benedick',
    'Alex CS', 'Zackiel', 'Haux Band',
  ],
  djs: [
    'Riya & Voice MC', 'Audiomission', 'Ævery', 'Osara', 'Mirchi Mob', 'Ujjay', 'Waxtone & Manoeuvre (Ignite)',
    'Starseed Soul', 'Minor Formula', 'Dubkami',
  ],
  speakers: [
    'Sophia Kai (Journal of the Soul)', 'Philiswa Makhaye', 'Yawanawa', 'Huni Kuin', 'Jamie Catto', 'Hoppi Wimbush',
    'Sukina Noor', 'Sindhu Dasi', 'Usman Unchained', 'Gareth Icke', 'Cordelia Simpson', 'Koroleko Moussa',
    'Gurj (Seek Within)', 'Tea Day', 'Henika Patel', 'Human Work', 'Chris Geisler', 'The Grief Retreat',
    'Wild & Untamed', 'Root of the Gods', 'Morning Gloryville', 'Way of the Rope', 'Molly-Anne Chinner',
    'Che Godfrey', 'Sovereign Project', 'Kemi Birthjoy', 'Nathan Simmonds', 'Ben Calder', 'Ethan Power',
    'Megan Cooper', 'Swami Anashuya', 'Sue Phillips', 'Wildly Georgia',
  ],
  collabs: ['Lovejam', 'Heart of the Rose', 'Primal', 'Ignite', 'Wider Horizons', 'The Way of Play'],
};

export const GALLERY_TAGS = [
  { id: 'all', label: 'Everything' },
  { id: 'music', label: 'Music' },
  { id: 'fire', label: 'Fire & ceremony' },
  { id: 'community', label: 'Community & movement' },
  { id: 'family', label: 'Family' },
  { id: 'land', label: 'Land & horses' },
  { id: 'faces', label: 'Faces' },
] as const;

const tag = (t: string, ids: string[]) => ids.map((id) => [id, t] as const);
export const GALLERY_MAP: Record<string, string> = Object.fromEntries([
  ...tag('music', ['1', '1-3', '2-2', '2-3', '3', '3-2', '3-4', '6-4', '7', '8-1', '9-4', '10-2', '15', '16', '22', '26', '27', '28', '33', '35', '38']),
  ...tag('fire', ['1-2', '3-1', '4-3', '5-2', '5-3', '6-3', '8-2', '8-3', '9-2', '10-4', '13', '17', '18', '19', '21', '32', '40']),
  ...tag('community', ['1-4', '5', '5-1', '6', '6-1', '6-2', '7-2', '7-3', '8', '8-4', '9', '9-1', '9-3', '11', '12', '14', '20', '23', '24', '25', '31', '39']),
  ...tag('family', ['4', '5-4', '7-1', '10']),
  ...tag('land', ['3-3', '4-1', '4-2', '7-4', '29']),
  ...tag('faces', ['1-1', '2', '2-1', '2-4', '10-1', '10-3', '30', '34', '37', '41', '42']),
]);

export const NAV = [
  { href: '/festival/', label: 'The Festival' },
  { href: '/lineup/', label: 'Line-up' },
  { href: '/plan/', label: 'Plan your trip' },
  {
    label: 'About',
    children: [
      { href: '/vision-mission/', label: 'Vision & Mission' },
      { href: '/values/', label: 'Our Values' },
      { href: '/sustainability/', label: 'Sustainability' },
      { href: '/charity/', label: 'Charity' },
      { href: '/team/', label: 'The Team' },
    ],
  },
  {
    label: 'Beyond',
    children: [
      { href: '/retreats-intimate-events/', label: 'Retreats & Events' },
      { href: '/journal/', label: 'Journal' },
      { href: '/gallery/', label: 'Gallery' },
      { href: '/documentary/', label: 'Documentary: Freedom' },
    ],
  },
  { href: '/participate/', label: 'Get involved' },
];
