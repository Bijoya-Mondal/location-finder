import { useState,useEffect } from "react"
import "./style.css"

function IndexPopup() {

  //Fetching user's IP
  let ip_add;
  var http = require('http');

  
http.get({'host': 'api.ipify.org', 'port': 80, 'path': '/'}, function(resp) {
  resp.on('data', function(ip) {
    ip_add = ip;
    console.log("My public IP address is: " + ip_add);
  });
});

  const [city, setCity] = useState ('');
  const [country, setCountry] =useState('');

  //To simulate loading
  const [isLoading, setIsLoading] = useState(false);
    const [showMessage, setShowMessage] = useState(false);

    const handleClick = () => {

      //fetching country and city
      fetch(`https://ipinfo.io/${ip_add}/json?token=${process.env.PLASMO_PUBLIC_TOKEN}`).then(
        (response) => response.json()
      ).then(
        (jsonResponse) => {setCity(jsonResponse.city); setCountry(jsonResponse.country);
          console.log(process.env.REACT_APP_TOKEN);
          console.log('Your country is ' + jsonResponse.country +' and city is ' +jsonResponse.city, jsonResponse.city)}
      ).catch(
        error => console.error('Error fetching data:', error)
      )
      
        setIsLoading(true);
        setShowMessage(false);

        setTimeout(() => {
            setIsLoading(false);
            setShowMessage(true);
        }, 2000);
    };

  return (
    <div className="bg-primary w-[500px] h-[500px] flex flex-col items-center">
      <div className="text-white h-20 relative top-28 text-2xl font-bold">
        {showMessage && (
            <p>Your country is {country} <br/>and city is {city}</p>      
        )}
        </div>
    <button
      type="button"
      className="bg-secondary text-black relative top-[120px] px-5 py-8 w-80 font-bold text-3xl"
      onClick={handleClick}
      disabled={isLoading}>
      {isLoading ? 'Loading...' : 'Show my location'}
    </button>
    
    </div>
  )
}

export default IndexPopup
