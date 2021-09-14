type snb = string | number | boolean;

type acc = {
    name: string;
    age: number;
}

let user: acc;

// Object/Function

interface IPoint {
    x: number;
    y: number;
}

type TPoint = {
    x: number;
    y: number;
}

let p1: IPoint = {
    x: 1,
    y: 1,
}

let p2: TPoint = {
    x: 2,
    y: 2,
}

interface ISetPoint {
    new(x: number, y: number): void;
}

type TSetPoint = new (x: number, y: number) => void;

// Extend
type PartialPoint = {
    x: number;
}

interface IPartialPoint {
    y: number; 
}

// type Point = PartialPoint & { y: number };
// type Point = PartialPoint & IPartialPoint;
interface Point extends PartialPoint, IPartialPoint {

}

let user66: Point = {
    x: 90,
    y: 10,
}

// implements

class BasePoint implements PartialPoint, IPartialPoint {
    public x: number = 10;
    public y: number = 10;
}

interface TAccount {
    name: string;
}

interface TAccount {
    age: number;
}
