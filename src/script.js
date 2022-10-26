var inputval = document.querySelector('#cityinput')
var btn = document.querySelector('#add');
var city = document.querySelector('#cityoutput')
var descrip = document.querySelector('#description')
var temp = document.querySelector('#temp')
var wind = document.querySelector('#wind')

apik = "3045dd712ffe6e702e3245525ac7fa38"


function convertion(val){
    return (val - 273).toFixed(2)
}
    btn.addEventListener('click', function(){
        fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputval.value+'&appid='+apik)
        .then(res => res.json())


        .then(data => {
            var nameval = data['name']
            var description = data['weather']['0']['description']
            var temperature = data['main']['temp']
            var windspeed = data['wind']['speed']
            city.innerHTML=`Weather of <span>${nameval}<span>`
            temp.innerHTML = `Temperature: <span>${ convertion(temperature)} C</span>`
            description.innerHTML = `Sky Conditions: <span>${description}<span>`
            wind.innerHTML = `Wind Speed: <span>${windspeed} km/h<span>`

        })

        
        .catch(err => alert('You entered Wrong city name'))
    })
