import { useEffect, useState } from "react";
import "./App.css";
import { ThemeProvider } from "./context/Theme";
import Button from "./components/Button";
import Card from "./components/Card";

const App = () => {
  const [themeMode, setThemeMode] = useState("light");
  const lightTheme = {
    setThemeMode: () => setThemeMode("light")
  };
  const darkTheme = {
    setThemeMode: () => setThemeMode("dark")
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("dark", "light");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full text-center">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <Button />
          </div>
          <div className="w-full max-w-sm mx-auto bg-white p-8 border border-gray-300 rounded-lg shadow-lg">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};
export default App;
