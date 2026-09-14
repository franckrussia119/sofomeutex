import { CommodityItem, CarouselSlide, ShippingLane, ClientProfile, TeamMember, PartnerOrg, Language } from '../types';

export const HERO_SLIDES: CarouselSlide[] = [
  {
    id: 'slide-double-a',
    pillar: 'Double A Paper (Cameroon Exclusive)',
    title: 'Double A Premium 80 GSM Copy Paper',
    subtitle: 'Exclusive Authorized Importation & Distribution in Cameroon',
    origin: 'Chachoengsao, Thailand (Laem Chabang Port)',
    destination: 'Port of Douala & Yaoundé, Cameroon',
    image: '/assets/images/double_a_reams_1789399160563.jpg',
    tag: 'Cameroon Exclusivity',
    description: 'Direct institutional supply of world-renowned Double A 80 GSM and 75 GSM paper. Engineered from farmed trees with zero-jam precision, CIE 165 ultra-whiteness, and multi-machine runnability across Cameroon and the CEMAC zone.',
    keyMetric: '8,000+ Reams / 40ft HC',
    metricLabel: 'Standard Container Payload'
  },
  {
    id: 'slide-popcorn',
    pillar: 'Argentine Gourmet Popcorn',
    title: 'Argentine Butterfly & Mushroom Popcorn',
    subtitle: 'Direct Agro-Corridor from Córdoba & Santa Fe Grain Belts',
    origin: 'Buenos Aires & Rosario, Argentina',
    destination: 'Port of Douala Hub, Cameroon',
    image: '/assets/images/popcorn_corn_kernels.jpg',
    tag: 'Premium Non-GMO Crop',
    description: 'Export-grade Argentine popcorn kernels featuring an expansion ratio of 42–44+ for airy butterfly puffs and uniform spherical mushroom kernels for caramel coating. 99.8% purity guaranteed with phytosanitary inspection.',
    keyMetric: '44+ Expansion Ratio',
    metricLabel: 'High-Yield Commercial Grade'
  },
  {
    id: 'slide-used-clothes',
    pillar: 'European Used Apparel & Footwear',
    title: 'European Sorted Apparel & Paired Footwear',
    subtitle: 'Cream & Grade A Original Bales from Western Europe',
    origin: 'Antwerp, Rotterdam & Hamburg (UK, DE, NL, IT, FR)',
    destination: 'Port of Douala, Central Africa Distribution',
    image: '/assets/images/dresses_bales_1789399175918.jpg',
    tag: 'Top-Tier European Sorting',
    description: 'Rigidly curated second-hand clothing bales and paired footwear sourced from certified collection centers in Germany, the UK, the Netherlands, Italy, and France. Compact hydraulic 45kg/55kg bales and paired shoe sacks.',
    keyMetric: '550+ Bales / 40ft HC',
    metricLabel: 'Optimal Density Stuffing'
  },
  {
    id: 'slide-plaster',
    pillar: 'High-Grade Industrial Plaster',
    title: 'Ultra-Pure Gypsum & Construction Plaster',
    subtitle: 'High-Strength Architectural Moulding & Medical Plaster',
    origin: 'Mediterranean Industrial Basin (Valencia / Marseille)',
    destination: 'Port of Douala Bulk Cargo Depot',
    image: '/assets/images/plaster_ceiling_room.jpg',
    tag: 'Industrial Grade Purity',
    description: 'High-whiteness, quick-setting calcined gypsum plaster formulated for architectural decorative moulding, smooth wall skimming, and orthopedic casting. Controlled setting time, flawless surface finish, and moisture barrier valve bags.',
    keyMetric: '27 Metric Tons / 20ft FCL',
    metricLabel: 'Palletized Heavy Payload'
  },
  {
    id: 'slide-appliances',
    pillar: 'Home Refrigeration & Appliances',
    title: 'Household & Commercial Refrigerators',
    subtitle: 'Direct Factory-Gate Sourcing of Fridges, Freezers & Combo Units',
    origin: 'Guangzhou & Foshan Industrial Belt, China',
    destination: 'Port of Douala, Cameroon (Retail & Wholesale Distribution)',
    image: '/assets/images/fridge_double_door.jpg',
    tag: 'Factory-Direct Appliances',
    description: 'Full-container loads of single-door mini fridges, double-door combo refrigerators, and chest freezers, sourced directly from certified manufacturers with CE/CCC compliance and voltage configurations tailored for the Central African grid.',
    keyMetric: '600+ Units / 40ft HC',
    metricLabel: 'Mixed-Model Container Loading'
  }
];

