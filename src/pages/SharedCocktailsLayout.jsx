import { Outlet, useNavigation } from "react-router-dom"
import Navbar from "../components/Navbar"
import Loading from "../components/Loading"
const SharedCocktailsLayout = () => {
  const navigation = useNavigation()
  return (
    <>
      <Navbar />
      {navigation.state === "loading" ? <Loading /> : <Outlet />}
    </>
  )
}
export default SharedCocktailsLayout
