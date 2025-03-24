import s from "./style.module.css"
export function App() {
    return <div className={s.main_container}>
      <div className={s.header}>
        <div className="row">
           <div className="col-4">
              <div>Logo</div>
              <div>subtitle</div>


           </div>
           <div className="col-md-12 col-lg-12">
             <input type="text" style={{width :"100%"}}     />

           </div>
        </div>
      </div>
      <div className={s.tv_show_detail}>TV show detail</div>
      <div className={s.recommended_tv_shows}>recommended tv show</div>

      
       </div>
  }