export interface BoardMember {
  name: string;
  role: string;
  title: string;
  postNominals?: string;
  bio: string;
}

export const boardMembers: BoardMember[] = [
  {
    name: "Paul Billingham",
    role: "Chair of API Board",
    title: "Managing Director, GreenMount Advisory",
    bio: "Former senior partner with Grant Thornton, where over 30 years he established and led the firm's Australian Financial Advisory and Consulting practices. Restructured businesses and refinanced over $7.6bn of syndicated bank debt during the GFC. Fellow of Chartered Accountants ANZ, Graduate Member AICD, MBA (AGSM).",
  },
  {
    name: "Mark Kay",
    role: "Board Director",
    title: "Valuer-General, Northern Territory",
    postNominals: "LFAPI",
    bio: "API Member since 1988, former SA State Chair. Appointed Valuer-General of the Northern Territory in May 2023 after 33 years in SA Government. Passionate advocate for standards, education and compliance. Has served on SA State Committee, Standards Steering Committee and Education Committee.",
  },
  {
    name: "Dr Georgia Warren-Myers",
    role: "Board Director",
    title: "Head of ESG & Risk APAC, JLL",
    postNominals: "FAPI",
    bio: "Twenty years' combined experience across academia and industry. Certified Practising Valuer since 2008 and Fellow of the API. Previously Associate Professor in Property and Construction at the University of Melbourne. Expertise at the nexus of sustainability, climate change risks and property.",
  },
  {
    name: "Darren Austin",
    role: "Board Director",
    title: "Director, Walsh & Monaghan",
    postNominals: "AAPI",
    bio: "Nearly 25 years with Walsh & Monaghan; company director since 2005. Almost 30 years in real estate sales and valuation. Has chaired Professional Indemnity Insurance subcommittee and Network Property Advisory Group. Specialises in commercial property, childcare centres, caravan parks, and unique tourism holdings.",
  },
  {
    name: "Gavin Hulcombe",
    role: "Board Director",
    title: "Managing Director, Herron Todd White (QLD)",
    bio: "Joined the API in 1993, Fellow since 2010. Career began with the Queensland Department of Lands before joining Herron Todd White in 1994. Managing Director of HTW Brisbane since 2002. Served on HTW Australia Board 2005–2020 and chaired the board 2008–2016. Graduate AICD.",
  },
  {
    name: "Greg Sugars",
    role: "Board Director",
    title: "CEO & International Director, Preston Rowe Paterson Australasia",
    postNominals: "OAM",
    bio: "In the industry since 1989. Founding CEO of Opteon. Currently CEO and International Director of Preston Rowe Paterson Australasia. Fellow of the API, Fellow of RICS, Fellow AICD. Awarded the Medal of the Order of Australia in 2015 for community work with the Christina Noble Children's Foundation.",
  },
  {
    name: "Robert Hecek",
    role: "APIV Chair",
    title: "Managing Director, Valuecorp",
    bio: "Associate 1983, Fellow 2000, Life Fellow 2016. Founded Valuecorp in 1980. API National President 2014/2015. Current Chair of APIV Ltd Limited Liability Scheme. Recipient of the S.F. Whittington Memorial Gold Medal in 2012. Founding member of the International Fire Safety Standards Coalition.",
  },
  {
    name: "Adam Connolly",
    role: "Board Director",
    title: "CEO, Apollo Communications",
    bio: "Thirty-five years in strategic communications, journalism, investment banking and NED roles. Former Senior Adviser to the Australian Prime Minister, Property Writer for The Australian, Head of Corporate Affairs at Bankwest. NED of UnitingCare Australia. MBA (Oxford), FINSIA Fellow, AICD.",
  },
  {
    name: "Victoria Gracie",
    role: "Board Director",
    title: "Director of Development & Growth, Opteon ANZ",
    bio: "Over 15 years in the property industry, based in the Darling Downs region of Queensland. Chair of the Queensland State Committee, member of the National Innovation Futures Advisory Group, and Board member of the Valuers Registration Board of Queensland. Brings a regional and generational voice to the national Board.",
  },
];

export interface ExecutiveMember {
  name: string;
  role: string;
  location: string;
}

