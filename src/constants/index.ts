import { Button } from "../types";

export function commalise(aNumber: string): string {
  let counter = 0;
  let result = "";

  const { sign, number, mantissa } = regex(aNumber);

  for (let i = number.length - 1; i >= 0; i--) {
    if (counter % 3 === 0 && counter !== 0) {
      result = `${number[i]},${result}`;
    } else {
      result = `${number[i]}${result}`;
    }

    ++counter;
  }

  return `${sign}${result}${mantissa}`;

  function regex(theString: string) {
    const numberParts = /(-?)(\d*)((?:\.\d*)?)/.exec(theString);

    if (numberParts !== null) {
      return {
        sign: numberParts[1],
        number: numberParts[2],
        mantissa: numberParts[3],
      };
    } else {
      return { sign: "", number: "0", mantissa: "" };
    }
  }
}

const buttons: Button[] = [
  {
    name: "7",
    colors: "text-keys border-t-key-bg bg-key-bg border-b-key-shadow",
    type: "digit",
    spanTwo: false,
  },
  {
    name: "8",
    colors: "text-keys border-t-key-bg bg-key-bg border-b-key-shadow",
    type: "digit",
    spanTwo: false,
  },
  {
    name: "9",
    colors: "text-keys border-t-key-bg bg-key-bg border-b-key-shadow",
    type: "digit",
    spanTwo: false,
  },
  {
    name: "DEL",
    colors: "text-accent bg-accent-bg border-b-accent-shadow ",
    spanTwo: false,
    type: "function",
  },
  {
    name: "4",
    colors: "text-keys border-t-key-bg bg-key-bg border-b-key-shadow",
    type: "digit",
    spanTwo: false,
  },
  {
    name: "5",
    colors: "text-keys border-t-key-bg bg-key-bg border-b-key-shadow",
    type: "digit",
    spanTwo: false,
  },
  {
    name: "6",
    colors: "text-keys border-t-key-bg bg-key-bg border-b-key-shadow",
    type: "digit",
    spanTwo: false,
  },
  {
    name: "+",
    colors: "text-keys bg-key-bg border-b-key-shadow",
    type: "operator",
    value: (a, b) => a + b,
    spanTwo: false,
  },
  {
    name: "1",
    colors: "text-keys border-t-key-bg bg-key-bg border-b-key-shadow",
    type: "digit",
    spanTwo: false,
  },
  {
    name: "2",
    colors: "text-keys border-t-key-bg bg-key-bg border-b-key-shadow",
    type: "digit",
    spanTwo: false,
  },
  {
    name: "3",
    colors: "text-keys border-t-key-bg bg-key-bg border-b-key-shadow",
    type: "digit",
    spanTwo: false,
  },
  {
    name: "-",
    colors: "text-keys bg-key-bg border-b-key-shadow",
    type: "operator",
    value: (a, b) => a - b,
    spanTwo: false,
  },
  {
    name: ".",
    colors: "text-keys border-t-key-bg bg-key-bg border-b-key-shadow",
    type: "digit",
    spanTwo: false,
  },
  {
    name: "0",
    colors: "text-keys border-t-key-bg bg-key-bg border-b-key-shadow",
    type: "digit",
    spanTwo: false,
  },
  {
    name: "/",
    colors: "text-keys bg-key-bg border-b-key-shadow",
    type: "operator",
    value: (a, b) => a / b,
    spanTwo: false,
  },
  {
    name: "x",
    colors: "text-keys bg-key-bg border-b-key-shadow",
    type: "operator",
    value: (a, b) => a * b,
    spanTwo: false,
  },
  {
    name: "RESET",
    colors: "text-accent bg-accent-bg border-b-accent-shadow ",
    type: "function",
    spanTwo: true,
  },
  {
    name: "=",
    colors: "text-inverted bg-inverted-bg border-b-inverted-shadow ",
    type: "function",
    spanTwo: true,
  },
];

export { buttons };
