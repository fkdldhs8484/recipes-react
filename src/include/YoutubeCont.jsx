import React from 'react'

const YoutubeVideos = ({ videos }) => {
  return (
    <li>
      <a href={`https://www.youtube.com/watch?v=${videos.id.videoId}`}>
        <img
          src={videos.snippet.thumbnails.medium.url}
          alt={videos.snippet.description}
        />
        <div className="youtubeTitle">{videos.snippet.title}</div>
      </a>
    </li>
  )
}

const YoutubeCont = ({ videos }) => {
  console.log(videos)

  return (
    <section className="youtube__wrap">
      <div className="youtube__inner">
        <article className="youtube__box1">
          <h2>
            <span>쉐프</span> 추천
          </h2>
          <div className="youtube__icon">
            <ul>
              <li>
                <img src="/assets/youtube01.png" alt="이미지1" />
              </li>
              <li>
                <img src="/assets/youtube02.png" alt="이미지2" />
              </li>
              <li>
                <img src="/assets/youtube03.png" alt="이미지3" />
              </li>
              <li>
                <img src="/assets/youtube04.png" alt="이미지4" />
              </li>
              <li>
                <img src="/assets/youtube05.png" alt="이미지5" />
              </li>
              <li>
                <img src="/assets/youtube06.png" alt="이미지6" />
              </li>
            </ul>
            <button className="youtube__left"></button>
            <button className="youtube__right"></button>
          </div>
        </article>
        <article className="youtube__box2">
          <h3>
            화제의 <span>TV레시피</span>
          </h3>
          <div className="youtube__page">
            <ul>
              {videos &&
                videos.map((videos, index) => (
                  <YoutubeVideos key={index} videos={videos} />
                ))}
            </ul>
          </div>
        </article>
      </div>
    </section>
  )
}

export default YoutubeCont
