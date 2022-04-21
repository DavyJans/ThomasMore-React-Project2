import React, { useState, useEffect } from "react";
import Axios from "axios";
import _ from "lodash";
import { Row, Col} from 'react-materialize';
import WeatherAPI from '../api/WeatherApi'

const weatherAPI = new WeatherAPI();
const location = 'Geel';

const WeatherReport = () => {

    const[weatherToday, setweatherToday] = useState();

    const fetchData = async() => {


       return weatherAPI.fetchData(location).then((res) => {
         setweatherToday(res);
         
      });

       
    }


    useEffect ( () => {       
        fetchData();
    }, []);

    return (
        <>
        { weatherToday &&
            
                <>
              
                    <h3>Davy</h3>

                    <span>
                        Mijn naam is Davy, ik zit in het 3e jaar van het werktraject en ben ondertussen bijna 37.
                        Ik werk halftijds bij Lubrizol in manufacturing automation en de andere halftijds tracht ik mijn eigen bedrijfs op te starten (smartbyte bv).
                    </span>
          
                    <hr></hr>

                    <h3>App info</h3>

                    <span>
                       React app welke nieuwsberichten laad van de vrt api.
                       Nieuwsberichten kunnen vervolging bekenen worden en aangepast. De aanpassingen worden opgeslagen in localStorage (redux).

                       Afbeeldingen worden via de Azure api opgeslagen op een Azure BLOB storage account, de url wordt opgeslagen op de localStorage bij het object als referentie.

                       Er is ook nog code voorzien om (via de MongoDB api) artikels (bestaande of nieuwe) op te slaan buiten de localStorage maar hievoor moet de flow van de applicatie toch herbekeken worden (het is vreemd een API te gebruiken en dan gegevens op te slaan..)
                       
                    </span>

                    <hr></hr>

                    <h3>Weer voor {weatherToday.name} vandaag:</h3>
    
                    <Row className="valign-wrapper">
                        <Col>
                            <img width={100} src={`http://openweathermap.org/img/w/${weatherToday.weather[0].icon}.png`} alt={`${weatherToday.weather[0].description}`} />
                            <p>{weatherToday.weather[0].description}  </p>
                            <p>Min: {_.round(weatherToday.main.temp_min, 1)} °C</p>
                            <p>Max: {_.round(weatherToday.main.temp_max, 1)} °C</p>           
                        </Col>
                        <Col>
                            <h2>{_.round(weatherToday.main.temp, 1)} °C</h2>
                        </Col>
                       
                       
                    </Row>
                 
                </>
           
        }
        </>
    )
} 

export default WeatherReport