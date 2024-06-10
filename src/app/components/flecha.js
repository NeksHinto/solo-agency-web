"use client";
import styles from "../page.module.css";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Flecha({ isActive, setIsActive }) {
  return (
    <motion.div
      onClick={() => {
        setIsActive(!isActive);
      }}
      className={styles.arrow}
      animate={{
        rotate: isActive ? -180 : 0,
      }}
      transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
    >
      <Image
        src="/images/FLECHA.svg"
        alt="menu"
        width={80}
        height={30}
        priority
      />
    </motion.div>
  );
}
