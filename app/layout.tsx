import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Patent Design Services",
  description: "Professional patent illustrations and design services",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-800 antialiased font-sans">
        <Header />
        <main className="min-h-screen px-4 md:px-12 py-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
