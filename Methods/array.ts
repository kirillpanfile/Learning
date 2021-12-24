//! This is a file for learning array/string methods in Typescript

interface data { name?: string, price?: number }
function equalsItem(a: data): (b: data) => boolean {
    return b => a.name === b.name && a.price === b.price;
}

const items: Array<data> = [
    { name: 'Bike', price: 100 },
    { name: 'TV', price: 200 },
    { name: 'Album', price: 10 },
    { name: 'Book', price: 5 },
    { name: 'Phone', price: 500 },
    { name: 'Computer', price: 1000 },
    { name: 'Keyboard', price: 25 }
]

//? Filter method
const filterItems: Array<data> = items.filter(item => item.price < 100)
console.log(filterItems);

//? Find method

const findItem: Array<data> = items.filter(item => item.name == 'Album')
console.log(findItem);

//? ForEach Method

items.forEach(item => {
    console.log(item);
})

//? Some method
//* checks if anything in array return true | false and returns this value 

const hasInexpensiveItems: boolean = items.some((item) => {
    return item.price <= 0
})
console.log(hasInexpensiveItems);

//? Every method
//* checks if entire array returns true | false and returns this value 

const hasExpensiveItem: boolean = items.every((item) => {
    return item.price > 0
})

console.log(hasExpensiveItem);

//? Reduce method


const total = items.reduce((currentTotal, item) => {
    return item.price + currentTotal;
}, 0)

console.log(total);


let doc: data = {
    name: 'TV',
    price: 200
};
const include = items.findIndex(equalsItem(doc)) >= 0;
console.log(include);

