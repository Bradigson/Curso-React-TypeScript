import { useAppSelector, useAppDispatch } from "../redux/Store";
import { useState, useEffect } from "react";
import { getData } from "../services/API.GET";
import { IPortafolio } from "../services/Models";
import { insertPortafolioData } from "../redux/Slice";
import Header from "./Header";
import '../assets/styles/ResponsiveDesign/SectionOne.scss';
import _SectionOneimg from '../assets/imgs/sectionOne.svg';
import SectionTwo from "./SectionTwo";




const AboutMe = ()=>{

    const portafolio = useAppSelector(state=> state.portafolio.portafolio);
    const dispatch = useAppDispatch();

    useEffect(()=>{
        const handleGetData = async ()=>{
            const _result = await getData();
            dispatch(insertPortafolioData(_result));
         }
         handleGetData();
    },[portafolio]);

   
    
    return(
        <div>
            <Header/>
            <section className="section_1">
                <article className="section-1_aticle_1">
                    <div>
                        <b>My Name is</b>
                        <b className="ms-1">
                            {
                                 portafolio.map(p=> p.name)
                            }
                        </b>
                    </div>
                    
                    <p className="text-muted">
                        {
                             portafolio.map(p=> p.about)
                        }
                    </p>
                </article>
                <article className="section-1_aticle_2">
                    <img src={_SectionOneimg} alt="_img-sectionOne"/>
                </article>

                <article className="section-1_aticle_3">
                    <button>
                        Download My CV
                        <i className='bx bx-cloud-download'></i>
                    </button>
                </article>

            </section>
        </div>
        
    )
}


export default AboutMe;