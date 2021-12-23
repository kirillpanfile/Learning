export class Kata {
  static squareDigits(num: number): number {
       return Number(String(num).split("").map((num) => Math.floor(Math.pow(Number(num), 2))).join(''));
  }
}