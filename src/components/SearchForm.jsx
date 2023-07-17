import { useEffect, useState } from "react"
import { Form, useSubmit } from "react-router-dom"

const SearchForm = ({ searchTerm }) => {
  const submit = useSubmit()

  return (
    <section className="section search">
      <Form role="search" className="search-form">
        <div className="form-control">
          <label htmlFor="">Search Your Favorite Cocktail</label>
          <input
            defaultValue={searchTerm}
            type="search"
            onChange={(e) => submit(e.currentTarget.form)}
            name="s"
          />
        </div>
      </Form>
    </section>
  )
}
export default SearchForm
