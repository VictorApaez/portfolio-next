"use client";
import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "./(context)/ThemeProvider";
import { useTheme } from "./(context)/ThemeProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = useTheme();
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <nav>This is the nav</nav>
          <main>{children}</main>
          <footer>This is the footer</footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
