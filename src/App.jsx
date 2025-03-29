import { useEffect, useState } from "react";
import {TVShowAPI} from "./api/tv-show"
import s from "./style.module.css"
import { BACKDROP_BASE_URL } from "./config";


export function App() {
   const [currentTvShow, setCurrentTvShow]= useState();
   async function fetchPopulars(){
    const popularTVShowList= await TVShowAPI.fetchPopulars();
    if(popularTVShowList.length > 0) {
    setCurrentTvShow(popularTVShowList[0])
    }
  }
  
   useEffect(()=>{
    fetchPopulars();
    
   },[]);

  console.log(currentTvShow);

    return <div className={s.main_container} 
    style={{
      background: currentTvShow ? `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)),
           url("${BACKDROP_BASE_URL}${currentTvShow.backdrop_path}") no-repeat center / cover`
        : "black",
    }}
    
    >
      <div className={s.header}>
        <div className="row">
           <div className="col-4">
              <div>Logo</div>
              <div>subtitle</div>
           </div>
           <div className="col-md-12 col-lg-4">
             <input style={{width :"100%"}} type="text"  />

           </div>
        </div>
      </div>
      <div className={s.tv_show_detail}>TV show detail</div>
      <div className={s.recommended_tv_shows}>recommended tv show</div>

      
       </div>
  }