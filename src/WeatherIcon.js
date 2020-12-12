import React from "react";

export default function WeatherIcon(props) {
    const imgCode = {
    "01d": "https://www.flaticon.com/svg/static/icons/svg/153/153809.svg",
    "01n": "https://www.flaticon.com/svg/static/icons/svg/153/153808.svg",
    "02d": "https://www.flaticon.com/svg/static/icons/svg/152/152910.svg",
    "02n": "https://www.flaticon.com/svg/static/icons/svg/153/153800.svg",
    "03d": "https://www.flaticon.com/svg/static/icons/svg/152/152910.svg",
    "03n": "https://www.flaticon.com/svg/static/icons/svg/153/153800.svg",
    "04d": "https://www.flaticon.com/svg/static/icons/svg/153/153799.svg",
    "04n": "https://www.flaticon.com/svg/static/icons/svg/153/153799.svg",
    "09d": "https://www.flaticon.com/svg/static/icons/svg/153/153801.svg",
    "09n": "https://www.flaticon.com/svg/static/icons/svg/153/153801.svg",
    "10d": "https://www.flaticon.com/svg/static/icons/svg/153/153801.svg",
    "10n": "https://www.flaticon.com/svg/static/icons/svg/153/153801.svg",
    "11d": "https://www.flaticon.com/svg/static/icons/svg/153/153801.svg",
    "11n": "https://www.flaticon.com/svg/static/icons/svg/153/153801.svg",
    "13d": "https://www.flaticon.com/svg/static/icons/svg/153/153802.svg",
    "13n": "https://www.flaticon.com/svg/static/icons/svg/153/153802.svg",
    "50d": "https://www.flaticon.com/svg/static/icons/svg/1374/1374485.svg",
    "50n": "https://www.flaticon.com/svg/static/icons/svg/1374/1374485.svg"
      };


      return <img src={imgCode[props.code]} alt="icon" width="64" />;
}