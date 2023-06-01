import React, {useEffect} from 'react'
import '../Styles/App.css'

const Header=()=>{
  return(
    <div>
      <div className="App">
      <header className='header'>
        <p>Search Movies</p>
      </header>
      <section className="search">
        <input type="search" value='The BodyGuard'  placeholder='eg Fast X.'/>  
        <p>SS</p>
      </section>      
    </div>
    </div>
  )
}



const Files = () => {
  
    const apiUrl = 'http://www.omdbapi.com?apikey=6b59b588';
    const Movies  =(props)=>{
      const searchMovies=async(title)=>{
        const response = await fetch(`${apiUrl})&s=${title}`)
        const data = await response.json();
        console.log(data)
      }

      useEffect(()=>{
        searchMovies('SpiderMan')
      },[]) 

      return(
        <div className="movies">
          <div  className='movie'>
            <img src={props.image} alt="logo" />
            <div className="movie-info">
              <h4>Title:  {props.title}</h4>
              <p>Year:  {props.published}</p>
            </div>
          </div>
        </div>
      )
    
    }

  return (
    <div>
      <Header />
      <Movies
        image=''
        title='Movie'
        published='2009'
      />
    </div>
  )
}

export default Files

