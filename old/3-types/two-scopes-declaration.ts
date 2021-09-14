// virtual - real

interface UserAccount {
    name: string;
    age: number;
}

let person: UserAccount = UserAccount;

let userAccount = {
    name: 'Artem',
    age: 30,
}

let person2: typeof userAccount = {
    name: 'Andrew',
    age: 21,
};

class Point {
    public x = 10;
}

let p: Point = new Point;


let num: string;

num = 'sd';