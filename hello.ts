function sayHello(person: string) {
    if(typeof person==='string') {
        return 'Hello' + person
    } else {
        throw new Error('person is not a string')
    }
}

function alertName(): void {
    alert('My name is Tom');
}

let user = "Tome";
let isDone: Boolean = new Boolean(1);
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
// ES6 中的二进制表示法
let binaryLiteral: number = 0b1010;
// ES6 中的八进制表示法
let octalLiteral: number = 0o744;
let notANumber: number = NaN;
let infinityNumber: number = Infinity;
console.log(sayHello(user))
console.log(isDone)

let myName: string = 'Tom';
let myAge: number = 25;

// 模板字符串
let sentence: string = `Hello, my name is ${myName}.I'll be ${myAge + 1} years old next month.`;

let myfavoriteNumber: string | number | boolean;
myfavoriteNumber = "seven"
myfavoriteNumber = 7;
myfavoriteNumber = true;

interface Person {
    readonly name: string;
    age: number;
    [propName: string]: any;
}

let tom: Person = {
    name: 'Tom',
    age: 25,
    gender: 'male'
};

let steven: Person = {
    name: 'steven',
    age: 38,
    gender: 'male'
};
console.log(tom)

interface NumberArray {
    [index: number]: number;
}