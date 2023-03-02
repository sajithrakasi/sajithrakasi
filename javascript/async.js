function count(){
    let count=0;
    document.write("page not found");
}
count();
/* setTimeout(count, 3000);

setInterval(count, 5000); */

let new_promise= new Promise(function(resolve,reject){
//code that takes time to produce the result
for(let i=0; i<5; i++)
console.log(i);
if(i==5)
resolve(document.write("success"))
else
reject(document.write("rejected"))
});   //promise defined

new_promise.then(() => {console.log("success")})
.catch(() => { console.log("error")})
.finally(()=>{console.log("inside finally block")})

function temp(){
 let api_key='641d8a6132c2f05d70e36e04bdf9f063';
let city=document.getElementById('coimbatore').innerText;
 fetch('http://api.openweathermap.org/data/2.5/weather?q=coimbatore'+'&appid='+api_key)
.then(res => res.json())
 //.then(response => console.log(response)) /*promise */
 //.then(q => console.log(q))
.then(q => document.write("temperature of coimbatore "+q.main.temp))
}


























