//? The Fibonacci numbers are the numbers in the following integer sequence (Fn):
//* 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, ...
//* such as
//* F(n) = F(n - 1) + F(n - 2) with F(0) = 0 and F(1) = 1.

//! Your function productFib takes an integer(prod) and returns an array:
//? [F(n), F(n + 1), true] or { F(n), F(n + 1), 1 } or(F(n), F(n + 1), True)

export class G964 {
    public static Fibonacci = (element: number): number => {
        if (element <= 1) return 1
        return this.Fibonacci(element - 1) + this.Fibonacci(element - 2);
    }
    public static productFib = (prod: number): (number | boolean)[] => {
        let counter: number = 0, response: (number | boolean)[];
        do {
            if (this.Fibonacci(counter) * this.Fibonacci(counter + 1) == prod) {
                response = [this.Fibonacci(counter), this.Fibonacci(counter + 1), true]
                break;
            }
            counter++;
        } while (this.Fibonacci(counter) + this.Fibonacci(counter + 1) < prod);
        return response ? response : [this.Fibonacci(counter - 5), this.Fibonacci(counter - 4), false]
    }
}

console.log(G964.productFib(800))

// -- Tests -- //
/*
productFib(714) # should return (21, 34, true), 
                # since F(8) = 21, F(9) = 34 and 714 = 21 * 34

productFib(800) # should return (34, 55, false), 
                # since F(8) = 21, F(9) = 34, F(10) = 55 and 21 * 34 < 800 < 34 * 55
-----
productFib(714) # should return [21, 34, true], 
productFib(800) # should return [34, 55, false], 
-----
productFib(714) # should return {21, 34, 1}, 
productFib(800) # should return {34, 55, 0},        
-----
productFib(714) # should return {21, 34, true}, 
productFib(800) # should return {34, 55, false}, 
*/
