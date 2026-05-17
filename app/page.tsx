// @ts-nocheck
'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import {
  Menu, X, Star, MapPin, Phone, Mail, Clock,
  Instagram, Facebook, CheckCircle, ArrowRight, ChevronDown
} from 'lucide-react';
import { studioInfo, stats, eightLimbs, instructors, testimonials, pricing } from '@/lib/site-data';

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.12 }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);
  const links = ['8 Limbs', 'Instructors', 'Pricing', 'Contact'];
  return (
    <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#111111]/96 backdrop-blur border-b border-[#2A2A2A]' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <div className="w-10 h-10 border-2 border-mt-gold flex items-center justify-center">
            <span className="text-mt-gold font-heading font-bold text-xs tracking-tight leading-tight text-center">ไทย</span>
          </div>
          <span className="font-heading font-bold text-xl tracking-wider text-white uppercase">Muay Thai Miami</span>
        </a>
        <ul className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <li key={l}>
              <a href={`#${l.toLowerCase().replace(' ', '-')}`}
                className="text-sm font-heading font-semibold text-mt-muted hover:text-white transition-colors tracking-wide uppercase">
                {l}
              </a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="hidden md:inline-flex items-center gap-2 bg-mt-red hover:bg-[#B71C1C] text-white font-heading font-bold text-sm uppercase tracking-widest px-5 py-2.5 transition-colors">
          Free Trial
        </a>
        <button onClick={() => setOpen(!open)} className="md:hidden text-white p-1">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-[#1A1A1A] border-t border-[#2A2A2A] px-6 py-4 flex flex-col gap-4">
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase().replace(' ', '-')}`} onClick={() => setOpen(false)}
              className="text-sm font-heading font-bold text-mt-muted uppercase tracking-wide">{l}</a>
          ))}
          <a href="#contact" className="bg-mt-red text-white font-heading font-bold text-sm uppercase tracking-widest px-5 py-3 text-center">Start Free Trial</a>
        </div>
      )}
    </nav>
  );
}

/* ─── Hero ─── */
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=1600&q=85"
          alt="Muay Thai training"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#111111]/97 via-[#111111]/75 to-[#111111]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent" />
        {/* Gold line accent */}
        <div className="absolute top-0 left-0 w-1 h-full bg-mt-gold opacity-60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 w-full">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-0.5 w-10 bg-mt-gold" />
            <span data-cg-el="hero_eyebrow" className="text-mt-gold font-heading font-bold text-sm uppercase tracking-[0.3em]">มวยไทย — Muay Thai · Miami, FL</span>
          </div>

          <h1 data-cg-el="hero_headline_1" className="font-heading font-black text-6xl sm:text-7xl lg:text-8xl text-white leading-none mb-4 uppercase">
            THE ART<br />
            OF <span className="text-mt-red">EIGHT</span><br />
            LIMBS.
          </h1>

          <p data-cg-el="hero_subtitle" className="text-mt-muted text-lg mb-8 max-w-lg leading-relaxed">{studioInfo.subheadline}</p>

          <div className="flex flex-wrap gap-3">
            <a data-cg-el="hero_cta_primary" href="#contact" className="inline-flex items-center gap-2 bg-mt-red hover:bg-[#B71C1C] text-white font-heading font-bold text-sm uppercase tracking-widest px-8 py-4 transition-colors">
              Free Trial Class <ArrowRight size={15} />
            </a>
            <a data-cg-el="hero_cta_secondary" href="#8-limbs" className="inline-flex items-center gap-2 border-2 border-mt-gold/40 hover:border-mt-gold text-white font-heading font-bold text-sm uppercase tracking-widest px-8 py-4 transition-colors">
              The 8 Limbs
            </a>
          </div>

          {/* Thai flag accent */}
          <div className="flex items-center gap-4 mt-8 pt-8 border-t border-[#2A2A2A]">
            <div className="flex gap-1">
              {[1,2,3,4,5].map(i => <Star key={i} size={13} className="fill-yellow-400 text-yellow-400" />)}
            </div>
            <span className="text-mt-muted text-sm">Authentic Thailand-style training · Miami, FL</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <ChevronDown size={20} className="text-white/30" />
      </div>
    </section>
  );
}

/* ─── Stats ─── */
function Stats() {
  return (
    <section className="bg-mt-red py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
          {stats.map(s => (
            <div key={s.label}>
              <div className="font-heading font-black text-4xl">{s.value}</div>
              <div className="text-red-200 text-xs uppercase tracking-widest mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── 8 Limbs ─── */
function EightLimbs() {
  return (
    <section id="8-limbs" className="py-24 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-0.5 w-8 bg-mt-gold" />
            <p className="text-mt-gold font-heading font-bold text-sm uppercase tracking-[0.3em]">Complete System</p>
            <div className="h-0.5 w-8 bg-mt-gold" />
          </div>
          <h2 className="font-heading font-black text-5xl md:text-6xl text-white uppercase">THE 8 LIMBS OF<br />MUAY THAI</h2>
          <p className="text-mt-muted mt-4 max-w-xl mx-auto">Every weapon in the Muay Thai arsenal, taught with authentic technique and purpose.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {eightLimbs.map((l, i) => (
            <div key={l.name}
              className="reveal bg-[#1A1A1A] border border-[#2A2A2A] hover:border-mt-gold/40 p-6 transition-colors"
              style={{ animationDelay: `${i * 0.07}s` }}>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-6 bg-mt-red flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-heading font-black text-xs">{i + 1}</span>
                </div>
                <h3 className="font-heading font-black text-lg text-white uppercase">{l.name}</h3>
              </div>
              <p className="text-mt-gold text-xs font-heading uppercase tracking-widest mb-2">({l.thai})</p>
              <p className="text-mt-muted text-xs leading-relaxed">{l.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Instructors ─── */
function Instructors() {
  return (
    <section id="instructors" className="py-24 bg-[#0D0D0D]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-0.5 w-8 bg-mt-gold" />
            <p className="text-mt-gold font-heading font-bold text-sm uppercase tracking-[0.3em]">The Krus</p>
            <div className="h-0.5 w-8 bg-mt-gold" />
          </div>
          <h2 className="font-heading font-black text-5xl md:text-6xl text-white uppercase">LEARN FROM CHAMPIONS</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {instructors.map((inst, i) => (
            <div key={inst.name} className="reveal group" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="relative overflow-hidden aspect-[3/4] mb-5">
                <Image src={inst.image} alt={inst.name} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="h-0.5 w-8 bg-mt-gold mb-2" />
                  <h3 className="font-heading font-black text-xl text-white">{inst.name}</h3>
                  <p className="text-mt-gold font-heading text-xs uppercase tracking-wide mt-1">{inst.rank}</p>
                </div>
              </div>
              <p className="text-mt-muted text-sm leading-relaxed">{inst.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Testimonials ─── */
function Testimonials() {
  return (
    <section className="py-24 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-0.5 w-8 bg-mt-gold" />
            <p className="text-mt-gold font-heading font-bold text-sm uppercase tracking-[0.3em]">Student Stories</p>
            <div className="h-0.5 w-8 bg-mt-gold" />
          </div>
          <h2 className="font-heading font-black text-5xl md:text-6xl text-white uppercase">WHAT STUDENTS SAY</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {testimonials.map((t, i) => (
            <div key={t.name}
              className="reveal bg-[#1A1A1A] border border-[#2A2A2A] p-8"
              style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, j) => <Star key={j} size={13} className="fill-yellow-400 text-yellow-400" />)}
              </div>
              <p className="text-mt-text text-sm leading-relaxed mb-6">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-mt-red flex items-center justify-center font-heading font-black text-white text-sm">{t.name[0]}</div>
                <span className="font-heading font-bold text-white">{t.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Pricing ─── */
function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-[#0D0D0D]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-0.5 w-8 bg-mt-gold" />
            <p className="text-mt-gold font-heading font-bold text-sm uppercase tracking-[0.3em]">Membership</p>
            <div className="h-0.5 w-8 bg-mt-gold" />
          </div>
          <h2 className="font-heading font-black text-5xl md:text-6xl text-white uppercase">JOIN THE DOJO</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {pricing.map((p, i) => (
            <div key={p.name}
              className={`reveal relative p-8 ${p.highlight ? 'bg-mt-red border-2 border-mt-red' : 'bg-[#1A1A1A] border border-[#2A2A2A]'}`}
              style={{ animationDelay: `${i * 0.1}s` }}>
              {p.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-mt-gold text-black font-heading font-black text-xs uppercase tracking-wider px-4 py-1">
                  Most Popular
                </div>
              )}
              <h3 className="font-heading font-black text-2xl text-white uppercase mb-1">{p.name}</h3>
              <div className="mb-6">
                <span className="font-heading font-black text-5xl text-white">{p.price}</span>
                <span className={`text-sm ml-1 ${p.highlight ? 'text-red-200' : 'text-mt-muted'}`}>{p.period}</span>
              </div>
              <ul className="space-y-2.5 mb-8">
                {p.features.map(f => (
                  <li key={f} className="flex items-center gap-2.5">
                    <CheckCircle size={13} className={p.highlight ? 'text-red-200' : 'text-mt-red'} />
                    <span className={`text-sm ${p.highlight ? 'text-red-100' : 'text-mt-muted'}`}>{f}</span>
                  </li>
                ))}
              </ul>
              <a href="#contact"
                className={`block text-center font-heading font-black text-sm uppercase tracking-widest py-3 transition-colors ${p.highlight ? 'bg-white text-mt-red hover:bg-red-50' : 'bg-mt-red text-white hover:bg-[#B71C1C]'}`}>
                {p.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Contact ─── */
function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="reveal">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-0.5 w-8 bg-mt-gold" />
              <p className="text-mt-gold font-heading font-bold text-sm uppercase tracking-[0.3em]">Begin Training</p>
            </div>
            <h2 className="font-heading font-black text-5xl md:text-6xl text-white uppercase mb-6">YOUR FIRST CLASS IS FREE</h2>
            <p className="text-mt-muted leading-relaxed mb-8 max-w-md">Show up, experience authentic Muay Thai, and see why Miami trains here.</p>
            <div className="space-y-4 mb-8">
              {[{ icon: MapPin, label: studioInfo.address }, { icon: Phone, label: studioInfo.phone }, { icon: Mail, label: studioInfo.email }].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3">
                  <Icon size={15} className="text-mt-red flex-shrink-0" />
                  <span className="text-mt-muted text-sm">{label}</span>
                </div>
              ))}
            </div>
            {Object.entries(studioInfo.hours).map(([day, hrs]) => (
              <div key={day} className="flex items-center gap-3 mb-2">
                <Clock size={13} className="text-mt-muted flex-shrink-0" />
                <span className="text-mt-muted text-sm"><strong className="text-white">{day}:</strong> {hrs}</span>
              </div>
            ))}
          </div>
          <div className="reveal bg-[#1A1A1A] border border-[#2A2A2A] p-8">
            <h3 className="font-heading font-black text-2xl text-white mb-6 uppercase">Book Your Free Trial</h3>
            <form className="space-y-4" onSubmit={e => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-4">
                {[['First Name', 'Nattapong'], ['Last Name', 'Srisuk']].map(([label, ph]) => (
                  <div key={label}>
                    <label className="block text-mt-muted text-xs uppercase tracking-wide mb-1.5">{label}</label>
                    <input type="text" placeholder={ph} className="w-full bg-[#111111] border border-[#2A2A2A] focus:border-mt-red text-white text-sm px-4 py-3 outline-none transition-colors placeholder-[#444]" />
                  </div>
                ))}
              </div>
              {[['Email', 'email', 'you@email.com'], ['Phone', 'tel', '(305) 555-0000']].map(([label, type, ph]) => (
                <div key={label}>
                  <label className="block text-mt-muted text-xs uppercase tracking-wide mb-1.5">{label}</label>
                  <input type={type} placeholder={ph} className="w-full bg-[#111111] border border-[#2A2A2A] focus:border-mt-red text-white text-sm px-4 py-3 outline-none transition-colors placeholder-[#444]" />
                </div>
              ))}
              <div>
                <label className="block text-mt-muted text-xs uppercase tracking-wide mb-1.5">Experience Level</label>
                <select className="w-full bg-[#111111] border border-[#2A2A2A] focus:border-mt-red text-white text-sm px-4 py-3 outline-none transition-colors">
                  <option>Complete Beginner</option>
                  <option>Some Martial Arts Background</option>
                  <option>Intermediate Muay Thai</option>
                  <option>Advanced / Competition</option>
                </select>
              </div>
              <button type="submit" className="w-full bg-mt-red hover:bg-[#B71C1C] text-white font-heading font-black text-sm uppercase tracking-widest py-4 transition-colors flex items-center justify-center gap-2">
                Book Free Class <ArrowRight size={15} />
              </button>
              <p className="text-[#444] text-xs text-center">100% free. No commitment. Just train.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Footer ─── */
function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-[#2A2A2A] py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 border-2 border-mt-gold flex items-center justify-center">
            <span className="text-mt-gold font-heading font-black text-xs">ไทย</span>
          </div>
          <span className="font-heading font-black text-white uppercase">Muay Thai Miami</span>
        </div>
        <p className="text-[#555] text-xs">© 2026 Muay Thai Miami. All rights reserved.</p>
        <div className="flex gap-3">
          <a href={studioInfo.instagram} className="w-9 h-9 bg-[#1A1A1A] border border-[#2A2A2A] hover:border-mt-gold flex items-center justify-center transition-colors">
            <Instagram size={14} className="text-mt-muted" />
          </a>
          <a href={studioInfo.facebook} className="w-9 h-9 bg-[#1A1A1A] border border-[#2A2A2A] hover:border-mt-gold flex items-center justify-center transition-colors">
            <Facebook size={14} className="text-mt-muted" />
          </a>
        </div>
        <p className="text-[#555] text-xs">Powered by <span className="text-mt-red">Garrison365 Sites</span></p>
      </div>
    </footer>
  );
}

export default function Page() {
  useReveal();
  return (
    <>
      <Nav />
      <Hero />
      <Stats />
      <EightLimbs />
      <Instructors />
      <Testimonials />
      <Pricing />
      <Contact />
      <Footer />
    </>
  );
}
