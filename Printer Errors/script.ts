export class G964 {
    public static printerError(s: string): string {
        let invalid: number = 0;
        s.split('').forEach((element) => {if (element > "m") invalid++})
    return `${invalid}/${s.length}`
    }
}