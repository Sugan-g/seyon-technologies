// Single source of truth for all 6 services — used on Home, Services,
// Footer, and Portfolio pages, and mirrored in the Portfolio flyer (.docx).
//
// Each service has EITHER `enhancement` (a highlighted AI/modernization
// callout) OR `flow` (a step-by-step process strip) — not both.
const services = [
  {
    slug: 'web-development',
    name: 'Web & Mobile Solutions',
    icon: 'code',
    number: '01',
    summary:
      'High-performance digital experiences — responsive, mobile-first, and SEO-friendly by design.',
    tags: ['Corporate Sites', 'Landing Pages', 'E-commerce', 'Web Apps', 'Customer Portals', 'Admin Dashboards'],
    enhancement: {
      label: 'AI-enhanced',
      text: 'accelerates research, coding, testing, and documentation, with human engineering review throughout.'
    },
    outcome: 'A platform that represents your brand and supports growth.'
  },
  {
    slug: 'billing-software',
    name: 'Billing Software',
    icon: 'document',
    number: '02',
    summary:
      'Smarter billing, simpler operations — workflows designed around your products and processes.',
    tags: ['GST Billing', 'Inventory', 'Sales & Purchase', 'Vendor Mgmt', 'Payment Tracking', 'Reports'],
    enhancement: {
      label: 'Modernization',
      text: 'existing billing software can be integrated, redesigned, automated, or migrated as required.'
    },
    outcome: 'Less manual work, fewer errors, faster operations.'
  },
  {
    slug: 'seo-growth',
    name: 'SEO & Digital Growth',
    icon: 'search',
    number: '03',
    summary:
      'Turning search visibility into business growth through technical SEO and search intelligence.',
    tags: ['Technical SEO', 'Keyword Research', 'Local SEO', 'Site Audits', 'Analytics'],
    flow: ['Visibility', 'Traffic', 'Leads', 'Conversions', 'Growth'],
    outcome: 'A stronger presence built for sustainable growth.'
  },
  {
    slug: 'erp-solutions',
    name: 'ERP Solutions',
    icon: 'grid',
    number: '04',
    summary:
      'Connect your business and control operations from one centralized environment.',
    tags: ['Finance', 'HR & Payroll', 'Production', 'Projects', 'Assets', 'Analytics'],
    enhancement: {
      label: 'AI-ready',
      text: 'analytics, intelligent reporting, forecasting, and decision support where appropriate.'
    },
    outcome: 'Connected operations and smarter decisions.'
  },
  {
    slug: 'crm-solutions',
    name: 'CRM Solutions',
    icon: 'users',
    number: '05',
    summary:
      'Build better customer relationships by centralizing the full lead-to-customer journey.',
    tags: ['Lead Mgmt', 'Sales Pipeline', 'Follow-ups', 'Automation', 'Support'],
    enhancement: {
      label: 'AI-enabled',
      text: 'lead prioritization, segmentation, forecasting, and follow-up recommendations.'
    },
    outcome: 'Better visibility and stronger relationships.'
  },
  {
    slug: 'vapt-security',
    name: 'VAPT & Security Testing',
    icon: 'shield',
    number: '06',
    summary:
      'Find vulnerabilities before attackers do, across web, API, network, and mobile surfaces.',
    tags: ['Web App VAPT', 'API Security', 'Network VAPT', 'Mobile Testing', 'Retesting'],
    flow: ['Scope', 'Recon', 'Assess', 'Validate', 'Exploit', 'Report', 'Remediate', 'Retest'],
    outcome: 'Reduced exposure, stronger security posture.'
  }
];

export default services;
