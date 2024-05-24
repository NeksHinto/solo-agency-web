"use client";
import { useEffect } from "react";
import styles from "../page.module.css";
import { useState } from "react";
import React from "react";
import Inner from "../inner/inner";
import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import ServicesCarousel from "../components/servicesCarousel";

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

  const brands = [
    //array of brand objects
    {
      name: "dollstore",
      imageLocation: "/logos/dollstoreLogo.png",
      category: "Fashion",
      route: "clients/dollstore",
    },
    {
      name: "dsmen",
      imageLocation: "/logos/dsmenLogo.png",
      category: "Fashion",
      route: "/clients/dsmen",
    },
    {
      name: "AIA",
      imageLocation: "/logos/aiaLogo.png",
      category: "Fashion",
      route: "/clients/aia",
    },
    {
      name: "Thurman",
      imageLocation: "/logos/thurmanLogo.png",
      category: "Fashion",
      route: "/clients/thurman",
    },
    {
      name: "Cape Diablo",
      imageLocation: "/logos/capediabloLogo.png",
      category: "Fashion",
      route: "/clients/capeDiablo",
    },
    {
      name: "Cristho",
      imageLocation: "/logos/cristhoLogo.png",
      category: "Fashion",
      route: "/clients/cristho",
    },
    {
      name: "Justa Osadia",
      imageLocation: "/logos/justaosadiaLogo.png",
      category: "Fashion",
      route: "/clients/justaOsadia",
    },
    {
      name: "Pucheta",
      imageLocation: "/logos/puchetaLogo.png",
      category: "Fashion",
      route: "/clients/pucheta",
    },
    {
      name: "HiSilvie",
      imageLocation: "/logos/hisilvieLogo.png",
      category: "Fashion",
      route: "/clients/hiSilvie",
    },
    {
      name: "UBK",
      imageLocation: "/logos/ubkLogo.png",
      category: "Lifestyle",
      route: "/clients/ubk",
    },
    {
      name: "Pimux",
      imageLocation: "/logos/pimuxLogo.png",
      category: "Lifestyle",
      route: "/clients/pimux",
    },
    {
      name: "Lagouarde",
      imageLocation: "/logos/lagouardeLogo.png",
      category: "Lifestyle",
      route: "/clients/lagouardePropiedades",
    },
    {
      name: "Faitful",
      imageLocation: "/logos/faitfulLogo.png",
      category: "Lifestyle",
      route: "/clients/faitful",
    },
    {
      name: "El Gourmet",
      imageLocation: "/logos/elgourmetLogo.png",
      category: "Lifestyle",
      route: "/clients/elGourmet",
    },
    {
      name: "Dr Aromas",
      imageLocation: "/logos/doctoraromasLogo.png",
      category: "Lifestyle",
      route: "/clients/drAromas",
    },
    {
      name: "DA Design",
      imageLocation: "/logos/dadesignLogo.png",
      category: "Lifestyle",
      route: "/clients/daDesign",
    },
    {
      name: "Compañia Nativa",
      imageLocation: "/logos/companianativaLogo.png",
      category: "Lifestyle",
      route: "/clients/companiaNativa",
    },
    {
      name: "Terrazas de los Andes",
      imageLocation: "/logos/terrazasdelosandesLogo.png",
      category: "Food & other pleasures",
      route: "/clients/terrazas",
    },
    {
      name: "Lagouarde Catering",
      imageLocation: "/logos/lagouardeLogo.png",
      category: "Food & other pleasures",
      route: "/clients/lagouardeCatering",
    },
    {
      name: "Celebre in culina",
      imageLocation: "/logos/celebreinculinaLogo.png",
      category: "Food & other pleasures",
      route: "/clients/celebreInCulina",
    },
    {
      name: "Yellow",
      imageLocation: "/logos/yellowLogo.png",
      category: "Health & beauty",
      route: "/clients/yellow",
    },
    {
      name: "Timeless",
      imageLocation: "/logos/timelessLogo.png",
      category: "Health & beauty",
      route: "/clients/timeless",
    },
    {
      name: "Lidherma",
      imageLocation: "/logos/lidhermaLogo.png",
      category: "Health & beauty",
      route: "/clients/lidherma",
    },
    {
      name: "JP Peluquerias",
      imageLocation: "/logos/jpLogo.png",
      category: "Health & beauty",
      route: "/clients/jp",
    },
    {
      name: "Eucerin",
      imageLocation: "/logos/eucerinLogo.png",
      category: "Health & beauty",
      route: "/clients/eucerin",
    },
    {
      name: "Sassone",
      imageLocation: "/logos/sassoneLogo.png",
      category: "Lifestyle",
      route: "/clients/sassone",
    },
  ];

  const categories = [
    { name: "Fashion" },
    { name: "Lifestyle" },
    { name: "Food & other pleasures" },
    { name: "Health & beauty" },
  ];

  return (
    <main className={styles.main}>
      <AnimatePresence mode="wait">
        <Inner>
          <div className={styles.page__info}>
            <p className={styles.title}>CLIENTS</p>
            <p className={styles.page__description}>
              En Solo Agency nos enorgullece ser tu aliado creativo en el mundo
              de la identidad visual. Nuestro enfoque se centra en potenciar tus
              valores y comunicar todo aquello que no se puede expresar con
              palabras.
            </p>
          </div>
          <div className={styles.services_container}>
            {categories.map((category, i) => (
              <div key={i} className={styles.service}>
                <div
                  className={styles.service__banner}
                  onClick={() => toggle(i)}
                >
                  <p className={styles.section_title}>{category.name}</p>
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
        </Inner>
      </AnimatePresence>
    </main>
  );
}
