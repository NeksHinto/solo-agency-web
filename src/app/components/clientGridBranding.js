import React from "react";
import Image from "next/image";
import styles from "../page.module.css";

const ClientGrid = ({ items, gridProps }) => {
  const constructYoutubeUrl = (videoId) => {
    return `https://www.youtube.com/embed/${videoId}`;
  };

  return (
    <div className={styles.embla}>
      <div style={gridProps}>
        {items.map((item, i) => {
          if (item.id) {
            return item.type === "image" ? (
              <Image
                key={item.id}
                className={styles.client__grid__branding__image}
                style={{
                  gridArea: `box${i + 1}`,
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
