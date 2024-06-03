import FilmList from "widgets/FilmList"

import { useAppSelector } from "@/hooks/store"
import { selectFilms } from "store/slices/Films"

const Home = () => {
  const data = useAppSelector(selectFilms)

  return (
    <div>
      <FilmList list={data} />
    </div>
  )
}

export default Home
