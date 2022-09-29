import React from 'react';
import Edit from './Edit';
import axios from 'axios';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Maps = ({API, cache, getGeocache}) => {
    
    const mapStyles = {
        height: "25vh",
        width: "100%"
      }

    const handleDelete = (event) => {
        axios.delete(`${API}/` + event.target.value)
        .then((response) => {
          getGeocache()
        })
      }
    
    const handleUpdate = (editCache) => {
        axios.put(`${API}/` + editCache.id, editCache)
        .then((response) => {
          getGeocache()
        })
      }

    return (
        <div className="map" key={cache.id}>
            <LoadScript
            googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
            <GoogleMap
            mapContainerStyle={mapStyles}
            zoom={10}
            // center={defaultCenter}
            center= {{lat: Number(cache.lat), lng: Number(cache.long)}}>
            <Marker position= {{lat: Number(cache.lat), lng: Number(cache.long)}}/>
            </GoogleMap>
            </LoadScript>
        <h4>Name: {cache.name}</h4>
        <h4>Note: {cache.note}</h4>
        <h4>Latitude: {cache.lat}</h4>
        <h4>Longitude: {cache.long}</h4>
        <Edit handleUpdate={handleUpdate} cache={cache}/>
        <button onClick={handleDelete} value={cache.id}>DELETE</button>
        </div>
    );
}

export default Maps;