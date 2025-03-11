import { Alegreya, Inter } from "next/font/google";

export const alegreya = Alegreya({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["italic", "normal"],
});

export const geistSans = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const geistMono = Inter({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
