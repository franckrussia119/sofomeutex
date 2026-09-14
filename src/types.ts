export type Language = 'en' | 'fr';

export type PageId = 
  | 'home'
  | 'supply'
  | 'logistics'
  | 'about'
  | 'clients'
  | 'team'
  | 'partners'
  | 'contact';

export type CommodityPillar = 
  | 'Double A Paper (Cameroon Exclusive)'
  | 'Argentine Gourmet Popcorn'
  | 'European Used Apparel & Footwear'
  | 'High-Grade Industrial Plaster'
  | 'Home Refrigeration & Appliances';

export interface CommodityItem {
  id: string;
  name: string;
  pillar: CommodityPillar;
  categoryTag: string;
  origin: string;
  destination: string;
  exclusiveStatus?: string;
  specs: string[];
  containerCapacity: string;
  packaging: string;
  moq: string;
  hsCode: string;
  incoterms: string[];
  certifications: string[];
  gradeAssay: string;
  image: string;
  gallery: string[];
  summary: string;
  detailedDescription: string;
  keyFeatures: { label: string; value: string }[];
}

export interface CarouselSlide {
  id: string;
  pillar: CommodityPillar;
  title: string;
  subtitle: string;
  origin: string;
  destination: string;
  image: string;
  tag: string;
  description: string;
  keyMetric: string;
  metricLabel: string;
}

export interface ShippingLane {
  id: string;
  name: string;
  originPort: string;
  destinationPort: string;
  transitDays: number;
  frequency: string;
  primaryCarrier: string;
  commodityCargo: string;
  status: 'Scheduled' | 'At Sea' | 'Port Clearance' | 'Discharging';
  notes: string;
}

export interface ClientProfile {
  id: string;
  name: string;
  sector: string;
  region: string;
  volumeAnnually: string;
  testimonial: string;
  signatory: string;
  title: string;
  partnershipYears: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  location: string;
  bio: string;
  avatar: string;
  credentials: string[];
}

export interface PartnerOrg {
  id: string;
  name: string;
  category: 'Exclusive Manufacturing' | 'Commodity Boards' | 'Maritime Freight' | 'Assay & Inspection' | 'Financial & Banking';
  country: string;
  role: string;
  logoBadge: string;
  verifiedStatus: string;
}

export interface RFQRequisition {
  commodityId: string;
  containerVolume: string;
  preferredIncoterm: string;
  destinationPort: string;
  companyName: string;
  contactPerson: string;
  businessEmail: string;
  phoneNumber: string;
  country: string;
  additionalSpecs: string;
  requiredCertificates: string[];
}
