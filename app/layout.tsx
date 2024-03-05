import type { Metadata } from "next";
import { Analytics } from '@vercel/analytics/react';
import { Roboto_Slab } from "next/font/google";
import "./globals.css";

const inter = Roboto_Slab({ 
  subsets: ["latin"], 
  weight: "400"
});

export const metadata: Metadata = {
  title: "Riddhesh Markandeya",
  description: "Riddhesh Markandeya is a Software Engineer who thrives on problem-solving and loves exploring new technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth" lang="en">
      <body className={`${inter.className} bg-bluebg text-slate-400 selection:bg-bluehl selection:text-bluebg`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
