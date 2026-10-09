import Link from "next/link";

export default function SiteFooter() {
  return (
    <>
      <div className="brand-strip">
        <span>KOYO</span><b>MARTAN.</b><span>FurniCare</span><span>Makefixtures</span><span>KG91</span>
      </div>
      <footer>
        <div className="footer-about">
          <Link className="logo" href="/">Furtinuer.</Link>
          <p>Timeless furniture for considered homes. Designed with purpose, made to last.</p>
          <p>© 2025 Furtinuer. All rights reserved.</p>
        </div>
        <div>
          <h3>Rooms</h3>
          <Link href="/living-room">Living room</Link>
          <Link href="/bedroom">Bedroom</Link>
          <Link href="/dining">Dining</Link>
          <Link href="/study-office">Study &amp; Office</Link>
        </div>
        <div><h3>Explore</h3><Link href="/shop">All furniture</Link><Link href="/blog">Journal</Link><Link href="/#about">Our story</Link></div>
        <div><h3>Contact</h3><p>+1 212 555 0188</p><p>hello@furtinuer.com</p><p>72 North Avenue, New York</p></div>
      </footer>
    </>
  );
}
