export interface JobListingPorps {
  title: string;
  posted: string;
  status: string;
  location: string;
  salary: string;
  skillsRequired: string[];
  preferredLanguage: string;
  type: string;
  experience: string;
}

interface Company {
  name: string;
  logo: string;
  size: string;
  sector: string[];
  founded: string;
  type: string;
  funding: string;
  founders: string[];
}
