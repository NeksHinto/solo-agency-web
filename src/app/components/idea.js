import Link from "next/link";
import styles from "@/styles/styles.module.css";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <motion.div
      className={styles.carousel}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        ease: [0.65, 0, 0.35, 1],
        duration: 0.75,
        x: { duration: 0.25 },
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div style={{ display: "flex", flexDirection: "row" }}>
          <p className={styles.button2}>
            <Link href="/contact">CONTACT US</Link>
          </p>
        </div>
      </div>
    </motion.div>
  );
}
