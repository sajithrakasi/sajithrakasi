let g=0; //global variable
function increment()
{
    g+=2;
    console.log("g is :"+g);
    //let f=1; //local variable
    //f++;
    //console.log("value of f : "+f);
}
increment();
increment();
g++; //f++;
console.log("updated value: "+g);
//console.log("updated value: "+f);

sum =a+b;
console.log(sum);
var a=9, b=10, sum; //nan, undefined,infinity

var c,d,sub; //declaration 
c=10, d=10; //initialization
sub=c+d;
c=90, d=9;
console.log(sub);

//self invoking function-recursion

// function multiply()
// {
//     let b=1, i=1;
//     b*=5;
//     console.log(b);
//     while(i<=2){
//         multiply();
//         i++;
//     } //recursion exceed
// }
// multiply();

//factorial of a number 5!=5*4*3*2*1

function factorial(num)
{
    //num * num-1 * num-2
    let fact=1;
    for(let i=num; i>0; i--)
    {
        if(i==1)
        return fact;
        else
        {
          fact= i * factorial(i-1);
          return fact;
        }
    }
}
console.log("factorial is: "+factorial(3));
/* fact=fact(5)*fact(4)
    5*fact(4)
       4*fact(3)
         3*fact(2)
           2*fact(1)
fact(1) */

































