import FilmList from "widgets/FilmList"

import {
  useAppDispatch,
  useAppSelector
} from "@/hooks/store"
import { fetchFilms, selectFilms } from "store/slices/Films"
import { useEffect } from "react"
import { selectQuery } from "store/slices/Filter"

const Home = () => {
  const data = useAppSelector(selectFilms)
  const query = useAppSelector(selectQuery)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchFilms(query))
  }, [])

  return (
    <div>
      <FilmList list={data} />
    </div>
  )
}

export default Home
