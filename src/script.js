var inputval = document.querySelector('#cityinput')
var btn = document.querySelector('#add');
var city = document.querySelector('#cityoutput')
var description = document.querySelector('#description')
var temp = document.querySelector('#temp')
var wind = document.querySelector('#wind')
var errorName = document.getElementById("errorname")

//kelvin to temperature convertion
function convertion(val){
    return (val - 273).toFixed(2)
}

//submit on enter key pressing
var input = document.getElementById("cityinput");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("add").click();
  }
});

//validation
const numberFun = () => {
    var errorMessage = document.getElementById('cityinput').value;
    if(errorMessage.length ==0){
        errorName.innerHTML ="Please enter a city name ";
        errorName.style.color = "red";
    }
    else if(!errorMessage.match("^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$"))  {
        errorName.innerHTML ="enter a valid city name ";
        errorName.style.color = "red";
    }
    else{
        errorName.innerHTML =" ";
        
    }
}


//api connection
apik = "3045dd712ffe6e702e3245525ac7fa38";

btn.addEventListener('click', function(){
                fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputval.value+'&appid='+apik)
                .then(res => res.json())
                .then(data => {
                    
                    city.innerHTML=`Weather of <span>${data.name ? data.name:"Not available"}<span>`
                    temp.innerHTML = `Temperature: <span>${ convertion(data.main.temp ? data.main.temp : "Not available")} C</span>`
                    description.innerHTML = `Sky Conditions: <span>${ data.weather[0].description ? data.weather[0].description : "Not available" }<span>`
                    wind.innerHTML = `Wind Speed: <span>${data.wind.speed ? data.wind.speed:"Not available"} km/h<span>`
                })
                .catch(err => {
                    errorName.innerHTML='You entered Wrong city name'
                   errorName.style.color = "red";   
        
                })
})
       

