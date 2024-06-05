import {
  asyncThunkCreator,
  buildCreateSlice
} from "@reduxjs/toolkit"

import { createAppSelector } from "@/hooks/store"
import filmApi from "shared/api/films"

const createAsyncSlice = buildCreateSlice({
  creators: {
    asyncThunk: asyncThunkCreator
  }
})

export interface Film {
  imdbID: string
  imdbRating: string
  Metascore: string
  Runtime: string
  Released: string
  Year: string
  Title: string
  Plot: string
  Director: string
  Writer: string
  Actors: string
  Country: string
  Poster: string
  Genres: string
}

interface InitialState {
  list: Film[]
  loading: boolean
  total: number
  error: any
}

const initialState: InitialState = {
  list: [],
  loading: false,
  error: undefined,
  total: 0
}

const filmsSlice = createAsyncSlice({
  name: "films",
  initialState,
  reducers: create => ({
    fetchFilms: create.asyncThunk(
      async (query: string) => {
        const res = await filmApi.getFilms(query)
        console.log(res)
        return res
      },
      {
        pending: state => {
          state.loading = true
        },
        rejected: (state, action) => {
          state.error = action.payload ?? action.error
        },
        fulfilled: (state, action) => {
          if (action.payload) {
            state.list = action.payload.Search
            state.total = action.payload.totalResults
          }
        },
        settled: state => {
          state.loading = false
        }
      }
    )
  }),
  selectors: {
    selectFilm: (state, id: string) => {
      return state.list.filter(film => film.imdbID === id)
    }
  }
})

export const selectFilms = createAppSelector(
  [
    state => state.films.list,
    state => state.filter.sortType,
    state => state.filter.sortOrder
  ],
  (films, sortType, sortOrder) => {
    if (sortType) {
      return films.toSorted((a, b) =>
        sortOrder === "asc"
          ? Number(a[sortType]) - Number(b[sortType])
          : Number(b[sortType]) - Number(a[sortType])
      )
    } else return films
  }
)
export const { fetchFilms } = filmsSlice.actions
export const { selectFilm } = filmsSlice.selectors

export default filmsSlice.reducer
