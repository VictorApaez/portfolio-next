"use client";
import "./globals.css";
import { ThemeProvider } from "../context/ThemeProvider";
import { useTheme } from "../context/ThemeProvider";
import Header from "@/screens/Header/Header";
import Footer from "@/screens/Footer/Footer";
import ColorPalette from "@/screens/ColorPalette";
import { SocialsBar } from "@/components/SocialsBar";
import { FixedContent } from "@/components/FixedContent";

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
        <FixedContent />
        <Header />
        {children}
      </ThemeProvider>
    </html>
  );
}
