"use client";
import { useEffect } from "react";
import styles from "../page.module.css";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Inner from "../inner/inner";
import Carousel from "../components/carousel";

export default function Services() {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected == i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  const services = [
    {
      name: "Social Media",
      items: ["- Calendarizacion", "- Copywriting", "- Posting"],
    },
    {
      name: "Paid Media",
      items: ["- Google ads", "- Meta ads", "- Mailing"],
    },
    {
      name: "Graphic design & branding",
      items: [
        "- Logo design",
        "- BrandBooks",
        "- Social Media",
        "- Packaging",
        "- Visual Merchandising",
      ],
    },
    {
      name: "Content",
      items: ["- Photo", "- Video"],
    },
    {
      name: "Creative Strategy",
      items: ["- Análisis", "- Concept", "- Report"],
    },
    {
      name: "Production & Styling",
      items: ["- Concept crafting", "- Resources Management"],
    },
    {
      name: "3D design",
      items: ["- Modeling", "- Rendering", "- Animation"],
    },
  ];

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
                <div key={i} style={{ display: "flex", alignItems: "center" }}>
                  <div className={styles.link}>
                    <p className={styles.filters_title}>{service.name}</p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                    }}
                  >
                    {service.items.map((item, i) => {
                      return (
                        <a key={`item-` + i} href="/clients">
                        <p style={{ fontSize: "20px" }}>
                          {item}
                        </p></a>
                      );
                    })}
                  </div>
                </div>
                // <div key={i} className={styles.service}>
                //   <div
                //     className={styles.service__banner}
                //     onClick={() => toggle(i)}
                //   >
                //     <p className={styles.section_title}>{service.name}</p>
                //     <span className={styles.cross}>{selected === i ? '_' : "+"}</span>
                //   </div>
                //   <div className={selected == i ?  'page_service__list__show__37KEC' : 'page_service__list__aU9Ez'}>
                //     <p className={styles.subtitle}>{service.item1}</p>
                //     <p className={styles.subtitle}>{service.item2}</p>
                //     <p className={styles.subtitle}>{service.item3}</p>
                //     <p className={styles.subtitle}>{service.item4}</p>
                //     <p className={styles.subtitle}>{service.item5}</p>
                //   </div>
                // </div>
              );
            })}
          </div>
        </Inner>
      </AnimatePresence>
    </main>
  );
}
