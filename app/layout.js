import { VT323, Press_Start_2P } from "next/font/google";
import "./globals.css";

const vt323 = VT323({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-vt323",
});

const pressStart = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-press-start",
});

export const metadata = {
  title: "Franky Doe — Full Stack Developer",
  description:
    "Portfolio of Franky Doe, a full stack developer specializing in building exceptional digital experiences. Available for hire.",
  keywords: [
    "developer",
    "portfolio",
    "full stack",
    "web development",
    "react",
    "next.js",
  ],
  openGraph: {
    title: "Franky Doe — Full Stack Developer",
    description:
      "Portfolio of Franky Doe, a full stack developer specializing in building exceptional digital experiences.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${vt323.variable} ${pressStart.variable}`}>
      <body>{children}</body>
    </html>
  );
}
