import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"

import MainPage from "pages/Home"
import RootLayout from "pages/RootLayout"
import Film from "pages/Film"
import { FILM_PAGE, HOME_PAGE } from "./paths"

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        path: HOME_PAGE,
        Component: MainPage
      },
      { path: FILM_PAGE + ":id", Component: Film }
    ]
  }
])

const AppRouter = () => {
  return <RouterProvider router={router} />
}

export default AppRouter
