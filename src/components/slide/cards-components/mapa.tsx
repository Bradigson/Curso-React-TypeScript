import React, { useCallback, useMemo, useState, useEffect, memo } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import useLocation from "@/hooks/useLocation";
import { ILocation } from "@/hooks/useLocation";

// Estilo del contenedor del mapa
const mapStyle = {
    height: "100%",
    width: "100%",
    borderRadius: "15px"
};

// Coordenadas del centro del mapa
const center = {
    lat: 0,
    lng: 0
};
//18.549031, Longitud: -69.8614746
// Crear un icono personalizado para el marcador
const customIcon = new L.Icon({
    iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
    shadowSize: [41, 41]
});

// Componente para centrar el mapa
const SetViewOnMap = ({ center }: { center: { lat: number; lng: number } }) => {
    const map = useMap();
    useEffect(() => {
        map.setView(center);
    }, [map, center]);
    return null;
};

// Componente del mapa
const Mapa = memo(({lat, lon}:{lat:number | undefined, lon:number | undefined}) => {
    const [location, setLocation] = useState<any>({
        lat:0,
        lon:0
    })
    
    useMemo(()=>{
        setLocation({
            lat:lat,
            lon:lon
        });
    },[])
   
    console.log(location);

    return (
        <MapContainer style={mapStyle} center={center} zoom={15} scrollWheelZoom={false}>
            <SetViewOnMap center={center} />
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={center} icon={customIcon}>
                <Popup>mi ubicacion actual</Popup>
            </Marker>
        </MapContainer>
    );
});

export default Mapa;
