import axios from "axios";
// 'https://api.themoviedb.org/3/tv/popular?language=en-US&page=1' 
//0a8749c8e2427fa75ce8e53a655c3610

export class TVshowAPI{

    static async fetchPopulars(){
   const response = await.axios.get("url")
   return response.data.results;
    }
}