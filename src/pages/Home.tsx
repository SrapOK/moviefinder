import { FilmCardProps } from "components/FilmCard"
import FilmList from "widgets/FilmList"

const list: FilmCardProps[] = [
  {
    imdbID: "1",
    Title: "fds",
    Plot: "fdsaf",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_SX300.jpg",
    Metascore: "100",
    Year: "2004"
  },
  {
    imdbID: "2",
    Title: "jhfas",
    Plot: "lorem",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_SX300.jpg",
    Metascore: "80",
    Year: "2010"
  },
  {
    imdbID: "3",
    Title: "jhfas3",
    Plot: "lorem",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_SX300.jpg",
    Metascore: "80",
    Year: "2010"
  },
  {
    imdbID: "4",
    Title: "jhfas4",
    Plot: "lorem",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_SX300.jpg",
    Metascore: "80",
    Year: "2010"
  },
  {
    imdbID: "5",
    Title: "jhfas",
    Plot: "lorem",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_SX300.jpg",
    Metascore: "80",
    Year: "2010"
  }
]

const MainPage = () => {
  return (
    <div>
      <FilmList list={list} />
    </div>
  )
}

export default MainPage
