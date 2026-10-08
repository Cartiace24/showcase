import { motion } from 'motion/react'
import { ArrowUpRight, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Template } from '../data/templates'
import TemplatePreview from './TemplatePreview'

export default function TemplateRow({ template, index = 0 }: { template: Template; index?: number }) {
  return <motion.article className={`template-row ${index % 2 === 1 ? 'reverse' : ''}`} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.5, ease: 'easeOut' }}>
    <Link to={`/templates/${template.slug}`} className="row-preview-link" aria-label={`View ${template.name} details`}><TemplatePreview template={template} /></Link>
    <div className="row-copy"><div className="row-meta"><span>{template.number}</span><span>{template.category.toUpperCase()}</span></div><div><h3>{template.name}</h3><p>{template.description}</p></div><div className="tag-list">{template.techStack.map((item) => <span key={item}>{item}</span>)}</div><div className="row-actions"><a className="text-action muted-action" aria-disabled="true" title="Live demos are coming soon">Live demo <ArrowUpRight size={15} /><span className="action-note">Coming soon</span></a><Link to={`/templates/${template.slug}`} className="text-action">View details <ArrowRight size={15} /></Link></div></div>
  </motion.article>
}
