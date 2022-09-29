import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Add from './components/Add.js';
import Maps from'./components/Maps.js';

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

  useEffect(() => {
    getGeocache()
  }, [])
  
  return (
    <>
      <h1>GEOCACHING</h1>
      <Add handleCreate={handleCreate}/>
      <h3>CURRENT GEOCACHES:</h3>
      <div className="geo">
        {geocache.map((cache) => {
          return (
            <Maps API={API} cache={cache} getGeocache={getGeocache}/>
          )
        })}
      </div>
    </>
  )
}

export default App