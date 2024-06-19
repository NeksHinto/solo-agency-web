"use client";
import React, { useContext } from "react";
import Image from "next/image";
import styles from "@/styles/styles.module.css";
import { DeviceContext } from "../contexts/deviceContext";

const ClientGrid = ({
  items,
  gridProps,
  classProps,
  hideLastItems,
  imageProps,
}) => {
  const { isMobile } = useContext(DeviceContext);
  const constructYoutubeUrl = (videoId) => {
    return `https://www.youtube.com/embed/${videoId}`;
  };

  return (
    <div className={styles.embla}>
      <div style={gridProps} className={classProps}>
        {items.map((item, i) => {
          if (item.id) {
            return item.type === "image" ? (
              <Image
                key={item.id}
                className={
                  imageProps
                    ? styles.client__grid__branding__image_custom
                    : styles.client__grid__branding__image
                }
                style={{
                  gridArea: `box${i + 1}`,
                  display:
                    isMobile && hideLastItems?.includes(i) ? "none" : null,
                }}
                src={item.src}
                alt={item.alt}
                width={0}
                height={0}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            ) : item.type === "youtube" ? (
              <div className="videoWrapper">
                <iframe
                  key={item.id}
                  className={styles.client__grid__branding__image}
                  src={constructYoutubeUrl(item.src)}
                  allow
                  title={item.title}
                  allowFullScreen
                />
              </div>
            ) : (
              <video
                key={item.id}
                style={{
                  gridArea: `box${i + 1}`,
                }}
                controls
                autoPlay
                muted
                loop
                playsInline
                className={styles.client__grid__branding__image}
              >
                <source src={item.src} />
              </video>
            );
          }
        })}
      </div>
    </div>
  );
};

export default ClientGrid;
