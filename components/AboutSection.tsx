import styles from "@/styles/components/About.module.css"   
import { Headset, Earth, Sparkle } from "lucide-react" 
import { Poppins } from "next/font/google" 
import responsiveness from "@/styles/layout/main.module.css"
import Image from "next/image"
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

export default function About() { 
    return ( 
        <section id="about" className={`${styles["about"]} cont cont-h-3 cont-v-3 cont-justify-center cont-align-center ${responsiveness.aboutSm}`}>  
            <Intro />  
            <p className={`${mediumFont.className} ${styles["about-paragraph"]}`}>I’m Mo (Mohamed El-Maghrabi), a Senior Egyptologist and local expert creating meaningful, tailor-made journeys across Egypt. From the Pyramids to hidden streets of Cairo, I design experiences that combine comfort, authenticity, and real connection.</p> 
            <GlobalVision /> 
            <SoftSkillsMastery /> 
        </section>
    )
}

function Intro () { 
    return <div className={`${styles["about-intro"]}`}> 
        <Image
          src="/about_image.webp"
          alt="Mohamed El-Maghrabi"
          fill
          loading="lazy"
          className={styles["about-intro-img"]}
        /> 
        <h2 className={`${headingFont.className} ${styles["about-intro-heading"]}`}>Experiencing Egypt <br/><span className={`${boldFont.className}`}>Your Way</span></h2>  
        <div className={`${styles["about-intro-divider"]}`} />  
        <p className={`${thinFont.className} ${styles["about-intro-paragraph"]}`}>THE PROFESSIONAL MISSION</p>  
    </div>  
} 

function GlobalVision () { 
    return <div className={`${styles["about-globalvision"]}`}> 
        <p className={`${styles["about-globalvision-paragraph"]} ${thinFont.className}`}>My aim is to help improve the tourist market in my country. and help put Egypt on where it belongs as a unique distinction on the World's tourist map, relying on the human factor as a tour guide to let our visitors get the real experience of the country and see the other side of the story.</p> 
        <div className={`${styles["about-globalvision-badge"]}`}>
            <div className={`${styles["about-globalvision-badge-icon-cont"]}`}> 
                <Earth size={"40"} fontWeight="500"/>
            </div> 
            <p className={`${styles["about-globalvision-badge-icon-paragraph"]} ${thinFont.className}`}>Global Vision</p>  
        </div>  
    </div>
} 

function SoftSkillsMastery () { 
    return <div className={`${styles["about-softskillsmastery"]}`}> 
        <div> 
            <h3 className={`${mediumFont.className}`}>WHY MO?</h3> 
            <ul> 
                <li className={`${thinFont.className}`}>Direct Contact (No Middlemen)</li>
                <li className={`${thinFont.className}`}>Tailor-Made (Not Templates)</li> 
                <li className={`${thinFont.className}`}>100% Customizable Tours</li> 
                <li className={`${thinFont.className}`}>Local Insider Experience</li>
                <li className={`${thinFont.className}`}>Flexible Pricing Options</li> 
                <li className={`${thinFont.className}`}>Responsible Travel Approach</li>
            </ul> 
        </div>
        <div className={`${styles["about-softskillsmastery-badge"]}`}>
            <div className={`${styles["about-softskillsmastery-badge-icon-cont"]}`}> 
                <Headset size={"40"} fontWeight="500"/>
            </div> 
            <p className={`${styles["about-softskillsmastery-badge-label"]} ${thinFont.className}`}>Personalized Service</p> 
        </div>  
    </div>
}