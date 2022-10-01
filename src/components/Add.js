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
            {/* <h3 className="py-4 px-8">ADD NEW GEOCACHE:</h3> */}
            <form onSubmit={handleSubmit}>
                <label className="py-2 px-2" htmlFor="name">Name: </label>
                <input type="text" name="name" value={cache.name} onChange={handleChange}/>
                <br />
                <label className="py-2 px-2" htmlFor="note">Note: </label>
                <input type="text" name="note" value={cache.note} onChange={handleChange}/>
                <br />
                <label className="py-2 px-2" htmlFor="lat">Latitude: </label>
                <input type="number" name="lat" value={cache.lat} onChange={handleChange}/>
                <br />
                <label className="py-2 px-2" htmlFor="long">Longitude: </label>
                <input type="number" name="long" value={cache.long} onChange={handleChange}/>
                <br />
                <br />
                <button className="bg-blue-500 px-4 py-2 button hover:bg-blue-600 text-white rounded-lg" type="submit">SUBMIT</button>
            </form>
        </>
    )
}

export default Add