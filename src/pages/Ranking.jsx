import React from 'react'
import { useState, useEffect } from 'react'
import Rankign from '../include/RankingConts'

const Ranking = () => {
  const [rankings, setRankings] = useState([])

  useEffect(() => {
    fetch('​https://recipesapi2.p.rapidapi.com/recipes/tomato%20soup')
      .then((response) => response.json())
      .then((result) => setRankings(result.results))
      .catch((error) => console.log(error))
  }, [])

  return (
    <>
      <Rankign rankings={rankings} />
    </>
  )
}

export default Ranking
