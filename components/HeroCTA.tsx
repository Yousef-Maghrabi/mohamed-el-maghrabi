import styles from "@/styles/components/HeroCTA.module.css"  
import { Poppins } from "next/font/google" 
import Link from "next/link"

const normal_font = Poppins({
    weight: "400", 
    subsets: ["latin"] 
}) 

export default function HeroCTA () { 
    return <Link href={"https://wa.me/+201007451617"} className={`${styles.heroCTA} ${normal_font.className}`}>Start Planning</Link> 
}