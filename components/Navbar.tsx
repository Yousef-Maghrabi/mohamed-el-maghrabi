import styles from '@/styles/components/Navbar.module.css';
import { Poppins } from 'next/font/google';  
import navbarres from "@/styles/layout/navbarl.module.css"

const brand_font = Poppins({
    weight: "600", 
    subsets: ["latin"] 
})

const normal_font = Poppins({
    weight: "400", 
    subsets: ["latin"] 
})
const NAV_LINKS = ['About', 'Experiences', 'Contact'] as const;

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <a href="/#hero" className={`${styles.brand} ${brand_font.className}`}>
        Mohamed El-Maghrabi
      </a>

      <ul className={`${styles.links} ${navbarres.navbarsmhidden}`}>
        {NAV_LINKS.map((link) => (
          <li key={link}>
            <a
              href={`#${link.toLowerCase()}`}
              className={`${styles.link} ${normal_font.className}`}
            >
              {link}
            </a>
          </li>
        ))}
      </ul>

      <a href="https://wa.me/+201007451617" className={`${styles.cta} ${normal_font.className}`}>
        Book a tour
      </a>
    </nav>
  );
}