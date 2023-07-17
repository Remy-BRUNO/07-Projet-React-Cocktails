import { useLoaderData } from "react-router-dom"
import CocktailList from "../components/CocktailList"
import SearchForm from "../components/SearchForm"

const Home = () => {
  const { drinks, searchTerm } = useLoaderData()

  return (
    <main>
      <SearchForm searchTerm={searchTerm} />
      <CocktailList cocktails={drinks} />
    </main>
  )
}

export default Home
