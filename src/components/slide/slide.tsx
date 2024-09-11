import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Anuncios from "./cards-components/anuncios";
import Linea1 from "./cards-components/linea1";
import Linea2 from "./cards-components/linea2";
import MetodosPagos from "./cards-components/metodosdepago";
import Tarjetas from "./cards-components/tarjetas";
import dynamic from "next/dynamic";
import { memo } from "react";

const MapComponent = dynamic(() => import("../slide/cards-components/mapa"), {
    ssr: false // Esto desactiva el renderizado del lado del servidor
});
const Slide = memo(() => {
    const info = [
        <Tarjetas key="tarjetas" />,
        <Anuncios key="anuncios" />,
        <Linea1 key="linea1" />,
        <Linea2 key="linea2" />,
        <MapComponent key="mapa" />,
        <MetodosPagos key="metodosPagos" />
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
});

export default Slide;
