"use client";
import { useEffect } from "react";
import styles from "@/styles/styles.module.css";
import React from "react";
import { motion } from "framer-motion";
import ToggleList from "@/components/toggleList";

export default function Clients() {
  const filterByCategory = (category) => (brand) =>
    brand.category === category.name;

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  const categories = [
    { name: "Fashion" },
    { name: "Lifestyle" },
    { name: "Food & other pleasures" },
    { name: "Health & beauty" },
  ];

  return (
    <main className={styles.main}>
      <motion.div
        className={styles.page__info}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          ease: [0.65, 0, 0.35, 1],
          duration: 0.75,
          x: { duration: 0.25 },
        }}
      >
        <p className={styles.title}>CLIENTS</p>
        <p className={styles.page__description}>
          En Solo Agency nos enorgullece ser tu aliado creativo en el mundo de
          la identidad visual. Nuestro enfoque se centra en potenciar tus
          valores y comunicar todo aquello que no se puede expresar con
          palabras.
        </p>
      </motion.div>
      <ToggleList items={categories} filterFunction={filterByCategory} />
    </main>
  );
}
