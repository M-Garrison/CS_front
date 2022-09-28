import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Map, GoogleApiWrapper, Marker} from 'google-maps-react';
import Add from './components/Add';
import Edit from './components/Edit';

const App = () => {
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

      {/* <Map
        google = {this.props.google}
        style = {{width:"50%", height:"50%"}}
        zoom = {10}
        initialCenter = {{
          lat: 28.704, lng: 77.102
        }}/> */}

      <Add handleCreate={handleCreate}/>
      <div className='geo'>
        {geocache.map((cache) => {
          return (
            <div className='cache' key={cache.id}>
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