const Tarjeta = ()=>{
    return(
        <section className="tarjeta_container">
            <article className="tarjeta">   

                <div className="tarjeta_title">
                    <i className='bx bxl-mastercard text-lime-600'></i>
                    <div className="tarjeta_title_card_type">Green Card</div>
                </div>

                <div className="tarjeta_number">
                    <div  className="tarjeta_number_1">2345</div>
                    <div  className="tarjeta_number_2">4323</div>
                    <div  className="tarjeta_number_3">5678</div>
                    <div  className="tarjeta_number_4">0987</div>
                </div>

                <div className="tarjeta_footer">
                    <div className="tarjeta_footer-description">
                        <div>
                            <b>Type Tarjeta : </b>
                            <span className="text-lime-600">Green</span>
                        </div>
                        <div className="mx-10">
                            <b>Viajes : </b>
                            <span>20/12</span>
                        </div>
                    </div>
                    <div className="tarjeta_footer-images">
                        <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMbXedxEJCoQ8Yrd43J_dFO_Neo2_yol51rQ&s" alt="_metro"/>
                        <img  src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Teleferico_logo.jpg" alt="_teleferico"/>
                    </div>
                </div>

            </article>
        </section>
       
    )
}

export default Tarjeta;