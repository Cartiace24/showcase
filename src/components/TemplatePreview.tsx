import { useState } from 'react'
import { Monitor, Smartphone } from 'lucide-react'
import type { Template } from '../data/templates'

interface Props { template: Template; controls?: boolean; className?: string }

export default function TemplatePreview({ template, controls = false, className = '' }: Props) {
  const [view, setView] = useState<'desktop' | 'mobile'>('desktop')
  const src = view === 'desktop' ? template.previewImages.desktop : template.previewImages.mobile
  return <div className={`preview-wrap theme-${template.theme} ${className}`}>
    {controls && <div className="preview-controls" role="group" aria-label="Preview size"><span>PREVIEW</span><button className={view === 'desktop' ? 'selected' : ''} type="button" onClick={() => setView('desktop')} aria-label="Desktop preview"><Monitor size={15} /> Desktop</button><button className={view === 'mobile' ? 'selected' : ''} type="button" onClick={() => setView('mobile')} aria-label="Mobile preview"><Smartphone size={15} /> Mobile</button></div>}
    <div className={`preview-stage ${view === 'mobile' && controls ? 'mobile-stage' : ''}`}><img src={src} alt={template.previewImages.alt} loading="lazy" /></div>
  </div>
}
