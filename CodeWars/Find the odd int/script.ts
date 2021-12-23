export const findOdd = (xs: number[]): number => {
    let ans: number = 0;
    xs.map((elem) => {
        let oddCounter: number = 0;
        for (const element in xs) if (elem == xs[element]) oddCounter++
        if ( oddCounter % 2 == 1) ans = elem
    })
  return ans;
};
 
