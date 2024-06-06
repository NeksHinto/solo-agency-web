import React from "react";
import ClientCarousel from "./carousel";
import ClientGrid from "./clientGrid";
import ClientGridBranding from "./clientGridBranding";
import styles from "../page.module.css";
import { motion } from "framer-motion";

const ClientPageContent = ({ carousel, branding, data }) => {
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
        <p className={styles.client__title} style={{ color: "gray" }}>
          {data.title[0]}
        </p>
        <p className={styles.client__title}>{data.title[1]}</p>
        {carousel ? (
          <ClientCarousel
            key={data.title}
            items={data.items}
            maxHeight={data.maxHeight}
          />
        ) : branding ? (
          <ClientGridBranding
            key={data.title}
            items={data.items}
            gridProps={data.gridProps}
            maxHeight={data.maxHeight}
          />
        ) : (
          <ClientGrid
            key={data.title}
            items={data.items}
            containerProps={data.containerProps}
            maxHeight={data.maxHeight}
          />
        )}
      </motion.div>
    </div>
  );
};

export default ClientPageContent;
