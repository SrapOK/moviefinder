import FilmDetails from "widgets/FilmDetails"
import { useNavigate, useParams } from "react-router-dom"
import {
  selectFilmById,
  type Film
} from "store/slices/Films"
import { useAppSelector } from "@/hooks/store"
import filmApi from "shared/api/films"
import { useEffect, useState } from "react"
import { HOME_PAGE } from "app/providers/Router/paths"

const Film = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [film, setFilm] = useState(
    useAppSelector(state => selectFilmById(state, id))
  )

  useEffect(() => {
    if (!id) navigate(HOME_PAGE)
    else {
      const film = filmApi
        .getFilmById(id, "full")
        .then(res => res?.data)
        .then(film => setFilm(film))
    }
  }, [])

  return (
    <div>
      <FilmDetails {...film} />
      <div className='w-full flex justify-center mt-10'>
        <button
          onClick={() => navigate(-1)}
          className='btn btn-secondary font-semibold text-lg px-8 text-secondary-content'
        >
          Back
        </button>
      </div>
    </div>
  )
}

export default Film
