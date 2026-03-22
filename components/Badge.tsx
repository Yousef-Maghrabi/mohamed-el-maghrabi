import { Sparkles } from "lucide-react";
import { Poppins } from "next/font/google";
import styles from "@/styles/components/Badge.module.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300"],
});

export default function Badge() {
  return (
    <span className={`${styles.badge} ${poppins.className}`}>
      <Sparkles className={styles.icon} size={14} strokeWidth={1.5} />
      EXPERT EGYPTOLOGIST
    </span>
  );
}