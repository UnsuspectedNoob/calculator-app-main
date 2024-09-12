import { createContext, ReactNode, useState } from "react";
import { SetState } from "../types";

interface Props {
  children: ReactNode;
}

export type ThemeType = "theme-one" | "theme-two" | "theme-three";

interface ThemeContextType {
  theme: ThemeType;
  setTheme: SetState<ThemeType>;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: "theme-one",
  setTheme: () => {},
});

function ThemeProvider({ children }: Props) {
  const [theme, setTheme] = useState<ThemeType>("theme-one");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
