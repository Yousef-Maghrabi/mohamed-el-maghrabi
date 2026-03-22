import Badge from "@/components/Badge"
import Navbar from "@/components/Navbar" 
import { Poppins } from "next/font/google"  
import styles from "@/styles/utils/Text.module.css" 
import HeroCTA from "@/components/HeroCTA" 
import Image from "next/image"
import HeroImage from "@/components/HeroImage"

const h1_font = Poppins({ 
    weight: "800", 
    subsets: ["latin"]
})

const thin_font = Poppins({
    weight: "300", 
    subsets: ["latin"] 
})
export default function App () { 
    return <>
        <Navbar/>
        <main>  
            <section> 
                <div>  
                    <Badge/> 
                    <h1 className={`${h1_font.className} ${styles.mainHeading}`}>A Journey Through The <span>Ages</span></h1> 
                    <p className={`${thin_font.className} ${styles.mainHeadingParagraph}`}>10+ years of passion, history, and modern travel consultancy combined to show you the real story of Egypt.</p> 
                    <HeroCTA/>    
                </div> {/*Left Side*/}

                <div>  
                   <HeroImage />
                </div> {/*Right Side*/}
            </section> {/*Hero Section*/} 
        </main>  {/*Main*/}
    </>
}