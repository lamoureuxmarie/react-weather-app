import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
    return(
        <div className="WeatherInfo">

 <h1 className="city">{props.data.city}</h1>        
 <div className="description text-capitalize">{props.data.description}</div>

<div className="row">
<div className="col-6">
<WeatherTemperature celsius={props.data.temperature} />
</div>
<div className="img col-6">
<WeatherIcon code={props.data.icon} alt={props.data.description} />
</div>
</div>


<div className="row">
<div className="col-6">
<ul>
<li><i class="fas fa-water"></i> {Math.round(props.data.humidity)}%</li>
    <li> <i class="fas fa-wind"></i> {Math.round(props.data.wind)} km/h</li>
</ul> 
</div>
<div className="date col-6"><FormattedDate date={props.data.date} /></div>
</div> 
        </div>
    );
}