import { ArrowRight, ArrowUpRight } from 'lucide-react'

export default function Contact() {
  const contactUrl = 'https://mail.google.com/mail/?view=cm&fs=1&to=saulisaiah24%40gmail.com&su=Template%20inquiry'
  return <main className="page-width simple-page contact-page"><div className="eyebrow"><span className="eyebrow-line" /> CONTACT</div><h1>Have something<br /><em>in mind?</em></h1><div className="simple-copy"><p className="large-copy">Questions about a template, a customization, or a project of your own?</p><p>For general inquiries, template questions, or custom website requests, send a note and tell us a little about what you need.</p><a className="button button-dark" href={contactUrl} target="_blank" rel="noreferrer">Get in touch <ArrowUpRight size={16} /></a><span className="contact-note">Opens a Gmail message addressed to Saul.</span></div><div className="contact-bottom"><span>WE TYPICALLY REPLY WITHIN TWO BUSINESS DAYS.</span><a href={contactUrl} target="_blank" rel="noreferrer">saulisaiah24@gmail.com <ArrowRight size={14} /></a></div></main>
}
