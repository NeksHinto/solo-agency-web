"use client";
import Link from "next/link";
import styles from "../page.module.css";
import { services } from "../constants/services";
import { motion } from "framer-motion";

export default function ServicesSection() {
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
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p className={styles.title}>SERVICES</p>
        <p
          className={styles.link}
          style={{
            textAlign: "center",
          }}
        >
          <Link href="/services">VER MÁS</Link>
        </p>
      </div>
      <div className={styles.services_carousel_container}>
        {services.map((service, i) => {
          return (
            <p
              key={i}
              className={styles.box}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                gridArea: `box${i + 1}`,
                textTransform: "uppercase",
              }}
            >
              <Link
                href={{
                  pathname: "/services",
                  hash: `service-${i}`,
                  query: { id: i },
                }}
                style={{ width: "100%", height: "100%" }}
                onClick={() => {
                  window.scrollTo({ top: "6rem", behavior: "smooth" });
                }}
              >
                {service.name}
              </Link>
            </p>
          );
        })}
      </div>
    </motion.div>
  );
}
