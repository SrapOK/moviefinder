import {
  PayloadAction,
  createSlice
} from "@reduxjs/toolkit"

export type SortType = "Metascore" | "Year"
export type SortOrder = "asc" | "desc"

interface InitialState {
  query: string
  sortType: SortType
  page?: number
  sortOrder: SortOrder
}

const initialState: InitialState = {
  query: "",
  sortType: "Metascore",
  page: 1,
  sortOrder: "desc"
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
    setSortType: (
      state,
      action: PayloadAction<SortType>
    ) => {
      state.sortType = action.payload
    }
  },
  selectors: {
    selectCurrentPage: state => {
      return state.page
    },
    selectQuery: state => {
      return state.query
    },
    selectSortType: state => {
      return state.sortType
    },
    selectSortOrder: state => {
      return state.sortOrder
    }
  }
})

export const { setQuery, setPage, setSortType } =
  filterSlice.actions
export const {
  selectCurrentPage,
  selectQuery,
  selectSortType,
  selectSortOrder
} = filterSlice.selectors

export default filterSlice.reducer
