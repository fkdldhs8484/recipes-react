import React from 'react'

import { useState, useEffect } from 'react'

import ClassBtn from '../include/ClassBtn'
import ClassCont from '../include/ClassCont'

const Class = () => {
  const [images, setImages] = useState([])

  useEffect(() => {
    fetch('https://yummly2.p.rapidapi.com/categories/list')
      .then((response) => response.json())
      .then((result) => setImages(result))
      .catch((error) => console.log(error))
  }, [])

  return (
    <>
      <ClassCont images={images} />
    </>
  )
}

export default Class
