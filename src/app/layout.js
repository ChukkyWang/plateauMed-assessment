"use client";

// import { Inter } from "next/font/google";
import Footer from "./resources/footer";
import Header from "./resources/header";
import "./globals.css";
import Provider from "./provider";
import React from "react";

// const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* <AppProvider> */}
        <Provider>
          <Header />
          {children}
          <Footer />
        </Provider>
        {/* </AppProvider> */}
      </body>
    </html>
  );
}
