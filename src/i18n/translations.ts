import { Language } from '../types';

export interface Translations {
  // Navigation & General
  nav: {
    home: string;
    supply: string;
    logistics: string;
    about: string;
    clients: string;
    team: string;
    partners: string;
    contact: string;
    rfqButton: string;
    directDesk: string;
    language: string;
    currencyGuarantee: string;
    portTime: string;
  };
  // Premier Dark Hero
  darkHero: {
    badgeStandard: string;
    badgeGateway: string;
    subheading: string;
    headlinePart1: string;
    headlinePart2: string;
    description: string;
    btnExplore: string;
    btnRFQ: string;
    btnLogistics: string;
    statVolumeLabel: string;
    statVolumeDesc: string;
    statPillarsLabel: string;
    statPillarsDesc: string;
    statDemurrageLabel: string;
    statDemurrageDesc: string;
    statDirectLabel: string;
    statDirectDesc: string;
    tickerPort: string;
    tickerDoubleA: string;
    tickerPopcorn: string;
    tickerTextiles: string;
    tickerPlaster: string;
    tickerAssay: string;
  };
  // 4-Pillars Carousel Section
  carousel: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    btnSpecs: string;
    btnInquire: string;
    slideCounter: string;
    badgeCorridors: string;
    badgeHub: string;
    headingPart1: string;
    headingPart2: string;
    subheading: string;
    btnFullSpecs: string;
    btnRequestAllocation: string;
    containerLoadability: string;
    sgsAssayed: string;
  };
  // Home Page sections
  home: {
    pillarsTag: string;
    pillarsHeading: string;
    pillarsDescription: string;
    viewAllSpecs: string;
    btnViewSpecs: string;
    btnInquireFcl: string;
    logisticsTag: string;
    logisticsHeading: string;
    logisticsDescription: string;
    btnLogisticsCorridors: string;
    shippingLanesTitle: string;
    liveSchedulesBadge: string;
    clientNetworkTag: string;
    clientNetworkHeading: string;
    clientNetworkDesc: string;
    btnViewAllClients: string;
    ctaTag: string;
    ctaHeading: string;
    ctaDescription: string;
    btnSubmitRfq: string;
    btnBrowseProducts: string;
  };
  // Supply Page
  supply: {
    breadcrumb: string;
    eyebrow: string;
    title: string;
    subtitle: string;
    allFilter: string;
    downloadSuccess: string;
    verifiedAssay: string;
    technicalSpecs: string;
    containerPayload: string;
    packagingType: string;
    moq: string;
    incoterms: string;
    btnDownloadSpec: string;
    btnFullDetails: string;
    btnRequestAllocation: string;
    customBespokeTitle: string;
    customBespokeSubtitle: string;
    btnCommercialDesk: string;
  };
  // Logistics Page
  logistics: {
    breadcrumb: string;
    eyebrow: string;
    title: string;
    subtitle: string;
    simEyebrow: string;
    simTitle: string;
    simStandard: string;
    selectCorridor: string;
    selectHub: string;
    demurrageShieldTitle: string;
    demurrageShieldDesc: string;
    summaryTitle: string;
    loadingOrigin: string;
    oceanCarrier: string;
    containerStowage: string;
    mandatoryAssays: string;
    inlandMode: string;
    totalEstimatedTime: string;
    btnBookSlot: string;
    lanesEyebrow: string;
    lanesTitle: string;
    avgTransit: string;
    protocolEyebrow: string;
    protocolTitle: string;
    protocolDesc: string;
    step1Title: string;
    step1Desc: string;
    step2Title: string;
    step2Desc: string;
    step3Title: string;
    step3Desc: string;
    step4Title: string;
    step4Desc: string;
    baseOffice: string;
    btnConsultOfficer: string;
  };
  // About Page
  about: {
    breadcrumb: string;
    eyebrow: string;
    title: string;
    subtitle: string;
    storyTitle: string;
    storyP1: string;
    storyP2: string;
    storyP3: string;
    capacityLabel: string;
    directLabel: string;
    dualDesks: string;
    charterEyebrow: string;
    charterTitle: string;
    c1Title: string;
    c1Desc: string;
    c2Title: string;
    c2Desc: string;
    c3Title: string;
    c3Desc: string;
    c4Title: string;
    c4Desc: string;
    esgEyebrow: string;
    esgTitle: string;
    esgSubtitle: string;
    esg1Title: string;
    esg1Desc: string;
    esg2Title: string;
    esg2Desc: string;
    esg3Title: string;
    esg3Desc: string;
    headquartersInfo: string;
    btnContactLeadership: string;
  };
  // Clients Page
  clients: {
    breadcrumb: string;
    eyebrow: string;
    title: string;
    subtitle: string;
    doualaHubTitle: string;
    doualaHubDesc: string;
    westTitle: string;
    westDesc: string;
    northTitle: string;
    northDesc: string;
    cemacTitle: string;
    cemacDesc: string;
    casesEyebrow: string;
    casesTitle: string;
    eligibilityEyebrow: string;
    eligibilityTitle: string;
    eligibilitySubtitle: string;
    e1Title: string;
    e1Desc: string;
    e2Title: string;
    e2Desc: string;
    e3Title: string;
    e3Desc: string;
    deskContact: string;
    btnOpenAccount: string;
  };
  // Team Page
  team: {
    breadcrumb: string;
    eyebrow: string;
    title: string;
    subtitle: string;
    btnConsult: string;
    complianceEyebrow: string;
    complianceTitle: string;
    complianceSubtitle: string;
    comp1Title: string;
    comp1Desc: string;
    comp2Title: string;
    comp2Desc: string;
    comp3Title: string;
    comp3Desc: string;
  };
  // Partners Page
  partners: {
    breadcrumb: string;
    eyebrow: string;
    title: string;
    subtitle: string;
    exclusiveBadge: string;
    exclusiveTitle: string;
    exclusiveDesc: string;
    directContract: string;
    antiCounterfeit: string;
    stockContinuity: string;
    networkEyebrow: string;
    networkTitle: string;
    financeEyebrow: string;
    financeTitle: string;
    financeSubtitle: string;
    fin1Title: string;
    fin1Desc: string;
    fin2Title: string;
    fin2Desc: string;
    fin3Title: string;
    fin3Desc: string;
    deskEmail: string;
    btnRequestFinance: string;
  };
  // Contact & RFQ Page
  contact: {
    breadcrumb: string;
    eyebrow: string;
    title: string;
    subtitle: string;
    confirmedTitle: string;
    refLabel: string;
    allocatedCommodity: string;
    consignmentVolume: string;
    deliveryIncoterm: string;
    dischargePort: string;
    registeredTo: string;
    statusAssigned: string;
    confirmedBody: string;
    btnCopyRef: string;
    btnCopied: string;
    btnPrint: string;
    btnSubmitNew: string;
    formEyebrow: string;
    formTitle: string;
    stepCommodity: string;
    stepVolume: string;
    stepIncoterm: string;
    stepDischarge: string;
    stepCertificates: string;
    companyName: string;
    contactName: string;
    corporateEmail: string;
    phoneNumber: string;
    specialNotes: string;
    btnSubmitRFQ: string;
    btnSubmit: string;
    ncndaNotice: string;
    doualaDeskTitle: string;
    doualaDeskDesc: string;
    workingHoursLabel: string;
    workingHoursVal: string;
    nyTitle: string;
    antwerpTitle: string;
    buenosAiresTitle: string;
    exclusiveNoticeTitle: string;
    exclusiveNoticeBody: string;
  };
  // Modal
  modal: {
    origin: string;
    targetDischarge: string;
    hsCode: string;
    packagingAndPayload: string;
    capacity: string;
    packaging: string;
    moq: string;
    incoterms: string;
    techVerification: string;
    qualityAssays: string;
    inspection: string;
    btnClose: string;
    btnRequestAllocation: string;
  };
  // Footer
  footer: {
    soleDistributorBadge: string;
    tagline: string;
    brandDesc: string;
    navigationHeader: string;
    commoditiesHeader: string;
    corporateHeader: string;
    doualaHubHeader: string;
    colPillars: string;
    colInstitutional: string;
    colDesks: string;
    allRightsReserved: string;
    antiFraudDisclaimer: string;
    compliancePill: string;
    copyright: string;
  };
}

