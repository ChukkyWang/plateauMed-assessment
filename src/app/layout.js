import { Inter } from "next/font/google";
import Footer from "./resources/footer";
import Header from "./resources/header";
import "./globals.css";

export const metadata = {
  title: "Plateau Med Assessment",
  description: "A Plateau Med Assessment",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
