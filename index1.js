// 接口
// TypeScript的核心原则之一是对值所具有的结构进行类型检查。 它有时被称做“鸭式辨型法”或“结构性子类型化”。 在TypeScript里，接口的作用就是为这些类型命名和为你的代码或第三方代码定义契约。
// 接口初探
// 下面通过一个简单示例来观察接口是如何工作的：
function printLabel(labelledObj) {
    console.log(labelledObj.label);
}
var myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
function printLabel1(labelledObj) {
    console.log(labelledObj.label);
}
var myObj1 = { size: 10, label: "Size 10 Object" };
printLabel(myObj1);
function createSquare(config) {
    var newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var mySquare = createSquare({ color: "black" });
function createSquare1(config) {
    var newSquare = { color: "white", area: 100 };
    if (config.color) {
        // Error: Property 'clor' does not exist on type 'SquareConfig'
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var mySquare1 = createSquare({ color: "black" });
// 你可以通过赋值一个对象字面量来构造一个Point。 赋值后， x和y再也不能被改变了。
var p1 = { x: 10, y: 20 };
p1.x = 5; // error!
// TypeScript具有ReadonlyArray<T>类型，它与Array<T>相似，只是把所有可变方法去掉了，因此可以确保数组创建后再也不能被修改：
var a = [1, 2, 3, 4];
var ro = a;
ro[0] = 12; // error!
ro.push(5); // error!
ro.length = 100; // error!
a = ro; // error!
