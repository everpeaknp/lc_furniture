'use client'

import { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

interface MegaMenuProps {
  menuItems: {
    title: string
    subItems: {
      category: string
      items: string[]
    }[]
  }[]
}

export function MegaMenu({ menuItems }: MegaMenuProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const timeoutRef = useRef<NodeJS.Timeout>()

  const handleMouseEnter = (index: number) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    timeoutRef.current = setTimeout(() => {
      setActiveIndex(index)
    }, 100)
  }

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    timeoutRef.current = setTimeout(() => {
      setActiveIndex(null)
    }, 300)
  }

  useGSAP(() => {
    if (activeIndex === null || !dropdownRef.current) return

    gsap.fromTo(
      dropdownRef.current,
      { opacity: 0, y: -10 },
      { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' }
    )
  }, [activeIndex])

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseLeave={handleMouseLeave}
    >
      <nav className="flex gap-6">
        {menuItems.map((item, index) => (
          <button
            key={item.title}
            className="text-sm font-medium text-[#292622] hover:text-[#b37d42] transition-colors py-2"
            onMouseEnter={() => handleMouseEnter(index)}
          >
            {item.title}
          </button>
        ))}
      </nav>

      {activeIndex !== null && (
        <div
          ref={dropdownRef}
          className="absolute left-1/2 -translate-x-1/2 top-full pt-4 z-30 w-screen"
          onMouseEnter={() => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current)
          }}
          onMouseLeave={handleMouseLeave}
        >
          <div className="bg-white border border-[#e7e1d9] rounded-lg shadow-xl p-6 mx-auto max-w-[1320px]">
            <div className="grid grid-cols-4 gap-6">
              {menuItems[activeIndex].subItems.map((subItem) => (
                <div key={subItem.category}>
                  <h4 className="font-semibold text-[#365b43] mb-3 text-sm">{subItem.category}</h4>
                  <ul className="space-y-2">
                    {subItem.items.map((sub) => (
                      <li key={sub}>
                        <a href="#shop" className="text-sm text-[#776f67] hover:text-[#b37d42] transition-colors">
                          {sub}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
