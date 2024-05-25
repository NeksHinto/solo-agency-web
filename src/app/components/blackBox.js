"use client";
import "../globals.css";

export default function BlackBox() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
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
