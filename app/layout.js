import { Montserrat, Bodoni_Moda } from "next/font/google";
import "./globals.css";
import FontTester from "@/components/FontTester";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
});

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-bodoni",
});

export const metadata = {
  title: "Holiday Dream Photos",
  description: "Premium Santa Experiences and Private Events",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${bodoni.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-[#F9F7F4] text-[#113122]">
        <main className="flex-1">{children}</main>
        <FontTester />
      </body>
    </html>
  );
}
