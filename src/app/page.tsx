"use client";
import ThemeToggle from "./(components)/ThemeToggle";
import { useTheme } from "./(context)/ThemeProvider";

export default function Home() {
  const theme = useTheme();
  return (
    <>
      <div className="p-4 ">
        {/* Testing primary colors */}
        <div className="bg-primary-1 p-4 mb-2 border-2 border-lines-primary rounded-lg">
          Primary 1 Color
        </div>
        <div className="bg-primary-2 p-4 mb-2 border-2 border-lines-primary rounded-lg">
          Primary 2 Color
        </div>
        <div className="bg-primary-3 p-4 mb-2 border-2 border-lines-primary rounded-lg">
          Primary 3 Color
        </div>

        {/* Testing accent colors */}
        <div className="bg-accent-1 p-4 mb-2 border-2 border-lines-primary rounded-lg">
          Accent 1 Color
        </div>
        <div className="bg-accent-2 p-4 mb-2 border-2 border-lines-primary rounded-lg">
          Accent 2 Color
        </div>
        <div className="bg-accent-3 p-4 mb-2 border-2 border-lines-primary rounded-lg">
          Accent 3 Color
        </div>

        {/* Testing text colors */}
        <div className="bg-primary-1 p-4 mb-2 border-2 border-lines-primary rounded-lg">
          <h1 className="text-3xl text-content-header">Text Header</h1>
        </div>

        <div className="bg-primary-2 p-4 mb-2 border-2 border-lines-primary rounded-lg">
          <p>Primary Text Color</p>
        </div>

        {/* Testing border color */}
        <div className="bg-primary-1 p-4 mb-2 border-2 border-lines-primary rounded-lg">
          <p>Primary Border Color</p>
        </div>

        <ThemeToggle></ThemeToggle>
      </div>
    </>
  );
}
