import { existsSync } from 'node:fs';
import { join } from 'node:path';
import Image from 'next/image';
import Script from 'next/script';
import * as Icons from './icons';
import {
  business, whatsappLink, nav, heroSlides, marquee, founder, stats, designPoints, services, spaces,
  craftStages, steps, enquiryOptions,
} from './content';

const Icon = ({ name, ...props }) => { const C = Icons[name]; return C ? <C {...props} /> : null; };
const pad = n => String(n).padStart(2, '0');

function Brand({ className = '' }) {
  return (
    <a className={`brand ${className}`} href="#top" aria-label="LS Interiors, back to top">
      <img className="brand-icon" src="/assets/logo-icon.png" width="417" height="418" alt="" />
      <span className="brand-wordmark" aria-hidden="true" />
    </a>
  );
}

function Eyebrow({ index, children, light }) {
  return <p className={`eyebrow${light ? ' eyebrow-light' : ''}`}>{index && <span className="eyebrow-index">{index}</span>}{children}</p>;
}

function SocialLinks({ className = '' }) {
  return (
    <div className={`social ${className}`}>
      <a className="social-ig" href={business.instagram} target="_blank" rel="noopener noreferrer" aria-label="LS Interiors on Instagram"><Icons.Instagram size={20} strokeWidth={1.8} /></a>
      <a className="social-fb" href={business.facebook} target="_blank" rel="noopener noreferrer" aria-label="LS Interiors on Facebook"><Icons.Facebook size={22} /></a>
      <a className="social-wa" href={whatsappLink()} target="_blank" rel="noopener noreferrer" aria-label="Chat with LS Interiors on WhatsApp"><Icons.WhatsApp size={20} /></a>
    </div>
  );
}

