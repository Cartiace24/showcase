import { Link, useLocation } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function Policy() {
  const { pathname } = useLocation()
  const isPrivacy = pathname === '/privacy'
  return <main className="page-width simple-page policy-page"><Link className="back-link" to="/"><ArrowLeft size={15} /> Home</Link><div className="eyebrow"><span className="eyebrow-line" /> {isPrivacy ? 'PRIVACY' : 'TERMS'}</div><h1>{isPrivacy ? <>A little about<br /><em>your privacy.</em></> : <>Good to know<br /><em>before you begin.</em></>}</h1><div className="simple-copy"><p className="large-copy">{isPrivacy ? 'This catalog does not ask you to create an account.' : 'The templates shown here are a preview of the collection.'}</p><p>{isPrivacy ? 'This site has no account system or contact form. Choosing “Get in touch” opens your email app; any information you choose to include is sent through your email provider.' : 'Template demos and purchases are not available yet. Usage terms, license details, and any applicable purchase information will be provided with each template before it becomes available.'}</p><p>Questions? <Link className="inline-link" to="/contact">Get in touch.</Link></p></div><div className="policy-updated">LAST UPDATED · OCTOBER 2026</div></main>
}
