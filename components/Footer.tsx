import styles from "@/styles/components/Footer.module.css"
import { Poppins } from "next/font/google"
const thinFont = Poppins({ 
    weight: "300", 
    subsets: ["latin"]
}) 

const headingFont = Poppins({ 
    weight: "500", 
    subsets: ["latin"]
})

const boldFont = Poppins({ 
    weight: "700", 
    subsets: ["latin"] 
})
 
const mediumFont = Poppins({ 
    weight: "400", 
    subsets: ["latin"] 
})  


export default function Footer () { 
    return <footer className={`${styles.footer}`}> 
        <p className={`${mediumFont.className} ${styles.footerBrand}`}>Mohamed El-Maghrabi</p>  
        <p className={`${mediumFont.className} ${styles.footerCopyright}`}>@2026 Mohamed El-Magrabi All Rights Reserved</p> 
    </footer> 
}