export const COMMODITY_ITEMS: CommodityItem[] = [
  {
    id: 'prod-double-a',
    name: 'Double A 80 GSM / 75 GSM High-Performance A4 Paper',
    pillar: 'Double A Paper (Cameroon Exclusive)',
    categoryTag: 'Paper & Stationery',
    origin: 'Thailand (Double A Mill, Chachoengsao)',
    destination: 'Cameroon (Douala, Yaoundé & CEMAC Region)',
    exclusiveStatus: 'Sole Authorized Importer in Cameroon',
    specs: [
      'Weight: 80 GSM & 75 GSM High Caliper',
      'Whiteness: CIE 165 (Super High Contrast)',
      'Opacity: 95% minimum for two-sided copying',
      'Moisture: 3.5% - 4.5% (Non-curling tropical formula)',
      'Smoothness: 200/220 Bendtsen (Zero Jamming)'
    ],
    containerCapacity: '8,000 Reams / 1,600 Boxes per 40ft High Cube Container (Palletized/Floor Load)',
    packaging: '500 Sheets/Ream, 5 Reams/Carton Box with Moisture-Proof Outer Wrap',
    moq: '1x 40ft High Cube Container (8,000 Reams)',
    hsCode: '4802.56.00',
    incoterms: ['CIF Port of Douala', 'FOB Laem Chabang', 'DAP Inland Douala / Yaoundé'],
    certifications: ['ISO 9001:2015', 'ISO 14001', 'Farmed Trees Paper Tree (Non-deforestation)', 'SGS Weight & Count Assay'],
    gradeAssay: 'No Jam 24/7 Runnability Certified; Tested on 100ppm High-Speed Production Presses',
    image: '/assets/images/double_a_reams_1789399160563.jpg',
    gallery: [
      '/assets/images/paper_container_loading.webp',
      '/assets/images/paper_warehouse_pallets.jpg',
      '/assets/images/double_a_paper_1789399128122.jpg',
      '/assets/images/paper_double_a_boxes.avif',
      '/assets/images/paper_double_a_reams.webp'
    ],
    summary: 'The benchmark of luxury copier paper globally, imported with sovereign exclusivity directly to Cameroon. Designed to resist high-humidity tropical conditions with zero jams.',
    detailedDescription: 'Wardiere & Co. is the exclusive authorized importer of genuine Double A A4 copier paper in the Republic of Cameroon. Manufactured from sustainable Farmed Trees ("Paper Tree from KHAN-NA"), Double A fibers provide high fiber density, exceptional smoothness, and high opacity that eliminates show-through on double-sided color copying and offset printing. Specially packed in heat-sealed moisture barrier wrappers to prevent paper warping in Doualas humid maritime climate.',
    keyFeatures: [
      { label: 'Exclusivity', value: 'Exclusive Official Distribution Partner for Cameroon' },
      { label: 'Sheet Count', value: '500 Precise Laser-Cut Sheets per Ream' },
      { label: 'Brightness', value: '102% - 104% ISO Brightness' },
      { label: 'Runnability', value: 'Guaranteed 24/7 Zero Paper Jam Standard' },
      { label: 'Distribution Hubs', value: 'Bonded Logistics Warehouses in Douala (Akwa) & Yaoundé' }
    ]
  },
  {
    id: 'prod-popcorn-arg',
    name: 'Argentine Premium Popcorn (Butterfly & Mushroom Kernels)',
    pillar: 'Argentine Gourmet Popcorn',
    categoryTag: 'Agricultural Food Crops',
    origin: 'Pampa Húmeda (Córdoba, Santa Fe & Buenos Aires, Argentina)',
    destination: 'Port of Douala, Cameroon (Inland to Chad & CAR)',
    exclusiveStatus: 'Direct Farm-to-Port Allocation',
    specs: [
      'Kernel Type: Yellow Butterfly Grade 1 & Spherical Mushroom',
      'Expansion Volume: 42-44+ cc/g (High Pop Yield)',
      'Moisture Content: 13.0% - 14.2% Optimized for Popping',
      'Purity: 99.8% minimum (Triple Optical Sorted)',
      'Non-GMO Certified by SENASA Argentina'
    ],
    containerCapacity: '26.0 Metric Tons per 20ft FCL (1,040 x 25kg multi-ply paper bags)',
    packaging: '25kg (55 lb) Multi-Ply Kraft Paper Bags with Inner Moisture Barrier Poly-Liner',
    moq: '1x 20ft FCL (26 Metric Tons)',
    hsCode: '1005.90.10',
    incoterms: ['CIF Port of Douala', 'CFR Port of Douala', 'FOB Buenos Aires / Rosario'],
    certifications: ['SENASA Phytosanitary Certificate', 'SGS Pre-Shipment Inspection', 'Non-GMO Statement', 'Certificate of Origin Form A'],
    gradeAssay: 'Unpopped kernels < 1.5%; Explosion rate > 98.8%; Zero insect damage',
    image: '/assets/images/popcorn_corn_kernels.jpg',
    gallery: [
      '/assets/images/popcorn_bowls_top.jpg',
      '/assets/images/popcorn_closeup.jpg',
      '/assets/images/popcorn_corn_kernels.jpg'
    ],
    summary: 'Direct vessel loads of Argentine corn kernels celebrated worldwide for their high expansion volume, tender hull-less texture, and rich natural buttery aroma.',
    detailedDescription: 'Harvested from fertile Argentine soils under strict agro-climatic conditions, our imported Argentine popcorn is selected specifically for industrial commercial poppers, snack food manufacturing conglomerates, and cinema chains throughout Central Africa. Our Butterfly kernels pop into large, airy wings with minimal broken fragments, while our Mushroom kernels provide the heavy-bodied spherical structure required for industrial sugar, caramel, and cheese coating.',
    keyFeatures: [
      { label: 'Crop Origin', value: 'Pampa Grain Belt, Republic of Argentina' },
      { label: 'Expansion Metric', value: '42 to 46 cc/g Verified by MWVT' },
      { label: 'Bagging Standard', value: '25kg Kraft Bags with Hermetic PE Liner' },
      { label: 'Storage Stability', value: '24 Months Shelf Life in Climate-Controlled Storage' },
      { label: 'Logistics Corridor', value: 'Direct Trans-Atlantic Ocean Liner to Douala Port' }
    ]
  },
  {
    id: 'prod-used-clothing',
    name: 'European Second-Hand Clothing & Sorted Paired Shoes',
    pillar: 'European Used Apparel & Footwear',
    categoryTag: 'Textiles & Leather Footwear',
    origin: 'Western & Northern Europe (UK, Germany, Netherlands, Italy, France)',
    destination: 'Port of Douala (Servicing Central African Markets)',
    exclusiveStatus: 'Grade A+ Cream & Extra Sorting Standard',
    specs: [
      'Grading: Cream Grade, Grade A Premium, Grade B Sorted',
      'Categories: Mens Casual, Ladies Tropical Fashion, Children Mix, Denim & Outerwear',
      'Footwear: 100% Paired Shoes (Athletic Sneakers, Leather Dress, Kids)',
      'Hygiene: Fully Sanitized & Health-Certified with EU Veterinary/Health Certificate',
      'Compression: Heavy hydraulic pressing preserving garment integrity'
    ],
    containerCapacity: '40ft High Cube Container loads 24 - 28 Metric Tons (approx. 500-580 bales)',
    packaging: '45kg, 55kg, 80kg, or 100kg Poly-Woven Waterproof Bales with High-Tensile Steel Strapping',
    moq: '1x 40ft High Cube Container (26 Metric Tons)',
    hsCode: '6309.00.00',
    incoterms: ['CIF Douala Port', 'FOB Antwerp / Rotterdam / Hamburg', 'CFR Douala'],
    certifications: ['EU Fumigation & Disinfection Certificate', 'Chamber of Commerce Certificate of Origin', 'SGS Pre-Shipment Seal Inspection'],
    gradeAssay: 'Zero torn fabrics; No stains; Fresh current European high-street brands; Paired and banded footwear',
    image: '/assets/images/dresses_bales_1789399175918.jpg',
    gallery: [
      '/assets/images/secondhand_dresses_1789399142954.jpg',
      '/assets/images/used_clothes_bales_1.jpg',
      '/assets/images/used_clothes_bales_2.webp'
    ],
    summary: 'Consolidated from European collection hubs, our bales represent pristine Grade A fashion apparel, denim, sportswear, and sorted paired footwear packaged for bulk retail redistribution.',
    detailedDescription: 'We manage direct long-term supply contracts with licensed recycling and sorting houses across the United Kingdom, Germany, Belgium, Italy, and the Netherlands. Each shipment is machine-sorted by category, gender, and season before being hydraulic-pressed into clear-labeled, moisture-proof bales. Our paired shoes are inspected pair-by-pair to guarantee two matching shoes tied together, cleaned, and packed into 25kg transparent sacks.',
    keyFeatures: [
      { label: 'Origin Sourcing', value: '100% European Certified Collection Centers' },
      { label: 'Bale Weights', value: '45kg, 55kg, 80kg, 100kg & 450kg Giant Bales' },
      { label: 'Shoe Packing', value: '25kg Poly Bags, 100% Paired & Banded' },
      { label: 'Market Reception', value: 'Top Demand in Marché Central Douala, Mokolo, & Yaoundé' },
      { label: 'Sanitary Guarantee', value: 'Formal European Disinfection & Fumigation Docs' }
    ]
  },
  {
    id: 'prod-plaster-gypsum',
    name: 'High-Grade Pure Gypsum & Construction Plaster (Plaster of Paris)',
    pillar: 'High-Grade Industrial Plaster',
    categoryTag: 'Building Materials & Minerals',
    origin: 'Mediterranean & Southern Europe Mineral Basins',
    destination: 'Port of Douala Construction Terminal',
    exclusiveStatus: 'Architectural & Industrial Grade',
    specs: [
      'Chemical Purity: CaSO4 · 1/2 H2O > 95% Pure Hemihydrate',
      'Whiteness: > 92% L-Value Optical Brightness',
      'Fineness: 250 - 300 Mesh Residue < 0.2%',
      'Setting Time: Initial 6-9 minutes, Final 12-18 minutes',
      'Compressive Strength: > 14 MPa after 2 hours hydration'
    ],
    containerCapacity: '27 Metric Tons per 20ft FCL (1,080 x 25kg valve bags on shrink-wrapped pallets)',
    packaging: '25kg or 40kg Multi-Ply Kraft Paper Valve Bags with Polyethylene Lamination',
    moq: '1x 20ft FCL (27 Metric Tons)',
    hsCode: '2520.20.10',
    incoterms: ['CIF Port of Douala', 'FOB Valencia / Genoa / Marseille', 'CFR Port of Douala'],
    certifications: ['EN 13279-1 European Building Standard', 'ISO 9001 Factory Quality Control', 'SGS Chemical Assay Certificate'],
    gradeAssay: 'Free of silica lumps, unburnt gypsum, and heavy metals; Ultra-smooth trowel finish',
    image: '/assets/images/plaster_ceiling_room.jpg',
    gallery: [
      '/assets/images/plaster_moulding_corner.jpg',
      '/assets/images/plaster_moulding_detail.jpg',
      '/assets/images/plaster_ceiling_room.jpg'
    ],
    summary: 'Ultra-refined white gypsum plaster formulated for smooth internal wall plastering, cornices, decorative ceilings (staff), and medical casting applications.',
    detailedDescription: 'Our industrial plaster is calcined in state-of-the-art rotary kilns to produce an exceptionally pure, uniform hemihydrate gypsum powder. Renowned among Central African contractors, ceiling specialists, and hardware distributors for its rapid strength development, smooth workability, and brilliant white finish that drastically reduces primer paint consumption.',
    keyFeatures: [
      { label: 'Purity Level', value: '≥ 95% Refined Calcium Sulfate Hemihydrate' },
      { label: 'Particle Mesh', value: 'Micro-Fine 300 Mesh (99.8% Passing)' },
      { label: 'Packaging Type', value: 'Heavy Laminated Valve Bags on Heat-Treated Pallets' },
      { label: 'Applications', value: 'Ceilings, Mouldings, Medical Casts, Drywall Jointing' },
      { label: 'Weather Protection', value: 'Double-Layered Shrink Wrap for Tropical Ocean Transit' }
    ]
  },
  {
    id: 'prod-fridges-appliances',
    name: 'Household & Commercial Refrigerators, Freezers & Combo Units',
    pillar: 'Home Refrigeration & Appliances',
    categoryTag: 'Home Appliances & Electronics',
    origin: 'Guangzhou, Foshan & Shunde Industrial Belt, China',
    destination: 'Port of Douala, Cameroon (National Retail & Wholesale Distribution)',
    exclusiveStatus: 'Factory-Direct Bulk Sourcing',
    specs: [
      'Models: Single-Door Mini Fridges, Double-Door Top-Freezer Combos, Chest Freezers',
      'Capacity Range: 60L Mini Units up to 300L+ Family Combo Units',
      'Voltage/Frequency: 220-240V / 50Hz Configured for Central African Grid',
      'Refrigerant: R600a Eco-Friendly, Low Energy Consumption Compressors',
      'Compliance: CE, CCC & RoHS Certified Manufacturing Standards'
    ],
    containerCapacity: '600+ Mixed-Model Units per 40ft High Cube Container (Palletized & Corner-Braced)',
    packaging: 'Individual 5-Layer Corrugated Export Cartons with Styrofoam Corner Protection & Pallet Shrink-Wrap',
    moq: '1x 40ft High Cube Container (Mixed Model Configuration Available)',
    hsCode: '8418.21.00',
    incoterms: ['CIF Port of Douala', 'FOB Guangzhou / Shenzhen', 'CFR Port of Douala'],
    certifications: ['CE Declaration of Conformity', 'CCC Manufacturing Certificate', 'SGS Pre-Shipment Inspection', 'Certificate of Origin Form A'],
    gradeAssay: 'Full functional test prior to loading; Zero dead-on-arrival tolerance; Compressor pressure-tested at origin',
    image: '/assets/images/fridge_double_door.jpg',
    gallery: [
      '/assets/images/fridge_mini_white.jpg',
      '/assets/images/fridge_open_stocked.jpg',
      '/assets/images/fridge_double_door.jpg'
    ],
    summary: 'Factory-direct household and commercial refrigeration units engineered for Central African voltage and climate conditions, delivered in full or mixed-model container loads.',
    detailedDescription: 'Wardiere & Co. sources refrigerators, freezers, and combo units directly from certified manufacturing partners in the Guangzhou-Foshan industrial corridor, bypassing wholesale middlemen to deliver factory pricing to Cameroonian retailers and distributors. Every unit is configured for the regional 220-240V/50Hz power grid and tropical ambient temperatures, with R600a eco-refrigerant compressors chosen for durability under frequent grid fluctuations. Mixed-model container loading allows distributors to combine mini fridges, double-door combos, and chest freezers within a single FCL shipment to match retail demand.',
    keyFeatures: [
      { label: 'Sourcing Model', value: 'Direct Factory-Gate Procurement, Zero Wholesale Markup' },
      { label: 'Unit Range', value: 'Mini Fridges, Double-Door Combos & Chest Freezers' },
      { label: 'Grid Compatibility', value: 'Configured for 220-240V / 50Hz Central African Standard' },
      { label: 'Quality Control', value: '100% Pre-Shipment Functional & Pressure Testing' },
      { label: 'Container Flexibility', value: 'Mixed-Model Loading Available per Container' }
    ]
  }
];

