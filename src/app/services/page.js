"use client";
import { useEffect } from "react";
import styles from "@/styles/styles.module.css";
import { useState } from "react";
import { services } from "../constants/services";
import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";
import ToggleList from "@/components/toggleList";

export default function ServicesPage() {
  const [selected, setSelected] = useState(null);
  const searchParams = useSearchParams();

  const filterByService = (service) => (brand) =>
    brand.services.indexOf(service.name) !== -1;

  useEffect(() => {
    const id = searchParams.get("id");
    setSelected(id);
  }, [searchParams]);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

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
        <p className={styles.title}>SERVICES</p>
        <p className={styles.page__description}>
          Solo Agency es una agencia creativa espacializada en el diseño de
          identidad visual y comunicacion efectiva.
        </p>
      </motion.div>
      <ToggleList
        items={services}
        initSelect={selected}
        filterFunction={filterByService}
      />
    </main>
  );
}
