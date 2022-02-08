const ex = num => {
    let len = [...num + ''].length - 1, ans = ''
    let arr = [...num + ''].map(el => el * Math.pow(10, len--)).forEach(el => el ? ans = ans + el + " + " : "")
    return ans.slice(0, -3)
}

console.log(ex(70304))