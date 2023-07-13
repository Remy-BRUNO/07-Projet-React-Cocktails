import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { useState } from "react"

import {
  Home,
  Error,
  SingleCocktail,
  SharedCocktailsLayout,
  About,
} from "./pages"

function App() {
  const [search, setSearch] = useState("")

  const router = createBrowserRouter([
    {
      path: "/",
      element: <SharedCocktailsLayout />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Home setSearch={setSearch} />,
          loader: async () => {
            const res = await fetch(
              `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`
            )
            return res.json()
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
  return <RouterProvider router={router} />
}

export default App
