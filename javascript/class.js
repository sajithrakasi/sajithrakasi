class desktop{
    constructor(monitor, brand, cpu){
        this.monitor = monitor; this.brand='Nokia'; this.cpu='cpu';
    }
    display(){
        console.log("desktop brand is: "+this.brand);
    }
}

class laptop extends desktop{
 constructor(color){
    super();
this.color='red';    
}
display(){
super.display()
console.log("<br> laptop color is: "+this.color);
}
}
class mobile extends laptop{
 constructor(camera){
    super();
this.camera='1980pxl';    
}
display(){
super.display()
console.log("<br> camera is: "+this.camera);
}
}
let value=new mobile();

value.display();





















