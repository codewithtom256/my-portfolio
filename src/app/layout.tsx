import type { Metadata } from "next";

import "./globals.css";
import NavBar from "@/components/NavBar";

export const metadata: Metadata = {
  title: "Code With Tom",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="container mx-auto h-screen max-w-3xl">
          <NavBar />
          {children}
        </div>
      </body>
    </html>
  );
}
