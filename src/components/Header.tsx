import { Link } from "react-router-dom"

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
            className='btn btn-ghost text-xl'
          >
            MovieFinder
          </Link>
        </div>
        <div className='navbar-center'>
          <h1 className='text-3xl font-bold'>
            Find your{" "}
            <span className='  bg-gradient-to-r from-indigo-500 via-purple-500 to-rose-500 text-transparent bg-clip-text bg-300% animate-gradient'>
              favourite
            </span>{" "}
            movie.
          </h1>
        </div>
        <div className=' md:navbar-end'>
          <label className='flex cursor-pointer align-middle  gap-2'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='20'
              height='20'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <circle cx='12' cy='12' r='5' />
              <path d='M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4' />
            </svg>
            <input
              onClick={() => toggleTheme()}
              type='checkbox'
              value='light'
              className='toggle theme-controller'
            />
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='20'
              height='20'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <path d='M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z'></path>
            </svg>
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
