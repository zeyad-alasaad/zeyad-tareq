"use client";

import { useLayoutEffect } from "react";
import { useLocalStorage } from "usehooks-ts";

const Navbar = () => {
  const [theme, setTheme] = useLocalStorage("theme", "night");

  useLayoutEffect(() => {
    const body = document.body;
    body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="navbar bg-base-200 sticky top-0 z-10">
      <div className="max-w-screen-lg mx-auto my-0 w-full">
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
                    <a onClick={() => setTheme("night")}>Dark</a>
                  </li>
                  <li>
                    <a onClick={() => setTheme("cmyk")}>Light</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
