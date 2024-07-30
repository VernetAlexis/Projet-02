import { Link, NavLink, Outlet, RouterProvider, createBrowserRouter } from "react-router-dom"
import { QuizzPage } from "./pages/QuizzPage"
import { PageError } from "./pages/PageError"


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    errorElement: <PageError/>,
    children: [
      {
        path: 'quizz/',
        element: <>
          <QuizzPage/>
        </>
      },
      {
        path: 'contact',
        element: <div>Contact</div>
      }
    ]
  }
])

function Root () {
  return <>
    <header>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/quizz">Quizz</NavLink>
        <NavLink to="/Contact">Contact</NavLink>
      </nav>
    </header>
    <div>
      <Outlet/>
    </div>
  </>
}

function App() {
  return <RouterProvider router={router}/>
}

export default App
