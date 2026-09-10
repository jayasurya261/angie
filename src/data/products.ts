export interface DataProduct {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  price: number;
  interval: string;
  status: 'live' | 'coming_soon' | 'beta';
  badge: string;
  dodoLink: string;
  coverage: string;
  cadence: string;
  highlights: string[];
}

export const products: DataProduct[] = [
  {
    slug: 'surge',
    name: 'Engineering Hiring Surge Report',
    tagline: 'Weekly engineering hiring velocity intelligence across 90+ tech companies.',
    description: 'Direct ATS crawlers tracking sudden hiring spikes, high-priority engineering openings, salary bands, and net new engineering expansion.',
    price: 49,
    interval: 'monthly',
    status: 'live',
    badge: '🔥 LIVE NOW',
    dodoLink: 'https://dodo.pe/4x5roas0oom',
    coverage: '90+ High-Growth Tech & AI Companies',
    cadence: 'Every Monday @ 8:00 AM UTC',
    highlights: [
      '100% verified direct ATS endpoints (Ashby, Greenhouse, Lever)',
      'Weekly net new hiring spike indicators and team breakdowns',
      'Salary ranges and seniority tiering included where published',
      'Direct application links (zero scraped aggregator garbage or ghost jobs)',
      'Clean CSV download + executive markdown briefing delivered to your inbox'
    ]
  },
  {
    slug: 'salary-benchmarks',
    name: 'Remote Engineering Salary Benchmarks',
    tagline: 'Real-time compensation distributions across remote engineering roles.',
    description: 'Aggregated min/max salary ranges, equity data, and compensation trends by tier and tech stack from verified listings.',
    price: 79,
    interval: 'monthly',
    status: 'coming_soon',
    badge: '⏳ IN PIPELINE',
    dodoLink: '/inquire',
    coverage: '250+ Remote-First Engineering Teams',
    cadence: 'Bi-Weekly on Wednesdays',
    highlights: [
      'P25, P50, P75, P90 compensation breakdowns by level',
      'Normalized USD compensation across US, EU & APAC remote hubs',
      'Historical rate adjustments and stack premium metrics'
    ]
  },
  {
    slug: 'velocity-index',
    name: 'Tech Hiring Velocity Index',
    tagline: 'Week-over-week headcount expansion & team contraction signals.',
    description: 'Snapshot diffs comparing open requisitions over 30/60/90 days to identify expansion surges before they make tech headlines.',
    price: 99,
    interval: 'monthly',
    status: 'coming_soon',
    badge: '⏳ IN PIPELINE',
    dodoLink: '/inquire',
    coverage: '500+ Tech & SaaS Organizations',
    cadence: 'Monthly Deep Dive',
    highlights: [
      'Early warning signals for team expansions and stealth hiring waves',
      'Departmental ratio shifts (Engineering vs. GTM headcount)',
      'Raw time-series data feed for investment & staffing research'
    ]
  }
];
