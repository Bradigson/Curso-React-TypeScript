import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Anuncios from "./cards-components/anuncios";
import Linea1 from "./cards-components/linea1";
import Linea2 from "./cards-components/linea2";
import Mapa from "./cards-components/mapa";
import MetodosPagos from "./cards-components/metodosdepago";
import Tarjetas from "./cards-components/tarjetas";
import Viajes from "./cards-components/viajes";

const Slide = () => {
    const info = [
        <Anuncios key="anuncios" />,
        <Linea1 key="linea1" />,
        <Linea2 key="linea2" />,
        <Mapa key="mapa" />,
        <MetodosPagos key="metodosPagos" />,
        <Tarjetas key="tarjetas" />,
        <Viajes key="viajes" />
    ];

    return (
        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={10}
            slidesPerView={3}
            navigation={false}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            loop={true}
            className="slider-container"
        >
            {info?.map((i, index) => {
                return (
                    <SwiperSlide className="slider-container" key={index}>
                        {i}
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
};

export default Slide;
