import { Geist, Geist_Mono, Inter} from "next/font/google";


export const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
  });
  
export const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
  });

export const titleFont = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
  });