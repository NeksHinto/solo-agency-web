import React from "react";
import ClientCarousel from "./carousel";
import ClientGrid from "./clientGrid";
import ClientGridBranding from "./clientGridBranding";
import styles from "@/styles/styles.module.css";
import { motion } from "framer-motion";

const ClientPageContent = ({ carousel, branding, data, customProps }) => {
  return (
    <div className={styles.client__content}>
      <motion.div
        className={styles.client__content__container}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          ease: [0.65, 0, 0.35, 1],
          duration: 0.75,
          x: { duration: 0.25 },
        }}
      >
        <div className={styles.client__title__container}>
          <p className={styles.client__title} style={{ color: "gray" }}>
            {data.title[0]}
          </p>
          <p className={styles.client__title}>{data.title[1]}</p>
        </div>
        {carousel ? (
          <ClientCarousel
            key={data.title}
            items={data.items}
            carouselItemProps={data.carouselItemProps}
          />
        ) : branding ? (
          <ClientGridBranding
            key={data.title}
            items={data.items}
            gridProps={data.gridProps}
            classProps={customProps}
          />
        ) : (
          <ClientGrid
            key={data.title}
            items={data.items}
            containerProps={data.containerProps}
            hideLastItems={data.hideLastItems}
          />
        )}
      </motion.div>
    </div>
  );
};

export default ClientPageContent;