export const SHIPPING_LANES: ShippingLane[] = [
  {
    id: 'lane-bangkok-douala',
    name: 'Trans-Indian Ocean Paper Corridor',
    originPort: 'Port of Laem Chabang, Thailand (THLCH)',
    destinationPort: 'Port of Douala Terminal, Cameroon (CMDLA)',
    transitDays: 28,
    frequency: 'Bi-Weekly Dedicated Container Service',
    primaryCarrier: 'CMA CGM & Maersk Line Joint Loop',
    commodityCargo: 'Exclusive Double A A4 Copy Paper FCLs',
    status: 'Scheduled',
    notes: 'Direct transit with dedicated desiccant kits protecting paper reams from tropical humidity spikes.'
  },
  {
    id: 'lane-buenosaires-douala',
    name: 'South Atlantic Agricultural Route',
    originPort: 'Port of Buenos Aires / Rosario, Argentina (ARBUE)',
    destinationPort: 'Port of Douala Terminal, Cameroon (CMDLA)',
    transitDays: 24,
    frequency: 'Monthly Scheduled Bulk Liner',
    primaryCarrier: 'MSC Mediterranean Shipping Co',
    commodityCargo: 'Argentine Butterfly & Mushroom Popcorn Sacks',
    status: 'At Sea',
    notes: 'Equipped with temperature and condensation-controlled dry containers for grain preservation.'
  },
  {
    id: 'lane-antwerp-douala',
    name: 'European Continental Textile Corridor',
    originPort: 'Port of Antwerp-Bruges, Belgium (BEANR)',
    destinationPort: 'Port of Douala Terminal, Cameroon (CMDLA)',
    transitDays: 16,
    frequency: 'Weekly Express West Africa Service',
    primaryCarrier: 'Hapag-Lloyd & Grimaldi Lines',
    commodityCargo: 'Grade A European Clothes Bales & Paired Shoes',
    status: 'Port Clearance',
    notes: 'Priority discharge at Douala container terminal with pre-cleared customs documentation.'
  },
  {
    id: 'lane-valencia-douala',
    name: 'Mediterranean Mineral Transit',
    originPort: 'Port of Valencia / Genoa (ESVLC / ITGOA)',
    destinationPort: 'Port of Douala Cargo Berth, Cameroon (CMDLA)',
    transitDays: 18,
    frequency: 'Bi-Weekly Heavy Cargo Sailings',
    primaryCarrier: 'ONE & Arkas Line',
    commodityCargo: 'High-Grade Industrial White Gypsum Plaster',
    status: 'Discharging',
    notes: 'Heavy-duty 20ft container payloads (up to 27 MT per container) with waterproof pallet strapping.'
  },
  {
    id: 'lane-guangzhou-douala',
    name: 'Far East Appliance Corridor',
    originPort: 'Port of Guangzhou / Shenzhen, China (CNGZG / CNSZX)',
    destinationPort: 'Port of Douala Terminal, Cameroon (CMDLA)',
    transitDays: 32,
    frequency: 'Bi-Weekly Consolidated Container Service',
    primaryCarrier: 'COSCO Shipping & CMA CGM',
    commodityCargo: 'Refrigerators, Freezers & Combo Appliance Units',
    status: 'Scheduled',
    notes: 'Corner-braced palletized cartons with anti-vibration dunnage for compressor protection during transit.'
  }
];

