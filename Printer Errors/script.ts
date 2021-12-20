export class G964 {
    public static printerError(s: string): string {
        let invalid: number = 0;
        s.split('').forEach((element) => {
            if (element > "m") 
                invalid++     
    })
    console.log();
    return `${invalid}/${s.length}`
    }
}

console.log(G964.printerError("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"));
