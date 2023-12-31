"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { MdOutlineSystemUpdateAlt } from "react-icons/md";
import { MdOutlineDarkMode, MdLightMode } from "react-icons/md";

import styles from "./themeChanger.module.css";

const ThemeChanger = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className={styles.themes}>
      <a
        onClick={(e) => setTheme("light")}
        className={theme === "light" ? styles.selectedTheme : ""}
      >
        <MdLightMode />
      </a>
      <a
        onClick={(e) => setTheme("dark")}
        className={theme === "dark" ? styles.selectedTheme : ""}
      >
        <MdOutlineDarkMode />
      </a>
      <a
        onClick={(e) => setTheme("system")}
        className={theme === "system" ? styles.selectedTheme : ""}
      >
        <MdOutlineSystemUpdateAlt />
      </a>
    </div>
  );
};

export default ThemeChanger;
