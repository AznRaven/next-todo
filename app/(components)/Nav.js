import React from "react";
import { ThemeToggle } from "./ThemeToggle";

export const Nav = () => {
  return (
    <header>
      <nav className="flex justify-end m-10"><ThemeToggle/></nav>
    </header>
  );
};
