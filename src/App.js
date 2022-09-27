import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Add from './components/Add';

const App = () => {

  const [geocache, setGeocache] = useState([])

  const getGeocache = () => {
    axios
      .get('https://guarded-harbor-25892.herokuapp.com/api/caches')
      .then(
        (response) => setGeocache(response.data),
        (err) => console.error(err)
      )
      .catch((error) => console.error(error))
  }

   const handleCreate = (addCache) => {
    axios.post('https://guarded-harbor-25892.herokuapp.com/api/caches', addCache)
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
      <div className='geo'>
        {geocache.map((cache) => {
          return (
            <div className='cache' key={cache.id}>
              <h4>Name: {cache.name}</h4>
              <h4>Note: {cache.note}</h4>
              <h4>Latitude: {cache.lat}</h4>
              <h4>Longitude: {cache.long}</h4>
            </div>
          )
        })}
      </div>



    </>
  )
}

export default App
