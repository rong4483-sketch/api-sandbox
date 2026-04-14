export interface Professional {
  id: string;
  firstName: string;
  lastName: string;
  firm: string;
  suburb: string;
  postcode: string;
  state: "NSW" | "VIC" | "QLD" | "WA" | "SA" | "TAS" | "ACT" | "NT";
  expertise: string[];
  certifications: string[];
  yearsExperience: number;
  avatarSeed: string;
}

export const expertiseOptions = [
  "Residential",
  "Commercial Office",
  "Retail",
  "Industrial & Logistics",
  "Rural & Agribusiness",
  "Hotels & Tourism",
  "Healthcare & Aged Care",
  "Childcare Centres",
  "Service Stations",
  "Infrastructure",
  "Heritage Property",
  "Compulsory Acquisition",
  "Plant & Machinery",
  "Property Advisory",
  "ESG & Climate Risk",
];

export const stateOptions = ["NSW", "VIC", "QLD", "WA", "SA", "TAS", "ACT", "NT"] as const;

// Deterministic handcrafted data — avoids faker dependency at runtime for reliability
export const professionals: Professional[] = [
  { id: "m001", firstName: "Alessia",  lastName: "Marchetti", firm: "Harbour & Bridge Valuers",      suburb: "Surry Hills",    postcode: "2010", state: "NSW", expertise: ["Residential", "Retail"], certifications: ["CPV", "RPV"], yearsExperience: 14, avatarSeed: "alessia" },
  { id: "m002", firstName: "Marcus",   lastName: "O'Sullivan",firm: "Harbour & Bridge Valuers",      suburb: "North Sydney",   postcode: "2060", state: "NSW", expertise: ["Commercial Office", "Infrastructure"], certifications: ["CPV"], yearsExperience: 22, avatarSeed: "marcus" },
  { id: "m003", firstName: "Priya",    lastName: "Nair",      firm: "Southbank Property Partners",   suburb: "Southbank",      postcode: "3006", state: "VIC", expertise: ["Residential", "Childcare Centres"], certifications: ["CPV", "RPV"], yearsExperience: 9, avatarSeed: "priya" },
  { id: "m004", firstName: "Tomasz",   lastName: "Nowak",     firm: "Southbank Property Partners",   suburb: "Richmond",       postcode: "3121", state: "VIC", expertise: ["Industrial & Logistics"], certifications: ["CPV"], yearsExperience: 17, avatarSeed: "tomasz" },
  { id: "m005", firstName: "Ngaire",   lastName: "Williams",  firm: "Brisbane Valuation Group",      suburb: "Fortitude Valley", postcode: "4006", state: "QLD", expertise: ["Commercial Office", "Hotels & Tourism"], certifications: ["CPV"], yearsExperience: 19, avatarSeed: "ngaire" },
  { id: "m006", firstName: "Samuel",   lastName: "Ikeda",     firm: "Brisbane Valuation Group",      suburb: "Newstead",       postcode: "4006", state: "QLD", expertise: ["Residential"], certifications: ["CPV", "RPV"], yearsExperience: 6, avatarSeed: "samuel" },
  { id: "m007", firstName: "Harriet",  lastName: "McAllister",firm: "Perth Property Advisory",       suburb: "West Perth",     postcode: "6005", state: "WA", expertise: ["Rural & Agribusiness", "Infrastructure"], certifications: ["CPV"], yearsExperience: 25, avatarSeed: "harriet" },
  { id: "m008", firstName: "Omar",     lastName: "Haddad",    firm: "Perth Property Advisory",       suburb: "Subiaco",        postcode: "6008", state: "WA", expertise: ["Commercial Office", "Retail"], certifications: ["CPV"], yearsExperience: 12, avatarSeed: "omar" },
  { id: "m009", firstName: "Beatriz",  lastName: "Fernandes", firm: "Adelaide Valuers Collective",   suburb: "Adelaide",       postcode: "5000", state: "SA", expertise: ["Heritage Property", "Residential"], certifications: ["CPV", "RPV"], yearsExperience: 15, avatarSeed: "beatriz" },
  { id: "m010", firstName: "Jack",     lastName: "Carter",    firm: "Adelaide Valuers Collective",   suburb: "Norwood",        postcode: "5067", state: "SA", expertise: ["Residential"], certifications: ["RPV"], yearsExperience: 4, avatarSeed: "jack" },
  { id: "m011", firstName: "Yuki",     lastName: "Tanaka",    firm: "Hobart Island Valuers",         suburb: "Hobart",         postcode: "7000", state: "TAS", expertise: ["Residential", "Hotels & Tourism"], certifications: ["CPV", "RPV"], yearsExperience: 11, avatarSeed: "yuki" },
  { id: "m012", firstName: "Elena",    lastName: "Petrov",    firm: "Canberra Capital Valuations",   suburb: "Barton",         postcode: "2600", state: "ACT", expertise: ["Commercial Office", "Compulsory Acquisition"], certifications: ["CPV"], yearsExperience: 20, avatarSeed: "elena" },
  { id: "m013", firstName: "Rohan",    lastName: "Patel",     firm: "Top End Property Valuers",      suburb: "Darwin",         postcode: "0800", state: "NT", expertise: ["Rural & Agribusiness", "Plant & Machinery"], certifications: ["CPV"], yearsExperience: 18, avatarSeed: "rohan" },
  { id: "m014", firstName: "Chloe",    lastName: "Bennett",   firm: "Eastern Suburbs Valuations",    suburb: "Bondi Junction", postcode: "2022", state: "NSW", expertise: ["Residential"], certifications: ["CPV", "RPV"], yearsExperience: 8, avatarSeed: "chloe" },
  { id: "m015", firstName: "David",    lastName: "Chen",      firm: "Eastern Suburbs Valuations",    suburb: "Randwick",       postcode: "2031", state: "NSW", expertise: ["Residential", "Healthcare & Aged Care"], certifications: ["CPV"], yearsExperience: 16, avatarSeed: "david" },
  { id: "m016", firstName: "Isabella", lastName: "Romano",    firm: "Melbourne North Valuers",       suburb: "Brunswick",      postcode: "3056", state: "VIC", expertise: ["Residential", "Heritage Property"], certifications: ["CPV", "RPV"], yearsExperience: 13, avatarSeed: "isabella" },
  { id: "m017", firstName: "Harold",   lastName: "Fitzgerald",firm: "Melbourne North Valuers",       suburb: "Carlton",        postcode: "3053", state: "VIC", expertise: ["Commercial Office", "Property Advisory"], certifications: ["CPV"], yearsExperience: 30, avatarSeed: "harold" },
  { id: "m018", firstName: "Sienna",   lastName: "Kapoor",    firm: "Gold Coast Valuation Co.",      suburb: "Surfers Paradise", postcode: "4217", state: "QLD", expertise: ["Residential", "Hotels & Tourism"], certifications: ["CPV", "RPV"], yearsExperience: 7, avatarSeed: "sienna" },
  { id: "m019", firstName: "Nathan",   lastName: "Wright",    firm: "Gold Coast Valuation Co.",      suburb: "Broadbeach",     postcode: "4218", state: "QLD", expertise: ["Commercial Office", "Retail"], certifications: ["CPV"], yearsExperience: 10, avatarSeed: "nathan" },
  { id: "m020", firstName: "Grace",    lastName: "Li",        firm: "Parramatta Valuations",         suburb: "Parramatta",     postcode: "2150", state: "NSW", expertise: ["Residential", "Industrial & Logistics"], certifications: ["CPV", "RPV"], yearsExperience: 9, avatarSeed: "grace" },
  { id: "m021", firstName: "Tom",      lastName: "Ellington", firm: "Parramatta Valuations",         suburb: "Blacktown",      postcode: "2148", state: "NSW", expertise: ["Residential"], certifications: ["RPV"], yearsExperience: 5, avatarSeed: "tom" },
  { id: "m022", firstName: "Amaya",    lastName: "Fernando",  firm: "Central Coast Property Pros",   suburb: "Gosford",        postcode: "2250", state: "NSW", expertise: ["Residential", "ESG & Climate Risk"], certifications: ["CPV", "RPV"], yearsExperience: 12, avatarSeed: "amaya" },
  { id: "m023", firstName: "Jordan",   lastName: "Moretti",   firm: "Geelong Regional Valuers",      suburb: "Geelong",        postcode: "3220", state: "VIC", expertise: ["Residential", "Service Stations"], certifications: ["CPV"], yearsExperience: 14, avatarSeed: "jordan" },
  { id: "m024", firstName: "Olivia",   lastName: "Hughes",    firm: "Sunshine Coast Valuations",     suburb: "Maroochydore",   postcode: "4558", state: "QLD", expertise: ["Residential", "Hotels & Tourism"], certifications: ["CPV", "RPV"], yearsExperience: 11, avatarSeed: "olivia" },
  { id: "m025", firstName: "Mateo",    lastName: "Rivera",    firm: "Fremantle Valuers",             suburb: "Fremantle",      postcode: "6160", state: "WA", expertise: ["Heritage Property", "Residential"], certifications: ["CPV"], yearsExperience: 21, avatarSeed: "mateo" },
  { id: "m026", firstName: "Sophie",   lastName: "Laurent",   firm: "North Melbourne Valuations",    suburb: "Kensington",     postcode: "3031", state: "VIC", expertise: ["Commercial Office", "Property Advisory"], certifications: ["CPV"], yearsExperience: 13, avatarSeed: "sophie" },
  { id: "m027", firstName: "Ibrahim",  lastName: "Khan",      firm: "Western Sydney Valuations",     suburb: "Liverpool",      postcode: "2170", state: "NSW", expertise: ["Industrial & Logistics", "Commercial Office"], certifications: ["CPV"], yearsExperience: 17, avatarSeed: "ibrahim" },
  { id: "m028", firstName: "Madeleine",lastName: "Wong",      firm: "Inner City Valuers",            suburb: "Carlton",        postcode: "3053", state: "VIC", expertise: ["Residential", "Heritage Property"], certifications: ["CPV", "RPV"], yearsExperience: 8, avatarSeed: "madeleine" },
  { id: "m029", firstName: "Liam",     lastName: "Dawson",    firm: "Inner City Valuers",            suburb: "Fitzroy",        postcode: "3065", state: "VIC", expertise: ["Residential"], certifications: ["RPV"], yearsExperience: 3, avatarSeed: "liam" },
  { id: "m030", firstName: "Ava",      lastName: "Taylor",    firm: "Queensland Rural Valuers",      suburb: "Toowoomba",      postcode: "4350", state: "QLD", expertise: ["Rural & Agribusiness"], certifications: ["CPV"], yearsExperience: 19, avatarSeed: "ava" },
  { id: "m031", firstName: "Noah",     lastName: "Andrews",   firm: "Queensland Rural Valuers",      suburb: "Roma",           postcode: "4455", state: "QLD", expertise: ["Rural & Agribusiness", "Plant & Machinery"], certifications: ["CPV"], yearsExperience: 16, avatarSeed: "noah" },
  { id: "m032", firstName: "Zara",     lastName: "Mehta",     firm: "Harbour & Bridge Valuers",      suburb: "Chatswood",      postcode: "2067", state: "NSW", expertise: ["Commercial Office", "Retail"], certifications: ["CPV"], yearsExperience: 12, avatarSeed: "zara" },
  { id: "m033", firstName: "Felix",    lastName: "Brooks",    firm: "Launceston Valuations",         suburb: "Launceston",     postcode: "7250", state: "TAS", expertise: ["Rural & Agribusiness", "Residential"], certifications: ["CPV"], yearsExperience: 24, avatarSeed: "felix" },
  { id: "m034", firstName: "Mia",      lastName: "Collins",   firm: "Canberra Capital Valuations",   suburb: "Canberra",       postcode: "2601", state: "ACT", expertise: ["Residential", "Property Advisory"], certifications: ["CPV", "RPV"], yearsExperience: 7, avatarSeed: "mia" },
  { id: "m035", firstName: "Ethan",    lastName: "Green",     firm: "Adelaide Hills Valuers",        suburb: "Stirling",       postcode: "5152", state: "SA", expertise: ["Rural & Agribusiness", "Residential"], certifications: ["CPV"], yearsExperience: 15, avatarSeed: "ethan" },
  { id: "m036", firstName: "Lily",     lastName: "Walker",    firm: "Sydney CBD Valuations",         suburb: "Sydney",         postcode: "2000", state: "NSW", expertise: ["Commercial Office", "Infrastructure"], certifications: ["CPV"], yearsExperience: 10, avatarSeed: "lily" },
  { id: "m037", firstName: "James",    lastName: "Reid",      firm: "Sydney CBD Valuations",         suburb: "Pyrmont",        postcode: "2009", state: "NSW", expertise: ["Healthcare & Aged Care", "Commercial Office"], certifications: ["CPV"], yearsExperience: 21, avatarSeed: "james" },
  { id: "m038", firstName: "Daria",    lastName: "Kuznetsov", firm: "Melbourne CBD Property",        suburb: "Melbourne",      postcode: "3000", state: "VIC", expertise: ["Commercial Office", "ESG & Climate Risk"], certifications: ["CPV"], yearsExperience: 14, avatarSeed: "daria" },
  { id: "m039", firstName: "Lucas",    lastName: "Baker",     firm: "Melbourne CBD Property",        suburb: "Docklands",      postcode: "3008", state: "VIC", expertise: ["Commercial Office", "Infrastructure"], certifications: ["CPV"], yearsExperience: 18, avatarSeed: "lucas" },
  { id: "m040", firstName: "Hannah",   lastName: "Edwards",   firm: "Queensland Healthcare Valuers", suburb: "Spring Hill",    postcode: "4000", state: "QLD", expertise: ["Healthcare & Aged Care", "Childcare Centres"], certifications: ["CPV"], yearsExperience: 11, avatarSeed: "hannah" },
  { id: "m041", firstName: "Daniel",   lastName: "Park",      firm: "Queensland Healthcare Valuers", suburb: "Bowen Hills",    postcode: "4006", state: "QLD", expertise: ["Healthcare & Aged Care"], certifications: ["CPV"], yearsExperience: 9, avatarSeed: "daniel" },
  { id: "m042", firstName: "Charlotte",lastName: "Scott",     firm: "WA Infrastructure Valuers",     suburb: "Perth",          postcode: "6000", state: "WA", expertise: ["Infrastructure", "Compulsory Acquisition"], certifications: ["CPV"], yearsExperience: 26, avatarSeed: "charlotte" },
  { id: "m043", firstName: "Aiden",    lastName: "Murray",    firm: "WA Infrastructure Valuers",     suburb: "East Perth",     postcode: "6004", state: "WA", expertise: ["Infrastructure"], certifications: ["CPV"], yearsExperience: 13, avatarSeed: "aiden" },
  { id: "m044", firstName: "Ruby",     lastName: "Owens",     firm: "Northern Beaches Valuers",      suburb: "Manly",          postcode: "2095", state: "NSW", expertise: ["Residential"], certifications: ["CPV", "RPV"], yearsExperience: 6, avatarSeed: "ruby" },
  { id: "m045", firstName: "Oscar",    lastName: "Hamilton",  firm: "Northern Beaches Valuers",      suburb: "Dee Why",        postcode: "2099", state: "NSW", expertise: ["Residential"], certifications: ["RPV"], yearsExperience: 4, avatarSeed: "oscar" },
  { id: "m046", firstName: "Evelyn",   lastName: "Mitchell",  firm: "Bayside Melbourne Valuations",  suburb: "Brighton",       postcode: "3186", state: "VIC", expertise: ["Residential", "Heritage Property"], certifications: ["CPV", "RPV"], yearsExperience: 17, avatarSeed: "evelyn" },
  { id: "m047", firstName: "Henry",    lastName: "Cooper",    firm: "Bayside Melbourne Valuations",  suburb: "St Kilda",       postcode: "3182", state: "VIC", expertise: ["Retail", "Hotels & Tourism"], certifications: ["CPV"], yearsExperience: 20, avatarSeed: "henry" },
  { id: "m048", firstName: "Willow",   lastName: "Ford",      firm: "NT Property Advisors",          suburb: "Alice Springs",  postcode: "0870", state: "NT", expertise: ["Rural & Agribusiness", "Residential"], certifications: ["CPV"], yearsExperience: 22, avatarSeed: "willow" },
  { id: "m049", firstName: "Jasper",   lastName: "Clarke",    firm: "South Brisbane Property",       suburb: "West End",       postcode: "4101", state: "QLD", expertise: ["Residential", "ESG & Climate Risk"], certifications: ["CPV", "RPV"], yearsExperience: 8, avatarSeed: "jasper" },
  { id: "m050", firstName: "Ivy",      lastName: "Stewart",   firm: "South Brisbane Property",       suburb: "Kangaroo Point", postcode: "4169", state: "QLD", expertise: ["Commercial Office"], certifications: ["CPV"], yearsExperience: 11, avatarSeed: "ivy" },
];
