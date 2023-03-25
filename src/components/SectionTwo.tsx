import { stat } from "fs";
import { useAppSelector } from "../redux/Store";
import { useState } from "react";
import { SkilsType } from "../services/Models";
import '../assets/styles/ResponsiveDesign/SectionTwo.scss';

const Skills = ()=>{

    const portafolioSkills = useAppSelector(state=> state.portafolio.portafolio);


   
    return(
        <section className="section_2">
           <div className="section-2_title">
                <b>My Skills</b>
           </div>

           <article className="section-2_skills">

                <div className="section-2-skills_group-1">
                        {
                            portafolioSkills != null ? (
                                portafolioSkills.map(p=>{
                                    return(
                                        <div key={p._id}>
                                            {p.skills.slice(0,10).map(sk=>{
                                                return(
                                                    <div key={sk._id} className="section-2-skills_group-1_li">

                                                        {sk.titleSkills}
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    )
                                })

                            ):(
                                <div className="spinner-border text-primary" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            )
                        }
                </div>


                <div className="section-2-skills_group-2">
                        {
                            portafolioSkills != null ? (
                                portafolioSkills.map(p=>{
                                    return(
                                        <div key={p._id}>
                                            {p.skills.slice(11,21).map(sk=>{
                                                return(
                                                    <div key={sk._id} className="section-2-skills_group-1_li">

                                                        {sk.titleSkills}
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    )
                                })

                            ):(
                                <div className="spinner-border text-primary" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            )
                        }
                </div>



                <div className="section-2-skills_group-3">
                        {
                            portafolioSkills != null ? (
                                portafolioSkills.map(p=>{
                                    return(
                                        <div key={p._id}>
                                            {p.skills.slice(22,32).map(sk=>{
                                                return(
                                                    <div key={sk._id} className="section-2-skills_group-1_li">

                                                        {sk.titleSkills}
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    )
                                })

                            ):(
                                <div className="spinner-border text-primary" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            )
                        }
                </div>






                <div className="section-2-skills_group-4">
                        {
                            portafolioSkills != null ? (
                                portafolioSkills.map(p=>{
                                    return(
                                        <div key={p._id}>
                                            {p.skills.slice(32,42).map(sk=>{
                                                return(
                                                    <div key={sk._id} className="section-2-skills_group-1_li">

                                                        {sk.titleSkills}
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    )
                                })

                            ):(
                                <div className="spinner-border text-primary" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            )
                        }
                </div>



                <div className="section-2-skills_group-5">
                        {
                            portafolioSkills != null ? (
                                portafolioSkills.map(p=>{
                                    return(
                                        <div key={p._id}>
                                            {p.skills.slice(42,53).map(sk=>{
                                                return(
                                                    <div key={sk._id} className="section-2-skills_group-1_li">

                                                        {sk.titleSkills}
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    )
                                })

                            ):(
                                <div className="spinner-border text-primary" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            )
                        }
                </div>
               
           </article>


        </section>
    )
}

export default Skills;