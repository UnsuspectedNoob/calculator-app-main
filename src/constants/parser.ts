// Token Types
type Token =
  | { type: "number"; value: number }
  | { type: "operator"; value: string };

function removeCommas(expression: string): string {
  let total = "";
  for (let character of expression) {
    if (character === ",") continue;

    total += character;
  }

  return total;
}

// function commaliseDigits() {}

// Tokenizer: breaks input into tokens
export function tokenize(expression: string): Token[] {
  let tempExpression = removeCommas(expression);
  const tokenSpecification = [
    // (?<!\d)-\d+(?:\.\d+)?
    { type: "number", regex: /^-?\d+(?:\.\d+)?(-?)/ }, // Numbers with optional minus and mantissa
    { type: "operator", regex: /^[+\-x/]/ }, // Arithmetic operators
    { type: "SKIP", regex: /^[ \t]+/ }, // Skip spaces and tabs
  ];

  const tokens: Token[] = [];
  let match: RegExpExecArray | null;

  // as long as cursor is still in the stirng..
  console.log("starting lexing...");
  while (tempExpression.length > 0) {
    console.log(`expression length is still ${tempExpression.length}`);
    console.log("setting matched to false..");
    let matched = false;

    for (const { type, regex } of tokenSpecification) {
      console.log("within regex lexing..");
      match = regex.exec(tempExpression);

      if (match) {
        console.log(`match was found, type is ${type}, value is ${match[0]}`);
        console.log("setting matched to true..");
        matched = true;
        if (type === "number") {
          if (match[0][match[0].length - 1] === "-") {
            tokens.push({
              type: "number",
              value: Number(match[0].slice(0, -1)),
            });
            tokens.push({ type: "operator", value: "-" });
            console.log("pushing number type..");
            console.log("pushing operator type..");
          } else {
            tokens.push({ type: "number", value: Number(match[0]) });
            console.log("pushing number type..");
          }
        } else if (type === "operator") {
          tokens.push({ type: "operator", value: match[0] });
          console.log("pushing operator type..");
        }
        tempExpression = tempExpression.slice(match[0].length);
        console.log(`expression is now "${tempExpression}"`);

        break;
      }
    }

    if (!matched) {
      console.log(`no matches found for ${tempExpression[0]}`);

      throw new Error(`Unexpected character: ${tempExpression[0]}`);
    }
  }

  console.log(tokens);
  return tokens;
}

// Recursive Descent Parser
class Parser {
  private tokens: Token[];
  private pos: number;

  constructor(tokens: Token[]) {
    this.tokens = tokens;
    this.pos = 0;
  }

  private consume(): Token {
    const token = this.tokens[this.pos];
    this.pos += 1;
    return token;
  }

  private peek(): Token | null {
    return this.pos < this.tokens.length ? this.tokens[this.pos] : null;
  }

  // Parse expressions (handle + and -)
  parseExpression(): any {
    let node = this.parseTerm();
    while (
      this.peek() &&
      this.peek()?.type === "operator" &&
      (this.peek() as any).value.match(/[+\-]/)
    ) {
      const op = this.consume().value;
      const right = this.parseTerm();
      node = { op, left: node, right };
    }
    return node;
  }

  // Parse terms (handle * and /)
  parseTerm(): any {
    let node = this.parseFactor();
    while (
      this.peek() &&
      this.peek()?.type === "operator" &&
      (this.peek() as any).value.match(/[x\/]/)
    ) {
      const op = this.consume().value;
      const right = this.parseFactor();
      node = { op, left: node, right };
    }
    return node;
  }

  // Parse factors (numbers only)
  parseFactor(): any {
    const token = this.consume();
    if (token.type === "number") {
      return token.value;
    } else {
      throw new Error(`Expected a number before and after ${token.value}`);
    }
  }
}

// Evaluator: Traverses the AST to calculate the result
function evaluate(node: any): number {
  if (typeof node === "number") {
    return node;
  }

  const { op, left, right } = node;
  switch (op) {
    case "+":
      return evaluate(left) + evaluate(right);
    case "-":
      return evaluate(left) - evaluate(right);
    case "x":
      return evaluate(left) * evaluate(right);
    case "/":
      return evaluate(left) / evaluate(right);
    default:
      throw new Error(`Unknown operator: ${op}`);
  }
}

export function calculate(expression: string): number {
  const tokens = tokenize(removeCommas(expression));
  const parser = new Parser(tokens);
  const ast = parser.parseExpression();
  const result = evaluate(ast);

  console.log(`Result: ${result}`);
  return result;
}