export const CLIENT_PROFILES: ClientProfile[] = [
  {
    id: 'client-01',
    name: 'Société Camerounaise de Distribution Papetière',
    sector: 'National Paper, Stationery & Publishing Supply',
    region: 'Douala & Yaoundé, Cameroon',
    volumeAnnually: '120+ FCL Containers Annually',
    testimonial: 'Wardiere & Co. has given us uninterrupted exclusive access to genuine Double A paper. The quality is flawless, delivery schedules into the Port of Douala are respected down to the day, and zero jammed sheets means our printing press clients will never use any other brand.',
    signatory: 'Dieudonné Mbarga',
    title: 'Director of Procurement & Supply Chain',
    partnershipYears: '7 Years Exclusive Client'
  },
  {
    id: 'client-02',
    name: 'Central Africa Snacks & Confectionery Corp.',
    sector: 'Industrial Food Processing & Cinema Chains',
    region: 'Douala, Bafoussam & N’Djamena',
    volumeAnnually: '45+ FCL Containers Annually',
    testimonial: 'We run high-throughput industrial popcorn popping lines. The Argentine butterfly popcorn supplied by Wardiere delivers an unmatched expansion ratio of 44+. Yield per sack is 18% higher than our previous suppliers, drastically increasing our profit margins.',
    signatory: 'Hassane Ousmanou',
    title: 'Chief Operations Officer',
    partnershipYears: '5 Years Strategic Buyer'
  },
  {
    id: 'client-03',
    name: 'Consortium Textile du Marché Central & Mokolo',
    sector: 'Wholesale Bales & Footwear Merchant Union',
    region: 'Marché Central (Douala) & Marché Mokolo (Yaoundé)',
    volumeAnnually: '85+ FCL Containers Annually',
    testimonial: 'In the second-hand clothing market, trust is everything. Wardieres European bales are honestly graded—true Cream and Grade A with fresh European brands, no damaged goods, and cleanly paired shoes that sell immediately.',
    signatory: 'Mme. Beatrice Fotso',
    title: 'President of Wholesale Garment Merchants Union',
    partnershipYears: '8 Years Bulk Partner'
  },
  {
    id: 'client-04',
    name: 'Batisseurs Réunis du Littoral & CEMAC',
    sector: 'Commercial Construction, Drywall & Architectural Staff',
    region: 'Kribi, Douala & Libreville (Gabon)',
    volumeAnnually: '60+ FCL Containers Annually',
    testimonial: 'Their pure gypsum plaster has transformed our finishing work. It mixes smoothly, sets predictably, and produces a mirror-like architectural surface that saves us dozens of paint coats on major commercial towers.',
    signatory: 'Eng. Patrick Nkem',
    title: 'Head of Structural Materials & Procurement',
    partnershipYears: '6 Years Ongoing Contract'
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'team-01',
    name: 'Arthur J. Wardiere',
    role: 'Founder & Chief Executive Officer',
    location: 'New York, USA / Geneva',
    bio: 'Over 28 years directing multi-commodity international trade houses, structured trade finance, and bilateral import corridors between North America, Europe, and West-Central Africa.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80',
    credentials: ['Columbia Business School MBA', 'ICC International Maritime Committee', 'Global Trade & Logistics Fellow']
  },
  {
    id: 'team-02',
    name: 'Dr. Samuel Ewane Ndoko',
    role: 'Managing Director, Central Africa Operations',
    location: 'Douala, Cameroon (Boulevard de la Liberté, Akwa)',
    bio: 'Veterans of the Douala Port Terminal and CEMAC trade corridors with 22 years spearheading customs clearing, port demurrage elimination, and nationwide logistics infrastructure.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80',
    credentials: ['Former Advisor to Cameroon Shippers Council', 'Douala Port Terminal Operations Specialist']
  },
  {
    id: 'team-03',
    name: 'Elena Rostova',
    role: 'Vice President, European Textile & Commodity Sourcing',
    location: 'Antwerp, Belgium & London, UK',
    bio: 'Manages long-term contracts with over 40 European sorting centers and textile recycling organizations across Belgium, Germany, the UK, and the Netherlands.',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80',
    credentials: ['European Textile Recycling Association Board', 'M.Sc. International Supply Chain Management']
  },
  {
    id: 'team-04',
    name: 'Ignacio Morales de la Peña',
    role: 'Director of Latin America Agro-Corridors',
    location: 'Buenos Aires & Rosario, Argentina',
    bio: 'Directs on-the-ground grain elevator procurement, SENASA phytosanitary audits, and trans-Atlantic vessel chartering from the Argentine Pampa agro-belt.',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=500&q=80',
    credentials: ['Bolsa de Cereales de Buenos Aires Member', 'Agronomic Engineering University of Cordoba']
  },
  {
    id: 'team-05',
    name: 'Thierry Montcheu',
    role: 'Chief Trade Compliance & Maritime Logistics Officer',
    location: 'Douala & Kribi Deep Sea Port, Cameroon',
    bio: 'Oversees container tracking, BIVAC/SGS import declaration vouchers, customs duty optimization, and multi-modal fleet dispatch across Central Africa.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=500&q=80',
    credentials: ['Certified Customs Broker (Cameroon)', 'Maritime Law Specialist, University of Douala']
  }
];

export const PARTNERS_LIST: PartnerOrg[] = [
  {
    id: 'partner-double-a',
    name: 'Double A (1991) Public Company Ltd.',
    category: 'Exclusive Manufacturing',
    country: 'Thailand',
    role: 'Exclusive Sovereign Mill Partner & Authorized Cameroon Import Franchise',
    logoBadge: 'Double A Official',
    verifiedStatus: 'Exclusive Direct Mill Contract'
  },
  {
    id: 'partner-cappec',
    name: 'Cámara Argentina de Productores de Popcorn (CAPPEC)',
    category: 'Commodity Boards',
    country: 'Argentina',
    role: 'Direct Agro-Elevator Sourcing & Certified Non-GMO Inspection',
    logoBadge: 'SENASA & CAPPEC',
    verifiedStatus: 'Registered Agro Export Affiliate'
  },
  {
    id: 'partner-etraf',
    name: 'European Textile Recycling & Sorting Consortia',
    category: 'Commodity Boards',
    country: 'Belgium, Germany & UK',
    role: 'Sourcing of Certified Grade A Original Used Clothes & Shoes Bales',
    logoBadge: 'EU Textile Green',
    verifiedStatus: 'Licensed Collector Network'
  },
  {
    id: 'partner-sgs',
    name: 'SGS Global & BIVAC International',
    category: 'Assay & Inspection',
    country: 'Switzerland / Worldwide',
    role: 'Mandatory Pre-Shipment Inspection, Assay Seals & Import Verification',
    logoBadge: 'SGS Assayed',
    verifiedStatus: 'Independent Assayer'
  },
  {
    id: 'partner-maersk',
    name: 'Maersk Line & CMA CGM Global Ocean Carriers',
    category: 'Maritime Freight',
    country: 'Denmark / France',
    role: 'Primary Long-Haul Container Lines into Port of Douala & Kribi',
    logoBadge: 'Ocean Alliance',
    verifiedStatus: 'Chartered Slot Agreements'
  },
  {
    id: 'partner-bicec',
    name: 'BICEC & Ecobank Central Africa',
    category: 'Financial & Banking',
    country: 'Cameroon / Regional',
    role: 'Institutional Documentary Letters of Credit (L/C) & Structured Trade Guarantees',
    logoBadge: 'Tier 1 Banking',
    verifiedStatus: 'Direct Trade Credit Facility'
  }
];

