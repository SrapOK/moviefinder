import {
  createSlice,
  PayloadAction
} from "@reduxjs/toolkit"
import { createAppSelector } from "@/hooks/store"

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
  list: [
    {
      imdbID: "1",
      Title: "fds",
      Plot: "fdsaf",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_SX300.jpg",
      Metascore: "99",
      Year: "2004"
    },
    {
      imdbID: "2",
      Title: "jhfas",
      Plot: "lorem",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_SX300.jpg",
      Metascore: "50",
      Year: "2010"
    },
    {
      imdbID: "3",
      Title: "jhfas3",
      Plot: "lorem",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_SX300.jpg",
      Metascore: "83",
      Year: "1999"
    },
    {
      imdbID: "4",
      Title: "jhfas4",
      Plot: "lorem",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_SX300.jpg",
      Metascore: "82",
      Year: "2011"
    },
    {
      imdbID: "5",
      Title: "jhfas",
      Plot: "lorem",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_SX300.jpg",
      Metascore: "81",
      Year: "2012"
    },
    {
      imdbID: "6",
      Title: "6666",
      Plot: "lorem ipsum",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_SX300.jpg",
      Metascore: "7",
      Year: "1950"
    }
  ]
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
export const { setFilms } = filmsSlice.actions
export const { selectFilm } = filmsSlice.selectors

export default filmsSlice.reducer
