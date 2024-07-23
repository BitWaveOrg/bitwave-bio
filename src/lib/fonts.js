import { Poppins, JetBrains_Mono } from "next/font/google";

export const poppinsRegular = Poppins({
  weight: "400",
  subsets: ["latin"],
});

export const poppinsBold = Poppins({
  weight: "700",
  subsets: ["latin"],
});

export const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
});