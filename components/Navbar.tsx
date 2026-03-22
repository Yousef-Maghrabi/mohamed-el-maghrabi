import styles from '@/styles/components/Navbar.module.css';
import { Poppins } from 'next/font/google'; 

const brand_font = Poppins({
    weight: "600", 
    subsets: ["latin"] 
})

const normal_font = Poppins({
    weight: "400", 
    subsets: ["latin"] 
})
const NAV_LINKS = ['About', 'Experience', 'Services', 'Contact'] as const;

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <a href="/" className={`${styles.brand} ${brand_font.className}`}>
        Mohamed El-Maghrabi
      </a>

      <ul className={styles.links}>
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

      <a href="#contact" className={`${styles.cta} ${normal_font.className}`}>
        Book a tour
      </a>
    </nav>
  );
}