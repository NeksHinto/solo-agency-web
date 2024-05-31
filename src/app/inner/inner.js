"use client";
import { motion } from "framer-motion";
import styles from "../page.module.css";

// Page-in animation

export default function Inner({ children }) {
  const anim = (variants) => {
    return {
      initial: "initial",
      animate: "enter",
      exit: "exit",
      variants,
    };
  };

  const opacity = {
    initial: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
      transition: {
        delay: 1,
        duration: 2,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const slide = {
    initial: {
      opacity: 1,
      left: "200vh",
    },
    enter: {
      opacity: 1,
      left: "0vh",
      transition: {
        duration: 1,
      },
    },
    exit: {
      opacity: 0,
      left: "-200vh",
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <div className={styles.inner}>
      <div {...anim(slide)} className={styles.slide} />
      <div {...anim(opacity)} className={styles.page}>
        {children}
      </div>
    </div>
  );
}
