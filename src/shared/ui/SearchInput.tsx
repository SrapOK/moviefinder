import {
  useAppDispatch,
  useAppSelector
} from "@/hooks/store"
import {
  ChangeEventHandler,
  FC,
  InputHTMLAttributes,
  useMemo,
  useState
} from "react"
import { selectQuery, setQuery } from "store/slices/Filter"

import { debounce } from "@/helpers/debounce"

interface SearchInputProps
  extends InputHTMLAttributes<HTMLInputElement> {}

const SearchInput: FC<SearchInputProps> = props => {
  const dispatch = useAppDispatch()
  const defaultQuery = useAppSelector(selectQuery)
  const [localQuery, setLocalQuery] = useState(defaultQuery)

  const debouncedSetQuery = useMemo(() => {
    return debounce(
      query => dispatch(setQuery(query)),
      1000
    )
  }, [])

  const onChange: ChangeEventHandler<
    HTMLInputElement
  > = ev => {
    setLocalQuery(ev.target.value)
    debouncedSetQuery(ev.target.value)
  }

  return (
    <input
      type='text'
      placeholder='Search'
      className={"input input-bordered join-item"}
      onChange={onChange}
      value={localQuery}
      {...props}
    />
  )
}

export default SearchInput
