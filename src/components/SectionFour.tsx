import '../assets/styles/ResponsiveDesign/MyProyects.scss';
import { useAppSelector } from '../redux/Store';


const  MyProyects = ()=>{

    const proyects = useAppSelector(state=> state.portafolio.portafolio);


    return(
        <section className='section_four'>
            <div className='section-four_content-1'><b>My Proyects</b></div>
            {
                proyects !== null ? (
                    <div className='section-four_content-2'>
                        {
                            proyects.map(p=>{
                                return(
                                    <div key={p._id}>
                                        {
                                            p.proyects.map((pro,index)=>{
                                                return(
                                                    <div key={index} className='section-four_content-2_card'>
                                                        <div>
                                                            {pro.titleProyect}
                                                        </div>
                                                        <div>
                                                            <div>
                                                                {pro.descriptionProyect}
                                                            </div>
                                                            <div>
                                                                <div>{pro.websideurl}</div>
                                                                <div>{pro.repositoryurl}</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                )
                            })
                            
                        }
                    </div>
                   
                ):(
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                )
            }
        </section>
    )
}


export default MyProyects;