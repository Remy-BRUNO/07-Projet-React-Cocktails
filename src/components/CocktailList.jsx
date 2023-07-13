/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */

import Cocktail from "./Cocktail"
import Loading from "./Loading"

const CocktailList = ({ cocktails }) => {
  return !cocktails ? (
    <h2 className="section-title">no cocktails matched your search criteria</h2>
  ) : (
    <section className="section">
      <h2 className="section-title"></h2>
      <div className="cocktails-center">
        {cocktails.map((cocktail) => (
          <Cocktail key={cocktail.idDrink} cocktail={cocktail} />
        ))}
      </div>
    </section>
  )
}

export default CocktailList
