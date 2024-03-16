function identity<T>(arg: T): T{
    return arg;
}

let x: string = identity<string>("yash");
let y: number = identity<number>(1);

console.log(x.toUpperCase());
console.log(y);