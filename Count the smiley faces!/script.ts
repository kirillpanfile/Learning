export function countSmileys(arr: string[]) {
    return arr.filter((elem) => /[:;]{1}[-~]?[)D]{1}/.test(elem)).length
}
