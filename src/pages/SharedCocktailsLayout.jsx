import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"

const SharedCocktailsLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}
export default SharedCocktailsLayout
