export class G964 {
    public static sqInRect(l: number, w: number) {
        if (l === w) return null;
        let arr: number[] = []
        while (l > 0 && w > 0) {
            arr.push(l > w ? w : l); l > w ? l -= w : w -= l;
        }
        return arr
    }
}
