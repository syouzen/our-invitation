import { Noto_Sans_KR, Nanum_Myeongjo } from "next/font/google";

export const sans = Noto_Sans_KR({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const serif = Nanum_Myeongjo({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-serif",
});
