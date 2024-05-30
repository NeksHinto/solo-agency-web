import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./components/nav";
import Footer from "./components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Solo Agency",
  description: "No somos SOLO una agencia",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            width: "100%",
            height: "100%",
            position: "fixed",
            objectFit: "cover",
            zIndex: "-1",
            right: "0",
            bottom: "0",
            pointerEvents: "none",
            filter: "brightness(40%)",
          }}
        >
          <source src="/3dBackground.webm" />
        </video>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