export const executiveTeam: ExecutiveMember[] = [
  { name: "John Winter", role: "Chief Executive Officer", location: "Sydney" },
  { name: "Dr Sherman Chan", role: "Chief Economist", location: "Sydney" },
  { name: "Kirsty Hogan", role: "People and Culture Manager", location: "Sydney" },
  { name: "Andrew Milne", role: "General Manager, Membership", location: "Brisbane" },
  { name: "Raquel Bortoletto", role: "General Manager, Professional Development", location: "Melbourne" },
  { name: "Elaine Rebello", role: "General Manager, Finance", location: "Sydney" },
  { name: "Anna Spencer", role: "Marketing and Communications Director", location: "Adelaide" },
];

export interface RelationshipManager {
  name: string;
  coverage: string;
  location: string;
}

export const memberRelationshipManagers: RelationshipManager[] = [
  { name: "Aphrodite Kant", coverage: "NSW / ACT (also National Partnerships)", location: "Sydney" },
  { name: "Ashlee Singleton", coverage: "VIC / SA", location: "Melbourne" },
  { name: "Colin Batten", coverage: "QLD / NT", location: "Brisbane" },
  { name: "Melanie McMeekin", coverage: "TAS / WA", location: "Hobart" },
];

export interface Committee {
  name: string;
  purpose: string;
  chair: string;
  meetingCadence: string;
  scope: string;
}

export const committees: Committee[] = [
  {
    name: "Innovation Futures Advisory Group",
    purpose: "Provide sector insights guiding the API's future direction on technology, automation and ESG.",
    chair: "Victoria Gracie",
    meetingCadence: "Quarterly",
    scope: "National",
  },
  {
    name: "Standards Committee",
    purpose: "Develop and maintain the API's valuation protocols and professional standards.",
    chair: "Mark Kay LFAPI",
    meetingCadence: "Bi-monthly",
    scope: "National",
  },
  {
    name: "National Education Committee",
    purpose: "Inform and develop annual educational priorities; oversee online courses, webinars and specialist certificates.",
    chair: "Raquel Bortoletto (staff lead)",
    meetingCadence: "Monthly",
    scope: "National",
  },
  {
    name: "Residential Valuation Industry Group",
    purpose: "Provide industry leadership on residential valuation policy, operations and quality.",
    chair: "Darren Austin AAPI",
    meetingCadence: "Quarterly",
    scope: "National",
  },
  {
    name: "Professional Indemnity Insurance Subcommittee",
    purpose: "Oversee the APIV Limited Liability Scheme and related PI arrangements.",
    chair: "Robert Hecek",
    meetingCadence: "Bi-monthly",
    scope: "National",
  },
  {
    name: "APREF Research Committee",
    purpose: "Govern research grants and priorities under the Australian Property Research & Education Fund.",
    chair: "Dr Georgia Warren-Myers FAPI",
    meetingCadence: "Quarterly",
    scope: "National",
  },
  {
    name: "Young Property Professionals (YPP) National Committee",
    purpose: "Voice of emerging members; informs professional and social development for the next generation.",
    chair: "Rotating YPP delegate",
    meetingCadence: "Monthly",
    scope: "National",
  },
];

export interface StateDivision {
  state: string;
  chair: string;
  relationshipManager: string;
}

export const stateDivisions: StateDivision[] = [
  { state: "New South Wales & ACT", chair: "State Committee Chair (elected)", relationshipManager: "Aphrodite Kant" },
  { state: "Victoria", chair: "State Committee Chair (elected)", relationshipManager: "Ashlee Singleton" },
  { state: "Queensland", chair: "Victoria Gracie", relationshipManager: "Colin Batten" },
  { state: "Western Australia", chair: "State Committee Chair (elected)", relationshipManager: "Melanie McMeekin" },
  { state: "South Australia", chair: "State Committee Chair (elected)", relationshipManager: "Ashlee Singleton" },
  { state: "Tasmania", chair: "State Committee Chair (elected)", relationshipManager: "Melanie McMeekin" },
  { state: "Northern Territory", chair: "State Committee Chair (elected)", relationshipManager: "Colin Batten" },
];