export const KEY_COMPANY_STATS = [
  {
    value: '$120M+',
    label: 'Annual Trade Volume',
    subtext: 'Institutional import capacity across Central Africa'
  },
  {
    value: '100% Exclusive',
    label: 'Double A Cameroon',
    subtext: 'Official sovereign import distribution rights'
  },
  {
    value: '14,500+ TEU',
    label: 'Ocean Containers Handled',
    subtext: 'Demurrage-free rapid clearance at Port of Douala'
  },
  {
    value: '5 Core Pillars',
    label: 'Import Verticals',
    subtext: 'Paper, Argentine Popcorn, European Bales, Gypsum & Appliances'
  }
];

export const FRENCH_HERO_SLIDES: CarouselSlide[] = [
  {
    id: 'slide-double-a',
    pillar: 'Double A Paper (Cameroon Exclusive)',
    title: 'Papier Reprographique Double A 80g Haut Rendement',
    subtitle: 'Importation & Distribution Exclusive Autorisée au Cameroun',
    origin: 'Chachoengsao, Thaïlande (Port de Laem Chabang)',
    destination: 'Port de Douala & Yaoundé, Cameroun',
    image: '/assets/images/double_a_reams_1789399160563.jpg',
    tag: 'Exclusivité Cameroun',
    description: 'Approvisionnement institutionnel direct du célèbre papier Double A 80g et 75g. Fabriqué à partir d’arbres de culture (KHAN-NA), zéro bourrage, blancheur CIE 165 et excellente imprimabilité pour le Cameroun et la zone CEMAC.',
    keyMetric: '8 000+ Ramettes / 40ft HC',
    metricLabel: 'Chargement Standard Conteneur'
  },
  {
    id: 'slide-popcorn',
    pillar: 'Argentine Gourmet Popcorn',
    title: 'Pop-corn Argentin Papillon & Champignon',
    subtitle: 'Corridor Agro-Industriel Direct de Córdoba & Santa Fe',
    origin: 'Buenos Aires & Rosario, Argentine',
    destination: 'Plateforme Port de Douala, Cameroun',
    image: '/assets/images/popcorn_corn_kernels.jpg',
    tag: 'Récolte Premium Non-OGM',
    description: 'Grains de maïs à pop-corn argentins de qualité export offrant un taux d’expansion exceptionnel de 42–44+ pour des flocons légers et grains champignons pour enrobage caramel. Pureté 99,8% garantie par inspection phytosanitaire.',
    keyMetric: 'Taux d’Expansion 44+',
    metricLabel: 'Rendement Industriel Supérieur'
  },
  {
    id: 'slide-used-clothes',
    pillar: 'European Used Apparel & Footwear',
    title: 'Friperie et Chaussures Triées d’Europe Occidentale',
    subtitle: 'Balles Originales Crème & Grade A d’Europe de l’Ouest',
    origin: 'Anvers, Rotterdam & Hambourg (RU, DE, NL, IT, FR)',
    destination: 'Port de Douala, Distribution Afrique Centrale',
    image: '/assets/images/dresses_bales_1789399175918.jpg',
    tag: 'Tri Européen Certifié',
    description: 'Balles de vêtements d’occasion rigoureusement sélectionnées et chaussures appariées provenant de centres de collecte agréés en Allemagne, au Royaume-Uni, aux Pays-Bas, en Italie et en France. Balles étanches de 45kg/55kg.',
    keyMetric: '550+ Balles / 40ft HC',
    metricLabel: 'Densité Optimale d’Empotage'
  },
  {
    id: 'slide-plaster',
    pillar: 'High-Grade Industrial Plaster',
    title: 'Plâtre Pur de Construction & Staff Architectural',
    subtitle: 'Plâtre de Moulage Ultra-Blanc & Bandes Plâtrées',
    origin: 'Bassin Industriel Méditerranéen (Valence / Marseille)',
    destination: 'Dépôt Vrac & Palettes du Port de Douala',
    image: '/assets/images/plaster_ceiling_room.jpg',
    tag: 'Haute Pureté Industrielle',
    description: 'Plâtre de gypse calciné extra-blanc à prise contrôlée, formulé pour moulures architecturales, enduits lisses et plâtres médicaux. Prise rapide, finition impeccable et sacs à valve étanches contre l’humidité tropicale.',
    keyMetric: '27 Tonnes / 20ft FCL',
    metricLabel: 'Charge Lourde Palettisée'
  },
  {
    id: 'slide-appliances',
    pillar: 'Home Refrigeration & Appliances',
    title: 'Réfrigérateurs Domestiques & Commerciaux',
    subtitle: 'Approvisionnement Direct Usine en Frigos, Congélateurs & Combinés',
    origin: 'Zone Industrielle de Guangzhou & Foshan, Chine',
    destination: 'Port de Douala, Cameroun (Distribution Détail & Gros)',
    image: '/assets/images/fridge_double_door.jpg',
    tag: 'Électroménager Direct Usine',
    description: 'Chargements complets de mini-réfrigérateurs, combinés double porte et congélateurs coffres, sourcés directement auprès de fabricants certifiés avec conformité CE/CCC et configuration de tension adaptée au réseau électrique d’Afrique Centrale.',
    keyMetric: '600+ Unités / 40ft HC',
    metricLabel: 'Chargement Multi-Modèles'
  }
];

