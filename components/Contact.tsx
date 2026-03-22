import styles from "@/styles/components/Contact.module.css" 
import Link from "next/link"
import { Poppins } from "next/font/google" 
import Whatsapp from "@/public/whatsapp.svg" 
import Image from "next/image"

const thinFont = Poppins({ 
    weight: "300", 
    subsets: ["latin"]
}) 

const headingFont = Poppins({ 
    weight: "500", 
    subsets: ["latin"]
})
const mediumFont = Poppins({ 
    weight: "400", 
    subsets: ["latin"] 
})
export default function Contact () { 
    return <div id="contact" className={`${styles.contact}`}> 
        <h2 className={`${styles.contactHeading} ${headingFont.className}`}>Ready to Explore the World!</h2> 
        <p className={`${styles.contactParagraph} ${thinFont.className}`}>Connect with a professional who understands both the history of the kings and the hospitality of the modern world.</p> 
        <Link className={`${styles.contactCta} ${mediumFont.className}`} href="https://wa.me/+201007451617"> <Image src={Whatsapp} alt="Whatsapp" width={50} height={50} style={{filter: "brightness(0) invert(1)"}}/>Connect on WhatsApp</Link> 
    </div>
}