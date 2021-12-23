/* 
!From Wikipedia:

*"A divisibility rule is a shorthand way of determining whether a given integer is divisible by a
*fixed divisor without performing the division, usually by examining its digits."
*When you divide the successive powers of 10 by 13 you get the following remainders of the integer divisions:
*1, 10, 9, 12, 3, 4 because:

? 10 ^ 0 ->  1 (mod 13)
? 10 ^ 1 -> 10 (mod 13)
? 10 ^ 2 ->  9 (mod 13)
? 10 ^ 3 -> 12 (mod 13)
? 10 ^ 4 ->  3 (mod 13)
? 10 ^ 5 ->  4 (mod 13)


? For example, the expression "5 mod 2" would evaluate to 1, because 5 divided by 2 has a quotient of 2 and a remainder of 1, while "9 mod 3"
? would evaluate to 0, because
? the division of 9 by 3 has a quotient of 3 and a remainder of 0; there is nothing to subtract from 9 after multiplying 3 times 3. 
*/

