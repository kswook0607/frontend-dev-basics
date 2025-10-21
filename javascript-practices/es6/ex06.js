console.log("===== [01. class 문법 지원]");

class Rect{
    draw;
}

const rect1 = new Rect(10, 20);
const rect2 = new Rect(100, 200);
rect1.draw();
rect2.draw();

console.log("===== [02] 비교: prototype 기반");
const Circle = functiom(x, y, radius){
    this.x = x;
    this.y = y; 
    this.radius = radius;
}

Circle.prototype.draw = function(){
    console.log
}

const circle = new Circle();
circle.draw();


console.log("===== [03] 상속 지원")



class RextTriangle extends Shape{
    constructor(w, h, fillColor, lineColor){
        super(fillColor, lineColor);

        this.w = w;
        this.h = h;
    }
    //@Overrider
    draw(){
        console.log(RectTriagnle(w=${this.w}, h=${this.h}, fillColor=${this.fillColor}, lineColor=${this.lineColor}))
    }
}

const 
