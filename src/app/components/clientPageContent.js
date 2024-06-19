import React, { useContext } from "react";
import ClientCarousel from "./carousel";
import ClientGrid from "./clientGrid";
import ClientGridBranding from "./clientGridBranding";
import styles from "@/styles/styles.module.css";
import { motion } from "framer-motion";
import { DeviceContext } from "app/contexts/deviceContext";

const ClientPageContent = ({
  carousel,
  branding,
  data,
  customProps,
  hqVideos,
  imageProps,
}) => {
  const { isMobile } = useContext(DeviceContext);

  return (
    <div className={styles.client__content}>
      <motion.div
        className={
          data.carouselItemProps
            ? styles.client__content__container__for__feed
            : styles.client__content__container
        }
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
            hqVideos={hqVideos}
          />
        ) : branding ? (
          <ClientGridBranding
            key={data.title}
            items={data.items}
            gridProps={data.gridProps}
            classProps={customProps}
            hideLastItems={data.hideLastItems}
            imageProps={imageProps}
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
