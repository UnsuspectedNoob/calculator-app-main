import { createContext, ReactNode, useState } from "react";
import { SetState } from "../types";

interface ScreenContextType {
  screenValue: string;
  setScreenValue: SetState<string>;
}

export const ScreenContext = createContext<ScreenContextType>({
  screenValue: "0",
  setScreenValue: () => {},
});

function ScreenProvider({ children }: { children: ReactNode }) {
  const [screenValue, setScreenValue] = useState("0");

  return (
    <ScreenContext.Provider value={{ screenValue, setScreenValue }}>
      {children}
    </ScreenContext.Provider>
  );
}

export default ScreenProvider;
