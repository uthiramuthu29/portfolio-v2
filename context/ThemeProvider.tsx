"use client";

import { useEffect, useSyncExternalStore, type ReactNode } from "react";
import { ThemeContext } from "@/context/ThemeContext";


type Theme = "light" | "dark";

type ThemeProviderProps = {
  children: ReactNode;
};

type ThemeUpdate = Theme | ((currentTheme: Theme) => Theme);


const listeners = new Set<() => void>();

function getThemeSnapshot(): Theme {
  const savedTheme = localStorage.getItem("theme");

    if(savedTheme === "dark" || savedTheme === "light"){
      return savedTheme;
    }

    return window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches ? "dark" : "light";
}

function getServerSnapshot(): Theme{
  return "light";
}

function subscribe(callback: () => void){
  listeners.add(callback);

  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  mediaQuery.addEventListener("change", callback);
  window.addEventListener("storage", callback);

  return () => {
    listeners.delete(callback);
  mediaQuery.removeEventListener("change", callback);
  window.removeEventListener("storage", callback);
  }
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
  const theme = useSyncExternalStore(
    subscribe,
    getThemeSnapshot,
    getServerSnapshot
  );

  function setTheme(nextTheme: ThemeUpdate) {
    const resolvedTheme =
      typeof nextTheme === "function" ? nextTheme(theme) : nextTheme;

    if (resolvedTheme !== "dark" && resolvedTheme !== "light") return;

    localStorage.setItem("theme", resolvedTheme);

    listeners.forEach((listener) => listener());
  }

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}