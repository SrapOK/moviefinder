import { Link } from "react-router-dom"

import { FiSun } from "react-icons/fi"
import { FiMoon } from "react-icons/fi"

import { HOME_PAGE } from "app/providers/Router/paths"
import useTheme from "@/hooks/useTheme"

const Header = () => {
  const { toggleTheme } = useTheme()

  return (
    <header className='mb-16'>
      <div className='navbar bg-base-100 gap-6 mb-6  flex-col md:px-10 md:pt-6 justify-center md:flex-row'>
        <div className='navbar-start hidden md:block'>
          <Link
            to={HOME_PAGE}
            className='btn btn-ghost text-xl text-primary'
          >
            MovieFinder
          </Link>
        </div>
        <div className='navbar-center'>
          <h1 className='text-3xl font-bold'>
            Find your{" "}
            <span className='  bg-gradient-to-r from-primary via-secondary to-accent text-transparent bg-clip-text bg-300% animate-gradient'>
              favourite
            </span>{" "}
            movie.
          </h1>
        </div>
        <div className=' md:navbar-end'>
          <label className='flex cursor-pointer align-middle  gap-2'>
            <FiSun size={20} className='my-auto' />
            <input
              onClick={() => toggleTheme()}
              type='checkbox'
              value='light'
              className='toggle theme-controller'
            />
            <FiMoon size={20} className='my-auto' />
          </label>
        </div>
      </div>

      <div className='flex justify-center'>
        <input
          type='text'
          placeholder='Search'
          className='input input-bordered w-96 mx-auto'
        />
      </div>
    </header>
  )
}

export default Header
