// declaring interface
interface Person {
    name: string;
    age: number;
}
// instantiating an object
let ahmad: Person = {"name": "Ahmad", "age": 100};

console.log("ahmad :  " + ahmad);
console.log("ahmad :  " + JSON.stringify(ahmad));
