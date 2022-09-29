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
        <summary>EDIT</summary>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name: </label>
            <input type="text" name="name" value={cache.name} onChange={handleChange}/>
            <br />
            <br />
            <label htmlFor="note">Note: </label>
            <input type="text" name="note" value={cache.note} onChange={handleChange}/>
            <br />
            <br />
            <label htmlFor="lat">Latitude: </label>
            <input type="number" name="lat" value={cache.lat} onChange={handleChange}/>
            <br />
            <br />
            <label htmlFor="long">Longitude: </label>
            <input type="number" name="long" value={cache.long} onChange={handleChange}/>
            <br />
            <input type="submit"/>
        </form>
    </details>
    </>
  )
}

export default Edit