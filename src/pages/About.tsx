import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function About() {
  return <main className="page-width simple-page"><div className="eyebrow"><span className="eyebrow-line" /> ABOUT THE COLLECTION</div><h1>Distinct ideas.<br /><em>Thoughtful pages.</em></h1><div className="simple-copy"><p className="large-copy">These are reusable portfolio templates built around distinct ideas, not generic layouts.</p><p>Each release starts with a completed project. The previews show the real working website so you can see the layout, pacing, and details before making it your own.</p><p>The project content is there to demonstrate the layout. Your work, identity, and voice belong in its place.</p><Link className="text-action" to="/templates">Browse the collection <ArrowRight size={15} /></Link></div></main>
}
