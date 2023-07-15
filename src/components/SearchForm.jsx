import { useEffect, useState } from "react"
import { Form } from "react-router-dom"

const SearchForm = ({ setSearch }) => {
  const [text, setText] = useState("")
  const handleChange = (e) => {
    setText(e.target.value)
  }
  useEffect(() => {
    setSearch(text)
  }, [text])

  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <section className="section search">
      <form role="search" className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="">Search Your Favorite Cocktail</label>
          <input value={text} type="search" onChange={handleChange} name="s" />
        </div>
      </form>
    </section>
  )
}
export default SearchForm
