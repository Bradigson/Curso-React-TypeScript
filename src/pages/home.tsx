import Header from "@/components/header/header";
import Slide from "@/components/slide/slide";
import Tarjeta from "@/components/tarjeta/tarjeta";

const Home = () => {
    return (
        <div className="home">
            <Header />
            <Tarjeta />
            <Slide />
        </div>
    );
};

export default Home;
