 // javascript for Final Project 
 
 
 
 //Function for Current Weather 
 
 function getWeather() {
     //code to load API 
    const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a5ba9f3208mshf48eb9a48688b19p191be7jsnad3638b68e04',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

    fetch('https://weatherapi-com.p.rapidapi.com/current.json?q=Pullman%2C%20Washington', options)
	    .then(response => response.json())
	    .then(function(response){
	        document.querySelector("#time span").innerHTML = response.location.localtime; 
    	    document.querySelector("#tempF span").innerHTML = response.current.temp_f;
    	    document.querySelector("#tempC span").innerHTML = response.current.temp_c;
    	    return response; 
	})
	.catch(err => console.error(err));
    

// HUMIDITY 


   const humidity = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a5ba9f3208mshf48eb9a48688b19p191be7jsnad3638b68e04',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

    fetch('https://weatherapi-com.p.rapidapi.com/current.json?q=Pullman%2C%20Washington', humidity)
	    .then(response => response.json())
	    .then(function(response){
	     document.querySelector("#humidity span").innerHTML = response.current.humidity;
	     return response; 
	})
	.catch(err => console.error(err));
	
	
// WIND 
	
	const wind = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a5ba9f3208mshf48eb9a48688b19p191be7jsnad3638b68e04',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

    fetch('https://weatherapi-com.p.rapidapi.com/current.json?q=Pullman%2C%20Washington', wind)
	    .then(response => response.json())
	    .then(function(response){
	    document.querySelector("#wind span").innerHTML = response.current.wind_mph;
	    return response;
	})
	.catch(err => console.error(err));
	
	
// Temp Feels Like 

const feels = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a5ba9f3208mshf48eb9a48688b19p191be7jsnad3638b68e04',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

fetch('https://weatherapi-com.p.rapidapi.com/current.json?q=Pullman%2C%20Washington', feels)
	.then(response => response.json())
	.then(function(response){
	    document.querySelector("#feelslike span").innerHTML = response.current.feelslike_f;
	    return response; 
	    })
	.catch(err => console.error(err));
	
// Clouds 
const clouds = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a5ba9f3208mshf48eb9a48688b19p191be7jsnad3638b68e04',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

fetch('https://weatherapi-com.p.rapidapi.com/current.json?q=Pullman%2C%20Washington', clouds)
	.then(response => response.json())
	.then(function(response){
	    document.querySelector("#clouds span").innerHTML = response.current.cloud;
	    return response;
	})
	.catch(err => console.error(err));


// Wind Direction 

	const direction = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a5ba9f3208mshf48eb9a48688b19p191be7jsnad3638b68e04',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

fetch('https://weatherapi-com.p.rapidapi.com/current.json?q=Pullman%2C%20Washington', direction)
	.then(response => response.json())
	.then(function(response){
	    document.querySelector("#direction span").innerHTML = response.current.wind_dir;
	    return response;
	})
	.catch(err => console.error(err));
     
     
     
     
     
     const uv = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a5ba9f3208mshf48eb9a48688b19p191be7jsnad3638b68e04',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

fetch('https://weatherapi-com.p.rapidapi.com/current.json?q=Pullman%2C%20Washington', direction)
	.then(response => response.json())
	.then(function(response){
	    document.querySelector("#uv span").innerHTML = response.current.uv;
	    return response;
	})
	.catch(err => console.error(err));
     
     
     
 }
 
// Change Image based on time
    
    
    
function changeImage(){
    var early = document.querySelector(url= "dark.jpg");
        if (time < 13) {
            document.querySelector( url= "dark.jpg"); {
                if (time > 20) { 
                    document.querySelector("pic.jpg");
            }    }}}
 

//add some code to wait for the DOM
    document.addEventListener("DOMContentLoaded", function() {
    
    getWeather();
    

	
	
    } );
    
    // Attemped to get the picture to change based on time
    var current = new Date();
    var day_night=current.getHour();
    
    if (day_night<=16)
        document.querySelector("<img src='pic.jpg'>");
    else
        document.querySelector("<img src='dark.jpg'>");
    
    
    