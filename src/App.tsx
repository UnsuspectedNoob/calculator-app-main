import { useContext, useState } from "react";
import Keypad from "./components/Keypad";
import Screen from "./components/Screen";
import { ThemeContext } from "./contexts/ThemeContext";

function App() {
  const { theme, setTheme } = useContext(ThemeContext);
  const [screen, setScreen] = useState("0");

  return (
    <div
      className={`bg-main-bg px-6 py-10 grid min-h-screen ${theme} font-league`}
    >
      <div className="relative left-1/2 max-w-[640px] -translate-x-1/2 md:self-center">
        {/* Header */}
        <div className="flex justify-between items-end">
          <p className="text-[32px] text-main leading-none">calc</p>

          <div className="flex items-baseline gap-x-7">
            <p className="text-main text-xs md:text-[20px] uppercase leading-[0] tracking-widest -translate-y-1/2">
              theme
            </p>

            <div
              className="relative flex flex-col bg-toggle-bg p-1 rounded-full w-[70px]"
              onClick={toggleTheme}
            >
              <div className="top-0 left-0 absolute flex justify-between px-2.5 pb-1 w-full text-main text-xs leading-none -translate-y-full">
                <p>1</p>
                <p>2</p>
                <p>3</p>
              </div>

              <div
                className={`relative transition-transform w-4 h-4 bg-inverted-bg rounded-full ${
                  theme === "theme-one"
                    ? ""
                    : theme === "theme-two"
                    ? "left-1/2 -translate-x-1/2"
                    : "-right-full -translate-x-full"
                }`}
              />
            </div>
          </div>
        </div>

        {/* Screen */}
        <Screen screen={screen} />

        {/* Keypad */}
        <Keypad screen={screen} setScreen={setScreen} />
      </div>
    </div>
  );

  function toggleTheme() {
    if (theme === "theme-one") setTheme("theme-two");
    else if (theme === "theme-two") setTheme("theme-three");
    else if (theme === "theme-three") setTheme("theme-one");
  }
}

export default App;
