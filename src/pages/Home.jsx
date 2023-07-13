import { useLoaderData } from "react-router-dom"
import CocktailList from "../components/CocktailList"
import SearchForm from "../components/SearchForm"
import Loading from "../components/Loading"
import { useNavigation } from "react-router-dom"
const Home = ({ setSearch }) => {
  const navigation = useNavigation()

  const datas = useLoaderData()

  const cocktails = datas.drinks

  return navigation.state === "loading" ? (
    <Loading />
  ) : (
    <main>
      <SearchForm setSearch={setSearch} />
      <CocktailList cocktails={cocktails} />
    </main>
  )
}

export default Home
