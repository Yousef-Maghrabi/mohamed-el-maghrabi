import Badge from "@/components/Badge"
import Navbar from "@/components/Navbar" 
import { Poppins } from "next/font/google"  
import styles from "@/styles/utils/Text.module.css" 
import "@/styles/layout/container.css"  
import "@/styles/layout/content.css" 
import "@/styles/layout/spacing.css"
import HeroCTA from "@/components/HeroCTA" 
import Image from "next/image"
import HeroImage from "@/components/HeroImage"
import responsiveness from "@/styles/layout/main.module.css"
import About from "@/components/AboutSection"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

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
            <section id="hero" className={`cont cont-v-2 ${responsiveness.heroSm}`} style={{overflow: "visible", marginBottom: "20px", height: "80dvh"}}> 
                <div className="content content-col content-main-evenly" style={{padding: "30px"}}>  
                    <Badge/> 
                    <h1 className={`${h1_font.className} ${styles.mainHeading} ${responsiveness.mainHeadingSm}`}>Timeless Journies - Local <span>Soul</span></h1> 
                    <p className={`${thin_font.className} ${styles.mainHeadingParagraph} ${responsiveness.mainHeadingParagraphSm}`}>Private, custom-designed journies blending iconic wonders with authentic local experiences.</p> 
                    <HeroCTA/>    
                </div> {/*Left Side*/}

                
                <HeroImage /> {/*Right Side*/}
            </section> {/*Hero Section*/}   

            <About /> 

            <Contact /> 
        </main>  {/*Main*/} 

        <Footer />
    </>
}