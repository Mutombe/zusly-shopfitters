/* ==========================================================================
   Zusly Shopfitters & Projects - site content
   Edit this file to change projects, services, people and company details.
   Image names are the exact file names in /assets/img/.
   ========================================================================== */

window.ZUSLY = {
  company: {
    name: "Zusly Shopfitters & Projects",
    short: "Zusly",
    tagline: "Architectural aluminium and glazing, fabricated in Harare.",
    location: "Harare, Zimbabwe",
    city: "Harare",
    phone: "+263 77 434 3254",
    whatsapp: "263715246461",      // international format, digits only
    whatsappMessage: "Hello Zusly, I would like to discuss an aluminium & glazing project.",
    email: "info@zuslyprojects.co.zw",
    address: "10 Arlington Road, Logan Park, Harare",
    hours: "Mon-Sat, 07:00-17:00",
    established: "2020",
  },

  // "How we work" - shown on the home page and every project page
  journey: [
    { img: "istock-aluminium-door.jpg",                                 title: "Consultation & Survey", text: "A site visit and measure-up. We assess structure, light and intent before a line is drawn." },
    { img: "482032362_1186614916799945_2651704115299276547_n.jpg",      title: "Design & Quotation",   text: "Detailed drawings, 3D visuals and an itemised quote. You see every line before you commit." },
    { img: "MG_8868-1024x683.jpg",                                      title: "Fabrication & QC",     text: "Every profile and panel is precision-cut in our Logan Park workshop and inspected." },
    { img: "MG_8871-1024x683.jpg",                                      title: "Installation & Handover", text: "Clean on-site fitting to millimetre accuracy, then a full walkthrough before we hand over." },
  ],

  // Client logos for the hero marquee (files in /assets/img/clients/)
  clientLogos: [
    { file: "ipec.png",         name: "Insurance & Pensions Commission" },
    { file: "old-mutual.png",   name: "Old Mutual" },
    { file: "puma.png",         name: "Puma Energy" },
    { file: "zimre.png",        name: "Zimre Holdings" },
    { file: "cbz.png",          name: "CBZ" },
    { file: "nbs.png",          name: "National Building Society" },
    { file: "fbc.png",          name: "FBC Holdings" },
    { file: "seasec.png",       name: "Seasec Security" },
    { file: "knight-frank.webp", name: "Knight Frank" },
    { file: "pearl.webp",       name: "Pearl Properties" },
    { file: "manah.png",        name: "Manah Building Construction" },
  ],

  services: [
    {
      slug: "curtain-walls", no: "01", name: "Curtain Walls & Shopfronts",
      img: "MG_8871-1024x683.jpg",
      summary: "Large-scale reflective glass facades and structural silicone glazing that command a streetscape.",
      long: "We design, fabricate and install aluminium curtain-wall systems and shopfront glazing for commercial buildings: reflective facades, structural silicone glazing, and unitised panels for multi-storey work. We also re-skin ageing facades floor by floor, so the offices behind them keep running.",
      features: ["Reflective & tinted glass", "Structural silicone glazing", "Aluminium-framed shopfronts", "Multi-storey unitised systems", "Facade renovation & retrofit"],
    },
    {
      slug: "windows-doors", no: "02", name: "Windows & Doors",
      img: "IMG_6209-1024x771.jpg",
      summary: "Casements, sliding systems and bi-fold doors that dissolve the line between inside and out.",
      long: "Aluminium window and door systems sized to the opening and glazed for the climate: casements, stacking sliders, French doors, and bi-fold runs that fold a whole wall away to the garden. Every leaf is hung on hardware rated for daily use.",
      features: ["Casement & top-hung windows", "Sliding & stacking doors", "Bi-fold & multi-fold systems", "French doors, premium hardware", "Powder-coated finishes to spec"],
    },
    {
      slug: "partitions-balustrades", no: "03", name: "Glass Partitions & Balustrades",
      img: "20250201_165511-1024x768.jpg",
      summary: "Frameless floor-to-ceiling partitions and steel-and-glass balustrades that divide a space without blocking the light.",
      long: "Floor-to-ceiling glass partitions and frameless balustrades that keep daylight moving through a room while holding back the noise. Acoustic glass is there for the rooms that need to stay quiet.",
      features: ["Frameless floor-to-ceiling partitions", "Stainless steel & glass balustrades", "Frameless doors, patch fittings", "Acoustic glass options", "Glass balcony balustrades"],
    },
    {
      slug: "cladding-fascia", no: "04", name: "Cladding & Fascia",
      img: "20241212_113455-1024x576.jpg",
      summary: "Architectural aluminium panels that add dimension, colour and weather protection to any facade.",
      long: "Architectural aluminium cladding and fascia systems that give a building a clean outer skin and shed water away from the structure. Panels are cut and colour-matched to the facade, from composite rainscreens to feature entrance walls.",
      features: ["Aluminium composite (ACP) cladding", "Fascia & soffit systems", "Feature entrance cladding", "Rainscreen & ventilated facades", "Colour-matched powder coating"],
    },
    {
      slug: "pergolas-louvres", no: "05", name: "Pergolas & Louvres",
      img: "398041177_825967209531386_4498533107683134640_n.jpg",
      summary: "Adjustable louvre pergolas and outdoor structures that extend living space under open skies.",
      long: "Aluminium louvre pergolas, outdoor structures and composite decking that extend your living and entertaining space. Adjustable louvres control sun and ventilation; powder-coated frames stand up to the climate year after year.",
      features: ["Adjustable louvre pergolas", "Fixed & motorised louvres", "Composite decking", "Cable & glass balustrade combos", "Integrated LED lighting & drainage"],
    },
    {
      slug: "skylights-roofing", no: "06", name: "Skylights & Glass Roofing",
      img: "480728001_1186615213466582_21083941017618833_n_2.jpg",
      summary: "Pyramidal skylights and overhead glazing that flood interiors with dramatic natural light.",
      long: "Glass roof structures and skylight systems that drop daylight into the middle of a plan, from pyramidal frames to flat roof panels. Every unit is tempered or laminated glass, sealed against the rains.",
      features: ["Pyramidal & ridged skylights", "Flat glass roof panels", "Structural overhead framing", "Tempered & laminated safety glass", "Weather sealing & drainage"],
    },
  ],

  projects: [
    {
      slug: "ipec-hq", no: "01", name: "Insurance & Pensions Commission HQ",
      cat: "Curtain Walls", status: "Featured", year: "2024", location: "Harare CBD",
      img: "MG_8871-1024x683.jpg",
      summary: "A full curtain-wall renovation of the IPEC headquarters. We re-skinned the building in reflective aluminium-framed glass, lifting both its street presence and its thermal performance at a landmark Harare address.",
      scope: ["Curtain-wall glazing", "Aluminium framing", "Weather sealing", "Facade renovation"],
      gallery: ["MG_8871-1024x683.jpg", "MG_8873-1024x683.jpg", "MG_8881-1024x683.jpg"],
    },
    {
      slug: "pyramidal-skylight", no: "02", name: "Pyramidal Glass Skylight",
      cat: "Skylights", status: "Featured", year: "2025", location: "Harare",
      img: "480728001_1186615213466582_21083941017618833_n_2.jpg",
      summary: "A pyramidal glass skylight with geometric aluminium framing engineered to carry its own weight and the wind load while dropping daylight straight into the room below.",
      scope: ["Pyramidal skylight", "Geometric framing", "Tempered glass", "Weather sealing"],
      gallery: ["480728001_1186615213466582_21083941017618833_n_2.jpg", "482032362_1186614916799945_2651704115299276547_n.jpg", "480965518_1186614750133295_8086987462558294921_n-1.jpg"],
    },
    {
      slug: "pool-deck-pergola", no: "03", name: "Pool Deck Louvre Pergola",
      cat: "Pergolas & Louvres", status: "Completed", year: "2023", location: "Harare",
      img: "398041177_825967209531386_4498533107683134640_n.jpg",
      summary: "A white aluminium louvre pergola spanning a pool deck, complemented by composite decking. Adjustable louvres let the homeowner control sun and ventilation across every season.",
      scope: ["Louvre pergola", "Composite decking", "Adjustable louvres", "Integrated lighting"],
      gallery: ["398041177_825967209531386_4498533107683134640_n.jpg", "398048494_826007772860663_1710241476574545408_n.jpg", "WhatsApp-Image-2025-03-21-at-3.57.47-PM-1.jpeg"],
    },
    {
      slug: "dark-reflective-residence", no: "04", name: "Dark Reflective Residence",
      cat: "Windows & Doors", status: "Featured", year: "2025", location: "Harare",
      img: "20250224_170625-1024x768.jpg",
      summary: "A striking modern home wrapped in full-height dark reflective glass set in slim aluminium frames. The glazing holds clean, uninterrupted sight lines across every elevation.",
      scope: ["Dark reflective glass", "Full-height panels", "Aluminium framing", "Structural glazing"],
      gallery: ["20250224_170625-1024x768.jpg", "20250224_170743-1024x768.jpg", "20250224_170854-1024x768.jpg"],
    },
    {
      slug: "cladding-entrance", no: "05", name: "Cladding Feature Entrance",
      cat: "Cladding & Fascia", status: "Completed", year: "2024", location: "Harare",
      img: "20241212_113315-576x1024.jpg",
      summary: "A residential entrance defined by a dark aluminium cladding tower and glass. The vertical feature gives the house a clear front door and a modern face to the street.",
      scope: ["Aluminium cladding tower", "Glass integration", "Entrance feature", "Dark finish"],
      gallery: ["20241212_113315-576x1024.jpg", "20241212_113455-1024x576.jpg", "20241212_115238-576x1024.jpg"],
    },
    {
      slug: "curtain-wall-shopfront", no: "06", name: "Reflective Curtain Wall Shopfront",
      cat: "Curtain Walls", status: "Completed", year: "2024", location: "Harare",
      img: "MG_8873-1024x683.jpg",
      summary: "A large-scale reflective curtain wall on a commercial shopfront. Floor-to-ceiling glass on aluminium mullions pulls daylight inside while the tint holds back the afternoon heat.",
      scope: ["Reflective glazing", "Aluminium mullions", "Shopfront system", "Solar control"],
      gallery: ["MG_8873-1024x683.jpg", "MG_8868-1024x683.jpg", "MG_8881-1024x683.jpg"],
    },
    {
      slug: "folding-doors-residence", no: "07", name: "Luxury Residence Folding Doors",
      cat: "Windows & Doors", status: "Completed", year: "2024", location: "Harare North",
      img: "IMG_6209-1024x771.jpg",
      summary: "Black aluminium folding doors that stack back and open a living room straight onto the garden, gliding on a low-friction track so the whole wall moves with one hand.",
      scope: ["Bi-fold doors", "Black powder coating", "Track system", "Hardware installation"],
      gallery: ["IMG_6209-1024x771.jpg", "IMG-20240504-WA0065-1024x768.jpg", "IMG-20240504-WA0073-1024x768.jpg"],
    },
    {
      slug: "glass-partition-office", no: "08", name: "Corporate Glass Partitions",
      cat: "Glass Partitions", status: "Completed", year: "2025", location: "Harare",
      img: "20250201_165511-1024x768.jpg",
      summary: "Floor-to-ceiling frameless glass partitions in a modern office. They mark out meeting rooms and quiet zones while letting daylight reach across the whole floor plate.",
      scope: ["Frameless partitions", "Floor-to-ceiling install", "Hardware fittings", "Acoustic sealing"],
      gallery: ["20250201_165511-1024x768.jpg", "20250201_170520-1024x768.jpg", "20250201_182842-1024x768.jpg"],
    },
    {
      slug: "cable-balustrade-deck", no: "09", name: "Composite Deck & Cable Balustrade",
      cat: "Decking", status: "Completed", year: "2025", location: "Harare",
      img: "WhatsApp-Image-2025-04-09-at-8.02.08-PM.jpeg",
      summary: "Composite decking with a stainless cable balustrade at a commercial property. The hardware is marine-grade, specified for constant foot traffic and years of weather.",
      scope: ["Composite decking", "Cable balustrade", "Stainless posts", "Durability engineering"],
      gallery: ["WhatsApp-Image-2025-04-09-at-8.02.08-PM.jpeg", "WhatsApp-Image-2025-04-09-at-8.02.09-PM-1-1024x767.jpeg", "WhatsApp-Image-2025-04-09-at-8.02.12-PM.jpeg"],
    },
    {
      slug: "garage-doors", no: "10", name: "Modern Garage Doors with Glass",
      cat: "Windows & Doors", status: "Completed", year: "2024", location: "Harare",
      img: "436305841_959261962868576_399061018664639223_n.jpg",
      summary: "Aluminium sectional garage doors with frosted glass inserts. Clean horizontal lines and quiet automated operation lift the kerb appeal of the whole property.",
      scope: ["Sectional garage doors", "Glass panel inserts", "Automated motors", "Triple installation"],
      gallery: ["436305841_959261962868576_399061018664639223_n.jpg", "434582689_931913305603442_5044669846016545401_n.jpg", "5929032847404942442_121-576x1024.jpg"],
    },
    {
      slug: "privacy-screen", no: "11", name: "Aluminium Vertical Slat Screen",
      cat: "Cladding & Fascia", status: "Completed", year: "2025", location: "Harare",
      img: "7669f7bb1637b33d4edcd8cbca73df01-1024x768.jpg",
      summary: "A dark aluminium vertical-slat privacy screen that blocks sightlines but lets air move through. Its even rhythm gives a plain boundary wall some contemporary character.",
      scope: ["Vertical slat screen", "Privacy screening", "Air circulation", "Geometric design"],
      gallery: ["7669f7bb1637b33d4edcd8cbca73df01-1024x768.jpg"],
    },
    {
      slug: "residential-complex", no: "12", name: "Modern Residential Complex",
      cat: "Windows & Doors", status: "Completed", year: "2025", location: "Harare",
      img: "20250201_182842-1024x768.jpg",
      summary: "A residential complex wrapped in aluminium-framed glass walls with grey cladding accents. Full-height glazing ties the living spaces to the gardens outside.",
      scope: ["Full-height glazing", "Grey cladding", "Residential complex", "Landscape integration"],
      gallery: ["20250201_182842-1024x768.jpg", "20250201_182924-1024x768.jpg"],
    },
  ],

  leadership: [
    { no: "01", icon: "crown",     role: "Founder & Director",   desc: "Sets the vision, values and quality standards that define every Zusly project." },
    { no: "02", icon: "chart",     role: "Managing Director",    desc: "Drives day-to-day operations, growth and overall company performance." },
    { no: "03", icon: "hardhat",   role: "Projects Manager",     desc: "Owns delivery from site survey through to final handover." },
    { no: "04", icon: "people",    role: "Heads of Department",  desc: "Lead fabrication, installation and design teams to exacting standards." },
    { no: "05", icon: "handshake", role: "Human Resources",      desc: "Recruits, develops and supports the skilled people behind the work." },
    { no: "06", icon: "calc",      role: "Accountant",           desc: "Manages finances, costing and transparent quotations for every client." },
  ],

  values: [
    { label: "01 / Precision", title: "Measured to the millimetre", desc: "We check every survey, cut and fixing twice, because a facade that sits three millimetres out is a facade that leaks." },
    { label: "02 / In-house",  title: "Fabricated under one roof",  desc: "Profiles and panels are cut and assembled in our Logan Park workshop, so quality is controlled end to end." },
    { label: "03 / Delivered", title: "One team, start to finish",  desc: "A single accountable team carries each project from first drawing to the final walkthrough." },
  ],

  stats: [
    { value: "150+",  label: "Projects delivered" },
    { value: "5",     label: "Years, in-house" },
    { value: "100%",  label: "Client satisfaction" },
    { value: "25+",   label: "Skilled fabricators" },
  ],

  story: [
    "Zusly Shopfitters & Projects was founded in 2020 with a single ambition: to fabricate architectural aluminium and glazing in Zimbabwe to the standard of imported work. From a focused workshop on Arlington Road in Logan Park, our founder assembled a team obsessed with getting every millimetre right.",
    "In five years we have grown from fitting residential windows to delivering landmark commercial work, including the full curtain-wall renovation of the Insurance & Pensions Commission headquarters. That came from steady investment in our people and our equipment, and from a refusal to cut corners.",
    "Today we work across the whole range of aluminium and glass, from commercial facades to garden pergolas. We stay owner-managed and quality-driven, and we still answer to the standard we set on day one.",
  ],

  clients: [
    "Insurance & Pensions Commission",
    "Seasec Security",
    "Manna Construction",
    "Puma Energy",
    "Old Mutual",
    "CBZ Holdings",
    "Zimre Holdings",
    "National Building Society",
    "Knight Frank",
    "FBC Holdings",
    "Pearl Properties",
  ],

  testimonials: [
    { quote: "The reflective glass facade completely transformed the building's presence on the street. Flawless execution, and they finished ahead of schedule.", name: "Tapiwa Mushore", role: "Property Developer, Borrowdale" },
    { quote: "They read our architect's drawings and turned them into aluminium that fit first time. The glass skylight is the best fabrication we have seen locally.", name: "Wellington Mapfumo", role: "Architect, Harare" },
    { quote: "The doors glide beautifully and the finish is impeccable. Our home feels twice as spacious now with the indoor-outdoor flow.", name: "Rumbidzai Chari", role: "Homeowner, Mount Pleasant" },
  ],

  // Live Google rating (Zusly Projects, Google Business Profile)
  google: {
    rating: 5.0,
    count: 6,
    url: "https://www.google.com/maps/place/?q=place_id:ChIJafyxhJujMRkRSRF2SKAiJoo",
  },

  // Real reviews pulled from the Google listing (avatars cached locally)
  reviews: [
    { name: "Brighton Mutwira",      avatar: "brighton-mutwira.png",      rating: 5, date: "Apr 2026", meta: "Local Guide · 334 reviews", text: "A place to get unique and quality workmanship." },
    { name: "Sylvester Zuma Thomas", avatar: "sylvester-zuma-thomas.png", rating: 5, date: "Sep 2022", meta: "7 reviews",                 text: "Proud to be associated with them." },
    { name: "Chikuhwa Tinei Tinaye", avatar: "chikuhwa-tinei-tinaye.png", rating: 5, date: "Oct 2025", meta: "Google review",             text: "🔥🔥" },
    { name: "Basil Dapi",            avatar: "basil-dapi.png",            rating: 5, date: "Mar 2026", meta: "Google review",             text: "🇿🇼" },
    { name: "Tinashe Munashe Gondo", avatar: "tinashe-munashe-gondo.png", rating: 5, date: "Mar 2026", meta: "Local Guide",               text: "" },
    { name: "Sydney Mamvura",        avatar: "sydney-mamvura.png",        rating: 5, date: "Sep 2025", meta: "Google review",             text: "" },
  ],
};
