import {
  createSlice,
  PayloadAction
} from "@reduxjs/toolkit"

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
}

const initialState: InitialState = {
  list: []
}

const filmsSlice = createSlice({
  name: "films",
  initialState,
  reducers: {
    setFilms: (state, action: PayloadAction<Film[]>) => {
      state.list = action.payload
    }
  },
  selectors: {
    selectFilms: state => {
      return state.list
    },
    selectFilm: (state, id) => {
      return state.list.filter(film => film.imdbID === id)
    }
  }
})

export const { setFilms } = filmsSlice.actions
export const { selectFilms, selectFilm } =
  filmsSlice.selectors

export default filmsSlice.reducer
