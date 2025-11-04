import { Roboto } from "next/font/google";
import "./globals.css";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

import "react-multi-carousel/lib/styles.css";
import Footer from "@/components/sections/Footer";
import Navigation from "@/components/sections/Navigation";
import Header from "@/components/sections/Header";

export const metadata = {
  title: "Online Quran Academy",
  description: "Learn Quran online with expert tutors",
};

const roboto = Roboto({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} antialiased text-[#1e1e1e]`}>
        <Navigation />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
