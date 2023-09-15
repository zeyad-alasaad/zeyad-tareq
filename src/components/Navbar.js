"use client";

import { useLayoutEffect } from "react";
import { useLocalStorage } from "usehooks-ts";

const Navbar = () => {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  useLayoutEffect(() => {
    const body = document.body;
    body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">Zeyad Alas’ad</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <details>
              <summary>Theme</summary>
              <ul className="p-2 bg-base-100">
                <li>
                  <a onClick={() => setTheme("dark")}>Dark</a>
                </li>
                <li>
                  <a onClick={() => setTheme("light")}>Light</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
