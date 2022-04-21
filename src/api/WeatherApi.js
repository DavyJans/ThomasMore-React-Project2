
import Axios from "axios";

class WeatherAPI {

    fetchData = async(location) => {

        try{
    
            const response = await Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=6f88c1c95b9f2603d2eba89fbd397895&units=metric&lang=nl`);
            return response.data;
    
        }catch(error){
            console.error(error);
        }

       
    }

}

export default WeatherAPI;

