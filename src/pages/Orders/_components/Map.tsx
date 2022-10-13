import { Drawer, Spin } from 'antd';
import React, { useState, useRef } from 'react';
import { YMaps, Map, Placemark, GeolocationControl, TypeSelector } from "react-yandex-maps";
import env from 'react-dotenv'
interface MapProps {
    open: boolean;
    coords: any;
    address: string;
    setOpen: (arg0: boolean) => void;
    setCoords: (arg0: any) => void;
    setAddress: (arg0: string) => void;
}
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
const MapDrawer: React.FC<MapProps> = ({ open, setOpen, coords, setCoords, address, setAddress }) => {
    const ymaps = useRef<Ymaps>();
    const mapRef = useRef<Mapref>();
    const placemarkRef = useRef<PlacemarkRef>();
    // const [coordinates, setCoordinates] = useState([]);
    const [isMapReady, setIsMapReady] = useState(false);
    const onClose = () => {
        setOpen(false);
    };

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

    return (
        <Drawer width='45%' style={{ padding: 0 }} title={`Xaritadan belgilash: ${address}`} placement="right" onClose={onClose} open={open}>
            <Spin spinning={!isMapReady}>
                <div className='location'>
                    <YMaps query={{ apikey: env.YnxMapKey }}>
                        <Map
                            defaultState={{ center: [55.751574, 37.573856], zoom: 10, controls: ['zoomControl', 'fullscreenControl'] }}
                            className='mapYandex' onClick={onMapClick}
                            onLoad={(e) => {
                                if (e) {
                                    ymaps.current = e
                                    e.ready(() => setIsMapReady(true))
                                }
                            }}

                            modules={['geoObject.addon.balloon', "Placemark", "geocode", 'geoObject.addon.hint',
                                'borders', 'ObjectManager', 'geoObject.addon.editor', 'control.ZoomControl', 'control.FullscreenControl']}>
                            {/* <FullscreenControl /> */}
                            <Placemark options={{ draggable: true }} geometry={coords} />
                            <GeolocationControl options={{
                                float: 'left'
                            }} />
                            <TypeSelector options={{
                                float: 'right'
                            }} />
                        </Map>
                    </YMaps>
                </div>
            </Spin>
        </Drawer>
    );
};

export default MapDrawer;