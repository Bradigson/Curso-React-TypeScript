import { useAppSelector } from "../redux/Store";
import '../assets/styles/ResponsiveDesign/MyObject.scss';


const MyObject = ()=>{

    const services = useAppSelector(state=> state.portafolio.portafolio);


    return(
        <section className="myobject">
            <article className="myobject_article-1">
                <b>My objectives as a software developer</b>
            </article>

            <article className="myobject_article-2">
                {
                    services !== null ? (
                        services.map(p=>{
                            return(
                                <div key={p._id}>
                                    {
                                        p.services.map((sr, index)=>{
                                            return(
                                                <div className="myobject_article-2_card" key={index}>
                                                    <div className="p-2 myobject_article-2_card_img">
                                                        <i className={sr.img}></i>
                                                    </div>
                                                    <div className="p-4">
                                                        <div className="myobject_article-2_card-title"><b>{sr.serviceTitle}</b></div>
                                                        <div className="mt-4 text-muted">{sr.descriptionService}</div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            )
                            
                        })

                    ):(
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    )
                }

            </article>

        </section>
    )
}


export default MyObject;