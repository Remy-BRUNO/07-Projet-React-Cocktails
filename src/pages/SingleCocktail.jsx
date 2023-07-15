import { Link, useLoaderData } from "react-router-dom"

const SingleCocktail = () => {
  const datas = useLoaderData()
  const cocktail = datas.drinks

  const {
    strDrink: name,
    strCategory: cat,
    strAlcoholic: alc,
    strDrinkThumb: image,
    strGlass: glass,
    strInstructions: instruction,
  } = cocktail[0]
  const ingredients = Object.entries(cocktail[0]).filter((obj) => {
    if (obj[0].includes("strIngredient") && obj[1] !== null) {
      return obj
    }
  })

  return (
    <section className="section cocktail-section">
      <Link to="/" className="btn-primary">
        back home
      </Link>
      <h2 className="section-title">{name}</h2>
      <div className="drink">
        <img src={image} alt={name} />
        <div className="drink-info">
          <p>
            Category : <span className="drink-data">{cat} </span>
          </p>
          <p>
            Info : <span className="drink-data">{alc}</span>
          </p>
          <p>
            Glass : <span className="drink-data">{glass} </span>
          </p>
          <p>
            Instructions : <span className="drink-data">{instruction} </span>
          </p>
          <p>
            Ingredients:
            <span className="drink-data">
              {ingredients.map((ingredient) => (
                <span key={ingredient[0]}> {ingredient[1]}</span>
              ))}
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}
export default SingleCocktail