export default function Home() {
  // Put public/assets/design-3d.mp4 in place and the 3D section plays it instead of the still image.
  // Checked per render so a newly added video shows up without restarting the dev server.
  const hasDesignVideo = existsSync(join(process.cwd(), 'public', 'assets', 'design-3d.mp4'));
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>

      {/* Header */}
      <header className="site-header" id="top" data-header>
        <div className="container header-inner">
          <Brand />
          <nav className="header-nav" aria-label="Main navigation">
            {nav.slice(0, 6).map(item => <a key={item.href} href={item.href}>{item.label}</a>)}
          </nav>
          <div className="header-actions">
            <a className="header-phone" href={business.phoneHref}><Icons.Phone size={16} /><span>{business.phoneDisplay}</span></a>
            <a className="btn btn-sm btn-copper header-cta" href="#contact">Book a consultation</a>
            <button className="menu-toggle" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="menu" data-menu-toggle>
              <span /><span />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile / tablet menu */}
      <div className="menu-panel" id="menu" inert data-menu>
        <nav aria-label="Mobile navigation">
          <ol>
            {nav.map((item, i) => <li key={item.href}><a href={item.href}><span>{pad(i + 1)}</span>{item.label}</a></li>)}
          </ol>
        </nav>
        <div className="menu-foot">
          <a className="menu-phone" href={business.phoneHref}><Icons.Phone size={18} /> {business.phoneDisplay}</a>
          <SocialLinks className="social-light" />
        </div>
      </div>

      <main id="main">
        {/* Hero */}
        <section className="hero" aria-labelledby="hero-title" data-hero>
          <div className="hero-slides">
            {heroSlides.map((s, i) => (
              <figure key={s.src} className={`hero-slide${i === 0 ? ' is-active' : ''}`} data-slide>
                <Image src={s.src} alt={s.alt} fill sizes="100vw" {...(i === 0 ? { loading: 'eager', fetchPriority: 'high' } : {})} />
              </figure>
            ))}
          </div>
          <div className="hero-scrim" />

          <div className="container hero-inner">
            <Eyebrow light>Interior design &amp; manufacturing · Tirupati · Since 2010</Eyebrow>
            <h1 id="hero-title" className="hero-title">
              <span className="line"><span>Make room for</span></span>
              <span className="line"><span>a <em>beautiful</em> life.</span></span>
            </h1>
            <p className="hero-lede">Complete home interiors, modular kitchens, wardrobes and bespoke furniture, designed by us and made in our own workshop.</p>
            <div className="hero-actions">
              <a className="btn btn-copper" href="#design">Get your free 3D design <Icons.ArrowUpRight size={18} /></a>
              <a className="btn btn-glass" href="#spaces">Explore our spaces</a>
            </div>
          </div>

          <div className="container hero-foot">
            <div className="hero-controls">
              <div className="hero-indicators" role="group" aria-label="Choose featured space">
                {heroSlides.map((s, i) => (
                  <button key={s.label} type="button" className={i === 0 ? 'is-active' : ''} data-slide-to={i} aria-label={`Show ${s.label}`} aria-pressed={i === 0}>
                    <span className="ind-num">{pad(i + 1)}</span>
                    <span className="ind-label">{s.label}</span>
                    <span className="ind-bar"><i /></span>
                  </button>
                ))}
              </div>
              <button className="hero-pause" type="button" aria-label="Pause slideshow" data-hero-pause>
                <Icons.Pause size={16} className="i-pause" /><Icons.Play size={14} className="i-play" />
              </button>
            </div>
            <div className="hero-badge">
              <span className="hero-badge-icon"><Icons.Workshop size={22} /></span>
              <span><b>450+ projects since 2010</b><small>Designed &amp; made in our own factory</small></span>
            </div>
          </div>
        </section>

        {/* Marquee */}
        <div className="marquee" aria-hidden="true">
          <div className="marquee-track">
            {[0, 1].map(k => (
              <div className="marquee-group" key={k}>
                {marquee.map((m, i) => <span key={m} className={i % 2 ? 'outline' : ''}>{m}<i>✦</i></span>)}
              </div>
            ))}
          </div>
        </div>

        {/* Studio */}
        <section className="studio section" id="studio" aria-labelledby="studio-title">
          <div className="container studio-grid">
            <div className="studio-media reveal">
              <div className="arch" data-parallax="0.06">
                <Image src="/assets/studio-main.webp" alt="Double-height room with a wooden oonjal swing on brass chains, a tall arched window and a carved jaali screen" fill sizes="(max-width: 900px) 90vw, 42vw" />
              </div>
              <div className="studio-inset">
                <Image src="/assets/studio-detail.webp" alt="Material samples: wood veneers, laminates, fluted glass, a jaali panel, brass handle and handloom fabrics" fill sizes="(max-width: 900px) 45vw, 18vw" />
              </div>
              <div className="seal" aria-hidden="true">
                <svg viewBox="0 0 200 200" className="seal-text">
                  <defs><path id="seal-path" d="M100,100 m-76,0 a76,76 0 1,1 152,0 a76,76 0 1,1 -152,0" /></defs>
                  <text><textPath href="#seal-path" textLength="470" lengthAdjust="spacing">DESIGNED · CRAFTED · DELIVERED · TIRUPATI · </textPath></text>
                </svg>
                <img src="/assets/logo-icon.png" width="417" height="418" alt="" />
              </div>
            </div>

            <div className="studio-copy">
              <Eyebrow index="01">The studio</Eyebrow>
              <h2 id="studio-title" className="reveal">Good design looks beautiful. <em>Great design feels like home.</em></h2>
              <p className="lead reveal">A quiet corner for your morning coffee. A kitchen that brings everyone together. A home that tells your story.</p>
              <p className="reveal">Founded by {founder.name} in 2010, Lakshmi Srinivasa Interiors brings thoughtful design and hands-on craftsmanship together. With our own factory in Tirupati, we create interiors that fit your space, your lifestyle and the way you want to live.</p>
            </div>
          </div>

          <div className="container">
            <figure className="founder reveal">
              <div className="founder-photo">
                <Image src="/assets/founder.webp" alt={`${founder.name}, founder of LS Interiors`} fill sizes="(max-width: 700px) 92vw, 400px" />
              </div>
              <div className="founder-body">
                <p className="eyebrow">Meet the founder</p>
                <blockquote>“{founder.quote}”</blockquote>
                <figcaption><b>{founder.name}</b><small>{founder.role}</small></figcaption>
              </div>
            </figure>

            <dl className="stats">
              {stats.map((st, i) => (
                <div key={st.label} className="stat reveal" style={{ '--d': `${i * 90}ms` }}>
                  <dt>{st.label}</dt>
                  <dd>{st.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Services */}
        <section className="services section" id="services" aria-labelledby="services-title">
          <div className="container">
            <div className="section-head">
              <div>
                <Eyebrow index="02" light>What we do</Eyebrow>
                <h2 id="services-title" className="reveal">Every room. <em>Every detail.</em></h2>
              </div>
              <p className="reveal">From a single statement unit to a complete home, we design, manufacture and install, so your interiors arrive exactly as imagined.</p>
            </div>

            <div className="services-grid">
              <div className="services-visual" aria-hidden="true">
                {services.map((s, i) => (
                  <div key={s.id} className={`sv-frame${i === 0 ? ' is-active' : ''}`} data-service-image={s.id}>
                    <Image src={s.image} alt="" fill sizes="(max-width: 900px) 1px, 40vw" />
                  </div>
                ))}
                <span className="sv-count"><b data-service-count>01</b> / {pad(services.length)}</span>
              </div>

              <ol className="service-list">
                {services.map((s, i) => (
                  <li key={s.id} className={`service${i === 0 ? ' is-active' : ''}`} data-service={s.id} tabIndex={0}>
                    <div className="service-thumb"><Image src={s.image} alt="" fill sizes="(max-width: 900px) 92vw, 1px" /></div>
                    <div className="service-row">
                      <span className="service-num">{pad(i + 1)}</span>
                      <span className="service-icon"><Icon name={s.icon} size={22} /></span>
                      <h3>{s.title}</h3>
                    </div>
                    <div className="service-body"><div>
                      <p>{s.text}</p>
                      <ul className="tags">{s.tags.map(t => <li key={t}>{t}</li>)}</ul>
                      <a className="text-link text-link-light" href="#contact" data-prefill={s.service}>Enquire about this <Icons.ArrowRight size={16} /></a>
                    </div></div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* Spaces */}
        <section className="spaces section" id="spaces" aria-labelledby="spaces-title">
          <div className="container">
            <div className="section-head">
              <div>
                <Eyebrow index="03">Find your inspiration</Eyebrow>
                <h2 id="spaces-title" className="reveal">Spaces with <em>soul.</em></h2>
              </div>
              <p className="reveal">Different rooms, one beautiful story. Tap a space to explore the direction, then tell us what you love.</p>
            </div>

            <div className="filters" role="group" aria-label="Filter spaces">
              <button type="button" className="is-active" data-filter="all" aria-pressed="true">All <small>{pad(spaces.length)}</small></button>
              {spaces.map(s => <button key={s.category} type="button" data-filter={s.category} aria-pressed="false">{s.label}</button>)}
            </div>

            <div className="gallery" data-gallery>
              {spaces.map((s, i) => (
                <button key={s.category} type="button" className={`space-card g-${i + 1} reveal`} data-category={s.category}
                  data-title={s.title} data-text={s.text} data-full={s.image} data-service={s.service} data-label={s.label}
                  aria-label={`${s.label}: ${s.title}. Open details`}>
                  <Image src={s.image} alt={s.alt} fill sizes={i === 0 || i === 2 ? '(max-width: 700px) 92vw, 40vw' : '(max-width: 700px) 92vw, 20vw'} />
                  <span className="space-tag">{s.label}</span>
                  <span className="space-caption">
                    <span><b>{s.title}</b><small>{s.mood}</small></span>
                    <span className="space-open"><Icons.ArrowUpRight size={20} /></span>
                  </span>
                </button>
              ))}
            </div>
            <p className="gallery-note">Moodboard imagery for design direction. Ask us for photographs of our completed homes.</p>
          </div>
        </section>

        {/* Free 3D design */}
        <section className="design section" id="design" aria-labelledby="design-title">
          <div className="container design-grid">
            <div className="design-media reveal">
              <div className="screen">
                {hasDesignVideo
                  ? <video src="/assets/design-3d.mp4" poster="/assets/design-3d.webp" autoPlay muted loop playsInline preload="metadata" aria-label="3D design walkthrough shown on a large screen" data-design-video />
                  : <Image src="/assets/design-3d.webp" alt="Clients reviewing a photorealistic 3D render of their living room on a large screen" fill sizes="(max-width: 900px) 92vw, 55vw" />}
              </div>
              {hasDesignVideo && (
                <div className="design-inset">
                  <Image src="/assets/design-3d.webp" alt="Clients and a designer reviewing a photorealistic 3D render of their living room on a large screen" fill sizes="(max-width: 900px) 50vw, 24vw" />
                </div>
              )}
              <span className="design-badge"><b>Free</b><small>3D design</small></span>
            </div>
            <div className="design-copy">
              <Eyebrow index="04" light>Free 3D design</Eyebrow>
              <h2 id="design-title" className="reveal">See your home <em>before it’s built.</em></h2>
              <p className="lead reveal">Before a single panel is cut, we show you your finished home in 3D, exactly as it will look after the work is done.</p>
              <ul className="design-points">
                {designPoints.map((d, i) => (
                  <li key={d.title} className="reveal" style={{ '--d': `${i * 90}ms` }}>
                    <span className="service-icon"><Icon name={d.icon} size={22} /></span>
                    <div><h3>{d.title}</h3><p>{d.text}</p></div>
                  </li>
                ))}
              </ul>
              <a className="btn btn-copper reveal" href="#contact" data-prefill-message="I would like a free 3D design for my space.">Book your free 3D design <Icons.ArrowUpRight size={18} /></a>
            </div>
          </div>
        </section>

        {/* Craft */}
        <section className="craft section" id="craft" aria-labelledby="craft-title">
          <div className="container craft-grid">
            <div className="craft-media reveal">
              <div className="craft-main" data-parallax="0.05">
                <Image src="/assets/craft-workshop.webp" alt="Hands guiding a laminated panel through a panel saw in a furniture workshop" fill sizes="(max-width: 900px) 92vw, 50vw" />
              </div>
              <div className="craft-detail">
                <Image src="/assets/craft-detail.webp" alt="Close-up of a walnut cabinet corner with a brass handle beside a fluted glass profile door" fill sizes="(max-width: 900px) 40vw, 20vw" />
              </div>
              <span className="craft-chip"><Icons.MapPin size={15} /> Made in Tirupati</span>
            </div>

            <div className="craft-copy">
              <Eyebrow index="05">Designed by us. Made by us.</Eyebrow>
              <h2 id="craft-title" className="reveal">From our workshop, <em>to your home.</em></h2>
              <p className="lead reveal">Beautiful interiors begin long before installation, with the materials, the measurements and the people who make them.</p>
              <p className="reveal">Every modular piece is made inside our own automated factory in four precision stages. Each one is pre-checked in the factory, then installed on site by our skilled technicians for lasting durability.</p>
              <ol className="stages">
                {craftStages.map((f, i) => (
                  <li key={f.title} className="stage reveal" style={{ '--d': `${i * 80}ms` }}>
                    <span className="stage-num">Stage {pad(i + 1)}</span>
                    <Icon name={f.icon} size={26} />
                    <h3>{f.title}</h3>
                    <p>{f.text}</p>
                  </li>
                ))}
              </ol>
              <a className="text-link reveal" href="#contact">Let’s make something yours <Icons.ArrowRight size={16} /></a>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="process section" id="process" aria-labelledby="process-title">
          <div className="container">
            <div className="section-head section-head-center">
              <Eyebrow index="06">How it works</Eyebrow>
              <h2 id="process-title" className="reveal">A clear path to <em>your kind of beautiful.</em></h2>
            </div>
            <ol className="steps">
              {steps.map((s, i) => (
                <li key={s.title} className="step reveal" style={{ '--d': `${i * 110}ms` }}>
                  <span className="step-icon"><Icon name={s.icon} size={24} /></span>
                  <span className="step-num">Step {pad(i + 1)}</span>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* CTA band */}
        <section className="cta-band" aria-labelledby="cta-title">
          <div className="cta-bg" data-parallax="0.12">
            <Image src="/assets/cta-band.webp" alt="" fill sizes="100vw" />
          </div>
          <div className="container cta-inner">
            <Eyebrow light>Let’s begin</Eyebrow>
            <h2 id="cta-title" className="reveal">Your next chapter <em>starts at home.</em></h2>
            <p className="reveal">Have an idea, a floor plan, or simply a feeling? We’d love to hear it.</p>
            <div className="cta-actions reveal">
              <a className="btn btn-whatsapp" href={whatsappLink()} target="_blank" rel="noopener noreferrer"><Icons.WhatsApp size={19} /> Chat on WhatsApp</a>
              <a className="btn btn-glass" href={business.phoneHref}><Icons.Phone size={17} /> Call {business.phoneDisplay}</a>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="contact section" id="contact" aria-labelledby="contact-title">
          <div className="container contact-grid">
            <div className="contact-info">
              <Eyebrow index="07">Visit or write to us</Eyebrow>
              <h2 id="contact-title" className="reveal">Tell us about <em>your space.</em></h2>
              <p className="reveal">A beautiful beginning is just a conversation away. Share a few details and we’ll get back to you.</p>

              <ul className="contact-list">
                <li><span className="icon-ring"><Icons.Phone size={19} /></span><div><small>Call us</small><a href={business.phoneHref}>{business.phoneDisplay}</a><br /><a href={business.phone2Href}>{business.phone2Display}</a></div></li>
                <li><span className="icon-ring icon-ring-wa"><Icons.WhatsApp size={19} /></span><div><small>WhatsApp</small><a href={whatsappLink()} target="_blank" rel="noopener noreferrer">Chat with our team</a></div></li>
                <li><span className="icon-ring"><Icons.MapPin size={19} /></span><div><small>Studio &amp; workshop</small><address>{business.addressLines[0]}<br />{business.addressLines[1]}</address><a className="inline-link" href={business.mapsUrl} target="_blank" rel="noopener noreferrer">Get directions <Icons.ArrowUpRight size={14} /></a></div></li>
                <li><span className="icon-ring"><Icons.Instagram size={19} /></span><div><small>Follow our work</small><SocialLinks /></div></li>
              </ul>
            </div>

            <form className="enquiry reveal" id="enquiry-form" noValidate>
              <h3>Start your project</h3>
              <p className="form-sub">Takes under a minute. We’ll continue the conversation on WhatsApp.</p>

              <div className="field-row">
                <div className="field">
                  <label htmlFor="name">Your name</label>
                  <input id="name" name="name" placeholder="How should we address you?" autoComplete="name" required maxLength={80} />
                </div>
                <div className="field">
                  <label htmlFor="phone">Phone number</label>
                  <input id="phone" name="phone" type="tel" placeholder="10-digit mobile number" autoComplete="tel" inputMode="tel" required maxLength={18} />
                </div>
              </div>
              <fieldset className="field">
                <legend>What are you planning?</legend>
                <div className="chips">
                  {enquiryOptions.map((o, i) => (
                    <label key={o} className="chip"><input type="radio" name="service" value={o} required={i === 0} /><span>{o}</span></label>
                  ))}
                </div>
              </fieldset>
              <div className="field">
                <label htmlFor="message">About your project <span className="optional">(optional)</span></label>
                <textarea id="message" name="message" rows={3} placeholder="Location, size, ideas, timeline…" maxLength={1500} />
              </div>
              <p className="form-error" id="form-error" role="alert" />
              <button className="btn btn-copper btn-block" type="submit"><Icons.WhatsApp size={18} /> Send enquiry via WhatsApp</button>
              <p className="form-note" id="form-status" role="status">Opens WhatsApp with your message ready. You review and send.</p>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-top">
            <div className="footer-brand">
              <Brand className="brand-light" />
              <p>Make room for a <em>beautiful</em> life.</p>
            </div>
            <div className="footer-cols">
              <div>
                <h3>Explore</h3>
                <ul>{nav.map(n => <li key={n.href}><a href={n.href}>{n.label}</a></li>)}</ul>
              </div>
              <div>
                <h3>Services</h3>
                <ul>{services.map(s => <li key={s.id}><a href="#services">{s.title}</a></li>)}</ul>
              </div>
              <div>
                <h3>Visit</h3>
                <address>{business.legalName}<br />{business.addressLines[0]}<br />{business.addressLines[1]}</address>
                <a className="footer-link" href={business.mapsUrl} target="_blank" rel="noopener noreferrer">Get directions <Icons.ArrowUpRight size={14} /></a>
              </div>
              <div>
                <h3>Connect</h3>
                <a className="footer-phone" href={business.phoneHref}>{business.phoneDisplay}</a>
                <a className="footer-phone" href={business.phone2Href}>{business.phone2Display}</a>
                <SocialLinks className="social-light" />
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© <span data-year>2026</span> {business.legalName}. All rights reserved.</span>
            <p className="powered-by">
              <span>Powered by</span>
              <span className="lasan-signature">Lasan Labs</span>
            </p>
            <a href="#top" className="to-top">Back to top <Icons.ArrowUp size={14} /></a>
          </div>
        </div>
      </footer>

      {/* Floating contact dock */}
      <div className="dock" aria-label="Quick contact">
        <a className="dock-btn dock-call" href={business.phoneHref} aria-label={`Call LS Interiors on ${business.phoneDisplay}`}>
          <Icons.Phone size={22} /><span className="dock-label">Call us</span>
        </a>
        <a className="dock-btn dock-wa" href={whatsappLink()} target="_blank" rel="noopener noreferrer" aria-label="Chat with LS Interiors on WhatsApp">
          <Icons.WhatsApp size={26} /><span className="dock-label">WhatsApp us</span>
        </a>
      </div>

      {/* Lightbox */}
      <dialog className="lightbox" id="lightbox" aria-labelledby="lb-title">
        <div className="lb-media">
          <img id="lb-image" alt="" />
          <button type="button" className="lb-nav lb-prev" aria-label="Previous space" data-lb-prev><Icons.ArrowLeft size={20} /></button>
          <button type="button" className="lb-nav lb-next" aria-label="Next space" data-lb-next><Icons.ArrowRight size={20} /></button>
        </div>
        <div className="lb-copy">
          <p className="eyebrow"><span id="lb-label" /> · Design inspiration <span className="lb-count" id="lb-count" /></p>
          <h2 id="lb-title" />
          <p id="lb-text" />
          <a href="#contact" className="btn btn-copper" data-lb-enquire>I love this direction <Icons.ArrowUpRight size={18} /></a>
        </div>
        <button type="button" className="lb-close" aria-label="Close" data-lb-close><Icons.Close size={20} /></button>
      </dialog>

      <Script src="/interactions.js" strategy="afterInteractive" />
    </>
  );
}
