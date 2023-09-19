import "./app.css";

import React, { FC, useEffect, useRef, useState } from "react";

import Weather from "./Weather";

interface AppProps {}

const App: FC<AppProps> = () => {
  const cityInputRef = useRef<HTMLInputElement | null>(null);
  const [city, setCity] = useState("");
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <>
      <button className="theme-button" onClick={() => toggleTheme()}>
        {theme === "dark" ? "Light" : "Dark"} Mode
      </button>

      <input
        ref={cityInputRef}
        role="search"
        type="text"
        placeholder="Enter city name..."
      />

      <button onClick={() => setCity(cityInputRef.current?.value || "")}>
        Show Weather
      </button>

      <Weather city={city} />
    </>
  );
};

export default App;
