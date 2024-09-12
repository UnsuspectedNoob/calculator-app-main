import { useState } from "react";
import { buttons } from "../constants";
import { SetState } from "../types";
import DigitKey from "./DigitKey";
import FunctionKey from "./FunctionKey";
import OperatorKey from "./OperatorKey";

interface Props {
  screen: string;
  setScreen: SetState<string>;
}

function Keypad({ screen, setScreen }: Props) {
  const [pointPresent, setPointPresent] = useState(false);

  return (
    <div className="gap-3 grid grid-cols-4 grid-rows-5 bg-keypad-bg mt-6 p-6 rounded-[10px]">
      {buttons.map((button) => {
        if (button.type === "digit")
          return (
            <DigitKey
              key={button.name}
              digitKey={button}
              screen={screen}
              setScreen={setScreen}
              pointPresent={pointPresent}
              setPointPresent={setPointPresent}
            />
          );
        else if (button.type === "function")
          return (
            <FunctionKey
              functionKey={button}
              key={button.name}
              screen={screen}
              setScreen={setScreen}
              pointPresent={pointPresent}
              setPointPresent={setPointPresent}
            />
          );
        else if (button.type === "operator")
          return (
            <OperatorKey
              operatorKey={button}
              key={button.name}
              screen={screen}
              setScreen={setScreen}
              setPointPresent={setPointPresent}
            />
          );
      })}
    </div>
  );
}

export default Keypad;
