import Navbar from "components/Navbar"
import FilterController from "components/FilterController"
import SearchInput from "shared/ui/SearchInput"

const Header = () => {
  return (
    <header className='mb-8 md:mb-16'>
      <Navbar />
      <div className='md:mt-36 flex justify-center'>
        <div className='join join-vertical md:join-horizontal mx-10 w-fit'>
          <SearchInput />
          <FilterController
            sortTypeController={"imdbRating"}
          >
            Рейтинг
          </FilterController>
          <FilterController sortTypeController={"Year"}>
            Дата
          </FilterController>
        </div>
      </div>
    </header>
  )
}

export default Header
