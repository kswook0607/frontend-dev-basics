console.log("====== [01] 기본 타입, primitive type");
var u;
var i = 10; 
var s = "hello";
var b = true;


console.log("u:" + typeof(u) + ":" + u);
console.log("i:" + typeof(i)+ ":" + i);
console.log("s:" + typeof(s)+ ":" + s);
console.log("b:" + typeof(b)+ ":" + b);

console.log("===== [02] 객체 타입, object type");
var i = new Number(10);
var s = new String("hello world");
var b = new Boolean("hello world");
var o = {};
var a = [];
var n = null;

a.forEach(); // new Array().forEach()

console.log("u:" + typeof(i) + ":" + i);
console.log("i:" + typeof(s)+ ":" + s);
console.log("s:" + typeof(b)+ ":" + b);
console.log("b:" + typeof(o)+ ":" + o);
console.log("u:" + typeof(a) + ":" + a);
console.log("i:" + typeof(n)+ ":" + n);

console.log("===== [02. 02] 객체 타입, function");
var f1 = function() {
}

function f2(){
}

var f3 = new Function();

console.log("f1:" + typeof(f1));
console.log("f2:" + typeof(f2));
console.log("f3:" + typeof(f3));

console.log("====== [03] 기본 타입과 유사객체");
var b1 = true;                // new Boolean(true)  x
var b2 = new Boolean(true);

console.log(b1.valueOf());    // new Boolean(b1).valueof()  o
console.log(b2.valueOf());