export const FRENCH_COMMODITY_ITEMS: CommodityItem[] = [
  {
    ...COMMODITY_ITEMS[0],
    name: 'Papier Reprographique Double A 80g / 75g Haute Performance A4',
    categoryTag: 'Papeterie & Consommables',
    destination: 'Cameroun (Douala, Yaoundé & Zone CEMAC)',
    exclusiveStatus: 'Importateur Exclusif Agréé au Cameroun',
    specs: [
      'Grammage: 80g & 75g Haute Rigidité',
      'Blancheur: CIE 165 (Contraste Élevé)',
      'Opacité: 95% minimum pour impression recto-verso',
      'Humidité: 3,5% - 4,5% (Formule tropicale anti-gondolage)',
      'Lissé: 200/220 Bendtsen (Zéro Bourrage Garanti)'
    ],
    containerCapacity: '8 000 Ramettes / 1 600 Cartons par Conteneur 40ft High Cube',
    packaging: '500 Feuilles/Ramette, 5 Ramettes/Carton avec Enveloppe Étanche Polyéthylène',
    moq: '1x Conteneur 40ft High Cube (8 000 Ramettes)',
    incoterms: ['CIF Port de Douala', 'FOB Laem Chabang', 'DAP Douala / Yaoundé Entrepôt'],
    certifications: ['ISO 9001:2015', 'ISO 14001', 'Arbres de Culture KHAN-NA (Zéro Déforestation)', 'Certificat de Poids & Comptage SGS'],
    gradeAssay: 'Certification Zéro Bourrage 24/7 ; Testé sur Presses Numériques Haut Débit 100ppm',
    summary: 'La référence mondiale du papier reprographique haut de gamme, importé avec exclusivité souveraine au Cameroun. Conçu pour résister à l’humidité tropicale sans aucun bourrage.',
    detailedDescription: 'Wardiere & Co. est l’unique importateur officiel agréé du papier authentique Double A au Cameroun. Fabriqué à partir d’arbres de culture (KHAN-NA), les fibres denses procurent un lissé exceptionnel et une opacité totale sans transparence en recto-verso. Emballage thermoscellé anti-humidité protégeant les rames dans le climat maritime équatorial de Douala.',
    keyFeatures: [
      { label: 'Exclusivité', value: 'Partenaire Exclusif Officiel pour la République du Cameroun' },
      { label: 'Feuilles', value: '500 Feuilles A4 Découpe Laser Parfaite' },
      { label: 'Blancheur', value: '102% - 104% Blancheur ISO' },
      { label: 'Rendement', value: 'Norme Zéro Bourrage Continu Garantie' },
      { label: 'Dépôts', value: 'Entrepôts Sécurisés Sous Douane à Douala (Akwa) & Yaoundé' }
    ]
  },
  {
    ...COMMODITY_ITEMS[1],
    name: 'Pop-corn Argentin Premium (Grains Papillon & Champignon)',
    categoryTag: 'Céréales & Agro-Alimentaire',
    destination: 'Port de Douala, Cameroun (Transit Tchad & RCA)',
    exclusiveStatus: 'Allocation Directe Champs-Port',
    specs: [
      'Type de Grain: Papillon Jaune Grade 1 & Champignon Sphérique',
      'Volume d’Expansion: 42-44+ cc/g (Haut Rendement en Flocons)',
      'Taux d’Humidité: 13,0% - 14,2% Optimal pour l’Éclatement',
      'Pureté: 99,8% minimum (Triple Tri Optique Électronique)',
      'Certifié Non-OGM par le SENASA Argentine'
    ],
    containerCapacity: '26 Tonnes Métriques par Conteneur 20ft FCL (1 040 sacs de 25kg)',
    packaging: 'Sacs Papier Kraft Multi-Plis 25kg avec Doublure Hermétique Polyéthylène',
    moq: '1x Conteneur 20ft FCL (26 Tonnes)',
    incoterms: ['CIF Port de Douala', 'CFR Port de Douala', 'FOB Buenos Aires / Rosario'],
    certifications: ['Certificat Phytosanitaire SENASA', 'Inspection Avant Embarquement SGS', 'Déclaration Non-OGM', 'Certificat d’Origine Formule A'],
    gradeAssay: 'Grains non éclatés < 1,5% ; Taux d’éclatement > 98,8% ; Zéro insecte',
    summary: 'Cargaisons directes de grains de maïs à pop-corn argentin reconnus mondialement pour leur expansion volumineuse, texture croustillante et saveur naturelle.',
    detailedDescription: 'Récolté dans la Pampa Húmeda argentine sous encadrement agronomique rigoureux, notre pop-corn est destiné aux chaînes industrielles de snacks, commerçants grossistes et cinémas d’Afrique Centrale. Les grains Papillon créent de grands flocons aériens, tandis que les grains Champignon assurent la sphéricité parfaite pour le caramel et chocolat.',
    keyFeatures: [
      { label: 'Origine', value: 'Ceinture Céréalière de la Pampa, République d’Argentine' },
      { label: 'Expansion', value: '42 à 46 cc/g Certifié par Test MWVT' },
      { label: 'Conditionnement', value: 'Sacs Kraft 25kg avec Film Barrière Étanche' },
      { label: 'Conservation', value: 'DLUO 24 Mois en Stockage Tempéré' },
      { label: 'Ligne Maritime', value: 'Liaison Directe Transatlantique vers Douala' }
    ]
  },
  {
    ...COMMODITY_ITEMS[2],
    name: 'Friperie d’Occasion & Chaussures Appariées Triées d’Europe',
    categoryTag: 'Textile & Maroquinerie',
    destination: 'Port de Douala (Marchés d’Afrique Centrale)',
    exclusiveStatus: 'Tri Standard Crème & Extra Grade A',
    specs: [
      'Classification: Crème Originale, Grade A Supérieur, Grade B Trié',
      'Catégories: Hommes Sport & Casual, Dames Tropical, Enfants Mix, Denim Jeans',
      'Chaussures: 100% Chaussures Appariées (Baskets de Marque, Cuir Ville, Enfants)',
      'Hygiène: Intégralement Désinfecté & Certifié Vétérinaire / Sanitaire UE',
      'Compression: Pressage Hydraulique Préservant les Fibres'
    ],
    containerCapacity: 'Conteneur 40ft High Cube de 24 à 28 Tonnes (environ 500 à 580 balles)',
    packaging: 'Balles Étanches Tissées de 45kg, 55kg, 80kg ou 100kg avec Cerclage Acier Haute Résistance',
    moq: '1x Conteneur 40ft High Cube (26 Tonnes)',
    incoterms: ['CIF Port de Douala', 'FOB Anvers / Rotterdam / Hambourg', 'CFR Douala'],
    certifications: ['Certificat de Fumigation & Désinfection UE', 'Certificat d’Origine Chambre de Commerce', 'Scellés d’Inspection SGS'],
    gradeAssay: 'Zéro tissu déchiré ; Zéro tache ; Marques européennes actuelles ; Chaussures appariées et liées',
    summary: 'Groupées depuis les centres de collecte européens, nos balles offrent des vêtements Grade A, du denim et des chaussures appariées prêtes pour la revente en gros.',
    detailedDescription: 'Nous opérons sous contrats exclusifs pluriannuels avec des centres de tri agréés en Allemagne, Belgique, Pays-Bas, Royaume-Uni et Italie. Chaque lot est calibré par catégorie, genre et saison avant d’être compacté sous presse hydraulique. Nos chaussures sont vérifiées une à une pour garantir des paires assorties, nettoyées et ficelées en sacs transparents de 25kg.',
    keyFeatures: [
      { label: 'Origine', value: 'Centres de Collecte 100% Agréés d’Europe de l’Ouest' },
      { label: 'Poids Balles', value: '45kg, 55kg, 80kg, 100kg & Balles Géantes 450kg' },
      { label: 'Chaussures', value: 'Sacs Poly 25kg, 100% Appariées et Ficelées' },
      { label: 'Débouchés', value: 'Forte Demande Marché Central Douala, Mokolo, Yaoundé' },
      { label: 'Garantie Sanitaire', value: 'Certificats de Fumigation Officiels d’Europe' }
    ]
  },
  {
    ...COMMODITY_ITEMS[3],
    name: 'Plâtre de Gypse Industriel Haute Pureté (Plâtre de Paris & Staff)',
    categoryTag: 'Matériaux de Construction & Minéraux',
    destination: 'Terminal Minéralier du Port de Douala',
    exclusiveStatus: 'Qualité Architecturale & Bâtiment',
    specs: [
      'Pureté Chimique: CaSO4 · 1/2 H2O > 95% Hémihydrate Pur',
      'Blancheur Optique: Indice L > 92% Super Blanc',
      'Finesse: Tamis 250 - 300 Mesh Résidu < 0,2%',
      'Temps de Prise: Prise Initiale 6-9 min, Prise Finale 12-18 min',
      'Résistance à la Compression: > 14 MPa après 2 heures d’hydratation'
    ],
    containerCapacity: '27 Tonnes par Conteneur 20ft FCL (1 080 sacs de 25kg sur palettes filmées)',
    packaging: 'Sacs Kraft à Valve Multi-Feuilles 25kg ou 40kg avec Lamination Polyéthylène',
    moq: '1x Conteneur 20ft FCL (27 Tonnes)',
    incoterms: ['CIF Port de Douala', 'FOB Valence / Gênes / Marseille', 'CFR Port de Douala'],
    certifications: ['Norme Bâtiment Européenne EN 13279-1', 'Contrôle Usine ISO 9001', 'Certificat d’Analyse Chimique SGS'],
    gradeAssay: 'Exempt de nodules de silice et métaux lourds ; Finition miroir à la taloche',
    summary: 'Plâtre de gypse extra-blanc micronisé formulé pour enduits intérieurs lisses, corniches, plafonds décoratifs en staff et moulages médicaux.',
    detailedDescription: 'Notre plâtre industriel est calciné dans des fours rotatifs modernes pour produire une poudre d’hémihydrate uniforme d’une pureté incomparable. Prisé par les entrepreneurs en bâtiment, staffeurs et quincailleries d’Afrique Centrale pour sa prise régulière et son éclat blanc immaculé réduisant la consommation de peinture.',
    keyFeatures: [
      { label: 'Pureté', value: '≥ 95% Sulfate de Calcium Hémihydrate Raffiné' },
      { label: 'Granulométrie', value: 'Micro-Fine 300 Mesh (99,8% Passant)' },
      { label: 'Conditionnement', value: 'Sacs à Valve Renforcés sur Palettes Traitées NIMP 15' },
      { label: 'Usages', value: 'Staff, Faux-Plafonds, Moulures, Bandes Médicales' },
      { label: 'Protection Climat', value: 'Double Housse Thermo-Rétractable Anti-Pluie' }
    ]
  },
  {
    ...COMMODITY_ITEMS[4],
    name: 'Réfrigérateurs, Congélateurs & Combinés Domestiques et Commerciaux',
    categoryTag: 'Électroménager & Électronique',
    destination: 'Port de Douala, Cameroun (Distribution Détail & Gros)',
    exclusiveStatus: 'Approvisionnement Direct Usine',
    specs: [
      'Modèles: Mini-Réfrigérateurs, Combinés Double Porte, Congélateurs Coffres',
      'Capacité: De 60L (Mini) à 300L+ (Combinés Familiaux)',
      'Tension/Fréquence: 220-240V / 50Hz Configuré pour le Réseau d’Afrique Centrale',
      'Réfrigérant: R600a Écologique, Compresseurs Basse Consommation',
      'Conformité: Normes de Fabrication CE, CCC & RoHS'
    ],
    containerCapacity: '600+ Unités Multi-Modèles par Conteneur 40ft High Cube (Palettisé & Renforcé aux Angles)',
    packaging: 'Cartons d’Exportation Ondulés 5 Couches avec Protection Polystyrène & Filmage Palette',
    moq: '1x Conteneur 40ft High Cube (Configuration Multi-Modèles Disponible)',
    incoterms: ['CIF Port de Douala', 'FOB Guangzhou / Shenzhen', 'CFR Port de Douala'],
    certifications: ['Déclaration de Conformité CE', 'Certificat de Fabrication CCC', 'Inspection Avant Expédition SGS', 'Certificat d’Origine Formule A'],
    gradeAssay: 'Test fonctionnel complet avant chargement ; Tolérance zéro panne à l’arrivée ; Compresseurs testés en pression à l’origine',
    summary: 'Réfrigérateurs et congélateurs domestiques et commerciaux directement sourcés en usine, conçus pour la tension électrique et le climat de l’Afrique Centrale, livrés en conteneurs complets ou multi-modèles.',
    detailedDescription: 'Wardiere & Co. sourcé ses réfrigérateurs, congélateurs et combinés directement auprès de partenaires manufacturiers certifiés du corridor industriel Guangzhou-Foshan, en éliminant les intermédiaires grossistes pour offrir des prix usine aux distributeurs et détaillants camerounais. Chaque unité est configurée pour le réseau électrique régional 220-240V/50Hz et les conditions climatiques tropicales, avec des compresseurs au réfrigérant écologique R600a choisis pour leur robustesse face aux fluctuations fréquentes du réseau. Le chargement multi-modèles permet aux distributeurs de combiner mini-réfrigérateurs, combinés double porte et congélateurs coffres au sein d’un même conteneur FCL.',
    keyFeatures: [
      { label: 'Modèle d’Approvisionnement', value: 'Achat Direct Usine, Zéro Marge Grossiste' },
      { label: 'Gamme d’Unités', value: 'Mini-Réfrigérateurs, Combinés Double Porte & Congélateurs Coffres' },
      { label: 'Compatibilité Réseau', value: 'Configuré pour la Norme 220-240V / 50Hz d’Afrique Centrale' },
      { label: 'Contrôle Qualité', value: 'Test Fonctionnel et de Pression à 100% Avant Expédition' },
      { label: 'Flexibilité Conteneur', value: 'Chargement Multi-Modèles Disponible par Conteneur' }
    ]
  }
];

