export const likes = (a: string[] | string) => {
    if (a.length == 0 || a) return "no one likes this"
    if (a.length == 1) return `${a[0]} likes this`
    if (a.length == 2) return `${a[0]} and ${a[1]} like this`
    if (a.length < 4) return `${a[0]}, ${a[1]} and ${a[2]} like this`
    if (a.length >= 4) return `${a[0]}, ${a[1]} and ${a.length - 2} others like this`
}
