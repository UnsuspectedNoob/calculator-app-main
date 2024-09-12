import { Button, SetState } from "../types";

interface Props {
  digitKey: Button;
  screen: string;
  setScreen: SetState<string>;

  pointPresent: boolean;
  setPointPresent: SetState<boolean>;
}

function DigitKey({
  digitKey,
  screen,
  setScreen,
  setPointPresent,
  pointPresent,
}: Props) {
  const { colors, name } = digitKey;

  return (
    <button
      className={`text-[32px] md:text-[48px] border-y-4 md:p-4 active:border-b rounded-md md:rounded-[10px] flex items-center justify-center h-16 ${colors}`}
      onClick={appendDigit}
    >
      <p>{name}</p>
    </button>
  );

  function appendDigit() {
    let emptyish = /^(-?)0$/.exec(screen); // emptyish means that the whole string is 0 or was just negated.

    if (emptyish && name !== ".") {
      setScreen(emptyish[1] + name);
      console.log("it is emptyish..");
      return;
    }

    if (name === ".") {
      // if the last character is a point, forget it, no point.
      if (screen.slice(-1) === ".") return;

      // if the last character is an operator, then precede a zero before the point.
      if (/(\+|-|x|\/)$/.test(screen)) setScreen((prev) => prev + "0");

      // if there is already a point in the number being written, then no point.
      if (pointPresent) {
        return;
      } else {
        setPointPresent(true);
      }
    }

    setScreen((prev) => prev + name);
  }
}

export default DigitKey;
