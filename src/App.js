import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './include/MainConts'
import Class from './include/ClassCont'
import Ranking from './include/RankingConts'
import Youtube from './include/YoutubeCont'
import Recipes from './include/RecipesConts'
import SearchBar from './include/SearchBar'

import HeaderCont from './layout/HeaderCont'
import FooterCont from './layout/FooterCont'

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
