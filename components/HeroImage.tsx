import styles from "@/styles/components/HeroImage.module.css";

export default function HeroImage() {
  return (
    <div className={styles["hero-image-wrapper"]}>
      <div className={styles["hero-image-frame"]}>
        <img
          src="https://picsum.photos/800/600"
          alt="Mohamed El-Maghrabi"
          width={150}
          height={150}
          loading="lazy"
          className={styles["hero-image"]}
        />
        <div className={styles["hero-image-accent"]} aria-hidden="true" />
      </div>
      <div className={styles["hero-image-caption"]}>
        <span className={styles["hero-image-name"]}>Mohamed El-Maghrabi</span>
      </div>
    </div>
  );
}