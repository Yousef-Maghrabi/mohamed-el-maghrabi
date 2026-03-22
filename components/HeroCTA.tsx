import styles from "@/styles/components/HeroCTA.module.css"  
import { Poppins } from "next/font/google" 

const normal_font = Poppins({
    weight: "400", 
    subsets: ["latin"] 
}) 

export default function HeroCTA () { 
    return <button className={`${styles.heroCTA} ${normal_font.className}`}>Book Your Tour</button> 
}