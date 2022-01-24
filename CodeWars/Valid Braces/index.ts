import { assert } from "chai";

export function validBraces(braces: string): boolean {
    let counter: number = 0;
    let arr: Array<string> = braces.split('')
    arr.forEach(elem => elem == "(" || elem == ")" ? counter++ : counter)
    if (counter % 2 != 0) return false
    arr.forEach(elem => elem == "[" || elem == "]" ? counter++ : counter)
    if (counter % 2 != 0) return false
    arr.forEach(elem => elem == "{" || elem == "}" ? counter++ : counter)
    if (counter % 2 != 0) return false
    return true
}

console.log(validBraces('[(])'));

// describe("solution", function () {
//     it("should handle basic tests", function () {
//         assert.strictEqual(validBraces("()"), true);
//         assert.strictEqual(validBraces("[(])"), false);
//     });
// });