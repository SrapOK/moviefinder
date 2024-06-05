import { Film } from "store/slices/Films"
import $host from "."

type FilmsResponse = {
  Search: Film[]
  totalResults: number
  Response: boolean
}

type Plot = "full" | ""

class filmApi {
  static getFilmById = async (
    id: string,
    plot: Plot = ""
  ) => {
    try {
      const data = await $host.get<Film>("", {
        params: { i: id, plot: plot }
      })
      return data
    } catch (e) {
      console.warn(e)
    }
  }

  static getFilms = async (s: string) => {
    try {
      const data = await $host.get<FilmsResponse>("", {
        params: {
          s: s
        }
      })
      const preparedData = await filmApi.populateFilms(
        data.data.Search
      )
      return { ...data.data, Search: preparedData }
    } catch (e) {
      console.warn(e)
    }
  }

  protected static populateFilms = async (
    films: Film[]
  ) => {
    const populatedFilms = await Promise.all(
      films.map(async film => {
        const newData = await filmApi.getFilmById(
          film.imdbID
        )
        const result = { ...film, ...newData?.data }
        return result
      })
    )
    return populatedFilms
  }
}

export default filmApi
