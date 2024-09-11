import Header from "@/components/header/header";
import Slide from "@/components/slide/slide";
import Tarjeta from "@/components/tarjeta/tarjeta";
import useCreateDatabase from "@/hooks/useCreatDatabase";
import { useCallback, useEffect } from "react";

const Home = () => {
    const { handleExecute } = useCreateDatabase();

    const execute = useCallback(() => {
        handleExecute();
    }, [handleExecute]);

    useEffect(() => {
        execute();
    }, [execute]);

    return (
        <div className="home">
            <Header />
            <Tarjeta />
            <Slide />
        </div>
    );
};

export default Home;
