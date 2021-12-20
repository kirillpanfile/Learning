export function countBits(n: number): number {
    return n.toString().split('').reduce((sum,num)=> sum + Number(num),0)
}