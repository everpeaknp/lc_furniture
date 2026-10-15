'use client';

import SiteFooter from "@/components/SiteFooter";
import Arrow from "@/components/Arrow";
import TypeMorph from "@/components/TypeMorph";
import { MapPin, Phone, Clock } from "lucide-react";

const stores = [
  {
    id: 'pokhara-main',
    name: "Pokhara Main Store",
    address: "Main Street, Lakeside, Pokhara, Nepal",
    phone: "+977 61 456789",
    hours: "Sun-Sat: 10:00 AM - 8:00 PM",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1400&q=85",
    features: ["Parking Available", "Design Consultation", "Delivery Service"],
  },
  {
    id: 'kathmandu',
    name: "Kathmandu Showroom",
    address: "Thamel, Kathmandu, Nepal",
    phone: "+977 1 423456",
    hours: "Sun-Sat: 10:00 AM - 8:00 PM",
    image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1400&q=85",
    features: ["Parking Available", "Design Consultation"],
  },
  {
    id: 'lalitpur',
    name: "Lalitpur Gallery",
    address: "Patan Durbar Square Area, Lalitpur, Nepal",
    phone: "+977 1 556789",
    hours: "Sun-Sat: 10:00 AM - 7:00 PM",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1400&q=85",
    features: ["Design Consultation", "Custom Orders"],
  },
];

export default function StoresPage() {
  return (
    <div className="site-shell">
      <main>
        <section className="room-page-hero">
          <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1400&q=85" alt="Our stores" />
          <div>
            <p className="eyebrow">Visit us in person</p>
            <h1>
              <TypeMorph
                config={{
                  text: "ANIMDOCK",
                  target: "Our Stores",
                  morph: true,
                  speed: { mode: 'static', value: 2 },
                  variants: { mode: 'static', value: 15 },
                  color: "#f6f4ef"
                }}
              />
            </h1>
          </div>
        </section>

        <section className="room-page-intro section">
          <p>Experience our furniture collections firsthand at any of our showrooms across Nepal. Our design consultants are ready to help you create the perfect space for your home.</p>
          <a className="text-link" href="#locations">Find a store near you <Arrow /></a>
        </section>

        <section className="section" id="locations">
          <div className="section-heading">
            <div><p className="eyebrow">Nepal locations</p><h2>Our Showrooms</h2></div>
            <span>{stores.length} locations</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {stores.map((store) => (
              <div key={store.id} className="border border-[#e5e0d4] rounded-sm overflow-hidden">
                <img 
                  src={store.image} 
                  alt={store.name} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-8">
                  <h3 className="text-2xl font-serif text-black mb-4">{store.name}</h3>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start gap-3">
                      <MapPin size={20} className="text-[#1e3a8a] shrink-0 mt-1" />
                      <p className="text-[#5a5952]">{store.address}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone size={20} className="text-[#1e3a8a] shrink-0" />
                      <p className="text-[#5a5952]">{store.phone}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock size={20} className="text-[#1e3a8a] shrink-0" />
                      <p className="text-[#5a5952]">{store.hours}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {store.features.map((feature) => (
                      <span 
                        key={feature}
                        className="px-3 py-1 bg-[#f6f4ef] text-[#5a5952] text-sm rounded-sm"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <button className="w-full bg-[#1e3a8a] text-white px-6 py-3 rounded-sm hover:bg-[#2563eb] transition-colors">
                    Get Directions
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section bg-[#f6f4ef]">
          <div className="max-w-3xl mx-auto text-center">
            <p className="eyebrow mb-4">Need help?</p>
            <h2 className="text-3xl font-serif text-black mb-6">Book a Design Consultation</h2>
            <p className="text-[#5a5952] mb-8 leading-relaxed">
              Our expert design consultants are available to help you plan your space, select the right furniture, and create a home that reflects your style. Schedule a free in-store consultation today.
            </p>
            <button className="bg-[#1e3a8a] text-white px-8 py-4 rounded-sm hover:bg-[#2563eb] transition-colors">
              Book Consultation
            </button>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
