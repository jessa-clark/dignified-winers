import { useState } from 'react'
import './WineAdd.css'
// import { Layout } from '../../components'
import { Redirect } from 'react-router-dom'
import { addWine } from '../../services/wines'

const WineAdd = (props) => {
  const [wine, setWine] = useState({
    name: '',
    vineyard: '',
    year: '',
    imgURL: '',
    description: '',
    type: '',
  })

  const [isCreated, setCreated] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setWine({
      ...wine,
      [name]: value,
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const created = await addWine(wine)
    setCreated( {created} )
  }

  if (isCreated) {
    return <Redirect to={`/wines`} />
  }

  return (
    // <Layout user={props.user}>
      <form className='create-form' onSubmit={handleSubmit}>
        <input
        className='input-name'
        placeholder='Wine Name'
        value={wine.name}
        name='name'
        required
        autoFocus
        onChange={handleChange}
        />
        <input
        className='input-vineyard'
        placeholder='Vineyard Name'
        value={wine.vineyard}
        name='vineyard'
        required
        autoFocus
        onChange={handleChange}
        />
        <input
        className='input-year'
        placeholder='Year'
        value={wine.year}
        name='year'
        required
        autoFocus
        onChange={handleChange}
        />
        <input
        className='input-image-link'
        placeholder='Image Link'
        value={wine.imgURL}
        name='imgURL'
        required
        autoFocus
        onChange={handleChange}
        />
        <input
        className='textarea-description'
        rows={10}
        placeholder='Description'
        value={wine.description}
        name='descripition'
        required
        autoFocus
        onChange={handleChange}
        />
        <input
        className='input-type'
        placeholder='Type'
        value={wine.type}
        name='type'
        required
        autoFocus
        onChange={handleChange}
        />
        <button type='submit' className='add-button'>
          Add Wine
        </button>
      </form>
    // </Layout>
  )
}

export default WineAdd