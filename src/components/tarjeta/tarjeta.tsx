import { useEffect, useState, useCallback, memo } from "react";
import Image from "next/image";

const Tarjeta = memo(() => {
    const [travels, setTravels] = useState<number>(15);
    const [people, setPeople] = useState<number>(0);

    const handlePeople = useCallback((count: number) => {
        setPeople((prevPeople) => {
            if (prevPeople < 25) {
                return prevPeople + count;
            }
            return prevPeople;
        });
    }, []);

    useEffect(() => {
        const intervalId = setInterval(() => {
            handlePeople(1);
        }, 100);
        return () => clearInterval(intervalId);
    }, [handlePeople, people]);

    return (
        <section className="tarjeta_container">
            <article className="tarjeta_container_title">
                <div>
                    <div className="text-4xl font-bold text-gray-50">Metro de Santo Domingo</div>
                    <div className="text-2xl font-bold text-gray-50">
                        Planee su viaje en el metro
                    </div>
                    <div className="text-sm font-bold text-gray-50">
                        Mas <span className="text-2xl">{people}M+</span> personas usan el metro de
                        santo domingo
                    </div>
                </div>
            </article>
            <article className="tarjeta">
                <div className="tarjeta_title">
                    <i className="bx bxl-mastercard text-lime-600"></i>
                    <div className="tarjeta_title_card_type text-gray-50">Green Card</div>
                </div>

                <div className="tarjeta_number">
                    <div className="tarjeta_number_1 text-gray-50">2345</div>
                    <div className="tarjeta_number_2 text-gray-50">4323</div>
                    <div className="tarjeta_number_3 text-gray-50">5678</div>
                    <div className="tarjeta_number_4 text-gray-50">0987</div>
                </div>

                <div className="tarjeta_footer">
                    <div className="tarjeta_footer-description">
                        <div>
                            <b className="text-gray-50">Type Tarjeta : </b>
                            <span className="text-lime-600">Green</span>
                        </div>
                        <div className="mx-10 w-40  flex items-center">
                            <div>
                                <b className="text-gray-50">Viajes: </b>
                            </div>
                            <div className="ml-px">
                                <span className="ml-1 text-lime-600"> 20/</span>
                                <span
                                    className={
                                        travels > 15
                                            ? "text-lime-600"
                                            : travels <= 15 && travels >= 10
                                              ? "text-lime-300"
                                              : "text-red-700"
                                    }
                                >
                                    {travels}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="tarjeta_footer-images">
                        <Image
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMbXedxEJCoQ8Yrd43J_dFO_Neo2_yol51rQ&s"
                            alt="_metro"
                            width={100}
                            height={100}
                        />
                        <Image
                            src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Teleferico_logo.jpg"
                            alt="_teleferico"
                            width={100}
                            height={100}
                        />
                    </div>
                </div>
            </article>
        </section>
    );
});

export default Tarjeta;
