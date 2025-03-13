import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import UserSync from "@/components/UserSync";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Eli Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} flex flex-col min-h-screen`}>
          <Navbar />
          <UserSync />
          <main className="flex-grow pb-20 md:pb-0">{children}</main>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
