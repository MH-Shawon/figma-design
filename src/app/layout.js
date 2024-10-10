import localFont from "next/font/local";
import "./globals.css";

import "swiper/css";
import Navbar from "@/components/shared/Navbar";

import{Bai_Jamjuree, Noto_Serif_JP, Poppins, Volkhov} from "next/font/google"
import Footer from "@/components/shared/Footer";

// font baiJamjuree 

const baiJamjuree = Bai_Jamjuree({
  weight: ["400","500"], 
  subsets: ["latin"],
  
});

// font natoSerif 
const notoSerifJP = Noto_Serif_JP({
  weight: "700",
  subsets: ["latin",],
  display: "swap",
});

// font-poppins 

const poppins = Poppins({
  weight: "500",
  subsets: ["latin"],
  display: "swap",
});

// font Volkhov

const volkhov = Volkhov({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Design Figma",
  description: "Generated figma",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="figmaTheme">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
