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
    <div className="bg-gradient-to-r from-green-900 via-green-400 to-green-900">
      <div className="text-center">
        <h1 className="bg-blue-500 text-xl text-white">GEOCACHING</h1>
        <Add handleCreate={handleCreate}/>
        <h3>FOUND GEOCACHES:</h3>
        <div className="flex flex-col-reverse gap-5">
          {geocache.map((cache) => {
            return (
              <Maps API={API} cache={cache} getGeocache={getGeocache}/>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default App