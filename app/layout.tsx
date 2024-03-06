// components
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
// types
import type { Metadata } from "next";
// styles
import "@/assets/styles/globals.css";

export const metadata: Metadata = {
  title: "Rental Property | Find The Perfect Rental",
  description: "Find your dream rental property",
  keywords: "rental, find rentals, find properties",
};

type MainLayoutProps = { children: React.ReactNode };
const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default MainLayout;
