import { calculate } from "../constants/parser";
import { Button, SetState } from "../types";

interface Props {
  functionKey: Button;
  screen: string;
  setScreen: SetState<string>;

  pointPresent: boolean;
  setPointPresent: SetState<boolean>;
}

function FunctionKey({
  functionKey,
  screen,
  setScreen,
  setPointPresent,
}: Props) {
  const { colors, name, spanTwo } = functionKey;

  return (
    <button
      className={`${
        spanTwo ? "col-span-2" : ""
      } text-xl md:text-3xl md:rounded-xl border-y-4 border-t-transparent active:border-b rounded-md flex items-center justify-center h-16 ${colors}`}
      onClick={handleFunction}
    >
      <p>{name}</p>
    </button>
  );

  function handleFunction() {
    if (name === "RESET") {
      setScreen("0");
      setPointPresent(false);
    } else if (name === "DEL") {
      if (/\.$/.test(screen)) {
        setPointPresent(false);
        console.log("a point was deleted..");
      } // if the character deleted was a point.
      else if (/[+-x/]$/.test(screen)) setPointPresent(true); // if the character deleted was an operator.

      setScreen((prev) => {
        let temp = prev;
        temp = temp.slice(0, -1);
        if (temp.length === 0 || temp === "-") return "0";
        else return temp;
      });
    } else if (name === "=") {
      const lastCharacter = screen[screen.length - 1];
      if (lastCharacter === "." || "+-".includes(lastCharacter)) {
        setScreen("" + calculate(screen + "0"));
        return;
      }

      if ("x/".includes(lastCharacter)) {
        setScreen("" + calculate(screen + "1"));
        return;
      }

      let total = "" + calculate(screen);
      if (total.includes(".")) setPointPresent(true);
      else setPointPresent(false);

      setScreen(total);
    }
  }
}

export default FunctionKey;
