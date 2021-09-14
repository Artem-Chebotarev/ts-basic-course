const user: {
    readonly firstName: string;
    age?: number; // необзятельные поля
} = {
    firstName: 'Igor',
    age: 34,
};

user.firstName = 'Andrew';
user.age = 32;

let keys: keyof typeof user = 1;
let value: (typeof user)['firstName'] = 1;

let hashMap: { [id: string]: typeof user } = {
    'adsadas312321dsadas': user, // хэш - ключ
    'dasdas23213dsadsdas': user,
    'dasdasdsa312312dsadas': user,
}

hashMap['adsadas312321dsadas'];

// массивы
let arr: readonly number[] = [1, 2, 3, 4];
arr[100] = 12;
arr.push(12);

let tupleArr: readonly [string, number] = ['name', 1];


let str = 'const string' as const;
let a: typeof str = 'dsadsa';

let arr1 = [1, 2, 3, 4] as const;

arr.push(10); //нельзя

let user5: object = {
    firstName: 'Igor',
    age: 34,
} as const;

user5.age = 33; //нельзя
