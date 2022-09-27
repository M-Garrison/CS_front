import {useState} from 'react';


const Add = (props) => {
    let emptyCache = { name:'', note:'', lat:'', long:''}
    const [cache, setCache] = useState(emptyCache)


const handleChange = (event) => {
    setCache({...cache, [event.target.name]: event.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    props.handleCreate(cache)
    setCache(emptyCache)
  }



    return(
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name: </label>
                <input type="text" name="name" onChange={handleChange}/>
                <br />
                <br />
                <label htmlFor="note">Note: </label>
                <input type="text" name="note" onChange={handleChange}/>
                <br />
                <br />
                <label htmlFor="lat">Latitude: </label>
                <input type="number" name="lat" onChange={handleChange}/>
                <br />
                <br />
                <label htmlFor="long">Longitude: </label>
                <input type="number" name="long" onChange={handleChange}/>
                <br />
                <input type="submit"/>
            </form>
        </>
    )
}

export default Add