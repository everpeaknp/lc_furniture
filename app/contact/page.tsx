'use client';

import { FormEvent, useState } from "react";
import SiteFooter from "@/components/SiteFooter";
import Arrow from "@/components/Arrow";
import TypeMorph from "@/components/TypeMorph";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const sendMessage = (event: FormEvent) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <div className="site-shell">
      <main className="contact-page">
        <section className="contact-intro">
          <p className="eyebrow">We would love to hear from you</p>
          <h1>
            <TypeMorph
              config={{
                text: "ANIMDOCK",
                target: "Let's",
                morph: true,
                speed: { mode: 'static', value: 2 },
                variants: { mode: 'static', value: 15 },
                color: "#262720"
              }}
            />
            <br />
            Talk
          </h1>
          <p>Whether you need product advice, help planning a room, or details about an order, our team is here to help.</p>
          <div className="contact-details">
            <div><span>Visit</span><p>72 North Avenue<br />New York, NY 10012</p></div>
            <div><span>Speak</span><p>+1 212 555 0188<br />Mon–Fri, 9am–6pm</p></div>
            <div><span>Write</span><p>hello@furtinuer.com<br />trade@furtinuer.com</p></div>
          </div>
        </section>
        <section className="contact-form-wrap">
          <p className="eyebrow">Send an enquiry</p>
          <h2>How can we help?</h2>
          <form className="contact-form" onSubmit={sendMessage}>
            <label>Name<input name="name" required placeholder="Your full name" /></label>
            <label>Email<input name="email" type="email" required placeholder="you@example.com" /></label>
            <label>Subject
              <select name="subject">
                <option>Product enquiry</option>
                <option>Interior consultation</option>
                <option>Order support</option>
                <option>Trade programme</option>
              </select>
            </label>
            <label>Message<textarea name="message" required rows={5} placeholder="Tell us a little about what you need..." /></label>
            <button type="submit">Send message <Arrow /></button>
            {sent && <p className="contact-success" role="status">Thank you. We'll be in touch within one business day.</p>}
          </form>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
