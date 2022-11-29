import React from 'react'
import { useState, useEffect } from 'react'
import YoutubeCont from '../include/YoutubeCont'
import YoutubeSlider from '../include/YoutubeSilder'

const Youtube = () => {
  const [videos, setVideos] = useState([])

  useEffect(() => {
    fetch(
      'https://youtube.googleapis.com/youtube/v3/search?key=AIzaSyD9g0T8YJVNMnbu4l-CPnDzCjg0W3yKkx4&maxResults=30&q=아리아나그란데&type=video&part=snippet'
    )
      .then((response) => response.json())
      .then((result) => console.log(result.items))
      //   .then((result) => setVideos(result.items))
      .catch((error) => console.log('error', error))
  }, [])

  return (
    <>
      <YoutubeSlider />
      <YoutubeCont videos={videos} />
    </>
  )
}

export default Youtube
