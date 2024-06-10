import React from "react";
import Image from "next/image";
import styles from "@/styles/styles.module.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const ClientCarousel = ({ items }) => {
  const constructYoutubeUrl = (videoId) => {
    return `https://www.youtube.com/embed/${videoId}`;
  };

  return (
    <div className={styles.embla}>
      {/* <div className={styles.scroller__client}>
        <div className={styles.scroller__client__inner}> */}
      <AliceCarousel
        autoPlay
        autoPlayInterval={2000}
        autoPlayStrategy="none"
        autoWidth
        infinite
        disableDotsControls
        disableButtonsControls
      >
        {items.map((item) =>
          item.type === "image" ? (
            <Image
              key={item.id}
              className={styles.client__carousel__image}
              src={item.src}
              alt={item.alt}
              width={100}
              height={100}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : item.type === "youtube" ? (
            <iframe
              key={item.id}
              className={styles.client__image}
              src={constructYoutubeUrl(item.src)}
              allow
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
              className={styles.client__carousel__video}
            >
              <source src={item.src} />
            </video>
          )
        )}
      </AliceCarousel>
      {/* </div>
      </div> */}
    </div>
  );
};

export default ClientCarousel;
