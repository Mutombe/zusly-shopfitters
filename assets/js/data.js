/* ==========================================================================
   Zusly Projects - site content
   Edit this file to change projects, services, people and company details.
   Image names are the exact file names in /assets/img/.
   ========================================================================== */

window.ZUSLY = {
  company: {
    name: "Zusly Projects",
    short: "Zusly",
    tagline: "Design & Build. Structural steel, aluminium and glazing, engineered in Harare.",
    driver: "Design & Build",
    location: "Harare, Zimbabwe",
    city: "Harare",
    phone: "+263 71 524 6461",
    phoneDigits: "263715246461",
    whatsapp: "263715246461",      // international format, digits only
    whatsappMessage: "Hello Zusly, I would like to discuss a design & build project.",
    email: "info@zuslyprojects.co.zw",
    hr: {
      email: "hr@zuslyprojects.co.zw",
      phone: "+263 78 382 1116",
      whatsapp: "263783821116",
    },
    address: "10 Arlington Road, Logan Park, Harare",
    hours: "Mon-Sat, 07:00-17:00",
    established: "2018",
    establishedFull: "18 July 2018",
    years: "8",
  },

  // Social media — paste each profile URL. Empty entries are hidden on the site.
  // Supported networks (icon chosen automatically): facebook, instagram,
  // linkedin, x, youtube, tiktok, whatsapp.
  social: [
    { net: "facebook",  url: "" },
    { net: "instagram", url: "" },
    { net: "linkedin",  url: "" },
    { net: "x",         url: "" },
    { net: "youtube",   url: "" },
  ],

  // Cross-link registry — one source of truth for in-text hyperlinks.
  // keyword (lower-case) -> { to | href, label, category, desc }.
  //   to    = internal path (same-site navigation)
  //   href  = external URL (opens in a new tab after a confirm)
  // Synonyms may point to the same target. autoLink() handles casing,
  // word boundaries, longest-match-first, one-link-per-keyword and a cap.
  crossLinks: {
    "steel structures":        { to: "services.html#steel-structures", label: "Steel Structures", category: "service", desc: "Portal-frame warehouses, sheds and industrial steel." },
    "steel sheds":             { to: "services.html#steel-structures", label: "Steel Sheds", category: "service" },
    "sheds and warehouses":    { to: "services.html#steel-structures", label: "Sheds & Warehouses", category: "service" },
    "warehouses":              { to: "services.html#steel-structures", label: "Warehouses", category: "service" },
    "warehouse":               { to: "services.html#steel-structures", label: "Warehouse", category: "service" },
    "curtain walls":           { to: "projects.html?cat=Curtain+Walls", label: "Curtain Walls", category: "service", desc: "Structural glass facades on aluminium framing." },
    "curtain wall":            { to: "projects.html?cat=Curtain+Walls", label: "Curtain Wall", category: "service" },
    "windows and doors":       { to: "projects.html?cat=Windows+%26+Doors", label: "Windows & Doors", category: "service" },
    "cladding":                { to: "projects.html?cat=Cladding+%26+Fascia", label: "Cladding", category: "service" },
    "skylights":               { to: "projects.html?cat=Skylights", label: "Skylights", category: "service" },
    "pergolas":                { to: "projects.html?cat=Pergolas+%26+Louvres", label: "Pergolas", category: "service" },
    "balustrades":             { to: "projects.html?cat=Glass+Partitions", label: "Balustrades", category: "service" },
    "glass partitions":        { to: "projects.html?cat=Glass+Partitions", label: "Glass Partitions", category: "service" },
    "architectural glazing":   { to: "services.html", label: "Architectural Glazing", category: "service" },
    "glazing":                 { to: "services.html", label: "Glazing", category: "service" },
    "aluminium":               { to: "services.html", label: "Aluminium", category: "service" },
    "design and build":        { to: "services.html", label: "Design & Build", category: "service" },
    "design-and-build":        { to: "services.html", label: "Design & Build", category: "service" },
    "design & build":          { to: "services.html", label: "Design & Build", category: "service" },
    "quantity surveyors":      { to: "careers.html", label: "Quantity Surveyors", category: "team" },
    "estimators":              { to: "careers.html", label: "Estimators", category: "team" },
    "careers":                 { to: "careers.html", label: "Careers", category: "page" },
    "vacancies":               { to: "careers.html", label: "Vacancies", category: "page" },
    "site survey":             { to: "contact.html", label: "Site Survey", category: "page" },
    "request a quote":         { to: "contact.html", label: "Request a Quote", category: "page" },
    "ipec":                    { href: "https://www.ipec.co.zw", label: "IPEC", category: "external", desc: "Insurance & Pensions Commission of Zimbabwe." },
    "harare":                  { href: "https://en.wikipedia.org/wiki/Harare", label: "Harare", category: "external", desc: "Capital city of Zimbabwe." },
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
      slug: "steel-structures", no: "01", name: "Steel Structures, Sheds & Warehouses",
      img: "MG_8868-1024x683.jpg",
      summary: "Large-span steel sheds, warehouses and industrial structures, designed and built for structural integrity and long working life.",
      long: "We design and build large steel structures end to end: portal-frame warehouses, industrial sheds, canopies and mezzanines. Our in-house Engineers size every member for the load and the span, our workshop fabricates to tolerance, and our teams erect and clad on site. The result is a watertight, code-compliant structure built for decades of use.",
      features: ["Portal-frame warehouses & sheds", "Structural steel design & analysis", "Roof & wall cladding, guttering", "Mezzanines, canopies & walkways", "Design-and-build, survey to handover"],
    },
    {
      slug: "curtain-walls", no: "02", name: "Curtain Walls & Shopfronts",
      img: "MG_8871-1024x683.jpg",
      summary: "Large-scale reflective glass facades and structural silicone glazing that command a streetscape.",
      long: "We design, fabricate and install aluminium curtain-wall systems and shopfront glazing for commercial buildings: reflective facades, structural silicone glazing, and unitised panels for multi-storey work. We also re-skin ageing facades floor by floor, so the offices behind them keep running.",
      features: ["Reflective & tinted glass", "Structural silicone glazing", "Aluminium-framed shopfronts", "Multi-storey unitised systems", "Facade renovation & retrofit"],
    },
    {
      slug: "windows-doors", no: "03", name: "Windows & Doors",
      img: "IMG_6209-1024x771.jpg",
      summary: "Casements, sliding systems and bi-fold doors that dissolve the line between inside and out.",
      long: "Aluminium window and door systems sized to the opening and glazed for the climate: casements, stacking sliders, French doors, and bi-fold runs that fold a whole wall away to the garden. Every leaf is hung on hardware rated for daily use.",
      features: ["Casement & top-hung windows", "Sliding & stacking doors", "Bi-fold & multi-fold systems", "French doors, premium hardware", "Powder-coated finishes to spec"],
    },
    {
      slug: "partitions-balustrades", no: "04", name: "Glass Partitions & Balustrades",
      img: "20250201_165511-1024x768.jpg",
      summary: "Frameless floor-to-ceiling partitions and steel-and-glass balustrades that divide a space without blocking the light.",
      long: "Floor-to-ceiling glass partitions and frameless balustrades that keep daylight moving through a room while holding back the noise. Acoustic glass is there for the rooms that need to stay quiet.",
      features: ["Frameless floor-to-ceiling partitions", "Stainless steel & glass balustrades", "Frameless doors, patch fittings", "Acoustic glass options", "Glass balcony balustrades"],
    },
    {
      slug: "cladding-fascia", no: "05", name: "Cladding & Fascia",
      img: "20241212_113455-1024x576.jpg",
      summary: "Architectural aluminium panels that add dimension, colour and weather protection to any facade.",
      long: "Architectural aluminium cladding and fascia systems that give a building a clean outer skin and shed water away from the structure. Panels are cut and colour-matched to the facade, from composite rainscreens to feature entrance walls.",
      features: ["Aluminium composite (ACP) cladding", "Fascia & soffit systems", "Feature entrance cladding", "Rainscreen & ventilated facades", "Colour-matched powder coating"],
    },
    {
      slug: "pergolas-louvres", no: "06", name: "Pergolas & Louvres",
      img: "398041177_825967209531386_4498533107683134640_n.jpg",
      summary: "Adjustable louvre pergolas and outdoor structures that extend living space under open skies.",
      long: "Aluminium louvre pergolas, outdoor structures and composite decking that extend your living and entertaining space. Adjustable louvres control sun and ventilation; powder-coated frames stand up to the climate year after year.",
      features: ["Adjustable louvre pergolas", "Fixed & motorised louvres", "Composite decking", "Cable & glass balustrade combos", "Integrated LED lighting & drainage"],
    },
    {
      slug: "skylights-roofing", no: "07", name: "Skylights & Glass Roofing",
      img: "480728001_1186615213466582_21083941017618833_n_2.jpg",
      summary: "Pyramidal skylights and overhead glazing that flood interiors with dramatic natural light.",
      long: "Glass roof structures and skylight systems that drop daylight into the middle of a plan, from pyramidal frames to flat roof panels. Every unit is tempered or laminated glass, sealed against the rains.",
      features: ["Pyramidal & ridged skylights", "Flat glass roof panels", "Structural overhead framing", "Tempered & laminated safety glass", "Weather sealing & drainage"],
    },
  ],

  projects: [
    {
      slug: "composite-clad-residence", no: "01", name: "Composite-Clad Modern Residence",
      cat: "Cladding & Fascia", status: "Featured", year: "2025", location: "Harare",
      img: "clad-residence-01.jpg",
      summary: "A modern home wrapped in dark composite aluminium cladding and glass, engineered and installed end to end by Zusly. The cantilevered canopy and crisp, shadow-gapped panel lines give the house a bold, contemporary face against the Harare sky.",
      scope: ["Aluminium composite cladding", "Cantilever canopy", "Structural glazing", "Shadow-line panel detailing"],
      gallery: ["clad-residence-01.jpg", "clad-cantilever.jpg", "clad-facade.jpg", "clad-box.jpg", "clad-entrance.jpg", "clad-install.jpg"],
    },
    {
      slug: "ipec-hq", no: "02", name: "Insurance & Pensions Commission HQ",
      cat: "Curtain Walls", status: "Featured", year: "2024", location: "Harare CBD",
      img: "MG_8871-1024x683.jpg",
      summary: "A full curtain-wall renovation of the IPEC headquarters. We re-skinned the building in reflective aluminium-framed glass, lifting both its street presence and its thermal performance at a landmark Harare address.",
      scope: ["Curtain-wall glazing", "Aluminium framing", "Weather sealing", "Facade renovation"],
      gallery: ["MG_8871-1024x683.jpg", "MG_8873-1024x683.jpg", "MG_8881-1024x683.jpg"],
    },
    {
      slug: "folding-doors-residence", no: "03", name: "Veranda Stacking Glass Doors",
      cat: "Windows & Doors", status: "Featured", year: "2025", location: "Harare North",
      img: "stacking-doors-01.jpg",
      summary: "Full-height aluminium stacking doors that fold back and open a living space straight onto a timber-ceilinged veranda and garden. Gliding on a slim, low-friction track, the whole glazed wall moves aside with one hand.",
      scope: ["Aluminium stacking doors", "Black powder coating", "Low-friction track", "Hardware installation"],
      gallery: ["stacking-doors-01.jpg", "stacking-doors-02.jpg", "stacking-doors-03.jpg", "stacking-doors-04.jpg"],
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
      slug: "pivot-entrance-door", no: "05", name: "Timber & Glass Pivot Entrance",
      cat: "Windows & Doors", status: "Featured", year: "2025", location: "Harare",
      img: "pivot-door-01.jpg",
      summary: "A statement pivot entrance pairing a live-edge timber-finish leaf with a slim aluminium frame. Balanced on a concealed pivot, a tall, heavy door swings open at the touch of a hand and anchors the whole hallway.",
      scope: ["Pivot door system", "Concealed pivot hinge", "Aluminium frame", "Feature entrance"],
      gallery: ["pivot-door-01.jpg", "pivot-door-02.jpg", "pivot-door-03.jpg", "pivot-door-04.jpg", "barn-door-marble.jpg", "barn-door-living.jpg"],
    },
    {
      slug: "aluminium-driveway-gate", no: "06", name: "Aluminium Driveway Gate",
      cat: "Gates & Screens", status: "Featured", year: "2025", location: "Harare",
      img: "driveway-gate-01.jpg",
      summary: "A dark aluminium vertical-slat driveway gate set between stone-clad pillars. The even slat rhythm screens the property and lets air move through, while a sliding mechanism handles daily use quietly and reliably.",
      scope: ["Vertical-slat gate", "Sliding mechanism", "Stone-pillar integration", "Privacy screening"],
      gallery: ["driveway-gate-01.jpg", "driveway-gate-02.jpg", "driveway-gate-03.jpg", "driveway-gate-04.jpg"],
    },
    {
      slug: "frameless-glass-showers", no: "07", name: "Frameless Glass Shower Enclosures",
      cat: "Frameless Showers", status: "Completed", year: "2025", location: "Harare",
      img: "frameless-shower-01.jpg",
      summary: "Frameless toughened-glass shower enclosures fitted to the millimetre against tile and stone. Minimal hardware and clean silicone lines keep the bathroom bright, open and easy to clean.",
      scope: ["Frameless toughened glass", "Precision hardware", "Hinged & fixed panels", "Wet-seal detailing"],
      gallery: ["frameless-shower-01.jpg", "frameless-shower-02.jpg", "frameless-shower-03.jpg"],
    },
    {
      slug: "pyramidal-skylight", no: "08", name: "Pyramidal Glass Skylight",
      cat: "Skylights", status: "Completed", year: "2025", location: "Harare",
      img: "480728001_1186615213466582_21083941017618833_n_2.jpg",
      summary: "A pyramidal glass skylight with geometric aluminium framing engineered to carry its own weight and the wind load while dropping daylight straight into the room below.",
      scope: ["Pyramidal skylight", "Geometric framing", "Tempered glass", "Weather sealing"],
      gallery: ["480728001_1186615213466582_21083941017618833_n_2.jpg", "482032362_1186614916799945_2651704115299276547_n.jpg", "480965518_1186614750133295_8086987462558294921_n-1.jpg"],
    },
    {
      slug: "curtain-wall-shopfront", no: "09", name: "Reflective Curtain Wall Shopfront",
      cat: "Curtain Walls", status: "Completed", year: "2024", location: "Harare",
      img: "MG_8873-1024x683.jpg",
      summary: "A large-scale reflective curtain wall on a commercial shopfront. Floor-to-ceiling glass on aluminium mullions pulls daylight inside while the tint holds back the afternoon heat.",
      scope: ["Reflective glazing", "Aluminium mullions", "Shopfront system", "Solar control"],
      gallery: ["MG_8873-1024x683.jpg", "MG_8868-1024x683.jpg", "MG_8881-1024x683.jpg"],
    },
    {
      slug: "garage-doors", no: "10", name: "Modern Garage Doors with Glass",
      cat: "Windows & Doors", status: "Completed", year: "2024", location: "Harare",
      img: "garage-door-01.jpg",
      summary: "Aluminium garage doors with dark reflective glass panels on a modern plastered home. Clean horizontal sight lines and quiet automated operation lift the whole street elevation.",
      scope: ["Aluminium garage doors", "Reflective glass panels", "Automated operation", "Street elevation"],
      gallery: ["garage-door-01.jpg", "garage-door-02.jpg", "garage-door-03.jpg"],
    },
    {
      slug: "pool-deck-pergola", no: "11", name: "Pool Deck Louvre Pergola",
      cat: "Pergolas & Louvres", status: "Completed", year: "2023", location: "Harare",
      img: "398041177_825967209531386_4498533107683134640_n.jpg",
      summary: "A white aluminium louvre pergola spanning a pool deck, complemented by composite decking. Adjustable louvres let the homeowner control sun and ventilation across every season.",
      scope: ["Louvre pergola", "Composite decking", "Adjustable louvres", "Integrated lighting"],
      gallery: ["398041177_825967209531386_4498533107683134640_n.jpg", "398048494_826007772860663_1710241476574545408_n.jpg", "WhatsApp-Image-2025-03-21-at-3.57.47-PM-1.jpeg"],
    },
    {
      slug: "glass-partition-office", no: "12", name: "Corporate Glass Partitions",
      cat: "Glass Partitions", status: "Completed", year: "2025", location: "Harare",
      img: "20250201_165511-1024x768.jpg",
      summary: "Floor-to-ceiling frameless glass partitions in a modern office. They mark out meeting rooms and quiet zones while letting daylight reach across the whole floor plate.",
      scope: ["Frameless partitions", "Floor-to-ceiling install", "Hardware fittings", "Acoustic sealing"],
      gallery: ["20250201_165511-1024x768.jpg", "20250201_170520-1024x768.jpg", "20250201_182842-1024x768.jpg"],
    },
    {
      slug: "cable-balustrade-deck", no: "13", name: "Composite Deck & Cable Balustrade",
      cat: "Decking", status: "Completed", year: "2025", location: "Harare",
      img: "WhatsApp-Image-2025-04-09-at-8.02.08-PM.jpeg",
      summary: "Composite decking with a stainless cable balustrade at a commercial property. The hardware is marine-grade, specified for constant foot traffic and years of weather.",
      scope: ["Composite decking", "Cable balustrade", "Stainless posts", "Durability engineering"],
      gallery: ["WhatsApp-Image-2025-04-09-at-8.02.08-PM.jpeg", "WhatsApp-Image-2025-04-09-at-8.02.09-PM-1-1024x767.jpeg", "WhatsApp-Image-2025-04-09-at-8.02.12-PM.jpeg"],
    },
    {
      slug: "residential-complex", no: "14", name: "Modern Residential Complex",
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

  // Careers — edit this list to change open roles shown on careers.html
  vacancies: [
    { role: "Structural Steel Fabricator",   type: "Full-time", location: "Logan Park, Harare", summary: "Cut, fit and weld structural steel for sheds, warehouses and canopies to fabrication drawings." },
    { role: "Site Installer / Rigger",        type: "Full-time", location: "Site-based, Harare", summary: "Erect steel frames and install glazing and cladding on site, safely and to tolerance." },
    { role: "Aluminium & Glazing Fabricator", type: "Full-time", location: "Logan Park, Harare", summary: "Fabricate windows, doors, curtain walls and balustrades from aluminium profiles and glass." },
    { role: "Quantity Surveyor",              type: "Full-time", location: "Harare",             summary: "Measure, cost and value design-and-build work; prepare BoQs and transparent client quotations." },
    { role: "Project Estimator",              type: "Full-time", location: "Harare",             summary: "Price enquiries from drawings, size materials and labour, and turn tenders around quickly." },
  ],

  stats: [
    { value: "150+",  label: "Projects delivered" },
    { value: "8",     label: "Years in service" },
    { value: "100%",  label: "Client satisfaction" },
    { value: "25+",   label: "Skilled fabricators" },
  ],

  story: [
    "Zusly Projects was founded on 18 July 2018 with a single ambition: to design and build to the standard of imported work, here in Zimbabwe. From a workshop on Arlington Road in Logan Park, our founder assembled a team obsessed with getting every millimetre right.",
    "In eight years we have grown from fitting residential windows to delivering landmark design-and-build work, including the full curtain-wall renovation of the Insurance & Pensions Commission headquarters and large steel sheds and warehouses. That came from steady investment in our people and our equipment, and from a refusal to cut corners.",
    "Today we carry projects end to end, from structural design through fabrication to installation. With in-house Architects, Engineers, Quantity Surveyors and Estimators under one roof, we stay owner-managed and quality-driven, and we still answer to the standard we set on day one.",
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
