import { Link } from "react-router-dom"

import { HOME_PAGE } from "app/providers/Router/paths"

import ToggleTheme from "shared/ui/ToggleTheme"

const Navbar = () => {
  return (
    <div className='navbar bg-base-100 gap-6 mb-6  flex-col md:px-10 pt-10 md:pt-8 justify-center md:flex-row'>
      <div className='navbar-start hidden md:block'>
        <Link
          to={HOME_PAGE}
          className='btn btn-ghost text-xl text-primary'
        >
          MovieFinder
        </Link>
      </div>
      <div className='navbar-center mx-10'>
        <h1 className='text-3xl font-bold text-center'>
          Find your{" "}
          <span className='  bg-gradient-to-r from-primary via-secondary to-accent text-transparent bg-clip-text bg-300% animate-gradient'>
            favourite
          </span>{" "}
          movie.
        </h1>
      </div>
      <div className=' md:navbar-end'>
        <ToggleTheme />
      </div>{" "}
    </div>
  )
}

export default Navbar