export const FRENCH_SHIPPING_LANES: ShippingLane[] = [
  {
    ...SHIPPING_LANES[0],
    name: 'Corridor Papetier Trans-Océan Indien',
    originPort: 'Port de Laem Chabang, Thaïlande (THLCH)',
    destinationPort: 'Terminal du Port de Douala, Cameroun (CMDLA)',
    frequency: 'Service Conteneurs Dédié Bimensuel',
    primaryCarrier: 'Boucle Conjointe CMA CGM & Maersk Line',
    commodityCargo: 'Conteneurs Complets FCL Papier Double A Exclusif',
    notes: 'Transit direct avec kits déshydratants préservant les rames de l’humidité tropicale.'
  },
  {
    ...SHIPPING_LANES[1],
    name: 'Route Agricole Atlantique Sud',
    originPort: 'Port de Buenos Aires / Rosario, Argentine (ARBUE)',
    destinationPort: 'Terminal du Port de Douala, Cameroun (CMDLA)',
    frequency: 'Ligne Régulière Mensuelle Spécialisée',
    primaryCarrier: 'MSC Mediterranean Shipping Co',
    commodityCargo: 'Sacs de Pop-corn Argentin Papillon & Champignon',
    notes: 'Conteneurs dry ventilés avec régulation de condensation pour la conservation des grains.'
  },
  {
    ...SHIPPING_LANES[2],
    name: 'Corridor Textile Continental Européen',
    originPort: 'Port d’Anvers-Bruges, Belgique (BEANR)',
    destinationPort: 'Terminal du Port de Douala, Cameroun (CMDLA)',
    frequency: 'Service Express Hebdomadaire Afrique de l’Ouest',
    primaryCarrier: 'Lignes Hapag-Lloyd & Grimaldi',
    commodityCargo: 'Balles Friperie Grade A & Chaussures Appariées',
    notes: 'Déchargement prioritaire au terminal conteneurs avec pré-dédouanement douanier.'
  },
  {
    ...SHIPPING_LANES[3],
    name: 'Transit Minéralier Méditerranéen',
    originPort: 'Port de Valence / Gênes (ESVLC / ITGOA)',
    destinationPort: 'Quai Minéralier du Port de Douala, Cameroun (CMDLA)',
    frequency: 'Départs Cargos Lourds Bimensuels',
    primaryCarrier: 'ONE & Arkas Line',
    commodityCargo: 'Plâtre Industriel Blanc Haute Pureté pour Construction',
    notes: 'Charges lourdes conteneurs 20ft (jusqu’à 27 tonnes) avec sangles étanches.'
  },
  {
    ...SHIPPING_LANES[4],
    name: 'Corridor Électroménager Extrême-Orient',
    originPort: 'Port de Guangzhou / Shenzhen, Chine (CNGZG / CNSZX)',
    destinationPort: 'Terminal du Port de Douala, Cameroun (CMDLA)',
    frequency: 'Service Conteneurs Groupés Bimensuel',
    primaryCarrier: 'COSCO Shipping & CMA CGM',
    commodityCargo: 'Réfrigérateurs, Congélateurs & Combinés Électroménagers',
    notes: 'Cartons palettisés avec calage anti-vibration pour la protection des compresseurs pendant le transit.'
  }
];

