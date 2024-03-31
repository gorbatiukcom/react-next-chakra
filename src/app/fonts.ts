// app/fonts.ts
import { Oswald } from "next/font/google";

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
});

export const fonts = {
  oswald,
};
