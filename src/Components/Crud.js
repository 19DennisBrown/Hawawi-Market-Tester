
import React, {useState, useEffect} from 'react'
import {dataBase} from '../Config/Firebase'
import {getDocs, collection} from 'firebase/firestore'


const Crud = () => {

  const [movieList, setMovieList]=useState([])
  
  useEffect(()=>{
    const handleMovieList= async()=>{
      const movieCollectionRef = collection(dataBase, 'Movies')
      try{
        const data = await getDocs(movieCollectionRef)
        const filteredData = data.docs.map((doc)=>(
          {
            ...doc.data(),
            id: doc.id
          }
        ))
        console.log(filteredData)
        setMovieList(filteredData)
      } catch(err){
        console.log(err)
      }
    };
    handleMovieList()
  }, []);
  return (
    <div  className='crud-component'>
      <h1>Movie List</h1>


      {movieList.map((movie) =>(
        <div  className='movie-container'>
          <h2>{movie.Title}</h2>  
          <h2>{movie.ReleaseDate}</h2>  
        </div>
      ))}
    </div>
  )
}

export default Crud
