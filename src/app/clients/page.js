"use client";
import { useEffect } from "react";
import styles from "../page.module.css";
import { useState } from "react";
import React from "react";
import Link from "next/link";
import { brands } from "../constants/brands";
import { motion } from "framer-motion";

export default function Clients() {
  const [isActive, setIsActive] = useState(true);

  // useEffect(() => {
  //   (async () => {
  //     const LocomotiveScroll = (await import("locomotive-scroll")).default;
  //     const locomotiveScroll = new LocomotiveScroll();
  //   })();
  // }, []);

  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected == i) {
      return setSelected(null);
    }

    setSelected(i);
  };

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
      <div className={styles.services_container}>
        {categories.map((category, i) => (
          <motion.div
            key={i}
            className={styles.service}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              ease: [0.65, 0, 0.35, 1],
              duration: 0.75,
              x: { duration: 0.25 },
            }}
          >
            <div className={styles.service__banner} onClick={() => toggle(i)}>
              <p className={styles.section_title}>{category.name}</p>
              <span className={styles.cross}>{selected === i ? "_" : "+"}</span>
            </div>
            <div
              className={
                selected == i
                  ? "page_service__list__show__37KEC"
                  : "page_service__list__aU9Ez"
              }
            >
              {brands
                .filter((brand) => brand.category === category.name)
                .map((brand, brandIndex) => (
                  <motion.div
                    key={brandIndex}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{
                      ease: [0.65, 0, 0.35, 1],
                      duration: 0.75,
                      x: { duration: 0.25 },
                    }}
                  >
                    <Link href={brand.route} alt={brand.name}>
                      <img
                        src={brand.imageLocation}
                        alt={brand.name}
                        className={styles.client__logo}
                      />
                      {/* <p>{brand.name}</p> */}
                    </Link>
                  </motion.div>
                ))}
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
