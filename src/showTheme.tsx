import { useState } from "react";
import { Button } from "@/components/ui/button";

export const GlassDemo = () => {
  const [darkMode, setDarkMode] = useState(false);
  // const a = ""

  return (
    <div className={`${darkMode ? "dark" : ""} min-h-screen p-8 bg-background text-foreground transition-colors duration-300`}>
      <h1 className="text-3xl font-bold mb-6">Glass UI Demo</h1>

      <Button
        onClick={() => setDarkMode(!darkMode)}
        className="mb-6 px-4 py-2 rounded bg-primary text-primary-foreground hover:opacity-90 transition"
      >
        Toggle Dark / Light Mode
      </Button>

      <div className="flex flex-col gap-12 items-center">
        {/* Light/Dark Card */}
        <div className="w-full max-w-sm bg-glass backdrop-blur-lg border border-glass-border rounded-3xl shadow-2xl p-8 text-center">
          {/* <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl shadow-2xl p-8 max-w-sm text-center"> */}
          <h2 className="text-xl font-bold mb-4">Glass Card</h2>
          <p className="mb-6">
            Przykładowa karta z efektem glassmorphism.
          </p>

          <div className="flex flex-col gap-3 mb-6">
            <Button variant="default">Default</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="link">Link</Button>
            <Button variant="default" disabled>Link</Button>
          </div>

          <div className="flex flex-col gap-3 mb-6">
            <Button size="default">Default</Button>
            <Button size="sm">Sm</Button>
            <Button size="lg">Lg</Button>
            <Button size="icon">Icon</Button>
            <Button size="icon-sm">Icon-sm</Button>
            <Button size="icon-lg">Icon-lg</Button>
            <Button size="icon-lg" disabled>Link</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
