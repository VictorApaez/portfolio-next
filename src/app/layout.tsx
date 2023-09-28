"use client";
import "./globals.css";
import { ThemeProvider } from "../context/ThemeProvider";
import { useTheme } from "../context/ThemeProvider";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import ColorPalette from "@/components/ColorPalette";
import { SocialsBar } from "@/components/Socials/SocialsBar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = useTheme();
  return (
    <html lang="en">
      <ThemeProvider>
        <SocialsBar />
        <Header />
        {children}
        <Footer />
        <ColorPalette />
      </ThemeProvider>
    </html>
  );
}
