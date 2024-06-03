import { Link } from "react-router-dom"

import { IoIosArrowRoundDown } from "react-icons/io"
import { FiSun } from "react-icons/fi"
import { FiMoon } from "react-icons/fi"

import { HOME_PAGE } from "app/providers/Router/paths"
import {
  useAppDispatch,
  useAppSelector
} from "@/hooks/store"
import useTheme from "@/hooks/useTheme"
import {} from "store/slices/Films"
import {
  selectSortOrder,
  selectSortType,
  setSortOrder,
  setSortType
} from "store/slices/Filter"

const Header = () => {
  const { toggleTheme } = useTheme()
  const dispatch = useAppDispatch()

  const sortOrder = useAppSelector(selectSortOrder)
  const sortType = useAppSelector(selectSortType)

  const toggleSortOrder = () => {
    if (sortOrder === "asc") dispatch(setSortOrder("desc"))
    else dispatch(setSortOrder("asc"))
  }

  return (
    <header className='mb-8 md:mb-16'>
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
        <div className='join join-vertical md:join-horizontal mx-10 w-fit'>
          <input
            type='text'
            placeholder='Search'
            className={"input input-bordered join-item"}
          />
          <div
            onClick={() =>
              sortType === "Metascore"
                ? toggleSortOrder()
                : dispatch(setSortType("Metascore"))
            }
            className={`join-item input input-bordered cursor-pointer text select-none flex py-3 ${
              sortType === "Metascore" ? "bg-base-300" : ""
            }`}
          >
            Рейтинг
            <IoIosArrowRoundDown
              size={20}
              className={`my-auto ${
                sortOrder === "asc" &&
                sortType === "Metascore"
                  ? "rotate-180"
                  : ""
              }`}
            />
          </div>
          <div
            onClick={() =>
              sortType === "Year"
                ? toggleSortOrder()
                : dispatch(setSortType("Year"))
            }
            className={`join-item input input-bordered cursor-pointer text select-none flex py-3 ${
              sortType === "Year" ? "bg-base-300" : ""
            }`}
          >
            Дата
            <IoIosArrowRoundDown
              size={20}
              className={`my-auto ${
                sortOrder === "asc" && sortType === "Year"
                  ? "rotate-180"
                  : ""
              }`}
            />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
