import Axios from "axios";

class NewsApi {

    fetchData = async() => {

        try{
    
            const response = await Axios.get(`https://www.vrt.be/vrtnws/nl/regio/_jcr_content/par/grid.app.json`);
            return response
    
        }catch(error){
            console.error(error);
        }
    }

}

export default NewsApi;