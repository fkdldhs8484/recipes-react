import React from 'react'
import { useState, useEffect } from 'react'
import MovieCont from '../include/MovieCont'
import MovieSearch from '../include/MovieSearch'
import MoviePopular from '../include/MoviePopular'

const Ranking = () => {
  const [rankings, setRankings] = useState([])

  return (
    <>
      <MoviePopular />
      <MovieSearch />
      <MovieCont />
    </>
  )
}

export default Ranking
