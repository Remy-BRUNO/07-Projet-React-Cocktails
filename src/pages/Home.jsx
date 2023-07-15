import { useLoaderData } from "react-router-dom"
import CocktailList from "../components/CocktailList"
import SearchForm from "../components/SearchForm"

const Home = ({ setSearch }) => {
  const datas = useLoaderData()

  const cocktails = datas.drinks

  return (
    <main>
      <SearchForm setSearch={setSearch} />
      <CocktailList cocktails={cocktails} />
    </main>
  )
}

export default Home
