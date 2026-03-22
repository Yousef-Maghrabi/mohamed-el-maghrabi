import styles from "@/styles/components/HeroImage.module.css";
import Image from "next/image"; 

export default function HeroImage() {
  return (
    <div className={`${styles["hero-image-wrapper"]} cont cont-align-center cont-justify-center ${styles["smUseless"]}`}>
      <div className={`${styles["hero-image-frame"]} ${styles["smUseless"]}`} >
        <Image
          src="/hero_image.webp"
          alt="Mohamed El-Maghrabi" 
          fill
          loading="lazy"
          className={styles["hero-image"]}
        />
      </div>
      <div className={`${styles["hero-image-caption-cont"]} ${styles["smHidden"]}`}> 
        <div className={`${styles["hero-image-caption"]} content`}>
          <div className={styles["hero-image-name"]}>
            <p> Mohamed El-Maghrabi </p> 
          </div>
        </div>
      </div> 
    </div>
  );
}