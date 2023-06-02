
const locForm= document.querySelector("form");
const ipadd= document.querySelector(".ipadd");
const locationn= document.querySelector(".locationn");
const timezone= document.querySelector(".timezone");
const isp= document.querySelector(".isp");
const widthloc= document.querySelector(".location-values");
const maploc= document.querySelector("#map");


// const mymap = L.map('map').setView([51.505, -0.09], 13);
// const tileUrl= 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
// const attribution= 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors';
// const tiles=L.tileLayer(tileUrl,{attribution});
// tiles.addTo(mymap);

// var map = L.map('map').setView([51.505, -0.09], 33);

// L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
//     maxZoom: 18,
//   }).addTo(map);

//   // Add a marker to the map
//   var marker = L.marker([51.5, -0.09]).addTo(map);



const updateUI =(data) =>{
    console.log(data);
    const {ipaddress,iplocation,
        ipisp,
        iptime,lat,lng} = data;

        ipadd.innerHTML=`${ipaddress}`;
        locationn.innerHTML=`${iplocation}`;
        timezone.innerHTML=`UTC${iptime}`;
        isp.innerHTML=`${ipisp}`;
        console.log(lat);
        console.log(lng)
        const lattitude = parseFloat(lat);
        const longitude = parseFloat(lng);

        widthloc.style.width='90%';

        var map = L.map('map').setView([lat,lng], 33);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
    maxZoom: 18,
    }).addTo(map);

   // Add a marker to the map
    var marker = L.marker([lat,lng]).addTo(map);

       





    
}

const updateLoc =async (loc) =>{
    const ipaddress= await getipAddress(loc);
    const iplocation = await getLocation(loc);
    const iptime =await getTimezone(loc);
    const ipisp=await getisp(loc);
    const lat= await getlat(loc);
    const lng =await getlng(loc);

    return{
        ipaddress,
        iplocation,
        ipisp,
        iptime, lat,lng
    }
}

locForm.addEventListener('submit',e=>{
    e.preventDefault();
    const loc=locForm.loc.value.trim();
    locForm.reset();

    console.log(loc);

    updateLoc(loc)
    .then(data=>{
        updateUI(data);
    }).catch(err=>console.log(err));
    
})