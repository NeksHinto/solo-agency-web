"use client";
import Link from "next/link";
import styles from "../page.module.css";
import Image from "next/image";
import { clientLogos } from "../constants/homeLogos";
import { motion } from "framer-motion";

function ClientLink({ href, logo }) {
  return (
    <Link href={href}>
      <Image src={logo} width={0} height={0} sizes="100vw" alt="Client Logo" />
    </Link>
  );
}

export default function ClientsSection() {
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
      <div className={styles.section__group}>
        <p className={styles.title}>CLIENTS</p>
        <p
          className={styles.link}
          style={{
            textAlign: "center",
          }}
        >
          <Link href="/services">VER MÁS</Link>
        </p>
      </div>
      <div className={styles.scroller}>
        <div className={styles.scroller__inner}>
          {clientLogos.map((client, i) => (
            <ClientLink key={`${client.href}-${i}`} {...client} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
