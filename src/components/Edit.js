import {useState} from 'react'

const Edit = (props) => {
  const [cache, setCache] = useState({...props.cache})

  const handleChange = (event) => {
    setCache({...cache, [event.target.name]: event.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    props.handleUpdate(cache)
  }

  return(
    <>
      <details>
        <summary class="bg-red-500 hover:bg-red-600 text-white">EDIT GEOCACHE</summary>
        <form className="text-left" onSubmit={handleSubmit}>
        <label className="text-sm" htmlFor="name">Name: </label>
        <input type="text" name="name" value={cache.name} onChange={handleChange}/>
        <br />
        <label className="text-sm" htmlFor="note">Note: </label>
        <input type="text" name="note" value={cache.note} onChange={handleChange}/>
        <br />
        <label className="text-sm" htmlFor="lat">Latitude: </label>
        <input type="number" name="lat" value={cache.lat} onChange={handleChange}/>
        <br />
        <label className="text-sm" htmlFor="long">Longitude: </label>
        <input type="number" name="long" value={cache.long} onChange={handleChange}/>
        <br />
        <input class="bg-red-500 hover:bg-red-600 text-white" type="submit"/>
        </form>
      </details>
    </>
  )
}

export default Edit