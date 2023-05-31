const key='at_Chsdwt2Rdns0T4jbboDm97Cieo76C';

const getipAddress = async (ip) =>{
    const base='https://geo.ipify.org/api/v2/country,city,vpn';
    const query=`?apiKey=${key}&ipAddress=${ip}`

    const response= await fetch(base +query);
    const data =await response.json();
    console.log(data);
    return data.ip;
    
}
const getLocation = async (ip) =>{
    const base='https://geo.ipify.org/api/v2/country,city,vpn';
    const query=`?apiKey=${key}&ipAddress=${ip}`

    const response= await fetch(base +query);
    const data =await response.json();
   return data.location.country+","+data.location.region;
    
}
const getTimezone = async (ip) =>{
    const base='https://geo.ipify.org/api/v2/country,city,vpn';
    const query=`?apiKey=${key}&ipAddress=${ip}`

    const response= await fetch(base +query);
    const data =await response.json();
    return data.location.timezone;
    
}
const getisp = async (ip) =>{
    const base='https://geo.ipify.org/api/v2/country,city,vpn';
    const query=`?apiKey=${key}&ipAddress=${ip}`

    const response= await fetch(base +query);
    const data =await response.json();
    return data.isp;
    
}
const getlat = async (ip) =>{
    const base='https://geo.ipify.org/api/v2/country,city,vpn';
    const query=`?apiKey=${key}&ipAddress=${ip}`

    const response= await fetch(base +query);
    const data =await response.json();
    return data.location.lat;
    
}
const getlng = async (ip) =>{
    const base='https://geo.ipify.org/api/v2/country,city,vpn';
    const query=`?apiKey=${key}&ipAddress=${ip}`

    const response= await fetch(base +query);
    const data =await response.json();
    return data.location.lng;
    
}

// getTimezone("192.212.174.101").then(data => 
//     {console.log(data)}).catch(err => {console.log(err)});
