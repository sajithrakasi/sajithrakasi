// let i=0; //global variable
// for(i=0; i<5; i++)
// {
//     document.write("<br>value of i : "+i);
//     if(i==2)
//     break;
// }
// i=0;
// while(i<5)
// {
//     document.write("<br><b>i is: "+i+"</b>");
// i++;
// }

// do {
//     document.write("inside do-while");
//     i++;
// }
// while(i<5)
class vehicle{
    constructor(){
       this.wheel=2;
       this.brand='honda';
       this.mileage='40kmpl';
       this.color='blue';
    }
    display(){
        document.write("<br>brand is : "+this.brand+" mileage is : "+this.mileage+" wheel is : "+this.wheel+" color is : "+this.color);
    } //member function
}
let scooter= new vehicle(2,'bajaj','30kmpl','black');
scooter.display();
let maruti= new vehicle(4,'maruti alto', '40kmpl', 'red');
maruti.display();
let bike=new vehicle();
bike.display();
console.log(bike.wheel);
let fname = new String('sajithra');
console.log(fname);
//_______***______
class jeep extends vehicle{
    constructor(speed)
    {
       super(); //constructor parent
       this.speed=speed;
    }
    display(){
     super.display();
     document.write("<br>speed is : "+this.speed);
     }
}
// let thar = new vehicle('120kmpl');
// thar.display();

// let bmw = new vehicle('wheel','seats','speed','brand')
// {
//     this.speed='160kmpl';
//     this.brand='bmw';
//     this.seats=4;
//     this.wheel=4;
// }
//         bmw.display()
//        document.write("<br>wheel is :"+this.wheel+"seats is :"+this.seats+"speed is : "+this.speed+" brand is : "+this.brand);
        
try{
    let bmw = new jeep('150kmph','red');
bmw.disp();  //keyword error
}
catch(error)
{
    document.write(error);
}
let thar=new jeep('120kmph');
thar.display();

// let num1=prompt("enter a number");
// let num2=prompt("enter a number");
// document.write(num1/num2);

var person={name:'sajithra',age:21,nation:'india'}; //json
console.log(person);
console.log(person.name);
document.write("<br>"+person);
document.write("age is"+person.age);
document.write(JSON.stringify(person));















