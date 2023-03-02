var number=0;
var new_p=new Promise((resolve,reject)=> {
//generate a result
number=prompt("enter a value")
if(number>18)
resolve('user is an adult')
else
reject('under 18')
})
console.log(new_p);
new_p.then(()=> {console.log("success");})
.then(()=>{console.log("succeded again");})
.catch((error)=>{console.log("failed")})



































