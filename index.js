//基础类型
var str = "adc";
var num = 123;
var isok = false;
var any = false;
var color = 0xf00d;
var tpl = "i am" + str + "";
// 数组
var arr1 = [1, 1, 1, 1, 1, 1];
var arr2 = [1, 1, 1, 1, 1, 2, 3];
// 元组
var arr3;
arr3 = ["ABC", 123, 21223, "ASDF"];
// 枚举
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
var green = Color.Green;
console.log(green);
// Any 
var dono = "123";
dono = 124;
dono = false;
// void
var unusable = undefined;
// null undefined
var n = null;
var u = undefined;
// 类型断言
// 类型断言有两种形式。 其一是“尖括号”语法：
var someValue1 = "this is a string";
var strLength1 = someValue1.length;
// 另一个为as语法：
var someValue = "this is a string";
var strLength = someValue.length;
