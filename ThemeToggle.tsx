import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import * as React from "react";

export function ThemeToggle() {
  const [theme, setTheme] = React.useState<"light" | "dark">(
    () => {
      if (typeof window !== 'undefined') {
        return (localStorage.getItem("theme") as "light" | "dark") || "light";
      }
      return "light";
    }
  );

  React.useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="fixed top-4 right-4 z-[100] rounded-full border border-primary/20 bg-background/50 backdrop-blur-md"
    >
      {theme === "light" ? (
        <Moon className="h-4 w-4 text-primary" />
      ) : (
        <Sun className="h-4 w-4 text-primary" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
