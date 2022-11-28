import { question } from "readline-sync";

type Operator = "+" | "-" | "*" | "/";

function main(): void {
  const firstStr: string = question("Enter a number\n");
  const operator: string = question("Enter an operator\n");
  const secondStr: string = question("Enter a number\n");

  const validInput: boolean =
    isNumber(firstStr) && isOperator(operator) && isNumber(secondStr);

  if (validInput) {
    const firstNum: number = parseInt(firstStr);
    const secondNum: number = parseInt(secondStr);
    const result = calculate(firstNum, operator as Operator, secondNum);
    console.log(result);
  } else {
    console.log("\n invalid input\n");
    main();
  }
}

function calculate(firstNum: number, operator: Operator, secondNum: number) {
  switch (operator) {
    case "+":
      return firstNum + secondNum;
    case "-":
      return firstNum - secondNum;
    case "*":
      return firstNum * secondNum;
    case "/":
      return firstNum / secondNum;
  }
}

//returns true if entered input is an operator
function isOperator(str: string): boolean {
  switch (str) {
    case "+":
    case "-":
    case "*":
    case "/":
  }
  return true;
}

//returns true if entered input is a number
function isNumber(str: string) {
  const maybeNum = parseInt(str);
  const isNum: boolean = !isNaN(maybeNum);
  return isNum;
}

main();
