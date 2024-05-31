"use client";
import styles from "../page.module.css";
import React, { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";

export default function Paragraph({ value }) {
  const element = useRef(null);

  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 1", "start 0.25"],
  });

  const words = value.split(" ");

  return (
    <p className={styles.paragraph} ref={element}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word key={i} range={[start, end]} progress={scrollYProgress}>
            {word}
          </Word>
        );
      })}
    </p>
  );
}

const Word = ({ children, range, progress }) => {
  //animation

  const opacity = useTransform(progress, range, [0.2, 1]);

  return (
    <span className={styles.word}>
      <span style={{ opacity }}>{children}</span>
    </span>
  );
};
