import { useRouter } from "next/router"
import { useEffect, useState } from "react"

export default function Home() {
  const [movs, setMovs] = useState([])
  const fetchMovie = async () => { 
    const response = await fetch("/api/movies")
    const movies = await response.json()
    setMovs(movies)
    console.log(movs)
  }

  useEffect(()=> { 
    fetchMovie()
  },[])

  const router = useRouter()
  return (
    <div className="mx-6 mt-5">
      {movs.map(movie => { 
        return(
          <div key={movie._id} className='flex items-center justify-between mb-3 border p-2 rounded-xl cursor-pointer' onClick={() => router.push(movie.link)}>
            <img src={movie.poster} alt={movie.title} width="50px" className="rounded-md"/>
            <span>{movie.title}</span>
            <span>{movie.year}</span>
            <span>{movie.genre}</span>
          </div>
        )
      })}
    </div>
  )
}
