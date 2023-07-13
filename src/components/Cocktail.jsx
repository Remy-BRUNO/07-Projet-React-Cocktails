import { Link } from "react-router-dom"

const Cocktail = (cocktail) => {
  const {
    idDrink: id,
    strDrink: name,
    strCategory: cat,
    strAlcoholic: alc,
    strDrinkThumb: image,
  } = cocktail.cocktail

  return (
    <article className="cocktail" id={id}>
      <div className="img-container">
        <img src={image} alt={name} />
      </div>
      <div className="cocktail-footer">
        <h3>{name}</h3>
        <h4>{cat}</h4>
        <p>{alc} </p>
        <Link to={`/${id}`}> Details</Link>
      </div>
    </article>
  )
}
export default Cocktail
