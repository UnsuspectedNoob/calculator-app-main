import { Dispatch, SetStateAction } from "react";

export type SetState<T> = Dispatch<SetStateAction<T>>;

export type Button = {
  name: string;
  colors: string;
  type: "digit" | "function" | "operator";
  value?: (a: number, b: number) => number;
  spanTwo: boolean;
};

export type Operation = null | {
  name: string;
  value: (a: number, b: number) => number;
};
