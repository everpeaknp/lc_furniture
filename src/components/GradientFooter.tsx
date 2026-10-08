'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const footerLinks = {
  links: [
    { name: 'Home', href: '#' },
    { name: 'Shop', href: '#' },
    { name: 'About Us', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'FAQ', href: '#' },
  ],
  categories: [
    { name: 'Living Room', href: '#' },
    { name: 'Bedroom', href: '#' },
    { name: 'Office', href: '#' },
    { name: 'Dining', href: '#' },
    { name: 'Lamps', href: '#' },
  ],
  support: [
    { name: 'Shipping Information', href: '#' },
    { name: 'Return & Refund Policy', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms & Conditions', href: '#' },
    { name: 'Contact', href: '#' },
  ],
}

export function GradientFooter() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    // Scroll-triggered fade-up animation
    gsap.from(containerRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 90%',
        end: 'top 70%',
        scrub: 1,
      },
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power2.out',
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <footer
      ref={containerRef}
      className="bg-[#1a1a1a] text-white"
    >
      <div className="mx-auto max-w-[1320px] px-5 py-16 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Company Information */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold text-white mb-6 tracking-tight">Wooden Street</h2>
            <p className="text-white/60 mb-6 text-sm leading-relaxed">
              Premium furniture designed for modern living and inspired workspaces.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-white/70 text-sm">
                <Mail size={16} className="text-[#b88951]" />
                <span>support@woodenstreet.com</span>
              </div>
              <div className="flex items-center gap-3 text-white/70 text-sm">
                <Phone size={16} className="text-[#b88951]" />
                <span>+91 9314444747</span>
              </div>
              <div className="flex items-start gap-3 text-white/70 text-sm">
                <MapPin size={16} className="text-[#b88951] mt-0.5" />
                <span>123 Furniture Street, Design District, Mumbai, India</span>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2 grid grid-cols-3 gap-8">
            {/* Links */}
            <div>
              <h3 className="font-semibold mb-6 text-white">Links</h3>
              <ul className="space-y-4">
                {footerLinks.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-white/60 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Categories */}
            <div>
              <h3 className="font-semibold mb-6 text-white">Categories</h3>
              <ul className="space-y-4">
                {footerLinks.categories.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-white/60 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="font-semibold mb-6 text-white">Support</h3>
              <ul className="space-y-4">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-white/60 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-1">
            <h3 className="font-semibold mb-6 text-white">Newsletter</h3>
            <p className="text-white/60 mb-4 text-sm">
              Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-[#b88951] transition-colors"
              />
              <button className="bg-[#b88951] hover:bg-[#a37741] rounded-lg px-4 py-3 transition-colors">
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © 2026 Wooden Street. All rights reserved.
          </p>
          <button className="bg-white/10 hover:bg-white/20 rounded-lg px-4 py-2 text-xs text-white/60 transition-colors">
            Made with Next.js
          </button>
        </div>
      </div>
    </footer>
  )
}
