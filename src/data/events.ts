export type ArticleBlock =
  | { type: 'h2' | 'h3' | 'p'; text: string }
  | { type: 'quote'; text: string; cite: string }
  | { type: 'list'; items: string[] };

export interface EventItem {
  id: number;
  slug: string;
  title: string;
  date: string;
  location?: string;
  category: string;
  description: string;
  images: string[];
  article: ArticleBlock[];
}

const gallery = (folder: string, count: number) => Array.from({ length: count }, (_, index) => `/images/${folder}/${index + 1}.webp`);

// Listed oldest to newest.
export const events: EventItem[] = [
  {
    id: 1,
    slug: 'water-philippines-expo-2025',
    title: 'Water Philippines Expo 2025',
    date: 'March 19, 2025',
    location: 'SMX Convention Center, Pasay City',
    category: 'Expo',
    description:
      'NXTLVL Water Technology participated in the Water Philippines Expo 2025, showcasing our innovative GoWater dispensers and advanced RO filtration technology. The event provided an excellent platform to connect with industry leaders and potential partners.',
    images: gallery('Water Philippines Expo', 4),
    article: [
      { type: 'h2', text: 'NXTLVL Water Technology Showcases Innovation at Water Philippines Expo 2025' },
      {
        type: 'p',
        text: 'NXTLVL Water Technology Inc. proudly participated in the Water Philippines Expo 2025, held at the prestigious SMX Convention Center in Pasay City. This premier event brought together industry leaders, innovators, and stakeholders in the water technology sector to showcase the latest advancements in water purification, sustainability, and smart dispensing solutions.',
      },
      { type: 'h3', text: 'Showcasing GoWater Technology' },
      {
        type: 'p',
        text: 'At our booth, visitors experienced firsthand demonstrations of our cutting-edge GoWater dispensers featuring advanced Reverse Osmosis (RO) filtration technology. Our team highlighted how GoWater machines are revolutionizing access to clean, affordable drinking water while promoting environmental sustainability by reducing plastic waste.',
      },
      {
        type: 'quote',
        text: 'The Water Philippines Expo provided an excellent platform to connect with industry leaders, potential partners, and customers who share our vision for sustainable water solutions. The response to our GoWater technology was overwhelming!',
        cite: 'NXTLVL Water Technology Team',
      },
      { type: 'h3', text: 'Key Highlights' },
      {
        type: 'list',
        items: [
          'Live demonstrations of our advanced RO water purification technology',
          'Interactive displays showcasing smart IoT-enabled water dispensing systems',
          'Networking opportunities with industry leaders and potential business partners',
          'Educational sessions on sustainability and reducing environmental impact',
        ],
      },
      { type: 'h3', text: 'Looking Forward' },
      {
        type: 'p',
        text: "The Water Philippines Expo 2025 reinforced our commitment to innovation and sustainability in the water technology sector. We're excited about the partnerships formed and the opportunities ahead to expand GoWater's reach in providing clean, accessible drinking water to communities across the Philippines.",
      },
      {
        type: 'p',
        text: "Thank you to everyone who visited our booth and engaged with our team. Together, we're making a difference in ensuring sustainable water access for all.",
      },
    ],
  },
  {
    id: 2,
    slug: 'franchise-pinas-2025',
    title: 'Franchise Pinas 2025',
    date: 'July 5-6, 2025',
    location: 'SMX Convention Center Clark',
    category: 'Franchise',
    description:
      'Join us at Franchise Pinas 2025, the premier franchising expo in the Philippines. Discover exciting franchise opportunities with GoWater and learn how you can be part of the sustainable water revolution.',
    images: gallery('Franchise Pinas 2025', 4),
    article: [
      { type: 'h2', text: 'GoWater Franchise Opportunities at Franchise Pinas 2025' },
      {
        type: 'p',
        text: "NXTLVL Water Technology Inc. is excited to participate in Franchise Pinas 2025, the Philippines' premier franchising exhibition. This two-day event at SMX Convention Center Clark brings together entrepreneurs, business owners, and franchise seekers looking for sustainable and profitable business opportunities.",
      },
      { type: 'h3', text: 'Join the Sustainable Water Revolution' },
      {
        type: 'p',
        text: "At our booth, visitors will discover how they can become part of the GoWater franchise network. We're offering comprehensive franchise packages that include advanced RO water dispensing machines, technical training, marketing support, and ongoing business development assistance. This is your opportunity to invest in a business that combines profitability with environmental impact.",
      },
      {
        type: 'quote',
        text: 'Franchise Pinas 2025 is the perfect platform to connect with aspiring entrepreneurs who want to make a difference while building a profitable business. GoWater franchises offer an exciting opportunity in the growing sustainable water industry.',
        cite: 'NXTLVL Water Technology Franchise Team',
      },
      { type: 'h3', text: 'Why Choose GoWater Franchise?' },
      {
        type: 'list',
        items: [
          'Proven business model with recurring revenue streams',
          'Cutting-edge IoT-enabled water dispensing technology',
          'Comprehensive training and ongoing support',
          'Growing demand for sustainable water solutions',
          'Marketing materials and brand support',
        ],
      },
      { type: 'h3', text: 'Visit Us at the Event' },
      {
        type: 'p',
        text: "Whether you're an experienced business owner looking to diversify or a first-time entrepreneur seeking a sustainable venture, our team will be ready to discuss franchise opportunities, answer your questions, and show you how GoWater can be your pathway to business success.",
      },
      {
        type: 'p',
        text: 'Join us on July 5-6, 2025, at SMX Convention Center Clark to explore how you can be part of the GoWater franchise family. Together, we can expand access to clean drinking water across the Philippines while building profitable, meaningful businesses.',
      },
    ],
  },
  {
    id: 3,
    slug: 'liga-ng-barangay',
    title: 'Liga ng Barangay',
    date: 'Monthly Event',
    location: 'World Trade Center, Pasay City',
    category: 'Community',
    description:
      "Community engagement with Liga ng Barangay held monthly at the World Trade Center. We're bringing clean water access to local communities through our GoWater dispensing solutions.",
    images: gallery('Liga ng Barangay', 5),
    article: [
      { type: 'h2', text: 'Bringing Clean Water to Local Communities' },
      {
        type: 'p',
        text: 'NXTLVL Water Technology Inc. is proud to participate in the monthly Liga ng Barangay gatherings at the World Trade Center. These community-focused events provide us with valuable opportunities to connect directly with barangay leaders and community stakeholders who are committed to improving the quality of life in their neighborhoods.',
      },
      { type: 'h3', text: 'Community-Centered Water Solutions' },
      {
        type: 'p',
        text: 'At each Liga ng Barangay event, we showcase how GoWater dispensing machines can transform community access to clean, safe drinking water. Our presentations focus on the practical benefits for barangays: affordable water access for residents, reduced plastic waste in communities, and sustainable solutions that can be implemented at the local level.',
      },
      {
        type: 'quote',
        text: "Working with Liga ng Barangay allows us to directly address water accessibility challenges at the grassroots level. These community leaders understand their neighborhoods' needs better than anyone, and together we're finding sustainable solutions.",
        cite: 'NXTLVL Water Technology Community Outreach Team',
      },
      { type: 'h3', text: 'Building Partnerships for Change' },
      {
        type: 'list',
        items: [
          'Direct engagement with barangay officials and community leaders',
          'Educational sessions on water purification technology',
          "Demonstrations of GoWater's ease of use and maintenance",
          'Discussions on community-specific water accessibility solutions',
          'Partnership opportunities for barangay-wide water programs',
        ],
      },
      { type: 'h3', text: 'Our Commitment to Communities' },
      {
        type: 'p',
        text: "These monthly gatherings reinforce our belief that sustainable water solutions begin at the community level. By partnering with barangay leaders, we're not just providing technology—we're building relationships and creating long-term solutions that address the unique water challenges faced by different communities across Metro Manila and beyond.",
      },
      {
        type: 'p',
        text: 'We look forward to continuing our participation in Liga ng Barangay events, fostering partnerships that bring clean, accessible water to every corner of our communities. Together, we can ensure that every Filipino has access to safe, affordable drinking water.',
      },
    ],
  },
  {
    id: 4,
    slug: 'demo-for-imes-group',
    title: 'Demo for IMES Group',
    date: 'August 29, 2025',
    location: 'IMES Group Corporation',
    category: 'Demo',
    description:
      'Live demonstration of GoWater technology for IMES Group, showcasing our advanced water purification systems, smart IoT features, and sustainable dispensing solutions.',
    images: gallery('Demo for IMES Group', 4),
    article: [
      { type: 'h2', text: 'Showcasing GoWater Technology to Corporate Leaders' },
      {
        type: 'p',
        text: 'On August 29, 2025, NXTLVL Water Technology Inc. conducted a comprehensive live demonstration of our GoWater dispensing systems for IMES Group Corporation. This exclusive showcase highlighted how our advanced water purification technology can meet the hydration needs of modern corporate environments while promoting sustainability and cost efficiency.',
      },
      { type: 'h3', text: 'Advanced Technology in Action' },
      {
        type: 'p',
        text: "During the demonstration, IMES Group executives and facilities management team witnessed firsthand the capabilities of GoWater's Reverse Osmosis (RO) water purification system. Our team showcased the complete water treatment process, from initial filtration through the multi-stage RO system to the final dispensing of premium-quality drinking water. The demonstration emphasized both the technical sophistication and user-friendly operation of our systems.",
      },
      {
        type: 'quote',
        text: "The IMES Group demonstration allowed us to showcase not just our technology, but our commitment to providing comprehensive water solutions tailored to corporate environments. Their team's engagement and thoughtful questions demonstrated a genuine interest in sustainable workplace solutions.",
        cite: 'NXTLVL Water Technology Sales Team',
      },
      { type: 'h3', text: 'Key Features Demonstrated' },
      {
        type: 'list',
        items: [
          'Multi-stage Reverse Osmosis filtration achieving 99.9% purity',
          'Smart IoT monitoring for real-time system health and usage analytics',
          'Energy-efficient design reducing operational costs',
          'Minimal maintenance requirements with automated cleaning cycles',
          'Significant reduction in single-use plastic bottle waste',
        ],
      },
      { type: 'h3', text: 'Corporate Sustainability Benefits' },
      {
        type: 'p',
        text: 'The demonstration emphasized how GoWater systems align with modern corporate sustainability goals. By replacing traditional water coolers and bottled water delivery services, companies like IMES Group can significantly reduce their plastic waste footprint while providing employees with premium-quality drinking water. The smart monitoring capabilities also allow facilities management to track usage patterns and optimize water resource allocation.',
      },
      { type: 'h3', text: 'Building Corporate Partnerships' },
      {
        type: 'p',
        text: 'This demonstration represents our commitment to serving the corporate sector with innovative water solutions. We understand that modern businesses need reliable, efficient, and sustainable systems that align with their operational excellence and environmental responsibility goals.',
      },
      {
        type: 'p',
        text: 'We thank IMES Group Corporation for the opportunity to showcase GoWater technology and look forward to future collaborations that bring sustainable water solutions to workplaces across the Philippines.',
      },
    ],
  },
  {
    id: 5,
    slug: 'quezonarya-expo',
    title: 'Quezonarya Expo',
    date: 'October 17-19, 2025',
    category: 'Expo',
    description:
      'GoWater joined the Quezonarya Expo with a booth featuring our water vendo machines. Visitors tried the machines and learned how to become a GoWater partner.',
    images: gallery('Quezonarya Expo', 6),
    article: [
      { type: 'h2', text: 'Showcasing GoWater at Quezonarya Expo' },
      {
        type: 'p',
        text: 'From October 17 to 19, 2025, GoWater by NXTLVL Water Technology Inc. joined the Quezonarya Expo with a booth featuring our water vendo machines.',
      },
      {
        type: 'p',
        text: 'Visitors saw the machines up close, tried the touchscreen ordering, and talked with our team about becoming a GoWater partner.',
      },
    ],
  },
  {
    id: 6,
    slug: 'tonsuya-inauguration',
    title: 'Tonsuya Inauguration',
    date: 'November 21, 2025',
    location: 'Tonsuya, Malabon',
    category: 'Community',
    description:
      'The Rotary Club of Makati Dasmariñas donated a GoWater water vendo machine to Tonsuya Integrated School, giving students and staff access to clean, safe drinking water.',
    images: gallery('Tonsuya Inauguration', 5),
    article: [
      { type: 'h2', text: 'A Gift of Clean Water for Tonsuya Integrated School' },
      {
        type: 'p',
        text: 'On November 21, 2025, a GoWater water vendo machine was inaugurated at Tonsuya Integrated School in Malabon. The machine was donated by the Rotary Club of Makati Dasmariñas to give students, teachers, and school staff access to clean, safe drinking water.',
      },
      { type: 'h3', text: 'Donated By' },
      { type: 'list', items: ['Rotary Club of Makati Dasmariñas'] },
      {
        type: 'p',
        text: 'GoWater by NXTLVL Water Technology Inc. is proud to be part of this project, and we thank the Rotary Club of Makati Dasmariñas for bringing clean water to Tonsuya.',
      },
    ],
  },
  {
    id: 7,
    slug: 'tamuco-general-assembly',
    title: 'TAMUCO General Assembly',
    date: 'March 21, 2026',
    category: 'Community',
    description:
      'GoWater joined the TAMUCO General Assembly, where members tried our water vendo machines and learned how to become a GoWater partner.',
    images: gallery('TAMUCO General Assembly', 10),
    article: [
      { type: 'h2', text: 'GoWater at the TAMUCO General Assembly' },
      {
        type: 'p',
        text: 'On March 21, 2026, GoWater by NXTLVL Water Technology Inc. joined the TAMUCO General Assembly with our water vendo machines on display.',
      },
      {
        type: 'p',
        text: 'Members lined up to try the machines, get clean drinking water, and learn from our team how to become a GoWater partner.',
      },
    ],
  },
  {
    id: 8,
    slug: 'puro-inauguration',
    title: 'Puro Inauguration',
    date: 'April 27, 2026',
    location: 'Vigan, Ilocos Sur',
    category: 'Community',
    description:
      'Five Rotary Clubs donated a GoWater water vendo machine to Puro School and the community of Caoayan Island, bringing clean, safe drinking water to students and residents.',
    images: gallery('Puro Inauguration', 6),
    article: [
      { type: 'h2', text: 'A Gift of Clean Water for Puro' },
      {
        type: 'p',
        text: 'On April 27, 2026, a GoWater water vendo machine was inaugurated for Puro School and the community of Caoayan Island. The machine was donated by five Rotary Clubs through the Daloy Clean Water Program, bringing clean, safe drinking water to students and residents.',
      },
      { type: 'h3', text: 'Donated By' },
      {
        type: 'list',
        items: [
          'Rotary Club of Makati Dasmariñas',
          'Rotary Club of Makati Global',
          'Rotary Club of Vigan',
          'Rotary Club of Suwon Junggang',
          'Rotary Club of Parañaque Metro',
        ],
      },
      {
        type: 'p',
        text: 'GoWater by NXTLVL Water Technology Inc. is proud to be part of this project, and we thank our Rotary partners for bringing clean water to Puro.',
      },
    ],
  },
  {
    id: 9,
    slug: 'villamar-inauguration',
    title: 'Villamar Inauguration',
    date: 'April 27, 2026',
    location: 'Vigan, Ilocos Sur',
    category: 'Community',
    description:
      'The Rotary Club of Makati Dasmariñas and the Rotary Club of Makati Global donated a GoWater water vendo machine to the Villamar community, bringing clean, safe drinking water to learners and residents.',
    images: gallery('Villamar Inauguration', 7),
    article: [
      { type: 'h2', text: 'A Gift of Clean Water for Villamar' },
      {
        type: 'p',
        text: 'On April 27, 2026, a GoWater water vendo machine was inaugurated at Villamar Elementary School in Vigan. The machine was donated by the Rotary Club of Makati Dasmariñas and the Rotary Club of Makati Global through the Daloy Clean Water Program, bringing clean, safe drinking water to learners and the Villamar community.',
      },
      { type: 'h3', text: 'Donated By' },
      { type: 'list', items: ['Rotary Club of Makati Dasmariñas', 'Rotary Club of Makati Global'] },
      {
        type: 'p',
        text: 'GoWater by NXTLVL Water Technology Inc. is proud to be part of this project, and we thank our Rotary partners for bringing clean water to Villamar.',
      },
    ],
  },
];

export const eventsNewestFirst: EventItem[] = [...events].reverse();

export const getEvent = (slug: string) => events.find((event) => event.slug === slug);