export const FRENCH_CLIENT_PROFILES: ClientProfile[] = [
  {
    id: 'client-01',
    name: 'Société Camerounaise de Distribution Papetière',
    sector: 'Distribution Nationale Papier, Papeterie & Édition',
    region: 'Douala & Yaoundé, Cameroun',
    volumeAnnually: '120+ Conteneurs FCL / An',
    testimonial: 'Wardiere & Co. nous assure un approvisionnement exclusif ininterrompu en papier authentique Double A. La qualité est irréprochable, les délais au Port de Douala sont respectés au jour près, et le zéro bourrage fidélise totalement nos imprimeurs.',
    signatory: 'Dieudonné Mbarga',
    title: 'Directeur Achats & Chaîne Logistique',
    partnershipYears: 'Client Exclusif depuis 7 Ans'
  },
  {
    id: 'client-02',
    name: 'Central Africa Snacks & Confectionery Corp.',
    sector: 'Transformation Agro-Industrielle & Réseaux de Cinémas',
    region: 'Douala, Bafoussam & N’Djamena',
    volumeAnnually: '45+ Conteneurs FCL / An',
    testimonial: 'Nous exploitons des lignes d’éclatement industrielles intensives. Le maïs papillon argentin fourni par Wardiere offre un taux d’expansion record de 44+. Le rendement au sac surpasse de 18% nos précédents fournisseurs.',
    signatory: 'Hassane Ousmanou',
    title: 'Directeur des Opérations Industrielles',
    partnershipYears: 'Acheteur Stratégique depuis 5 Ans'
  },
  {
    id: 'client-03',
    name: 'Consortium Textile du Marché Central & Mokolo',
    sector: 'Union des Grossistes en Balles & Chaussures',
    region: 'Marché Central (Douala) & Marché Mokolo (Yaoundé)',
    volumeAnnually: '85+ Conteneurs FCL / An',
    testimonial: 'Dans le commerce de la friperie, la franchise fait tout. Les balles européennes de Wardiere sont fidèles au classement : vraie Crème et Grade A de marques européennes actuelles, et des chaussures appariées qui s’écoulent immédiatement.',
    signatory: 'Mme. Béatrice Fotso',
    title: 'Présidente de l’Union des Grossistes Textiles',
    partnershipYears: 'Partenaire depuis 8 Ans'
  },
  {
    id: 'client-04',
    name: 'Bâtisseurs Réunis du Littoral & CEMAC',
    sector: 'BTP, Staff Architectural & Cloisons Sèches',
    region: 'Kribi, Douala & Libreville (Gabon)',
    volumeAnnually: '60+ Conteneurs FCL / An',
    testimonial: 'Leur plâtre pur a sublimé nos chantiers de finition. Il se gâche sans grumeaux, offre une prise régulière et un aspect miroir qui nous fait économiser des couches de peinture sur nos tours d’affaires.',
    signatory: 'Ing. Patrick Nkem',
    title: 'Directeur Matériaux & Approvisionnements',
    partnershipYears: 'Contrat Cadre depuis 6 Ans'
  }
];

export const FRENCH_TEAM_MEMBERS: TeamMember[] = [
  {
    ...TEAM_MEMBERS[0],
    role: 'Fondateur & Président Directeur Général',
    bio: 'Plus de 28 années de direction de sociétés de négoce international multi-produits, financements structurés et corridors d’importation bilatéraux entre Amérique du Nord, Europe et Afrique Centrale.',
    credentials: ['MBA Columbia Business School', 'Comité Maritime International CCI', 'Fellow en Logistique Mondiale']
  },
  {
    ...TEAM_MEMBERS[1],
    role: 'Directeur Général, Opérations Afrique Centrale',
    bio: 'Pionnier du Terminal Portuaire de Douala et des corridors CEMAC fort de 22 ans d’expérience dans le dédouanement accéléré, l’élimination des surestaries et les parcs logistiques régionaux.',
    credentials: ['Ancien Conseiller au Conseil National des Chargeurs du Cameroun', 'Spécialiste Opérations Portuaires Douala']
  },
  {
    ...TEAM_MEMBERS[2],
    role: 'Vice-Présidente, Sourcing Textile Européen & Matières Premières',
    bio: 'Supervise les contrats pluriannuels avec plus de 40 centres de tri et filières de recyclage textile en Belgique, Allemagne, Royaume-Uni et Pays-Bas.',
    credentials: ['Conseil d’Administration Textile Européen', 'Master Supply Chain Internationale']
  },
  {
    ...TEAM_MEMBERS[3],
    role: 'Directeur des Corridors Agro-Alimentaires Amérique Latine',
    bio: 'Dirige les acquisitions directes auprès des silos de la Pampa argentine, les audits phytosanitaires SENASA et l’affrètement maritime transatlantique.',
    credentials: ['Membre de la Bourse des Céréales de Buenos Aires', 'Ingénieur Agronome Université de Córdoba']
  },
  {
    ...TEAM_MEMBERS[4],
    role: 'Directeur de la Conformité & Logistique Maritime',
    bio: 'Gère le suivi conteneurisé, les attestations BIVAC/SGS, l’optimisation douanière et le convoyage routier sécurisé à travers la zone CEMAC.',
    credentials: ['Commissionnaire Agréé en Douane (Cameroun)', 'Spécialiste Droit Maritime, Université de Douala']
  }
];

export const FRENCH_PARTNERS_LIST: PartnerOrg[] = [
  {
    ...PARTNERS_LIST[0],
    role: 'Partenaire Industriel Exclusif & Franchise d’Importation Agréée au Cameroun',
    verifiedStatus: 'Contrat d’Usine Direct Exclusif'
  },
  {
    ...PARTNERS_LIST[1],
    role: 'Approvisionnement Direct Silos & Certification Non-OGM',
    verifiedStatus: 'Affilié Exportateur Céréalier Agréé'
  },
  {
    ...PARTNERS_LIST[2],
    role: 'Sourcing de Balles de Friperie & Chaussures Triées Grade A Européen',
    verifiedStatus: 'Réseau de Collecte Agréé UE'
  },
  {
    ...PARTNERS_LIST[3],
    role: 'Inspections Obligatoires Avant Expédition, Scellés & Déclarations d’Importation',
    verifiedStatus: 'Inspecteur Indépendant Agréé'
  },
  {
    ...PARTNERS_LIST[4],
    role: 'Principaux Armateurs Maritimes Long-Courriers vers le Port de Douala & Kribi',
    verifiedStatus: 'Accords de Cale Réservée'
  },
  {
    ...PARTNERS_LIST[5],
    role: 'Crédits Documentaires Institutionnels (L/C) & Cautions Commerciales Structurées',
    verifiedStatus: 'Ligne de Crédit Directe Tier 1'
  }
];

export const FRENCH_KEY_COMPANY_STATS = [
  {
    value: '$120M+',
    label: 'Flux Commercial Annuel',
    subtext: 'Capacité institutionnelle d’importation en Afrique Centrale'
  },
  {
    value: '100% Exclusif',
    label: 'Double A Cameroun',
    subtext: 'Droits souverains d’importation et distribution officielle'
  },
  {
    value: '14 500+ EVP',
    label: 'Conteneurs Maritimes Traités',
    subtext: 'Dédouanement rapide sans surestaries au Port de Douala'
  },
  {
    value: '4 Piliers Majeurs',
    label: 'Filières d’Importation',
    subtext: 'Papier, Pop-corn Argentin, Friperie Européenne & Plâtre'
  }
];

// Localized helper getters
export function getHeroSlides(lang: Language): CarouselSlide[] {
  return lang === 'fr' ? FRENCH_HERO_SLIDES : HERO_SLIDES;
}

export function getCommodityItems(lang: Language): CommodityItem[] {
  return lang === 'fr' ? FRENCH_COMMODITY_ITEMS : COMMODITY_ITEMS;
}

export function getShippingLanes(lang: Language): ShippingLane[] {
  return lang === 'fr' ? FRENCH_SHIPPING_LANES : SHIPPING_LANES;
}

export function getClientProfiles(lang: Language): ClientProfile[] {
  return lang === 'fr' ? FRENCH_CLIENT_PROFILES : CLIENT_PROFILES;
}

export function getTeamMembers(lang: Language): TeamMember[] {
  return lang === 'fr' ? FRENCH_TEAM_MEMBERS : TEAM_MEMBERS;
}

export function getPartnersList(lang: Language): PartnerOrg[] {
  return lang === 'fr' ? FRENCH_PARTNERS_LIST : PARTNERS_LIST;
}

export function getKeyCompanyStats(lang: Language): { value: string; label: string; subtext: string }[] {
  return lang === 'fr' ? FRENCH_KEY_COMPANY_STATS : KEY_COMPANY_STATS;
}

export const getKeyStats = getKeyCompanyStats;
