import React, { useRef, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { YMaps, Map, FullscreenControl, Placemark } from "react-yandex-maps";
import { Spin } from 'antd'
type Props = {}

type Mapref = {
    current: any;
    geoObjects: any;
};
type Ymaps = {
    current?: any;
    geocode?: any;
    Placemark?: any;
};
type PlacemarkRef = {
    current: any;
    geocode: any;
    geometry: any;
    events: any;
};

const HomePage: React.FC = (props: Props) => {
    const { t } = useTranslation()
    const ymaps = useRef<Ymaps>();
    const mapRef = useRef<Mapref>();
    const placemarkRef = useRef<PlacemarkRef>();
    // const [coordinates, setCoordinates] = useState([]);
    const [coords, setCoords] = useState([]);
    const [address, setAddress] = useState("");
    const [isMapReady, setIsMapReady] = useState(false);

    const createPlacemark = (coords: any) => {
        if (ymaps.current)
            return new ymaps.current.Placemark(coords);
    };

    const getAddress = (coords: React.SetStateAction<never[]>) => {
        setCoords(coords)
        ymaps?.current?.geocode(coords)?.then((res: { geoObjects: { get: (arg0: number) => any; }; }) => {
            const firstGeoObject = res.geoObjects.get(0);
            const newAddress = [
                firstGeoObject.getLocalities().length
                    ? firstGeoObject.getAddressLine() : firstGeoObject.getAddressLine()
            ].filter(Boolean).join(", ");
            setAddress(newAddress);
        });
    };

    const onMapClick = (e: { get: (arg0: string) => any; }) => {
        const coords = e.get("coords");
        if (placemarkRef.current) {
            placemarkRef.current.geometry.setCoordinates(coords);
        } else {
            placemarkRef.current = createPlacemark(coords);
            mapRef.current?.geoObjects.add(placemarkRef.current);
            placemarkRef.current?.events.add("dragend", function () {
                getAddress(placemarkRef.current?.geometry.getCoordinates());
            });
        }
        getAddress(coords);
    };
    console.log("isMapReady: ", isMapReady);
    return (
        <YMaps>
            <Map
                defaultState={{ center: [55.751574, 37.573856], zoom: 10 }}
                className='mapYandex' onClick={onMapClick}
                onLoad={(e) => {
                    if (e) {
                        ymaps.current = e
                        e.ready(() => setIsMapReady(true))
                    }
                }}
                modules={['geoObject.addon.balloon', "Placemark", "geocode", 'geoObject.addon.hint',
                    'borders', 'ObjectManager', 'geoObject.addon.editor']}
            >
                {isMapReady ?
                    <><FullscreenControl />
                        <Placemark geometry={coords} /></>
                    : <Spin />
                }
            </Map>
        </YMaps>
    )
}

export default HomePage