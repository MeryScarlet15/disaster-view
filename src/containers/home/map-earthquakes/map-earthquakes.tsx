import Heading2 from '@/components/text/heading-2';
import React from 'react'
import MapEarthquakesContainer from './map-earthquakes-style';
import { MapContainer, useMap, Marker, Popup, TileLayer } from 'react-leaflet'
import { LatLngExpression } from 'leaflet';
import dynamic from "next/dynamic"

const Map = dynamic(() => import("../../../components/map/map"), { ssr: false })


interface MapEarthquakesProps {
  className?: string;
  earthquakes: any[];
}

const SPANISH_POSITION = {
  latitude: 36.463667,
  longitude: -3.74922
}

const mapPosition: LatLngExpression = [
  SPANISH_POSITION.latitude,
  SPANISH_POSITION.longitude
]

const MapEarthquakes: React.FC<MapEarthquakesProps> = (props: MapEarthquakesProps) => {
  const {
    className,
    earthquakes
  } = props;

  return <MapEarthquakesContainer
    className={className || ''}
  >
    <div className="map-earthquakes-topbar">
      <Heading2 className="map-earthquakes-title">
        Earthquakes
      </Heading2>

      <div className="map-earthquakes-actions">

      </div>
    </div>

    <div className="map-earthquakes">
      <Map
        position={SPANISH_POSITION}
        zoom={5}
      />
    </div>

  </MapEarthquakesContainer>
}

export default MapEarthquakes; 