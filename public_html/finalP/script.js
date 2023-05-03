




//function for forecast
 
 function getForecast(){
     const url = 'https://weatherapi-com.p.rapidapi.com/forecast.json?q=Pullman%2cWashington&days=7';
    const options = {
    	method: 'GET',
    	headers: {
    		'X-RapidAPI-Key': 'a5ba9f3208mshf48eb9a48688b19p191be7jsnad3638b68e04',
    		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    	}
    };
    
    
    fetch(url, options)
	    .then(response => response.json())
	    .then(function(response){

	        console.log(response);
	        document.querySelector("#lastup").innerHTML = response.current.last_updated;
    	    document.querySelector("#placeholder").innerHTML = response.forecast.forecastday[0].day.avgtemp_f;
    	    document.querySelector("#placetwo").innerHTML = response.forecast.forecastday[1].day.avgtemp_f;
    	    document.querySelector("#placethree").innerHTML = response.forecast.forecastday[2].day.avgtemp_f;
    	    // document.querySelect("#whateveritis").style.display = "none";
    	    
    	    return response; 
	})
	.catch(err => console.error(err));
    

 }







//add some code to wait for the DOM
    document.addEventListener("DOMContentLoaded", function() {
    
  
    
    getForecast();

	
	
	

	
    } );