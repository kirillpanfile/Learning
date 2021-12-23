export function sumPairs(array: number[], sum: number): number[] | void {  
  let nums: Array<number> = [];
      for(let x in array){
        for(let y in array){
          if (array[x] + array[y] === sum){
          	nums.push(array[x], array[y])
       	  }
      	}
      }  	
   return nums
}