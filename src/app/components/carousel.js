import React, { useState } from "react";
import Image from "next/image";
import styles from "../page.module.css";
import ReactSimplyCarousel from "react-simply-carousel";

const ClientCarousel = ({ items }) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const constructYoutubeUrl = (videoId) => {
    return `https://www.youtube.com/embed/${videoId}`;
  };

  return (
    <div className={styles.embla}>
      <ReactSimplyCarousel
        activeSlideIndex={activeSlideIndex}
        autoplay
        containerProps={styles.embla__container}
        onRequestChange={setActiveSlideIndex}
        infinite
        itemsToScroll={1}
        innerProps={{
          maxWidth: "none",
        }}
        speed={400}
        easing="linear"
      >
        {items.map((item) =>
          item.type === "image" ? (
            <Image
              key={item.id}
              className={styles.client__image}
              src={item.src}
              alt={item.alt}
              width={0}
              height={0}
              sizes="100vw"
            />
          ) : item.type === "youtube" ? (
            <iframe
              key={item.id}
              className={styles.client__image}
              src={constructYoutubeUrl(item.src)}
              frameBorder="0"
              allow={item.allow}
              referrerPolicy={item.referrerPolicy}
              width={item.width}
              height={item.height}
              title={item.title}
              allowFullScreen
            ></iframe>
          ) : (
            <video
              key={item.id}
              controls
              autoPlay
              muted
              loop
              playsInline
              className={styles.client__image}
            >
              <source src={item.src} />
            </video>
          )
        )}
      </ReactSimplyCarousel>
    </div>
  );
};

export default ClientCarousel;
