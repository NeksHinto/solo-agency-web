"use client";
import { useEffect } from "react";
import styles from "../page.module.css";
import { useState } from "react";
import React from "react";
import Inner from "../inner/inner";
import Link from "next/link";
import ServicesSection from "../components/servicesSection";
import Image from "next/image";
import { brands } from "../constants/brands";

export default function Clients() {
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

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
      <div className={styles.page__info}>
        <p className={styles.title}>CLIENTS</p>
        <p className={styles.page__description}>
          En Solo Agency nos enorgullece ser tu aliado creativo en el mundo de
          la identidad visual. Nuestro enfoque se centra en potenciar tus
          valores y comunicar todo aquello que no se puede expresar con
          palabras.
        </p>
      </div>
      <div className={styles.services_container}>
        {categories.map((category, i) => (
          <div key={i} className={styles.service}>
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
                  <div key={brandIndex}>
                    <Link href={brand.route} alt={brand.name}>
                      <img
                        src={brand.imageLocation}
                        alt={brand.name}
                        className={styles.client__logo}
                      />
                      {/* <p>{brand.name}</p> */}
                    </Link>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
