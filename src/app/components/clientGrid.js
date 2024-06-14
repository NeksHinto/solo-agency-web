"use client";
import React, { useContext } from "react";
import styles from "@/styles/styles.module.css";
import Image from "next/image";
import { DeviceContext } from "../contexts/deviceContext";

const ClientGrid = ({ items, containerProps, hideLastItems }) => {
  const { isMobile } = useContext(DeviceContext);

  const constructYoutubeUrl = (videoId) => {
    return `https://www.youtube.com/embed/${videoId}`;
  };

  return (
    <div className={styles.embla}>
      <div
        style={containerProps}
        className={!containerProps ? styles.grid__client : null}
      >
        {items.map((item, i) => {
          if (item.id) {
            return item.type === "image" ? (
              <Image
                key={item.id}
                className={styles.client__grid__image}
                style={
                  isMobile && hideLastItems?.includes(i)
                    ? { display: "none" }
                    : null
                }
                src={item.src}
                alt={item.alt}
                width={0}
                height={0}
                sizes="100vw"
              />
            ) : item.type === "youtube" ? (
              <iframe
                key={item.id}
                className={styles.client__grid__image}
                src={constructYoutubeUrl(item.src)}
                allow
                title={item.title}
                allowFullScreen
              />
            ) : (
              <video
                key={item.id}
                controls
                autoPlay
                muted
                loop
                playsInline
                className={styles.client__grid__video}
                style={
                  isMobile && hideLastItems?.includes(i)
                    ? { display: "none" }
                    : null
                }
              >
                {isMobile ? (
                  <source src={item.src} />
                ) : (
                  <source
                    src={item.src.replace(/\.webm(?=.*)$/, "-desktop.webm")}
                  />
                )}
              </video>
            );
          }
        })}
      </div>
    </div>
  );
};

export default ClientGrid;