export const TRANSLATIONS: Record<Language, Translations> = {
  en: {
    nav: {
      home: 'Home',
      supply: 'Supply & Commodities',
      logistics: 'Logistics & Corridors',
      about: 'About Company',
      clients: 'Clients & Network',
      team: 'Leadership',
      partners: 'Strategic Partners',
      contact: 'Requisition (RFQ)',
      rfqButton: 'Request Consignment',
      directDesk: 'Douala Commercial Desk: +237 233 42 88 19',
      language: 'Language',
      currencyGuarantee: 'Zero Intermediary Brokerage • Port of Douala Priority Berthing',
      portTime: 'Douala Port Terminal: Active'
    },
    darkHero: {
      badgeStandard: 'American Institutional Standard',
      badgeGateway: 'Douala Port Maritime Gateway',
      subheading: 'Sofomeutex Institutional Commodity Trading',
      headlinePart1: 'Sovereign Transatlantic',
      headlinePart2: 'Import Corridors',
      description: 'Sole accredited distributor of Double A Paper in Cameroon, alongside direct volume allocations for Argentine gourmet popcorn, sorted European textiles, high-purity construction gypsum plaster, and factory-direct home refrigeration appliances.',
      btnExplore: 'Explore Five Core Pillars',
      btnRFQ: 'Consignment Requisition (RFQ)',
      btnLogistics: 'Douala Shipping Lanes',
      statVolumeLabel: 'Bilateral Trade Volume',
      statVolumeDesc: 'Direct mill financing & confirmed LC facilities.',
      statPillarsLabel: 'Dedicated Verticals',
      statPillarsDesc: 'Exclusive Double A paper, grains, European apparel, plaster, appliances.',
      statDemurrageLabel: 'Port Demurrage Shield',
      statDemurrageDesc: 'Guaranteed 21-day free terminal time at the Port of Douala (PAD).',
      statDirectLabel: 'Zero Broker Markup',
      statDirectDesc: 'Direct allocations from Bangkok, Buenos Aires & Antwerp.',
      tickerPort: 'PORT OF DOUALA (DIT/PAD): Direct Berthing Priority Active',
      tickerDoubleA: 'DOUBLE A 80 GSM: Exclusive Cameroon Mill Allocation Confirmed',
      tickerPopcorn: 'ARGENTINE POPCORN: Santa Fe / Córdoba Harvest — 44+ Expansion Certified',
      tickerTextiles: 'EUROPEAN BALES: Antwerp & Rotterdam Original Cream / Grade A Sorted',
      tickerPlaster: 'INDUSTRIAL GYPSUM: 99.2% Pure Hemihydrate EN 13279-1 Standard',
      tickerAssay: 'ASSAY PROTOCOL: SGS Pre-Shipment & BIVAC Import Declaration Validated'
    },
    carousel: {
      eyebrow: 'Exclusive Distribution & Strategic Agro-Industrial Lines',
      headline: 'Global Import Excellence, Tailored for Central Africa.',
      subheadline: 'Sole authorized importer of Double A Paper in Cameroon, paired with direct volume supply lines for Argentine popcorn, sorted European textiles, high-grade industrial gypsum plaster, and factory-direct home appliances.',
      btnSpecs: 'Specifications',
      btnInquire: 'Inquire FCL',
      slideCounter: 'Pillar',
      badgeCorridors: 'Strategic Import Corridors',
      badgeHub: 'Port of Douala Hub',
      headingPart1: 'The Five Sovereign Pillars of',
      headingPart2: 'Wholesale Importation',
      subheading: 'Institutional-scale ocean consignments delivered into the Port of Douala and Central Africa. Direct mill allocations with authenticated certificates of origin.',
      btnFullSpecs: 'Technical Specifications',
      btnRequestAllocation: 'Request Container Allocation',
      containerLoadability: 'Standard FCL Loadability',
      sgsAssayed: 'SGS / BIVAC Assayed at Origin Port'
    },
    home: {
      pillarsTag: 'Core Import Lines',
      pillarsHeading: 'Direct Mill & Origin Allocations',
      pillarsDescription: 'Five dedicated global commodities imported directly into the Port of Douala for institutional distributors, national printers, and industrial processors.',
      viewAllSpecs: 'View Full Catalog',
      btnViewSpecs: 'View Specifications',
      btnInquireFcl: 'Inquire Container Allocation',
      logisticsTag: 'Maritime Corridor Control',
      logisticsHeading: 'Port of Douala Gateway & Bonded Transit',
      logisticsDescription: 'Direct berthing agreements, 21-day demurrage exemptions, and certified CEMAC bonded corridors extending into Chad and the Central African Republic.',
      btnLogisticsCorridors: 'Explore Shipping Corridors',
      shippingLanesTitle: 'Active Liner Corridors & Schedules',
      liveSchedulesBadge: 'Live Liner Commitments',
      clientNetworkTag: 'Institutional Trust',
      clientNetworkHeading: 'Supplying Central Africa’s Market Leaders',
      clientNetworkDesc: 'Audited wholesale supply agreements with premier packaging conglomerates, national publishing houses, and regional trade distributors.',
      btnViewAllClients: 'Explore Institutional Network',
      ctaTag: 'Procurement Desk',
      ctaHeading: 'Ready to Lock In FCL Container Allocation?',
      ctaDescription: 'Direct mill prices under CIF Douala or CIP inland terminals. Issued under verified commercial invoices with comprehensive inspection documentation.',
      btnSubmitRfq: 'Submit Container Requisition',
      btnBrowseProducts: 'View Import Specifications'
    },
    supply: {
      breadcrumb: 'Import Supply & Core Commodities',
      eyebrow: 'Institutional Wholesale Portfolio',
      title: 'Five Sovereign Import Pillars',
      subtitle: 'Wholesale containerized consignments delivered into the Port of Douala under ICC Incoterms® 2020. Free of retail intermediary markups with direct mill allocations.',
      allFilter: 'All Commodities',
      downloadSuccess: 'Official Technical Spec Sheet has been prepared for download.',
      verifiedAssay: 'SGS Verified Spec',
      technicalSpecs: 'Certified Technical Assay Parameters',
      containerPayload: 'Container Payload',
      packagingType: 'Packaging Type',
      moq: 'Minimum Order Quantity',
      incoterms: 'Discharge Incoterms',
      btnDownloadSpec: 'Download Spec Sheet (PDF)',
      btnFullDetails: 'Full Details',
      btnRequestAllocation: 'Request Container Allocation',
      customBespokeTitle: 'Looking for Bespoke Container Cargo Configurations?',
      customBespokeSubtitle: 'We structure custom split-loads, private label packaging, and inland door delivery for major wholesalers across Cameroon, Chad, and Central Africa.',
      btnCommercialDesk: 'Direct Commercial Desk'
    },
    logistics: {
      breadcrumb: 'Logistics & Maritime Corridors',
      eyebrow: 'Douala Maritime Operations Desk',
      title: 'Bilateral Shipping Lanes & Inland Transit',
      subtitle: 'Managing ocean liner slot commitments with Maersk, CMA CGM, and MSC, guaranteeing priority berthing at the Port of Douala and frictionless CEMAC cross-border transport.',
      simEyebrow: 'Direct Route Simulator',
      simTitle: 'Landed Container Transit Estimator',
      simStandard: 'ICC Incoterms® 2020 Validated',
      selectCorridor: 'Select Import Commodity Corridor',
      selectHub: 'Select Central Africa Discharge Hub',
      demurrageShieldTitle: 'Demurrage-Free Shield Guarantee',
      demurrageShieldDesc: 'All shipments into the Port of Douala enjoy negotiated 21-day container demurrage grace periods, eliminating hidden terminal storage charges.',
      summaryTitle: 'Routing Summary',
      loadingOrigin: 'Loading Port of Origin:',
      oceanCarrier: 'Ocean Transit Line:',
      containerStowage: 'Container Stowing:',
      mandatoryAssays: 'Mandatory Assays:',
      inlandMode: 'Inland Transport Mode:',
      totalEstimatedTime: 'Total Door-to-Depot Est.',
      btnBookSlot: 'Book Vessel Slot',
      lanesEyebrow: 'Global Liner Operations',
      lanesTitle: 'Active Maritime Corridors into Port of Douala',
      avgTransit: 'Days Average Sea Transit',
      protocolEyebrow: 'Sovereign Clearing Infrastructure',
      protocolTitle: 'The 4-Step Rapid Port Discharge Protocol',
      protocolDesc: 'How Sofomeutex guarantees container integrity, zero cargo damage, and expedited customs release at Douala Port Terminal (PAD/DIT).',
      step1Title: 'Pre-Arrival SGS / BIVAC Filing',
      step1Desc: 'Import Declaration (DI) and SGS clean report of findings (AV/CRF) processed 5 days before vessel docking.',
      step2Title: 'Berth Disembarkation & Gantry Move',
      step2Desc: 'Containers lifted directly from vessel holds to our pre-cleared bonded transport skids under customs seal.',
      step3Title: 'Akwa Bonded Warehouse Staging',
      step3Desc: 'Cargo staged in climate-controlled security depots in Akwa, Douala, preventing rain exposure to paper and grains.',
      step4Title: 'Inland Escort & Regional Discharge',
      step4Desc: 'Dedicated multi-axle freight trucks escorted to customer warehouses across Cameroon, Chad, or Central African Republic.',
      baseOffice: 'Operations Base: Boulevard de la Liberté, Akwa, Douala, Cameroon',
      btnConsultOfficer: 'Consult Logistics Officer'
    },
    about: {
      breadcrumb: 'About Company & Heritage',
      eyebrow: 'Corporate Heritage & Governance',
      title: 'Institutional Trade Integrity, Built Over Three Decades',
      subtitle: 'Founded on the principles of American institutional corporate governance and sovereign African distribution strength, Sofomeutex links top-tier global manufacturers directly with enterprise buyers in Cameroon and Central Africa.',
      storyTitle: 'Thirty Years of Bridging Continents Through Direct Mill & Farm Contracts',
      storyP1: 'Sofomeutex was founded 30 years ago in Douala by Fokui Meudje Jean, starting as a single trading desk determined to fix what traditional commodity trading in Central Africa had long suffered from: informal brokerage chains, inconsistent grading, and unpredictable maritime delays. Three decades later, that founding desk has grown into a multi-commodity import house serving distributors across the region.',
      storyP2: 'By securing the exclusive Cameroon distribution rights for Double A Paper, we proved that high-performance, world-class products can be delivered directly from Bangkok to Douala with guaranteed zero paper jams and continuous stock availability.',
      storyP3: 'We replicated that identical institutional model across our other core verticals: working directly with the Argentine Popcorn Chamber (CAPPEC), premier textile recycling consortia in Western Europe, high-purity gypsum kilns in the Mediterranean basin, and certified appliance manufacturers in Guangzhou.',
      capacityLabel: 'Annual Sourcing Capacity',
      directLabel: 'Zero Broker Markups',
      dualDesks: 'Founded in Douala, Trading Across Five Continents',
      charterEyebrow: 'Our Operating Charter',
      charterTitle: 'The Four Cornerstones of Sofomeutex',
      c1Title: 'Exclusive Authorization',
      c1Desc: 'We only trade products where we possess exclusive direct mill representation, such as Double A paper in Cameroon, eliminating counterfeit or degraded lots.',
      c2Title: 'SGS Pre-Shipment Assays',
      c2Desc: 'Every container is sealed under independent surveyor supervision (SGS / BIVAC / SENASA). Inspection certificates are furnished prior to freight release.',
      c3Title: 'Port Demurrage Shield',
      c3Desc: 'By maintaining master container contracts with Maersk and CMA CGM, we secure 21-day free demurrage periods at the Port of Douala for all clients.',
      c4Title: 'Documentary Letter of Credit',
      c4Desc: 'Full adherence to ICC UCP 600 standards for documentary credits, supported by tier-one partner banks including BICEC, Ecobank, and Citibank.',
      esgEyebrow: 'ESG & Environmental Stewardship',
      esgTitle: 'Ethical Forestry, Food Safety & Circular Textile Economy',
      esgSubtitle: 'We insist that every commodity we import into Central Africa aligns with progressive international standards:',
      esg1Title: 'Farmed Trees Double A Model',
      esg1Desc: 'Double A paper utilizes high-fiber trees cultivated on the unused ridges between rice paddies, creating rural jobs with zero natural forest logging.',
      esg2Title: 'Non-GMO Argentine Grain',
      esg2Desc: 'Our popcorn grains are grown with precision irrigation in Argentina under SENASA surveillance, completely free from genetic modifications.',
      esg3Title: 'Circular European Fashion',
      esg3Desc: 'Our second-hand textiles give a second life to high-grade European garments, keeping thousands of tons of fabrics out of landfills while providing affordable attire.',
      headquartersInfo: 'Headquartered in Douala, Cameroon • International Liaison Office in New York',
      btnContactLeadership: 'Contact Leadership'
    },
    clients: {
      breadcrumb: 'Institutional Clients & Distribution',
      eyebrow: 'Continental Distribution Footprint',
      title: 'Powering Central Africa’s Commercial Backbone',
      subtitle: 'We supply national distributors, printing presses, wholesale trade syndicates, industrial snack manufacturers, and construction contractors with guaranteed containerized volume.',
      doualaHubTitle: 'Douala & Yaoundé',
      doualaHubDesc: 'Serving Marché Central Douala, Marché Mokolo Yaoundé, Akwa business district, and industrial Bonabéri.',
      westTitle: 'Bafoussam & Bamenda',
      westDesc: 'Weekly flatbed distribution to major agricultural and textile merchant associations in the West region.',
      northTitle: 'Garoua & N’Djamena',
      northDesc: 'Bonded container transit onward through the Trans-Cameroonian rail network to northern depots and Chad.',
      cemacTitle: 'Bangui, CAR & Gabon',
      cemacDesc: 'Cross-border export corridors supplying government tenders, stationery chains, and building contractors.',
      casesEyebrow: 'Verified Wholesale Case Studies',
      casesTitle: 'Endorsements from Key Sector Leaders',
      eligibilityEyebrow: 'Institutional Eligibility',
      eligibilityTitle: 'How to Become a Certified Sofomeutex Wholesale Partner',
      eligibilitySubtitle: 'To protect the brand integrity of our exclusive commodities (particularly Double A paper in Cameroon), we work exclusively with verified wholesale buyers.',
      e1Title: '01. Entity Verification',
      e1Desc: 'Registered commercial enterprise with valid Cameroon RCCM or CEMAC corporate registration credentials.',
      e2Title: '02. Volume Commitment',
      e2Desc: 'Minimum order capacity of 1x 20ft / 40ft High Cube container or scheduled monthly warehouse allocations.',
      e3Title: '03. Trade Settlement',
      e3Desc: 'Settlement via confirmed Documentary Letter of Credit (L/C), bank guarantee, or approved treasury credit terms.',
      deskContact: 'Commercial Desk: Akwa, Douala • Tel: +237 233 42 88 19',
      btnOpenAccount: 'Open Wholesale Trade Account'
    },
    team: {
      breadcrumb: 'Leadership & Executive Governance',
      eyebrow: 'Executive Governance',
      title: 'International Trade Leadership',
      subtitle: 'Our executive board unites veteran international trade financiers, agricultural agronomists, and Port of Douala maritime operations specialists.',
      btnConsult: 'Request Executive Consultation',
      complianceEyebrow: 'Compliance & Ethics',
      complianceTitle: 'American Compliance Standards with Local African Execution',
      complianceSubtitle: 'Every executive decision is governed by rigorous trade transparency charters:',
      comp1Title: 'Anti-Corruption & FCPA',
      comp1Desc: 'Full compliance with the U.S. Foreign Corrupt Practices Act (FCPA) and Cameroon Anti-Corruption Commission (CONAC) regulations.',
      comp2Title: 'Sanctions & AML Screening',
      comp2Desc: 'Every trade transaction undergoes automated OFAC, EU, and UN sanctions list screening before container bills of lading are issued.',
      comp3Title: 'Escrow & LC Protection',
      comp3Desc: 'Client deposits and letters of credit are held in dedicated trust facilities through regulated banking partners (BICEC, Ecobank, Citibank).'
    },
    partners: {
      breadcrumb: 'Strategic Alliances & Mill Partners',
      eyebrow: 'Sovereign Global Alliances',
      title: 'Direct Relationships with the World’s Leading Mills & Boards',
      subtitle: 'We eliminate speculative commodity trading by operating under long-term bilateral supply agreements with certified global producers and accredited maritime carriers.',
      exclusiveBadge: 'Sovereign Distribution Agreement',
      exclusiveTitle: 'Exclusive Double A Copier Paper Franchise in the Republic of Cameroon',
      exclusiveDesc: 'Sofomeutex holds the exclusive bilateral import charter for genuine Double A A4 80 GSM and 75 GSM paper produced by Double A (1991) Public Co. Ltd. in Thailand. Every ream delivered in Cameroon is backed by mill-direct serial numbers, moisture-proof seal verification, and 24/7 zero-jam runnability guarantees.',
      directContract: 'Direct Thailand Mill Contract',
      antiCounterfeit: 'Anti-Counterfeit Authentication',
      stockContinuity: 'Stock Continuity at Port of Douala',
      networkEyebrow: 'Institutional Network',
      networkTitle: 'Verified Global Institutional Partners',
      financeEyebrow: 'Trade Finance',
      financeTitle: 'Letter of Credit (LC) & Banking Settlement Facilities',
      financeSubtitle: 'We structure multi-million dollar import transactions via regulated documentary credits, protecting buyers and sellers under International Chamber of Commerce (ICC) uniform customs:',
      fin1Title: 'Documentary Credits (UCP 600)',
      fin1Desc: 'Irrevocable, confirmed Letters of Credit issued through BICEC, Ecobank, Citibank, or Société Générale.',
      fin2Title: 'Marine Insurance (Clauses A)',
      fin2Desc: 'Comprehensive Institute Cargo Clauses (A) insuring 110% of CIF value against all maritime and container damage risks.',
      fin3Title: 'Bonded Release & Bill of Lading',
      fin3Desc: 'Original ocean Bills of Lading (3/3 set) surrendered directly to buyer upon port clearance authorization.',
      deskEmail: 'Institutional Trade Desk: trade@wardiere.com',
      btnRequestFinance: 'Request Trade Finance Terms'
    },
    contact: {
      breadcrumb: 'Institutional RFQ & Contact Desk',
      eyebrow: 'Containerized Requisition Portal',
      title: 'Request Wholesale Consignment Allocation',
      subtitle: 'Direct institutional ordering for exclusive Double A A4 copier paper in Cameroon, Argentine popcorn, sorted European clothing and footwear bales, and high-purity construction gypsum plaster.',
      confirmedTitle: 'Consignment Requisition Successfully Registered',
      refLabel: 'Official Reference:',
      allocatedCommodity: 'Allocated Commodity:',
      consignmentVolume: 'Consignment Volume:',
      deliveryIncoterm: 'Delivery Incoterm:',
      dischargePort: 'Discharge Port:',
      registeredTo: 'Registered to:',
      statusAssigned: 'Status: Assigned to Douala Port Commercial Desk',
      confirmedBody: 'Our trade finance director in Douala has received your requisition. A customized Proforma Consignment Schedule and SGS assay sheet will be transmitted to your corporate email within 4 business hours.',
      btnCopyRef: 'Copy Reference ID',
      btnCopied: 'Copied Reference!',
      btnPrint: 'Print Requisition Sheet',
      btnSubmitNew: 'Submit New Requisition',
      formEyebrow: 'Documentary Requisition Form',
      formTitle: 'Proforma Consignment Request',
      stepCommodity: '1. Select Commodity Allocation Pillar *',
      stepVolume: '2. Volume (Full Container Loads - FCL) *',
      stepIncoterm: '3. Preferred Delivery Incoterms® 2020 *',
      stepDischarge: '4. Discharge Port or Delivery Destination *',
      stepCertificates: '5. Required Assays & Quality Assurances (Select Applicable)',
      companyName: 'Company Legal Name *',
      contactName: 'Procurement Officer / Contact Name *',
      corporateEmail: 'Corporate Email *',
      phoneNumber: 'Phone / WhatsApp Number *',
      specialNotes: 'Special Cargo Handling or Delivery Schedule Notes',
      btnSubmitRFQ: 'Generate Official Consignment Requisition',
      btnSubmit: 'Submit Requisition & Lock Allocation',
      ncndaNotice: 'Protected by ICC Non-Circumvention and Non-Disclosure Agreement (NCNDA).',
      doualaDeskTitle: 'Douala Maritime Hub',
      doualaDeskDesc: 'Central Africa Regional Directorate handling port clearance, container freight stations, and CEMAC overland freight.',
      workingHoursLabel: 'Working Hours:',
      workingHoursVal: 'Mon – Sat: 08:00 – 18:00 WAT',
      nyTitle: 'New York Liaison Office',
      antwerpTitle: 'European Textile Desk (Antwerp)',
      buenosAiresTitle: 'Latin America Agro Desk (Buenos Aires)',
      exclusiveNoticeTitle: 'Exclusive Guarantee',
      exclusiveNoticeBody: 'As the sole official importer of Double A Paper in Cameroon, every ream is laser-scanned with factory authentication seals. Direct mill certification furnished with all ocean deliveries.'
    },
    modal: {
      origin: 'Origin',
      targetDischarge: 'Target Discharge',
      hsCode: 'HS Code',
      packagingAndPayload: 'Packaging & Payload Specifications',
      capacity: 'Capacity',
      packaging: 'Packing',
      moq: 'Minimum Order (MOQ)',
      incoterms: 'Incoterms',
      techVerification: 'Technical Verification & Assay Metrics',
      qualityAssays: 'Factory Mill & Quality Assays:',
      inspection: 'Independent Inspection:',
      btnClose: 'Close Overview',
      btnRequestAllocation: 'Request Container Allocation (RFQ)'
    },
    footer: {
      soleDistributorBadge: 'Exclusive Importer of Double A Paper in Cameroon',
      tagline: 'Sofomeutex is a premier transatlantic trading house operating high-volume containerized import corridors into the Port of Douala and the Central African Economic and Monetary Community (CEMAC).',
      brandDesc: 'Sofomeutex is an American-standard transatlantic trading house operating high-volume containerized import corridors into the Port of Douala and the Central African Economic and Monetary Community (CEMAC).',
      navigationHeader: 'Institutional Navigation',
      commoditiesHeader: 'Core Import Pillars',
      corporateHeader: 'Corporate Governance',
      doualaHubHeader: 'Central Africa Logistics Hub',
      colPillars: 'Core Import Pillars',
      colInstitutional: 'Institutional Navigation',
      colDesks: 'Regional Trading Desks',
      allRightsReserved: 'All rights reserved. Sole authorized importer of Double A Paper in the Republic of Cameroon.',
      antiFraudDisclaimer: 'Trading governed by ICC Incoterms® 2020 and documentary letters of credit under UCP 600. Counterfeiting of exclusive Double A paper is vigorously prosecuted under Cameroon penal law.',
      compliancePill: 'American Institutional Standard • Port of Douala Active',
      copyright: '© 2026 Sofomeutex All rights reserved. Exclusive Distributor of Double A Paper in Cameroon.'
    }
  },
  fr: {
    nav: {
      home: 'Accueil',
      supply: 'Importations & Produits',
      logistics: 'Logistique & Corridors',
      about: 'À Propos',
      clients: 'Clients & Réseau',
      team: 'Direction',
      partners: 'Partenaires Stratégiques',
      contact: 'Réquisitions (RFQ)',
      rfqButton: 'Commander Conteneur',
      directDesk: 'Bureau Commercial Douala: +237 233 42 88 19',
      language: 'Langue',
      currencyGuarantee: 'Zéro Intermédiaire Courtier • Accostage Prioritaire Port de Douala',
      portTime: 'Terminal Portuaire de Douala: Opérationnel'
    },
    darkHero: {
      badgeStandard: 'Standard Institutionnel Américain',
      badgeGateway: 'Passerelle Maritime Port de Douala',
      subheading: 'Sofomeutex Négoce Institutionnel de Matières Premières',
      headlinePart1: 'Corridors d’Importation',
      headlinePart2: 'Transatlantiques Souverains',
      description: 'Importateur exclusif agréé du Papier Double A au Cameroun, aux côtés de lignes d’approvisionnement directes pour le maïs à pop-corn d’Argentine, la friperie et chaussures européennes triées, le plâtre industriel haute pureté, et l’électroménager importé directement d’usine.',
      btnExplore: 'Découvrir les 5 Piliers',
      btnRFQ: 'Réquisition de Conteneur (RFQ)',
      btnLogistics: 'Lignes Maritimes Douala',
      statVolumeLabel: 'Flux Commercial Bilatéral',
      statVolumeDesc: 'Financement d’usine direct et crédits documentaires confirmés.',
      statPillarsLabel: 'Piliers Spécialisés',
      statPillarsDesc: 'Papier Double A exclusif, céréales, textile européen, plâtre, électroménager.',
      statDemurrageLabel: 'Bouclier de Surestaries',
      statDemurrageDesc: 'Garantie de 21 jours de franchise au Port de Douala (PAD).',
      statDirectLabel: 'Zéro Marge Intermédiaire',
      statDirectDesc: 'Allocations directes depuis Bangkok, Buenos Aires et Anvers.',
      tickerPort: 'PORT DE DOUALA (DIT/PAD): Accostage Prioritaire Actif',
      tickerDoubleA: 'DOUBLE A 80 GSM: Allocation Exclusive Usine Cameroun Confirmée',
      tickerPopcorn: 'POPCORN ARGENTIN: Récolte Santa Fe / Córdoba — Expansion 44+ Certifiée',
      tickerTextiles: 'BALLES EUROPÉENNES: Anvers & Rotterdam Tri Original Crème / Grade A',
      tickerPlaster: 'PLÂTRE INDUSTRIEL: 99.2% Pureté Hémihydrate Norme EN 13279-1',
      tickerAssay: 'PROTOCOLE CONTRÔLE: Inspection Avant Embarquement SGS & Déclaration BIVAC'
    },
    carousel: {
      eyebrow: 'Distribution Exclusive & Lignes Agro-Industrielles Stratégiques',
      headline: 'L’Excellence d’Importation Mondiale, Dédiée à l’Afrique Centrale.',
      subheadline: 'Seul importateur autorisé du Papier Double A au Cameroun, associé à des filières d’approvisionnement en gros pour le pop-corn d’Argentine, les textiles triés d’Europe, le plâtre industriel pur, et l’électroménager direct usine.',
      btnSpecs: 'Spécifications',
      btnInquire: 'Demander FCL',
      slideCounter: 'Pilier',
      badgeCorridors: 'Corridors Stratégiques d’Importation',
      badgeHub: 'Pôle Port de Douala',
      headingPart1: 'Les Cinq Piliers Souverains de',
      headingPart2: 'l’Importation de Gros',
      subheading: 'Expéditions maritimes à l’échelle institutionnelle livrées au Port de Douala et en Afrique Centrale. Allocations directes d’usine avec certificats d’origine authentifiés.',
      btnFullSpecs: 'Spécifications Techniques',
      btnRequestAllocation: 'Demander une Allocation de Conteneur',
      containerLoadability: 'Charge Utile FCL Standard',
      sgsAssayed: 'Contrôlé SGS / BIVAC au Port d’Origine'
    },
    home: {
      pillarsTag: 'Lignes d’Importation Clés',
      pillarsHeading: 'Allocations Directes Usines & Origines',
      pillarsDescription: 'Cinq matières premières mondiales importées directement au Port de Douala pour les distributeurs institutionnels, imprimeurs nationaux et transformateurs industriels.',
      viewAllSpecs: 'Consulter Tout le Catalogue',
      btnViewSpecs: 'Consulter les Spécifications',
      btnInquireFcl: 'Demander une Allocation Conteneur',
      logisticsTag: 'Maîtrise des Corridors Maritimes',
      logisticsHeading: 'Passerelle Port de Douala & Transit Sous Douane',
      logisticsDescription: 'Accords d’accostage direct, 21 jours de franchise de surestaries et corridors sous douane CEMAC certifiés vers le Tchad et la République Centrafricaine.',
      btnLogisticsCorridors: 'Explorer les Corridors Maritimes',
      shippingLanesTitle: 'Lignes Régulières Actives & Rotations',
      liveSchedulesBadge: 'Engagements de Cale en Direct',
      clientNetworkTag: 'Confiance Institutionnelle',
      clientNetworkHeading: 'Au Service des Leaders d’Afrique Centrale',
      clientNetworkDesc: 'Accords d’approvisionnement en gros vérifiés avec les conglomérats d’emballage, maisons d’édition nationales et grands distributeurs régionaux.',
      btnViewAllClients: 'Découvrir le Réseau Institutionnel',
      ctaTag: 'Bureau d’Approvisionnement',
      ctaHeading: 'Prêt à Sécuriser Votre Allocation de Conteneurs FCL ?',
      ctaDescription: 'Prix direct usine sous conditions CIF Douala ou CIP terminaux intérieurs. Émis sous facture commerciale authentifiée avec dossier d’inspection complet.',
      btnSubmitRfq: 'Soumettre une Réquisition de Conteneur',
      btnBrowseProducts: 'Consulter les Fiches Techniques'
    },
    supply: {
      breadcrumb: 'Approvisionnement & Matières Premières',
      eyebrow: 'Portefeuille Institutionnel de Gros',
      title: 'Cinq Piliers Souverains d’Importation',
      subtitle: 'Expéditions complètes en conteneurs FCL livrées au Port de Douala selon les Incoterms® 2020 de la CCI. Sans marge de revendeur avec allocation directe d’usine.',
      allFilter: 'Toutes les Marchandises',
      downloadSuccess: 'La fiche technique officielle a été générée pour téléchargement.',
      verifiedAssay: 'Spécification Certifiée SGS',
      technicalSpecs: 'Paramètres d’Analyses Techniques Certifiés',
      containerPayload: 'Charge Utile par Conteneur',
      packagingType: 'Conditionnement',
      moq: 'Quantité Minimale de Commande (MOQ)',
      incoterms: 'Incoterms de Déchargement',
      btnDownloadSpec: 'Télécharger Fiche Technique (PDF)',
      btnFullDetails: 'Détails Complets',
      btnRequestAllocation: 'Demander Allocation Conteneur',
      customBespokeTitle: 'Besoin d’une Configuration Spécifique de Conteneur ?',
      customBespokeSubtitle: 'Nous organisons des chargements combinés sur mesure, le conditionnement sous marque privée et la livraison terrestre pour les grands grossistes du Cameroun, du Tchad et de la CEMAC.',
      btnCommercialDesk: 'Bureau Commercial Direct'
    },
    logistics: {
      breadcrumb: 'Logistique & Corridors Maritimes',
      eyebrow: 'Direction des Opérations Maritimes de Douala',
      title: 'Lignes Maritimes Bilatérales & Transit Terrestre',
      subtitle: 'Gestion d’engagements de cale auprès de Maersk, CMA CGM et MSC, garantissant l’accostage prioritaire au Port de Douala et un transit transfrontalier fluide en zone CEMAC.',
      simEyebrow: 'Simulateur d’Itinéraire Direct',
      simTitle: 'Estimateur de Délais de Transit Conteneur',
      simStandard: 'Conforme aux Incoterms® 2020 de la CCI',
      selectCorridor: 'Sélectionner le Corridor d’Importation',
      selectHub: 'Sélectionner la Plateforme de Déchargement',
      demurrageShieldTitle: 'Garantie Bouclier Anti-Surestaries',
      demurrageShieldDesc: 'Toutes nos cargaisons vers le Port de Douala bénéficient d’une franchise négociée de 21 jours sans frais de stationnement au terminal.',
      summaryTitle: 'Synthèse du Routage',
      loadingOrigin: 'Port de Chargement d’Origine :',
      oceanCarrier: 'Compagnie Maritime :',
      containerStowage: 'Empotage du Conteneur :',
      mandatoryAssays: 'Analyses Obligatoires :',
      inlandMode: 'Mode de Transport Terrestre :',
      totalEstimatedTime: 'Délai Estimé Port-à-Dépôt',
      btnBookSlot: 'Réserver Espace Navire',
      lanesEyebrow: 'Opérations Maritimes Internationales',
      lanesTitle: 'Lignes Maritimes Actives vers le Port de Douala',
      avgTransit: 'Jours de Mer en Moyenne',
      protocolEyebrow: 'Infrastructures de Dédouanement Rapide',
      protocolTitle: 'Le Protocole Portuaire Accéléré en 4 Étapes',
      protocolDesc: 'Comment Sofomeutex garantit l’intégrité des conteneurs, zéro casse et une mainlevée douanière rapide au Terminal Portuaire de Douala (PAD/DIT).',
      step1Title: 'Enregistrement SGS / BIVAC Préalable',
      step1Desc: 'Déclaration d’Importation (DI) et attestation de vérification SGS (AV/CRF) traitées 5 jours avant l’accostage du navire.',
      step2Title: 'Débarquement Quai & Manutention Portique',
      step2Desc: 'Conteneurs déchargés directement des cales sur nos remorques sous scellés douaniers pré-autorisés.',
      step3Title: 'Entreposage Sous Douane à Akwa',
      step3Desc: 'Stockage sécurisé dans nos dépôts climatisés d’Akwa à Douala, protégeant papier et grains des intempéries.',
      step4Title: 'Escorte Terrestre & Livraison Régionale',
      step4Desc: 'Camions porte-conteneurs dédiés acheminés sous escorte vers les entrepôts clients au Cameroun, au Tchad ou en RCA.',
      baseOffice: 'Base Opérationnelle: Boulevard de la Liberté, Akwa, Douala, Cameroun',
      btnConsultOfficer: 'Consulter l’Officier Logistique'
    },
    about: {
      breadcrumb: 'Entreprise & Héritage',
      eyebrow: 'Héritage & Gouvernance Institutionnelle',
      title: 'L’Intégrité du Commerce International Depuis Trois Décennies',
      subtitle: 'Fondée sur les règles de gouvernance d’entreprise américaine et la puissance de distribution africaine, Sofomeutex relie directement les plus grands industriels mondiaux aux grossistes du Cameroun et d’Afrique Centrale.',
      storyTitle: 'Trente Ans à Rapprocher les Continents par des Contrats Directs d’Usine et de Terroir',
      storyP1: 'Sofomeutex a été fondée il y a 30 ans à Douala par Fokui Meudje Jean, à partir d’un simple bureau de négoce déterminé à corriger ce dont souffrait depuis trop longtemps le commerce traditionnel en Afrique Centrale : des chaînes de courtage opaques, des calibrages variables et des retards maritimes imprévisibles. Trente ans plus tard, ce bureau fondateur est devenu une maison d’importation multi-filières au service des distributeurs de toute la région.',
      storyP2: 'En obtenant les droits exclusifs de distribution du Papier Double A pour le Cameroun, nous avons démontré qu’un produit de classe mondiale peut être livré directement de Bangkok à Douala avec une garantie absolue anti-bourrage et une disponibilité continue.',
      storyP3: 'Nous avons reproduit ce modèle rigoureux sur nos autres filières : travail direct avec la Chambre Argentine du Popcorn (CAPPEC), les coopératives de tri textile d’Europe de l’Ouest, les carrières de gypse pur du bassin méditerranéen, et des fabricants d’électroménager certifiés à Guangzhou.',
      capacityLabel: 'Capacité d’Approvisionnement Annuelle',
      directLabel: 'Zéro Marge de Courtier',
      dualDesks: 'Fondée à Douala, Présente sur Cinq Continents',
      charterEyebrow: 'Notre Charte d’Exploitation',
      charterTitle: 'Les Quatre Piliers Fondateurs de Sofomeutex',
      c1Title: 'Autorisation Exclusive',
      c1Desc: 'Nous ne négocions que des produits dont nous détenons la représentation directe et exclusive, tel le papier Double A au Cameroun, éliminant les contrefaçons.',
      c2Title: 'Contrôles SGS Avant Expédition',
      c2Desc: 'Chaque conteneur est scellé sous la supervision d’experts indépendants (SGS / BIVAC / SENASA). Les certificats sont fournis avant libération du fret.',
      c3Title: 'Bouclier de Surestaries Portuaires',
      c3Desc: 'Grâce à nos contrats d’armement avec Maersk et CMA CGM, nous assurons 21 jours de franchise totale au Port de Douala pour nos acheteurs.',
      c4Title: 'Crédit Documentaire Garanti',
      c4Desc: 'Respect strict des règles RUU 600 de la CCI pour les lettres de crédit, adossées à des banques de premier ordre : BICEC, Ecobank, Citibank.',
      esgEyebrow: 'RSE & Responsabilité Environnementale',
      esgTitle: 'Foresterie Durable, Sécurité Alimentaire & Économie Circulaire',
      esgSubtitle: 'Nous exigeons que chaque marchandise importée en Afrique Centrale réponde aux normes internationales éthiques :',
      esg1Title: 'Modèle Double A d’Arbres Cultivés',
      esg1Desc: 'Le papier Double A provient d’arbres à fibres denses cultivés sur les digues des rizières (modèle KHAN-NA), créant de l’emploi sans abattre la forêt primaire.',
      esg2Title: 'Maïs Argentin Non-OGM',
      esg2Desc: 'Nos grains de pop-corn sont cultivés avec une irrigation de précision en Argentine sous contrôle SENASA, garantis sans modifications génétiques.',
      esg3Title: 'Mode Circulaire Européenne',
      esg3Desc: 'Nos textiles de seconde main offrent une nouvelle vie aux vêtements européens de haute qualité, évitant la mise en décharge et habillant l’Afrique avec élégance.',
      headquartersInfo: 'Fondée et basée à Douala, Cameroun • Bureau de Liaison International à New York',
      btnContactLeadership: 'Contacter la Direction'
    },
    clients: {
      breadcrumb: 'Clients Institutionnels & Réseau',
      eyebrow: 'Empreinte de Distribution Continentale',
      title: 'Le Moteur Commercial des Grossistes d’Afrique Centrale',
      subtitle: 'Nous approvisionnons les distributeurs nationaux, imprimeries, syndicats de commerçants, fabricants de snacks et entreprises du BTP en volumes conteneurisés garantis.',
      doualaHubTitle: 'Douala & Yaoundé',
      doualaHubDesc: 'Marché Central de Douala, Marché Mokolo de Yaoundé, quartier d’affaires d’Akwa et zone industrielle de Bonabéri.',
      westTitle: 'Bafoussam & Bamenda',
      westDesc: 'Dessertes hebdomadaires sur plateaux lourds pour les coopératives et grands commerçants de la région de l’Ouest.',
      northTitle: 'Garoua & N’Djamena',
      northDesc: 'Transit conteneurisé sous douane via la ligne ferroviaire du Transcamerounais vers le Grand Nord et le Tchad.',
      cemacTitle: 'Bangui, RCA & Gabon',
      cemacDesc: 'Corridors d’exportation sous douane pour les appels d’offres ministériels, papeteries et chantiers de construction.',
      casesEyebrow: 'Témoignages & Études de Cas',
      casesTitle: 'La Confiance des Leaders de Marché',
      eligibilityEyebrow: 'Éligibilité Institutionnelle',
      eligibilityTitle: 'Comment Devenir Grossiste Partenaire Certifié Sofomeutex',
      eligibilitySubtitle: 'Pour préserver l’intégrité de nos marques exclusives (notamment le papier Double A au Cameroun), nous collaborons exclusivement avec des importateurs vérifiés.',
      e1Title: '01. Vérification Juridique',
      e1Desc: 'Entreprise commerciale dûment immatriculée avec RCCM camerounais ou numéro d’enregistrement CEMAC valide.',
      e2Title: '02. Volume Minimal Requis',
      e2Desc: 'Capacité minimale d’enlèvement de 1 conteneur 20 pieds ou 40 pieds High Cube (FCL) ou allocations mensuelles d’entrepôt.',
      e3Title: '03. Règlement Commercial',
      e3Desc: 'Règlement par Lettre de Crédit documentaire (L/C) confirmée, caution bancaire ou facilités de trésorerie agréées.',
      deskContact: 'Bureau Commercial: Akwa, Douala • Tél: +237 233 42 88 19',
      btnOpenAccount: 'Ouvrir un Compte Grossiste'
    },
    team: {
      breadcrumb: 'Gouvernance & Conseil d’Administration',
      eyebrow: 'Conseil Exécutif',
      title: 'Direction du Commerce International',
      subtitle: 'Notre directoire associe des financiers du commerce mondial, des agronomes experts et des spécialistes des opérations maritimes au Port de Douala.',
      btnConsult: 'Demander un Entretien de Direction',
      complianceEyebrow: 'Conformité & Éthique',
      complianceTitle: 'Rigueur Américaine & Maîtrise Opérationnelle Africaine',
      complianceSubtitle: 'Chaque décision stratégique est encadrée par des chartes de transparence strictes :',
      comp1Title: 'Loi Anti-Corruption & FCPA',
      comp1Desc: 'Conformité intégrale avec le Foreign Corrupt Practices Act (FCPA) américain et les directives de la CONAC au Cameroun.',
      comp2Title: 'Filtrage AML & Sanctions Internationales',
      comp2Desc: 'Vérification automatisée sur les listes OFAC, Union Européenne et Nations Unies avant émission des connaissements maritimes.',
      comp3Title: 'Sécurisation Fiduciaire & Crédits Documentaires',
      comp3Desc: 'Les dépôts et crédits documentaires clients sont gérés sur comptes dédiés auprès de partenaires bancaires régulés (BICEC, Ecobank, Citibank).'
    },
    partners: {
      breadcrumb: 'Alliances Stratégiques & Usines Partenaires',
      eyebrow: 'Partenariats Mondiaux Souverains',
      title: 'Des Liens Directs avec les Plus Grandes Usines & Chambres',
      subtitle: 'Nous éliminons toute spéculation intermédiaire en négociant sous accords bilatéraux pluriannuels avec des producteurs certifiés et des armateurs de premier plan.',
      exclusiveBadge: 'Accord Souverain de Distribution',
      exclusiveTitle: 'Franchise Exclusive du Papier Reprographique Double A en République du Cameroun',
      exclusiveDesc: 'Sofomeutex est l’unique titulaire de la charte d’importation bilatérale pour le papier authentique Double A A4 80g et 75g fabriqué par Double A (1991) Public Co. Ltd. en Thaïlande. Chaque ramette livrée au Cameroun porte un numéro de série d’usine, un emballage étanche anti-humidité et une garantie absolue de zéro bourrage.',
      directContract: 'Contrat d’Usine Direct Thaïlande',
      antiCounterfeit: 'Certification Anti-Contrefaçon',
      stockContinuity: 'Permanence du Stock au Port de Douala',
      networkEyebrow: 'Réseau Institutionnel',
      networkTitle: 'Partenaires Internationaux Certifiés',
      financeEyebrow: 'Financement du Commerce',
      financeTitle: 'Lettres de Crédit (L/C) & Facilités Bancaires',
      financeSubtitle: 'Nous sécurisons nos transactions d’importation de plusieurs millions de dollars via le crédit documentaire selon les règles de la Chambre de Commerce Internationale (CCI) :',
      fin1Title: 'Crédits Documentaires (RUU 600)',
      fin1Desc: 'Lettres de crédit irrévocables et confirmées émises par la BICEC, Ecobank, Citibank ou la Société Générale.',
      fin2Title: 'Assurance Maritime (Clauses Tous Risques A)',
      fin2Desc: 'Police Institute Cargo Clauses (A) couvrant 110% de la valeur CIF contre toutes avaries de mer et sinistres conteneur.',
      fin3Title: 'Mainlevée Sous Douane & Connaissement (B/L)',
      fin3Desc: 'Jeu complet de connaissements maritimes originaux (3/3) remis directement à l’acheteur dès validation en douane.',
      deskEmail: 'Direction du Commerce Institutionnel: trade@wardiere.com',
      btnRequestFinance: 'Consulter les Conditions Financières'
    },
    contact: {
      breadcrumb: 'RFQ Institutionnelle & Bureau Commercial',
      eyebrow: 'Portail de Réquisition de Gros',
      title: 'Demande d’Allocation de Cargaison Conteneurisée',
      subtitle: 'Approvisionnement direct pour le papier Double A A4 exclusif au Cameroun, le pop-corn argentin, les balles de vêtements et chaussures d’Europe, et le plâtre pur pour le bâtiment.',
      confirmedTitle: 'Réquisition de Cargaison Enregistrée avec Succès',
      refLabel: 'Numéro de Référence Officiel :',
      allocatedCommodity: 'Marchandise Allouée :',
      consignmentVolume: 'Volume de Conteneurs :',
      deliveryIncoterm: 'Incoterm Retenu :',
      dischargePort: 'Port de Déchargement :',
      registeredTo: 'Attribué à :',
      statusAssigned: 'Statut : Pris en charge par le Bureau Commercial du Port de Douala',
      confirmedBody: 'Notre direction financière à Douala a bien réceptionné votre réquisition. Un planning d’expédition proforma personnalisé et les rapports d’analyses SGS vous seront transmis par e-mail sous 4 heures ouvrées.',
      btnCopyRef: 'Copier la Référence',
      btnCopied: 'Référence Copiée !',
      btnPrint: 'Imprimer la Fiche de Réquisition',
      btnSubmitNew: 'Soumettre une Nouvelle Demande',
      formEyebrow: 'Formulaire de Réquisition Documentaire',
      formTitle: 'Demande d’Attribution Proforma',
      stepCommodity: '1. Sélectionner le Pilier de Marchandises *',
      stepVolume: '2. Volume (Conteneurs Complets - FCL) *',
      stepIncoterm: '3. Incoterms® 2020 Souhaités *',
      stepDischarge: '4. Port de Déchargement ou Dépôt Final *',
      stepCertificates: '5. Certificats & Contrôles Qualité Exigés (Sélectionnez les options)',
      companyName: 'Raison Sociale de l’Entreprise *',
      contactName: 'Responsable des Achats / Contact *',
      corporateEmail: 'E-mail Professionnel *',
      phoneNumber: 'Téléphone / WhatsApp Professionnel *',
      specialNotes: 'Instructions Particulières d’Empotage ou de Calendrier',
      btnSubmitRFQ: 'Émettre la Réquisition Proforma Officielle',
      btnSubmit: 'Soumettre la Réquisition & Réserver l’Allocation',
      ncndaNotice: 'Protégé par accord de non-divulgation et non-contournement (NCNDA) de la CCI.',
      doualaDeskTitle: 'Direction Maritime de Douala',
      doualaDeskDesc: 'Direction Régionale Afrique Centrale en charge du dédouanement portuaire, des parcs conteneurs et des convois terrestres CEMAC.',
      workingHoursLabel: 'Horaires d’Ouverture :',
      workingHoursVal: 'Lun – Sam: 08h00 – 18h00 WAT',
      nyTitle: 'Bureau de Liaison de New York',
      antwerpTitle: 'Desk Textile Européen (Anvers)',
      buenosAiresTitle: 'Desk Agro-Alimentaire Amérique Latine (Buenos Aires)',
      exclusiveNoticeTitle: 'Garantie d’Exclusivité',
      exclusiveNoticeBody: 'En qualité d’unique importateur officiel du Papier Double A au Cameroun, chaque ramette est authentifiée par scellés d’usine. Certificat d’origine d’usine joint à tous les connaissements maritimes.'
    },
    modal: {
      origin: 'Origine',
      targetDischarge: 'Destination',
      hsCode: 'Code Douanier (SH)',
      packagingAndPayload: 'Conditionnement & Charge Utile',
      capacity: 'Capacité',
      packaging: 'Emballage',
      moq: 'Commande Minimale (MOQ)',
      incoterms: 'Incoterms',
      techVerification: 'Contrôles Techniques & Métriques d’Analyse',
      qualityAssays: 'Analyses d’Usine & Contrôles Qualité :',
      inspection: 'Organisme de Contrôle Indépendant :',
      btnClose: 'Fermer la Fiche',
      btnRequestAllocation: 'Demander une Allocation de Conteneur (RFQ)'
    },
    footer: {
      soleDistributorBadge: 'Importateur Exclusif du Papier Double A au Cameroun',
      tagline: 'Sofomeutex est une société de commerce transatlantique opérant des corridors d’importation conteneurisés majeurs vers le Port de Douala et la zone CEMAC.',
      brandDesc: 'Sofomeutex est une société de négoce transatlantique aux standards américains opérant des corridors d’importation conteneurisés majeurs vers le Port de Douala et la zone CEMAC.',
      navigationHeader: 'Plan du Site Institutionnel',
      commoditiesHeader: 'Piliers d’Importation',
      corporateHeader: 'Gouvernance & Conformité',
      doualaHubHeader: 'Pôle Logistique d’Afrique Centrale',
      colPillars: 'Piliers d’Importation',
      colInstitutional: 'Navigation Institutionnelle',
      colDesks: 'Bureaux Régionaux de Négoce',
      allRightsReserved: 'Tous droits réservés. Seul importateur agréé du Papier Double A en République du Cameroun.',
      antiFraudDisclaimer: 'Opérations régies par les Incoterms® 2020 de la CCI et lettres de crédit documentaire selon RUU 600. La contrefaçon du papier Double A exclusif fait l’objet de poursuites pénales immédiates.',
      compliancePill: 'Standard Institutionnel Américain • Port de Douala Actif',
      copyright: '© 2026 Sofomeutex Tous droits réservés. Distributeur Exclusif du Papier Double A au Cameroun.'
    }
  }
};
