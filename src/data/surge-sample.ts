export interface SurgeSampleItem {
  id: string;
  company: string;
  role: string;
  department: string;
  location: string;
  salary: string;
  atsSource: 'Ashby' | 'Greenhouse' | 'Lever';
  surgeDelta: string;
  dateAdded: string;
  url: string;
}

export const lastUpdatedDate = 'Monday, March 09, 2026';
export const trackedCompaniesCount = 93;
export const totalWeeklyRolesCount = 142;

export const surgeSampleData: SurgeSampleItem[] = [
  {
    id: '1',
    company: 'Cognition AI',
    role: 'Staff Distributed Systems Engineer',
    department: 'Core Infrastructure',
    location: 'San Francisco, CA / Remote',
    salary: '$240k - $320k + Equity',
    atsSource: 'Ashby',
    surgeDelta: '+6 roles this week',
    dateAdded: '2026-03-09',
    url: 'https://jobs.ashbyhq.com/cognition'
  },
  {
    id: '2',
    company: 'Mistral AI',
    role: 'Senior Inference Kernel Engineer (CUDA/Triton)',
    department: 'LLM Systems',
    location: 'Paris, France / Remote',
    salary: '€120k - €170k + Equity',
    atsSource: 'Lever',
    surgeDelta: '+5 roles this week',
    dateAdded: '2026-03-08',
    url: 'https://jobs.lever.co/mistral'
  },
  {
    id: '3',
    company: 'Vercel',
    role: 'Senior Full Stack Engineer - AI SDK',
    department: 'Developer Experience',
    location: 'Remote (US/Global)',
    salary: '$180k - $240k',
    atsSource: 'Greenhouse',
    surgeDelta: '+4 roles this week',
    dateAdded: '2026-03-09',
    url: 'https://boards.greenhouse.io/vercel'
  },
  {
    id: '4',
    company: 'Supabase',
    role: 'Senior Backend Engineer (Postgres / Elixir)',
    department: 'Database Engine',
    location: 'Remote (Worldwide)',
    salary: '$160k - $210k + Equity',
    atsSource: 'Ashby',
    surgeDelta: '+3 roles this week',
    dateAdded: '2026-03-07',
    url: 'https://jobs.ashbyhq.com/supabase'
  },
  {
    id: '5',
    company: 'Ramp',
    role: 'Staff Software Engineer - Financial Engine',
    department: 'Core Platform',
    location: 'New York, NY / Remote',
    salary: '$230k - $300k + Equity',
    atsSource: 'Greenhouse',
    surgeDelta: '+8 roles this week',
    dateAdded: '2026-03-09',
    url: 'https://boards.greenhouse.io/ramp'
  },
  {
    id: '6',
    company: 'LangChain',
    role: 'AI Infrastructure Engineer',
    department: 'LangSmith Platform',
    location: 'San Francisco, CA / Remote',
    salary: '$190k - $250k',
    atsSource: 'Ashby',
    surgeDelta: '+4 roles this week',
    dateAdded: '2026-03-08',
    url: 'https://jobs.ashbyhq.com/langchain'
  },
  {
    id: '7',
    company: 'Linear',
    role: 'Product Engineer (Full Stack)',
    department: 'Product Systems',
    location: 'Remote (US/EU)',
    salary: '$170k - $220k + Equity',
    atsSource: 'Ashby',
    surgeDelta: '+3 roles this week',
    dateAdded: '2026-03-06',
    url: 'https://jobs.ashbyhq.com/linear'
  },
  {
    id: '8',
    company: 'Anthropic',
    role: 'Security & Distributed Systems Engineer',
    department: 'Model Safety & Infra',
    location: 'San Francisco, CA / Hybrid',
    salary: '$280k - $375k + Equity',
    atsSource: 'Greenhouse',
    surgeDelta: '+7 roles this week',
    dateAdded: '2026-03-09',
    url: 'https://boards.greenhouse.io/anthropic'
  },
  {
    id: '9',
    company: 'Cursor (Anysphere)',
    role: 'Core Systems & Latency Engineer',
    department: 'Editor Engine',
    location: 'San Francisco, CA',
    salary: '$200k - $320k + Top Tier Equity',
    atsSource: 'Ashby',
    surgeDelta: '+5 roles this week',
    dateAdded: '2026-03-08',
    url: 'https://jobs.ashbyhq.com/anysphere'
  },
  {
    id: '10',
    company: 'PostHog',
    role: 'Full Stack Engineer - Web Analytics',
    department: 'Growth & Core',
    location: 'Remote (Worldwide)',
    salary: '$165k - $215k (All Public)',
    atsSource: 'Ashby',
    surgeDelta: '+4 roles this week',
    dateAdded: '2026-03-07',
    url: 'https://jobs.ashbyhq.com/posthog'
  }
];
