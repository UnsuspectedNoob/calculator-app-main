import { Button, SetState } from "../types";

interface Props {
  operatorKey: Button;

  screen: string;
  setScreen: SetState<string>;

  setPointPresent: SetState<boolean>;
}

function OperatorKey({
  operatorKey,
  screen,
  setScreen,
  setPointPresent,
}: Props) {
  const { colors, name, spanTwo } = operatorKey;

  return (
    <button
      className={`${
        spanTwo ? "col-span-2" : ""
      } text-3xl border-y-4 border-t-transparent active:border-b rounded-md flex items-center justify-center h-16 ${colors}`}
      onClick={handleOperation}
    >
      <p>{name}</p>
    </button>
  );

  function handleOperation() {
    setPointPresent(false);

    // do not allow more that two operators beside each other.
    if (/(?:\+|-|x|\/){2}$/.test(screen)) return;

    // if the operator pressed is a minus sign and it is emptyish
    if (name === "-" && screen === "0") {
      setScreen("-0");
      return;
    }

    // if the last character is a point
    if (screen.slice(-1) === ".") {
      setScreen((prev) => prev + `0${name}`);
      return;
    }

    // if the last character is an operator
    if (/(\+|-|x|\/)/.test(screen.slice(-1))) {
      console.log("there is an operator present..");

      if (name === "-") {
        setScreen((prev) => prev + name);
      }
      return;
    }

    // add the operator for digits.
    setScreen((prev) => prev + name);
  }
}

export default OperatorKey;
