import { ArrowDown, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { templates } from '../data/templates'
import TemplatePreview from '../components/TemplatePreview'
import TemplateRow from '../components/TemplateRow'

export default function Home() {
  return <>
    <section className="hero page-width">
      <div className="hero-copy"><div className="eyebrow"><span className="eyebrow-line" /> PORTFOLIO TEMPLATES</div><motion.h1 initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .55 }}>Websites worth<br /><em>showing off.</em></motion.h1><p className="hero-description">A growing collection of portfolio templates, shown through the real projects they come from.</p><Link className="button button-dark" to="/templates">Explore templates <ArrowRight size={16} /></Link><div className="hero-footnote">A considered collection <span>—</span> {String(templates.length).padStart(2, '0')} {templates.length === 1 ? 'design' : 'designs'}</div></div>
      <Link to={`/templates/${templates[0].slug}`} className="hero-visual" aria-label={`Explore ${templates[0].name} template`}><TemplatePreview template={templates[0]} /><div className="hero-image-caption"><span>{templates[0].number} / {templates[0].name.toUpperCase()}</span><span>{templates[0].category.toUpperCase()} PORTFOLIO <ArrowRight size={14} /></span></div></Link>
      <a href="#featured" className="hero-scroll" aria-label="Scroll to featured templates"><ArrowDown size={15} /> SCROLL TO EXPLORE</a>
    </section>
    <section className="featured-section page-width" id="featured"><div className="section-heading"><div><div className="eyebrow"><span className="eyebrow-line" /> THE COLLECTION</div><h2>Featured templates<span className="section-count">({String(templates.length).padStart(2, '0')})</span></h2></div><Link className="text-action all-link" to="/templates">View all templates <ArrowRight size={15} /></Link></div><div className="template-list">{templates.map((template, index) => <TemplateRow key={template.id} template={template} index={index} />)}</div></section>
    <section className="about-band"><div className="page-width about-band-inner"><span className="eyebrow">A NOTE ON THE COLLECTION</span><p>Good work deserves a good place to live. Each template starts with a <em>distinct idea</em> and a real working project behind it.</p><Link className="text-action" to="/about">A little more about us <ArrowRight size={15} /></Link></div></section>
    <section className="contact-strip page-width"><div><span className="eyebrow">HAVE A QUESTION?</span><h2>Let's make something<br /><em>that feels like you.</em></h2></div><Link className="button button-outline" to="/contact">Get in touch <ArrowRight size={16} /></Link></section>
  </>
}
