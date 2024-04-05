import "./globals.css";
import { Architects_Daughter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next"

const architectsDaughter = Architects_Daughter({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  metadataBase: new URL("https://zeyadtareq.com"),
  title: "Zeyad Al-As’ad",
  description: "Zeyad Tareq Al-As’ad’s portfolio",
  verification: {
    google:
      "google-site-verification=g0ImZMFdcEEeg3P8_A46OX8svGQ9eOXpb6wI5HDXstY",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={architectsDaughter.className} data-theme="night">
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
