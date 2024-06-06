import Navbar from "components/Navbar"
import FilterController from "components/FilterController"

const Header = () => {
  return (
    <header className='mb-8 md:mb-16'>
      <Navbar />
      <div className='flex justify-center'>
        <div className='join join-vertical md:join-horizontal mx-10 w-fit'>
          <input
            type='text'
            placeholder='Search'
            className={"input input-bordered join-item"}
          />
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
