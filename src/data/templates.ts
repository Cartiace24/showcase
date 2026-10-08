export type TemplateCategory = 'Creative' | 'Developer' | 'Professional'

export interface Template {
  id: string
  slug: string
  name: string
  category: TemplateCategory
  description: string
  longDescription: string
  designedFor: string[]
  features: string[]
  customization: string[]
  included: string[]
  techStack: string[]
  previewImages: { desktop: string; mobile: string; alt: string }
  demoUrl?: string
  price?: number
  status: 'Price on request' | 'Available'
  tags: string[]
  number: string
  theme: string
}

export const templates: Template[] = [
  {
    id: 'devport', slug: 'web-developer', name: 'Dev Portfolio', category: 'Developer',
    description: 'A dark, code-led portfolio for developers who prefer the work to speak.',
    longDescription: 'A responsive developer portfolio with a code editor inspired introduction, filterable project collection, about section, and direct contact links. The source currently uses the placeholder name “Your Name,” example project content, and example email and social links; replace these with accurate details before publishing.',
    designedFor: ['Web developers', 'Independent studios', 'Freelancers'],
    features: ['Filterable project collection', 'Individual project case studies', 'About and contact sections', 'Smooth scrolling and page transitions'],
    customization: ['Developer profile and contact links', 'Project entries, categories, and imagery', 'About page and experience details'],
    included: ['Responsive React portfolio', 'Reusable project and artwork components', 'Editable local project data'],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    previewImages: { desktop: '/templates/devport/desktop.webp', mobile: '/templates/devport/mobile.webp', alt: 'Actual Dev Portfolio homepage preview for a developer portfolio' },
    demoUrl: 'https://devportfolio-smoky.vercel.app/',
    status: 'Price on request', tags: ['Developer', 'Projects', 'Responsive'], number: '01', theme: 'folio',
  },
  {
    id: 'artport', slug: 'artport', name: 'Art Portfolio', category: 'Creative',
    description: 'An illustrated portfolio with a gallery, commission sheet, and artist profile.',
    longDescription: 'A warm, illustrated artist portfolio with a featured piece, filterable gallery, commission information, and an about section. This captured project currently uses Lorem Ipsum copy, sample artwork, and example commission rates; replace these details with the artist’s own content before publishing.',
    designedFor: ['Illustrators', 'Independent artists', 'Commission-based creators'],
    features: ['Featured artwork and gallery filters', 'Commission sheet and request flow', 'Artist profile and contact section', 'Theme switcher'],
    customization: ['Artist profile and introduction', 'Artwork and gallery categories', 'Commission rates and request details'],
    included: ['Responsive page layouts', 'Gallery and commission sections', 'Editable portfolio content'],
    techStack: ['React', 'TypeScript', 'Motion', 'Supabase'],
    previewImages: { desktop: '/templates/artport/desktop.webp', mobile: '/templates/artport/mobile.webp', alt: 'Actual Art Portfolio artist portfolio homepage with sample artwork' },
    demoUrl: 'https://artportfolio-alpha.vercel.app/',
    status: 'Price on request', tags: ['Illustration', 'Gallery', 'Commissions'], number: '02', theme: 'folio',
  },
  {
    id: 'artportv2', slug: 'artportv2', name: 'Art Portfolio V2', category: 'Creative',
    description: 'An immersive, interactive gallery for illustrators and virtual creators.',
    longDescription: 'An experimental portfolio that turns an artwork archive into an explorable gallery, with archive, commissions, about, and contact views. The original project explicitly marks its current imagery as demo images that are not the artist’s work; swap in licensed or original artwork before publishing.',
    designedFor: ['Illustrators', 'Virtual creators', 'Artists with image-led portfolios'],
    features: ['Interactive 3D gallery', 'Artwork archive with selectable pieces', 'Commission and about sections', 'Responsive desktop and mobile layouts'],
    customization: ['Artist name and introduction', 'Artwork, labels, and archive entries', 'Commission and contact information'],
    included: ['Interactive gallery experience', 'Responsive portfolio shell', 'Editable artwork archive data'],
    techStack: ['Three.js', 'Vite', 'JavaScript'],
    previewImages: { desktop: '/templates/artportv2/desktop.webp', mobile: '/templates/artportv2/mobile.webp', alt: 'Actual Art Portfolio V2 interactive gallery; demo imagery notice is visible' },
    demoUrl: 'https://artportv2.vercel.app/',
    status: 'Price on request', tags: ['Interactive', 'Gallery', 'Three.js'], number: '03', theme: 'folio',
  },
  {
    id: 'civil-engineering', slug: 'civil-engineering', name: 'Civil Engineering', category: 'Professional',
    description: 'A technical portfolio for civil engineering students and early-career professionals.',
    longDescription: 'A static portfolio template centered on an interactive residential model, project stories, and small technical demonstrations. The supplied projects, dimensions, quantities, and engineering examples are conceptual and educational; replace them with verified work and reviewed information before publishing.',
    designedFor: ['Civil engineering students', 'Early-career engineers', 'Technical professionals'],
    features: ['Interactive Three.js residential study', 'Project and experience sections', 'Structural load visualization', 'Illustrative quantity takeoff'],
    customization: ['Profile, contact details, and links', 'Project stories, drawings, and tools', 'Model geometry and technical demonstrations'],
    included: ['Static HTML, CSS, and JavaScript source', 'Responsive portfolio sections', 'Interactive 3D model and engineering demos'],
    techStack: ['HTML', 'CSS', 'JavaScript', 'Three.js'],
    previewImages: { desktop: '/templates/civil-engineering/desktop.webp', mobile: '/templates/civil-engineering/mobile.webp', alt: 'Actual civil engineering portfolio homepage featuring an interactive residential model' },
    demoUrl: 'https://civileng-port.vercel.app/',
    status: 'Price on request', tags: ['Engineering', 'Interactive', 'Three.js'], number: '04', theme: 'folio',
  },
]

export const categories: Array<'All' | TemplateCategory> = ['All', ...(['Creative', 'Developer', 'Professional'] as const).filter((category) => templates.some((template) => template.category === category))]
