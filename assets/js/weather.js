import { weather_data } from './data.js';
document.addEventListener("DOMContentLoaded", (event) => 
{
    let [Ciudades,...Others]=weather_data;
    let sel=document.getElementById("dropdownMenuButton");
    let html="";
    html="<option value='' selected disabled hidden>Seleccione una ciudad</option>";
    for(let ciudad of weather_data)
    {
        let elemento=`<option class="dropdown-item" value="${ciudad.city}">${ciudad.city}</option>`;
        html=html+elemento;
    }
    sel.innerHTML=html;
    loadDayForecastData(Ciudades);
    let element = document.getElementById('loadinfo');
    element.onclick = (event) => 
    {
        let sel=document.getElementById("dropdownMenuButton");
        for(let c of weather_data)
        {
            if(c.city==sel.value)
            {
                loadWeekForecastData(c);
            }
        }
    };

    sel.addEventListener('change', (event) => {
        let selectedValue = event.target.value;
        Mostrar(selectedValue);
    });    
});
function Mostrar(Ciudad)
{
    for(let c of weather_data)
    {
        if(c.city==Ciudad)
        {
            loadDayForecastData(c);
        }
    }
}

let loadDayForecastData = (Ciudad) => 
{
	document.getElementById("city").innerHTML=Ciudad.city;
	document.getElementById("date").innerHTML=Ciudad.date;
	document.getElementById("maxtemperature").innerHTML=Ciudad.maxtemperature;
	document.getElementById("mintemperature").innerHTML=Ciudad.mintemperature;
	document.getElementById("cloudiness").innerHTML=Ciudad.cloudiness;
	document.getElementById("wind").innerHTML=Ciudad.wind;
	document.getElementById("wind").innerHTML=Ciudad.wind;
	document.getElementById("rainfall").innerHTML=Ciudad.rainfall;

    let [dia,noche]=Ciudad.forecast_today;
	document.getElementById("late_icon").innerHTML=dia.icon;
	document.getElementById("late_temperature").innerHTML=dia.temperature;
	document.getElementById("late_text").innerHTML=dia.text;
	document.getElementById("late_forecast").innerHTML=dia.forecast;

	document.getElementById("night_icon").innerHTML=noche.icon;
	document.getElementById("night_temperature").innerHTML=noche.temperature;
	document.getElementById("night_text").innerHTML=noche.text;
	document.getElementById("night_forecast").innerHTML=noche.forecast;
    
}

let loadWeekForecastData = (Ciudad) => 
{
    let el=document.getElementsByClassName("list-group")
    let DaysHtml="";
    for(let day of Ciudad.forecast_week)
    {
        let _html=`<li class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
        <div class="d-flex flex-column">
          <h6 class="mb-1 text-dark font-weight-bold text-sm">${day.text}</h6>
          <span class="text-xs">${day.date}</span>
        </div>
        <div class="d-flex align-items-center ">
          <span class="font-weight-bold text-dark mx-2">${day.temperature.max}</span> | <span class="text-dark mx-2">${day.temperature.min}</span>
          <div class="ms-4"><i class="material-icons fs-2 me-1 rainy">${day.icon}</i></div>
        </div>
      </li>`
      DaysHtml=DaysHtml+_html;
    }
    el[0].innerHTML=DaysHtml;
}


