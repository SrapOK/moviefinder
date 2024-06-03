import {
  PayloadAction,
  createSlice
} from "@reduxjs/toolkit"

type FilmType = "movie" | "series" | "episode"

interface InitialState {
  query: string
  filmType?: FilmType
  year?: number
  dataType?: "json" | "xml"
  page?: number
}

const initialState: InitialState = {
  query: "",
  dataType: "xml",
  page: 1
}

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload
    },
    setYear: (state, action: PayloadAction<number>) => {
      state.year = action.payload
    },
    setFilmType: (
      state,
      action: PayloadAction<FilmType>
    ) => {
      state.filmType = action.payload
    }
  },
  selectors: {
    selectCurrentPage: state => {
      return state.page
    },
    selectYear: state => {
      return state.year
    },
    selectQuery: state => {
      return state.query
    }
  }
})

export const { setQuery, setPage, setYear, setFilmType } =
  filterSlice.actions
export const {
  selectCurrentPage,
  selectYear,
  selectQuery
} = filterSlice.selectors

export default filterSlice.reducer
