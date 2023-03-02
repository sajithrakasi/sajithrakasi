let input_city=document.getElementById('cityinput');
let input_btn=document.getElementById('btn');
let output_city=document.getElementById('city');
let output_temp=document.getElementById('temperature');
let output_desc=document.getElementById('describe');
let od_key="3d779d15e10c1654603fedadfce9eedd";

function convert(value){
    let t=(value-32)/1.8;
    return t;
}

input_btn.addEventListener('click',() => {
    //display the temperatures of a city
   fetch('http://api.openweathermap.org/data/2.5/weather?q='+input_city.value+'&appid='+od_key+'&units=metric')
    .then(response => response.json())
    .then(data => {
    console.log(data);
    output_city.innerHTML='city: '+data.name;
    output_temp.innerHTML='temperature: '+data.main.temp+' celcius';
    output_desc.innerHTML='description: '+data.weather[0].description;



})
.catch(error=>console.log('there is an error'+error) )
})














