import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Add from './components/Add';
import Edit from './components/Edit';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const App = () => {
  const mapStyles = {
    height: "25vh",
    width: "100%"
  }

  const API = "https://guarded-harbor-25892.herokuapp.com/api/caches"

  const [geocache, setGeocache] = useState([])

  const getGeocache = () => {
    axios
      .get(API)
      .then(
        (response) => setGeocache(response.data),
        (err) => console.error(err)
      )
      .catch((error) => console.error(error))
  }

   const handleCreate = (addCache) => {
    axios.post(API, addCache)
    .then((response) => {
      console.log(response)
      getGeocache()
    })
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

  useEffect(() => {
    getGeocache()
  }, [])
  
  return (
    <>
      <h1>GEOCACHING</h1>

      <div className="map">
          <LoadScript
          googleMapsApiKey='AIzaSyBsrazpGZornpvjdr9WZbAKY6p1jesvKkA'>
          <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={15}
          // center={defaultCenter}
          center= {{lat: 47.6205, lng: -122.3493}}>
          <Marker position= {{lat: 47.6205, lng: -122.3493}}/>
          </GoogleMap>
          </LoadScript>
      </div> 

      <Add handleCreate={handleCreate}/>
      <h3>CURRENT GEOCACHES:</h3>
      <div className="geo">
        {geocache.map((cache) => {
          return (
            <div className="cache" key={cache.id}>
                {/* <div className="map">
                  <LoadScript
                  googleMapsApiKey='AIzaSyBsrazpGZornpvjdr9WZbAKY6p1jesvKkA'>
                  <GoogleMap
                  mapContainerStyle={mapStyles}
                  zoom={14}
                  // center={defaultCenter}
                  center= {{lat: 29.9753, lng: 31.1376}}/>
                  </LoadScript>
                </div> */}
              <h4>Name: {cache.name}</h4>
              <h4>Note: {cache.note}</h4>
              <h4>Latitude: {cache.lat}</h4>
              <h4>Longitude: {cache.long}</h4>
              <Edit handleUpdate={handleUpdate} cache={cache}/>
              <button onClick={handleDelete} value={cache.id}>DELETE</button>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default App