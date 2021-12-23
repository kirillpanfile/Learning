//? Fetch implementation in TypeScript
//! Works only with node-fetch v2.6
//* Simple Fetch

import fetch from "node-fetch";

export async function fetchData(data: RequestInfo) {
    try {
        const get = await fetch(data);
        return get.json();
    } catch (error) {
        console.log(error);
    }
}

//? For understanding how interface works
interface HttpResponse<T> {
    parsedData?: T;
}
export async function getUserAsync<T>(request: RequestInfo): Promise<HttpResponse<T>> {
    const data = await fetch(`https://api.github.com/users/${request}`);
    const response: HttpResponse<T> = await data.json()
    return response
}
getUserAsync('kirillpanfile')


//? For understanding how to work with multiple Promises

const URLS = [
    'https://jsonplaceholder.typicode.com/todos/1',
    'https://jsonplaceholder.typicode.com/todos/1',
    'https://jsonplaceholder.typicode.com/todos/1'
];

export async function getData(array: Array<string>): Promise<any[]> {
    let tmpArray: Array<any> = [];
    for (const element of array) tmpArray.push(await fetch(element))
    const returnPromise: Promise<any[]> = Promise.all(tmpArray);
    return returnPromise;
};

const loadData = async (url?: Response | String | Array<string>) => {
    try {
        let data = await getData(URLS);
        return data.forEach(response => response.json())
    } catch (error) {
        console.error(error);
    }
}

loadData(URLS);