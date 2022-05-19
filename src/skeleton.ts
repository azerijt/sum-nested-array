import { createStack, Stack } from "./stack";

type NumberOrNested = number | NumberOrNested[];

let nestedArray = [10, [2, 3, 6], [1, [100, [3, 4], 5]]];

/*

*/

function sumNestedArray(nestedArray: NumberOrNested[]): number {
  const stack: Stack<NumberOrNested> = createStack();
  
  let cumSum= 0;
  // if element is only 1 long: push in the element -> console log it
  stack.push(nestedArray);
  while (!stack.isEmpty()) {
    let thing: NumberOrNested = stack.pop()!;
    if (typeof thing === "number") {
      console.log(thing);
      cumSum += thing
    } else {
      // thing is array
      //put each child on stack for later processing

      for (let i of thing) {
        stack.push(i);
      }
    }
  }

  // if the element is ++1, add these numbers to the stack --> console log them
  // add them onto a cumSum

  return cumSum;
}

export default sumNestedArray;

console.log(sumNestedArray(nestedArray));
