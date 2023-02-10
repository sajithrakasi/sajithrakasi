// var age=prompt("enter your age")
//if(age>18)
//document.write("<br>you are an adult")
//else
//document.write("<br>you are a kid")

//let names=['saji','moni','sabari','kavi'];
//console.log(names);
//console.log(names[3])
function display_age()
   {
    var age=prompt("enter your age")
    if(age>18)
    document.write("<br>you are an adult")
    else
    document.write("<br>you are a kid")
   }//function declaration
    display_age(); //function call/invoking tha function
    let names=['saji','moni','sabari','kavi']; //index
    console.log(names);
    console.log(names[3]);
    
function add(a,b)
{
   return(a+b);
}
//document.write('<br>addition is '+add('sajithra','kasi'))
//var a=parseInt(prompt("enter your num1"));
//var b=parseInt(prompt("enter your num2"));
//document.write("<br>addition is "+add(a,b));

//display_age();
    //let name=['saji','moni','sabari','kavi']; //index
    //console.log(names);
    //console.log(names[3]);
    //let nums =['amul','kumar',90,100,1000];
    //console.log(names.concat(nums));
    //console.log(names);//immutable
   //display_age();
    let name=['saji','moni','sabari','kavi']; //index
    console.log(names);
    document.write("<br>names "+names)
    console.log(names[3]);
    document.write("<br>4th element: "+names[3]);
    let nums =['amul','kumar',90,100,1000];
    console.log(names.concat(nums));
    console.log(names);//immutable
nums.fill(10,1,3);
document.write("<br>"+nums[0]);
document.write("1st"+nums[1]);
document.write("2nd"+nums[2]);
document.write("3rd"+nums[3]);
document.write("4th"+nums[4]);

//loops for while loop

for(let i=0; i<nums.length; i++)
{
    document.write("<br>element "+i+" is "+nums[i]);
}

//for each loop

for(let i=0; i<3; i++)
{
    document.write("<br>element "+i+" is "+nums[i])
}
nums.forEach(function display(e) {
document.write("<br>"+e)
});

function disp()
{
    //function body
}
var output=(a,b)=>{
return(a+b);    
}
document.write(output(4,5));
function add(a,b)
{
    return(a+b);
}
//reverse
document.write("reversed "+nums.reverse());
document.write(nums);
nums.filter((f) => {
if(f>=100)
document.write(f);
})
//map
let double_num= nums.map((n) => {
return 2*n;
})
document.write("double "+double_num);
//push
var arr=[12,23,34,45,56];
document.write("shift method "+arr.shift());
arr.push(900);
document.write("after push<br>"+arr);
document.write("<br>after pop"+arr.pop());








