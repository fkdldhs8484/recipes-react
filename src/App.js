import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './components/MainConts'
import Class from './components/ClassCont'
import Ranking from './components/RankingConts'
import Youtube from './components/YoutubeConts'
import Recipes from './components/RecipesConts'

import { HeaderCont, SearchBar, FooterCont } from './components'

const App = () => {
  return (
    <BrowserRouter>
      <HeaderCont />
      <SearchBar />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/class" element={<Class />}></Route>
        <Route path="/recipes" element={<Recipes />}></Route>
        <Route path="/ranking" element={<Ranking />}></Route>
        <Route path="/youtube" element={<Youtube />}></Route>
      </Routes>
      <FooterCont />
    </BrowserRouter>
  )
}

export default App
