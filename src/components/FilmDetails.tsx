import { FC } from "react"
import { Film } from "store/slices/Films"

export type FilmDetails = Pick<
  Film,
  | "Poster"
  | "Title"
  | "Plot"
  | "Released"
  | "imdbID"
  | "Metascore"
  | "imdbRating"
  | "Director"
  | "Actors"
  | "Writer"
  | "Genres"
  | "Runtime"
  | "Country"
>

const FilmDetails: FC<FilmDetails> = props => {
  const {
    Poster,
    Title,
    Plot,
    Released,
    imdbID,
    Metascore,
    imdbRating,
    Director,
    Actors,
    Writer,
    Genres,
    Runtime,
    Country
  } = props

  return (
    <div className='hero min-h-screen bg-base-300 px-4 md:px-20'>
      <div className='hero-content flex-col lg:flex-row gap-10'>
        <div>
          <img
            src={Poster || "poster"}
            className='max-w-sm rounded-lg shadow-2xl'
          />
          <div className=' rounded-lg py-2 px-4 space-y-2 text-lg bg-accent bg-opacity-80 mt-6 text-accent-content'>
            <div className='flex justify-between'>
              <div>Metascore:</div>
              <div>{Metascore}</div>
            </div>
            <div className='flex justify-between'>
              <div>imdbRating:</div>
              <div>{imdbRating}</div>
            </div>
          </div>
        </div>
        <div>
          <h1 className='text-5xl p-4 text-center lg:text-left font-bold text-primary'>
            {Title}
          </h1>
          <div className='flex max-w-96 text-right flex-col gap-1.5 mx-auto lg:mr-0 text-lg'>
            <h2 className=' text-right text-2xl font-semibold text-secondary'>
              About the film
            </h2>
            <div className='flex justify-between gap-4'>
              <div>Released:</div>
              <div>{Released}</div>
            </div>
            <div className='flex justify-between gap-4'>
              <div>Direcotr:</div>
              <div>{Director}</div>
            </div>
            <div className='flex justify-between gap-4'>
              <div>Writer:</div>
              <div>{Writer}</div>
            </div>
            <div className='flex justify-between gap-4'>
              <div>Actors:</div>
              <div>{Actors}</div>
            </div>
            <div className='flex justify-between gap-4'>
              <div>Genres:</div>
              <div>{Genres}</div>
            </div>
            <div className='flex justify-between gap-4'>
              <div>Runtime:</div>
              <div>{Runtime}</div>
            </div>
            <div className='flex justify-between gap-4'>
              <div>Country:</div>
              <div>{Country}</div>
            </div>
          </div>
          <p className='text-pretty indent-10 leading-relaxed text-justify py-8'>
            {Plot}
          </p>
        </div>
      </div>
    </div>
  )
}

export default FilmDetails
