let weather = {
    "apikey": "3311957676b5848e88c3c8f1778f6aea",
    fetchWeather: function(city){
        fetch("https://api.openweathermap.org/data/2.5/weather?q="
        + city 
        + "&units=metric&appid="
        + this.apikey
    )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },

    displayWeather: function(data){
        const {name} = data;
        const {icon, description} = data.weather[0];
        const {temp, pressure, humidity} = data.main;
        const {speed} = data.wind;
        console.log(name, icon, description, temp, humidity, speed);

        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png"; 
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".description").innerText = description;
        document.querySelector(".Pressure").innerText ="Pressure: " + pressure + " hPa";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + " %";
        document.querySelector(".wind").innerText = "Wind Speed: " + speed + " m/s";
    },

    search: function(){
        this.fetchWeather(document.querySelector(".search-bar").value);
    },

};


document.querySelector(".search button").addEventListener("click", function (){
    weather.search();
});


document.querySelector(".search-bar").addEventListener('keypress', (event)=>{
    
    if(event.keyCode === 13) {
      weather.search();
    }
});