let a = [1, 2, 3].includes(1)


/* let/const**/
let period = 50;
const baseUrl = 'http://example.com';

/* object**/
let firstName = 'Igor';
let account = {
    firstName,

    getName() {
        return this.firstName;
    }
};

/* spread**/
let person = { ...account };
let dates = [...[11, 12, 13]];

/* деструктивное присваивание**/
let { firstName: myName } = person;
let [firstDate] = dates;

/* шаблонные строки**/

// тэговая функция
function userMessage([start, end]: TemplateStringsArray, { firstName: name }: typeof person): string {
    return `${start}${name}${end}`;
}
console.log(userMessage`Good Day, ${person} !!`)

/* for of**/

for (const date of dates) {
    console.log(date);
}

/* arrow**/
const sum = (a: number, b: number) => a + b;

/* Class**/
class Point {
    public x = 10;

    sum() {
        return this.x;
    }
}

/* optional chaining**/
const user: any = {};
let x = user?.info?.baz();

/* ??**/
let admin;
let p = admin ?? user;