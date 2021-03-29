class Shape {
    constructor(x,y){
        this.x = x;
        this.y = y;
    }

    display(){
        fill('blue');
        circle(x,y,35);
        fill('red');
        circle(x,y,25);
        fill('yellow');
        circle(x,y,15);
    }
}