"use client";
import styles from "../page.module.css";
import Link from "next/link";
import "../globals.css";

export default function ClientsRed() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <p className={styles.button2} style={{ marginLeft: "0rem" }}>
        <Link href="/contact">CONTACT US</Link>
      </p>
      <div
        style={{
          background: "black",
          height: "150vh",
          position: "fixed",
          zIndex: "-1",
          width: "100vw",
          top: "0",
          left: "0",
        }}
      ></div>
    </div>
  );
}
