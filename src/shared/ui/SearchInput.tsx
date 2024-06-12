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

import { AiOutlineSearch } from "react-icons/ai"

//add loupe

interface SearchInputProps
  extends InputHTMLAttributes<HTMLInputElement> {}

const SearchInput: FC<SearchInputProps> = props => {
  const dispatch = useAppDispatch()
  const defaultQuery = useAppSelector(selectQuery)
  const [localQuery, setLocalQuery] = useState(defaultQuery)

  const debouncedSetQuery = useMemo(() => {
    return debounce(query => dispatch(setQuery(query)), 500)
  }, [])

  const onChange: ChangeEventHandler<
    HTMLInputElement
  > = ev => {
    setLocalQuery(ev.target.value)
    debouncedSetQuery(ev.target.value)
  }

  return (
    <label className='input input-bordered flex items-center gap-2 join-item'>
      <input
        type='text'
        placeholder='Search'
        className={"grow"}
        onChange={onChange}
        value={localQuery}
        {...props}
      />
      <AiOutlineSearch size={20} />
    </label>
  )
}

export default SearchInput
