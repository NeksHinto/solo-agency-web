import React from "react";
import Image from "next/image";
import styles from "../page.module.css";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const Carousel = ({ items, index, emblaRefs }) => {
  console.log(emblaRefs);
  emblaRefs.current[`emblaRef-${index}`] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: "3000" }),
  ]);

  const constructYoutubeUrl = (videoId) => {
    return `https://www.youtube.com/embed/${videoId}`; // Construct URL with ID
  };

  return (
    <div className={styles.embla}>
      <div className={styles.embla__viewport} ref={index}>
        <div className={styles.embla__container}>
          {items.map((item) => (
            <div className={styles.embla__slide} key={item.id}>
              {item.type === "image" ? (
                <Image
                  className={styles.client__image}
                  src={item.src}
                  alt={item.alt}
                  width={0}
                  height={0}
                  sizes="100vw"
                />
              ) : item.type === "youtube" ? (
                <iframe
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
                  controls
                  autoPlay
                  muted
                  loop
                  playsInline
                  className={styles.client__image}
                >
                  <source src={item.src} />
                </video>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
