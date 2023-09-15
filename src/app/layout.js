import "./globals.css";
import { Architects_Daughter } from "next/font/google";

const architectsDaughter = Architects_Daughter({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Zeyad Alas’ad",
  description: "Zeyad Tareq Alas’ad’s portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={architectsDaughter.className}>{children}</body>
    </html>
  );
}
