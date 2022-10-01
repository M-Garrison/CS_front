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
    <div className="bg-gradient-to-r from-white via-white to-green-500">
    {/* <div className="bg-gradient-to-r from-white to-green-500"> */}
      <div className="flex flex-col text-left">
        <h1 className="py-4 px-10">NEW GEOCACHE:</h1>
        <Add handleCreate={handleCreate}/>
        <h3 className="py-4 md:mx-auto px-10">FOUND GEOCACHES:</h3>
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