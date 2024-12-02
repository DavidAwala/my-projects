const weatherform=document.querySelector(".weatherform");
const cityin=document.querySelector(".cityin");
const card =document.querySelector(".card");
const apikey="dde6052e1be57a086886c8300b60414d";


weatherform.addEventListener("submit",async event=>{
    event.preventDefault();

    const city = cityin.value;

if (city) {
    try{
        const weathedata= await weatherdata(city);
        displayWI(weathedata)
    }
    catch(error){
        console.error(error);
        displayerror(error)
    }
} 
else {
    displayerror("please enter a city")
}
});

async function weatherdata(city) {
    const apiurl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`
    const response = await fetch(apiurl);
    if (!response.ok) {
        throw new Error("could not fetch weather data")
    } 
        return await response.json();
    
}

function displayWI(data) {
    const {name: city,
         main: {temp, humidity}
         ,weather: [{description, id}]}=data;

    card.textContent="";
    card.style.display="flex";

    const citydis=document.createElement("h1")
    const tempdis=document.createElement("p")
    const humi=document.createElement("p")
    const disc=document.createElement("p")
    const emoji=document.createElement("p")

    citydis.classList.add("citydis")
    tempdis.classList.add("temp")
    humi.classList.add("humi")
    disc.classList.add("des")
    emoji.classList.add("emoji")



    tempdis.textContent=`${temp}°k`
    humi.textContent=`humidity: ${humidity}%`
    disc.textContent=description
    emoji.textContent=GWemoji(id)
    citydis.textContent=city;

    card.appendChild(citydis)
    card.appendChild(tempdis)
    card.appendChild(humi)
    card.appendChild(disc)
    card.appendChild(emoji)
}
function GWemoji(wid) {
    switch (true) {
        case (wid >= 200 && wid < 300):
            return "⛈";
              case (wid >= 300 && wid < 400):
            return "🌧";
              case (wid >= 500 && wid < 600):
            return "🌨"
              case (wid >= 600 && wid < 700):
            return "❄";
              case (wid >= 700 && wid < 800):
            return "🌫🌥";
              case (wid === 800 ):
            return "☀";
              case (wid >= 801 && wid < 810):
            return "☁";
    
        default:
            return "UW";
        
    }
}
function displayerror(message) {
    const diser = document.createElement("p");
    diser.textContent=message;
    diser.classList.add("error");

    card.textContent="";
    card.style.display="flex";
    card.appendChild(diser);
}
