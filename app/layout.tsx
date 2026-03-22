import type { Metadata } from "next";
import {Poppins } from "next/font/google";
import "@/styles/globals.css"; 
import "@/styles/tokens.css" 
import "@/styles/vars/font-sizes.css"

const poppins = Poppins({
  variable: "--font-poppins-sans",
  subsets: ["latin"], 
  weight: "400"
});


export const metadata: Metadata = {
  title: "Mohamed El-Maghrabi | Tour Guide",
  description: "I am a freelancer tour guide in Egypt with 15+ years of experience. I can help travelers to book their accommodation if needed and provide world class tour guiding services including sightseeing and transport. I also work as a translator from English to Arabic and vice versa. I did a few gigs in content writing and editing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable}`}>
      <body>{children}</body>
    </html>
  );
}
