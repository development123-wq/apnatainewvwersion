import { Inter, Instrument_Sans } from "next/font/google";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/* Body font */
const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-inter",
});

/* Heading font */
const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-instrument",
});

export const metadata = {
  title: "AP Natai",
  description: "your premier partner in luxury real estate within the serene locale of Natai, Phang-nga.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${instrumentSans.variable}`}
    >
      <body>
        {children}
      </body>
    </html>
  );
}
