import { FC } from "react"
import { Link } from "react-router-dom"

import { FILM_PAGE } from "app/providers/Router/paths"

import { Film } from "store/slices/Films"

export type FilmCardProps = Pick<
  Film,
  | "Poster"
  | "Title"
  | "Plot"
  | "Year"
  | "imdbID"
  | "Metascore"
>

const FilmCard: FC<FilmCardProps> = props => {
  return (
    <Link to={FILM_PAGE + props.imdbID}>
      <div className='my-4 card w-min  card-compact bg-base-100 shadow-xl transition-all duration-500 hover:shadow-2xl hover:border-accent hover:-translate-y-6 hover:scale-105 cursor-pointer border border-transparent '>
        <figure>
          <img
            src={props.Poster}
            className=' min-w-fit'
            alt='poster'
          />
        </figure>
        <div className='card-body'>
          <h2 className='card-title mx-auto'>
            {props.Title}
          </h2>
          <p>{props.Plot}</p>
          <div className='card-actions flex flex-col lg:flex-row lg:justify-between'>
            <div>
              Metascore:{" "}
              <span className='text-accent'>
                {props.Metascore}
              </span>{" "}
            </div>
            <div>
              Released:{" "}
              <span className='text-accent'>
                {props.Year}
              </span>{" "}
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default FilmCard
