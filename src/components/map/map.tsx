import React from 'react'
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import { LatLngExpression } from 'leaflet';

interface MapProps {
  position: {
    latitude: number;
    longitude: number;
  }
  zoom: number
}

const Map: React.FC<MapProps> = (props: MapProps) => {
  const { position, zoom } = props;
  const mapPosition: LatLngExpression = [
    position.latitude,
    position.longitude
  ]
  return <MapContainer
    center={mapPosition}
    zoom={zoom}
    scrollWheelZoom={false}
    style={{ width: '100%', height: '100%' }}
  >
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={mapPosition} >
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>
}

export default Map; 