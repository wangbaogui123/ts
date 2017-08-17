//基础类型
let str: string = "adc";
let num: number = 123;
let isok: boolean = false;
let any: any = false;
let color: number = 0xf00d;
let tpl: string = "i am"+str+"";

// 数组
let arr1 : number[] = [1,1,1,1,1,1];
let arr2 : Array <number> = [1,1,1,1,1,2,3];

// 元组
let arr3:[string,number]
    arr3 = ["ABC",123,21223,"ASDF"]

// 枚举
enum Color {Red=0, Green=2, Blue}

let green = Color.Green

console.log(green);

// Any 
let dono : any = "123";
    dono = 124
    dono = false

// void
let unusable: void = undefined

// null undefined
let n :null = null
let u :undefined = undefined

// 类型断言
// 类型断言有两种形式。 其一是“尖括号”语法：

let someValue1: any = "this is a string";
let strLength1: number = (<string>someValue1).length;

// 另一个为as语法：
let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;
