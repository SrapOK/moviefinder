import FilmDetails from "widgets/FilmDetails"
import { useNavigate, useParams } from "react-router-dom"
import type { Film } from "store/slices/Films"

const data: Film = {
  imdbID: "5",
  Title: "jhfas",
  Plot: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse qui veritatis, perspiciatis cum explicabo error nostrum nemo. Iste doloremque aspernatur, repellendus, molestias nihil mollitia minima neque officiis esse praesentium culpa? Aut itaque rem pariatur dolor, inventore voluptatibus error eos, similique saepe dolorum expedita. Sint, laborum impedit commodi culpa repudiandae iste aperiam nam quidem similique deleniti veritatis, voluptate porro ex officiis!  Ratione, commodi dolore tempora veritatis consectetur veniam nesciunt, optio rem fugiat nihil deserunt sunt vero praesentium! Tenetur unde harum facere vero quasi quaerat, at sit nesciunt ipsum aliquam dolores nisi.",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_SX300.jpg",
  Metascore: "80",
  Year: "2010",
  Released: "2010",
  Actors:
    "bibafadsfs fasdf f  fdsa fdasfkjd;kl ajd s;afhdsjk; fhadskflj ds fjapdsf h;afh ;dasjfh dsj;",
  Runtime: "110min",
  Genres: "action",
  Writer: "booba",
  Director: "BBBBB",
  Country: "USA",
  imdbRating: "7.8"
}

const Film = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  return (
    <div>
      <FilmDetails {...data} />
      <div className='w-full flex justify-center mt-10'>
        <button
          onClick={() => navigate(-1)}
          className=' btn  btn-secondary font-semibold text-lg px-8 text-secondary-content'
        >
          Back
        </button>
      </div>
    </div>
  )
}

export default Film
