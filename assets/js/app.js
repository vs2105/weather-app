


 const ApiKey = "f4f2e5f56ce9ebae957f81514560f3ca";
 const Apiurl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

 const searchbox=document.querySelector('.search input')
 const searchBtn=document.querySelector('.search button')
 const weathericon=document.querySelector('.weather-icon')

  async function checkWeather(city){
     const response = await fetch(Apiurl + city + `&appId=${ApiKey}`)
     if(response.status === 404){
         document.querySelector('.error').style.display="block";
         document.querySelector('.weather').style.display="none";
     }else{
      var data=await response.json()
      console.log(data)

       document.querySelector(".city").innerHTML= data.name;
       document.querySelector(".temp").innerHTML= Math.round(data.main.temp) + "°C";
       document.querySelector(".humidity").innerHTML= data.main.humidity + "%";  
       document.querySelector('.wind').innerHTML= data.wind.speed + "km/h"


      //  switch (data.weather[0].main) {
      //    case Clouds:
      //       weathericon.src='assets/image/clouds.png';
      //       break
      //    case Clear:
      //       weathericon.src='assets/image/clear.png';
      //       break
      //    case Rain:
      //       weathericon.src='assets/image/rain.png';
      //       break
      //    case Drizzle:
      //       weathericon.src='assets/image/drizzle.png';
      //       break
      //    case Mist:
      //       weathericon.src='assets/image/mist.png'
      //       break
      //  }

    if(data.weather[0].main === 'Clouds'){
       weathericon.src='assets/image/clouds.png';
    }
    else if(data.weather[0].main === 'Clear'){
       weathericon.src='assets/image/clear.png';
    }
    else if(data.weather[0].main === 'Rain'){
       weathericon.src='assets/image/rain.png';
    }
    else if(data.weather[0].main === 'Drizzle'){
       weathericon.src='assets/image/drizzle.png';
    }
    else if(data.weather[0].main === 'Mist'){
       weathericon.src='assets/image/mist.png'
    }

    document.querySelector('.weather').style.display="block";
    document.querySelector('.error').style.display="none";
     }
       
     }
    
    
  

  searchBtn.addEventListener('click',()=>{
    checkWeather(searchbox.value)
  })
    
  
  
