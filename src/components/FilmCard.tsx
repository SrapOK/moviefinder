import { FILM_PAGE } from "app/providers/Router/paths"
import { FC } from "react"
import { Link, useParams } from "react-router-dom"
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
      <div className=' my-4 card card-compact w-fit bg-base-100 shadow-xl transition-all duration-500 hover:shadow-2xl hover:border-base-300 hover:-translate-y-1 cursor-pointer border-2 border-transparent'>
        <figure>
          <img src={props.Poster} alt='poster' />
        </figure>
        <div className='card-body'>
          <h2 className='card-title mx-auto'>
            {props.Title}
          </h2>
          <p>{props.Plot}</p>
          <div className='card-actions flex flex-col lg:flex-row lg:justify-between'>
            <div>Metascore: {props.Metascore}</div>
            <div>Released: {props.Year}</div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default FilmCard
