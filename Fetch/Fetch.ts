//? Fetch implementation in TypeScript
//* For understanding how interface works


import fetch from "node-fetch";

interface HttpResponse<T> {
    parsedData?: T;
}

export async function getUserAsync<T>(request: RequestInfo): Promise<HttpResponse<T>> {
    const data = await fetch(`https://api.github.com/users/${request}`);
    const response: HttpResponse<T> = await data.json()
    return response
}
getUserAsync('kirillpanfile');

