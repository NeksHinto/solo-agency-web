import React from "react";
import styles from "@/styles/styles.module.css";
import Image from "next/image";
import useIsMobile from "../hooks/useIsMobile";

const ClientGrid = ({ items, containerProps, hideLastItems }) => {
  const isMobile = useIsMobile();

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
              <div className="videoWrapper">
                <iframe
                  key={item.id}
                  className={styles.client__grid__image}
                  src={constructYoutubeUrl(item.src)}
                  allow
                  title={item.title}
                  allowFullScreen
                />
              </div>
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
