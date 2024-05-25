"use client";
import { useEffect } from "react";
import styles from "../page.module.css";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Inner from "../inner/inner";
import Carousel from "../components/carousel";
import Link from "next/link";
import Image from "next/image";
import { brands } from "../constants/brands";
import { services } from "../constants/services";

export default function Services() {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected == i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <main className={styles.main}>
      <AnimatePresence mode="wait">
        <Inner>
          <div className={styles.page__info}>
            <p className={styles.title}>SERVICES</p>
            <p className={styles.page__description}>
              Solo Agency es una agencia creativa espacializada en el diseño de
              identidad visual y comunicacion efectiva.
            </p>
          </div>
          <div className={styles.services_container}>
            {services.map((service, i) => {
              return (
                <div key={i} className={styles.service}>
                  <div
                    className={styles.service__banner}
                    onClick={() => toggle(i)}
                  >
                    <p className={styles.section_title}>{service.name}</p>
                    <span className={styles.cross}>
                      {selected === i ? "_" : "+"}
                    </span>
                  </div>
                  <div
                    className={
                      selected == i
                        ? "page_service__list__show__37KEC"
                        : "page_service__list__aU9Ez"
                    }
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "1rem",
                    }}
                  >
                    <div style={{ display: "flex", gap: "1rem" }}>
                      {service.items.map((item, i) => {
                        return (
                          <>
                            {i != 0 && <p>|</p>}
                            <p key={`item-${i}`}>{item}</p>
                          </>
                        );
                      })}
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        columnGap: "5rem",
                      }}
                    >
                      {brands
                        .filter(
                          (brand) => brand.services.indexOf(service.name) != -1
                        )
                        .map((brand, brandIndex) => (
                          <div key={brandIndex}>
                            <Link href={brand.route} alt={brand.name}>
                              <img
                                src={brand.imageLocation}
                                alt={brand.name}
                                className={styles.client__logo}
                              />
                            </Link>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Inner>
      </AnimatePresence>
    </main>
  );
}
