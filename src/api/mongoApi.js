import Axios from "axios";


const config = {
    headers: {
        'Content-Type': 'application/json',
        // 'Access-Control-Request-Headers': '*',
        'api-key': 'a13fk9dCJwmYHA0c76pksT6EucRskkPPjJrs3n9L2K53uJt3Yyw9NlSuJHtdmBZi'
    }
};

class MongoApi {


    SaveArticles = async(documents) => {

        let data = JSON.stringify({
            "collection": "articles",
            "database": "react",
            "dataSource": "SMB",
            "documents":  documents
        });
                    
    
        try{

                        
            const response = await Axios.post('https://data.mongodb-api.com/app/data-bqhat/endpoint/data/beta/action/insertMany', data, config)
            return response
    
        
        }catch(error){
            console.error(error);
        }
    }
    

    SaveSingleArticle = async(document) => {

        let data = JSON.stringify({
            "collection": "articles",
            "database": "react",
            "dataSource": "SMB",
            "document":  document
        });
                
        try{

                        
            const response = await Axios.post('https://data.mongodb-api.com/app/data-bqhat/endpoint/data/beta/action/insertOne', data, config)
            return response
    
        
        }catch(error){
            console.error(error);
        }
    }

    UpdateArticle = async(document) => {

        let data = JSON.stringify({
            "collection": "articles",
            "database": "react",
            "dataSource": "SMB",
            "document":  document
        });
                
        try{

                        
            const response = await Axios.post('https://data.mongodb-api.com/app/data-bqhat/endpoint/data/beta/action/updateOne', data, config)
            return response
    
        
        }catch(error){
            console.error(error);
        }
    }

    GetAllArticles = async() => {

        let data = JSON.stringify({
            "collection": "articles",
            "database": "react",
            "dataSource": "SMB"
        });
                    

        try{

                        
            const response = await Axios.post('https://data.mongodb-api.com/app/data-bqhat/endpoint/data/beta/action/find', data, config)
            return response
    
        
        }catch(error){
            console.error(error);
        }
    }

}

export default MongoApi;