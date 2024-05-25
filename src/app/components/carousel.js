import React from "react";
import Image from "next/image";
import styles from "../page.module.css";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const Carousel = ({ items }) => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: "3000" }),
  ]);

  return (
    <div className={styles.embla}>
      <div className={styles.embla__viewport} ref={emblaRef}>
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
