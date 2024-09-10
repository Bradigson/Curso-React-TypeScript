import Image from "next/image";
import img from '../../../assets/images/tarjeta-de-credito.png'

const MetodosPagos = () => {


    return (
        <div className="tarjeta-credito text-gray-50">
            <div className="tarjeta-credito_img">
                <Image
                    src={img}
                    alt="_card"
                    width={55}
                    height={55}
                />
            </div>
            <div className="tarjeta-credito_number text-1xl">
                XXXX-XXXX-XXXX-XXXX
            </div>

            <div className="tarjeta-credito_fecha">
                <div className="text-sm">XX/XX</div>
            </div>

            <div className="tarjeta-credito_button">
                <button>
                    Recargar
                </button>
            </div>
        </div>
    )
};

export default MetodosPagos;
