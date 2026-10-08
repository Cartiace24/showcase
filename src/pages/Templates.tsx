import { useMemo, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { categories, templates, type TemplateCategory } from '../data/templates'
import TemplatePreview from '../components/TemplatePreview'

export default function Templates() {
  const [filter, setFilter] = useState<'All' | TemplateCategory>('All')
  const visibleTemplates = useMemo(() => filter === 'All' ? templates : templates.filter((item) => item.category === filter), [filter])
  return <main className="page-width collection-page"><div className="page-intro"><div className="eyebrow"><span className="eyebrow-line" /> THE COLLECTION / 2026</div><h1>Distinct by<br /><em>design.</em></h1><p>Portfolio templates with a sharper point of view. Built to put the work first.</p></div><div className="collection-tools"><div className="filter-list" role="group" aria-label="Filter templates">{categories.map((category) => <button key={category} className={filter === category ? 'filter-button selected' : 'filter-button'} onClick={() => setFilter(category)}>{category}</button>)}</div><span className="result-count">{String(visibleTemplates.length).padStart(2, '0')} TEMPLATES</span></div><div className="collection-grid">{visibleTemplates.map((template) => <article className="collection-item" key={template.id}><Link to={`/templates/${template.slug}`} className="collection-preview"><TemplatePreview template={template} /></Link><div className="collection-item-meta"><span>{template.number} / {template.category.toUpperCase()}</span><span>{template.status}</span></div><div className="collection-title"><div><h2>{template.name}</h2><p>{template.description}</p></div><Link to={`/templates/${template.slug}`} aria-label={`View ${template.name}`} className="circle-link"><ArrowRight size={16} /></Link></div><div className="tag-list">{template.techStack.map((item) => <span key={item}>{item}</span>)}</div></article>)}</div><div className="collection-endnote"><span>THOUGHTFULLY MADE, READY TO MAKE YOURS.</span><span>MORE DESIGNS ARE IN THE WORKS</span></div></main>
}
