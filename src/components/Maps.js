import React from 'react';
import Edit from './Edit.js';
import axios from 'axios';
import { GoogleMap, LoadScriptNext, MarkerF } from '@react-google-maps/api';

const Maps = ({API, cache, getGeocache}) => {
    
    const mapStyles = {
        height: "30vh",
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
      <div className="md:container md:mx-auto px-10">
        <div className="map border-black border-8 rounded-lg" key={cache.id}>
          <LoadScriptNext
            googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
            >
            <GoogleMap
            mapContainerStyle={mapStyles}
            zoom={18}
            // center={defaultCenter}
            center= {{lat: Number(cache.lat), lng: Number(cache.long)}}
            >
              <MarkerF 
              position= {{lat: Number(cache.lat), lng: Number(cache.long)}}
              />
            </GoogleMap>
          </LoadScriptNext>
          <h4 className="bg-blue-500 text-lg text-white">Name: {cache.name}</h4>
          <h4 className="bg-green-500 text-lg text-white">Note: {cache.note}</h4>
          <h4 className="bg-blue-500 text-lg text-white">Latitude: {cache.lat}</h4>
          <h4 className="bg-green-500 text-lg text-white">Longitude: {cache.long}</h4>
          <div className="flex row justify-between">
            <Edit handleUpdate={handleUpdate} cache={cache}/>
            <button onClick={handleDelete} class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded" value={cache.id}>DELETE</button>
          </div>
        </div>
      </div>
    );
}

export default Maps;