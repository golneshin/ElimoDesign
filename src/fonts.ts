import { Alegreya, Geist, Geist_Mono } from "next/font/google";

export const alegreya = Alegreya({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["italic", "normal"],
});

export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
