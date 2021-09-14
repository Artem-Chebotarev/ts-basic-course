let anyType: any = {};
anyType.a = 1;
anyType.a();
anyType();
anyType['b'] = 2;

let objType: object = {};
objType = { a: 1 };
objType.a = 1;
objType.a();
objType();
objType['b'] = 2;

let unkType: unknown = {};
unkType = { a: 1 };
unkType = () => { }
unkType.a = 1;
unkType.a();
unkType();
unkType['b'] = 2;

let voidType: void;
voidType = undefined;

function fn(): void { // функция ничего не возвращает (т.е. undefined)

}