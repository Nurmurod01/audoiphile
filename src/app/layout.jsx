import { Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const manRope = Manrope({
  variable: "--font-geist-manarope",
  subsets: ["latin"],
});



export const metadata = {
  title: "Audioiphile",

  description: "For portfolie",
};

export default function RootLayout({ children }) {
  return (
    <html className="h-full" lang="en">
      <body
        className={`h-full flex flex-col ${manRope.variable} ${manRope.className} antialiased`}
      >
        <Header/>
        <main className="grow">
        {children}
        </main>
       
        <Footer/>
      </body>
    </html>
  );
}
