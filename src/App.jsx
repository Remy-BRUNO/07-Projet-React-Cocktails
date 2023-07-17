import { createBrowserRouter, RouterProvider } from "react-router-dom"
URLSearchParams
import {
  Home,
  Error,
  SingleCocktail,
  SharedCocktailsLayout,
  About,
} from "./pages"

const cocktailsUrl = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`

const router = createBrowserRouter([
  {
    path: "/",
    element: <SharedCocktailsLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: async ({ request }) => {
          const url = new URL(request.url)
          const searchTerm = url.searchParams.get("s") || ""
          const res = await fetch(`${cocktailsUrl}${searchTerm}`)
          const { drinks } = await res.json()
          return { drinks, searchTerm }
        },
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "/:cocktailId",
        element: <SingleCocktail />,
        loader: async ({ params }) => {
          const resId = await fetch(
            `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${params.cocktailId}`
          )
          return resId.json()
        },
      },
    ],
  },
])
function App() {
  return <RouterProvider router={router} />
}

export default App
