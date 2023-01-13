import { useRouter } from "next/router"

export default function Home({movies}) {
  console.log(movies)
  const router = useRouter()
  return (
    <div className="mx-6 mt-5">
      {movies.map(movie => { 
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

export async function getStaticProps() { 
  const response = await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}:3000/api/movies`)
  const movies = await response.json()
  return{
    props: {movies}
  }
}
