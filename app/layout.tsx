import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mercury Ong",
  description: "Resume showcase",
};

export default function RootLayout({
  children,
  about,
  contact,
  experience,
  opening,
  showcase,
}: {
  children: React.ReactNode;
  about: React.ReactNode;
  contact: React.ReactNode;
  experience: React.ReactNode;
  opening: React.ReactNode;
  showcase: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        {opening}
        {about}
        {experience}
        {showcase}
        {contact}
      </body>
    </html>
  );
}
