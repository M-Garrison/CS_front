import {useState} from 'react';

const Add = ({handleCreate}) => {
    let emptyCache = { name:'', note:'', lat:'', long:''}
    const [cache, setCache] = useState(emptyCache)

const handleChange = (event) => {
    setCache({...cache, [event.target.name]: event.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    handleCreate(cache)
    setCache(emptyCache)
  }

    return(
        <>
            <h3 className="bg-blue-500 text-xl text-white">ADD NEW GEOCACHE:</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name: </label>
                <input type="text" name="name" value={cache.name} onChange={handleChange}/>
                <br />
                <label htmlFor="note">Note: </label>
                <input type="text" name="note" value={cache.note} onChange={handleChange}/>
                <br />
                <label htmlFor="lat">Latitude: </label>
                <input type="number" name="lat" value={cache.lat} onChange={handleChange}/>
                <br />
                <label htmlFor="long">Longitude: </label>
                <input type="number" name="long" value={cache.long} onChange={handleChange}/>
                <br />
                <input class="bg-blue-500 hover:bg-blue-600 text-white" type="SUBMIT"/>
            </form>
        </>
    )
}

export default Add