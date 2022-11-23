import React from 'react'

import Youtube from './assets/img/youtube01.png'

const YoutubeConts = () => {
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
                <img src={Youtube} alt="" />
              </li>
              <li>
                <img src={Youtube} alt="" />
              </li>
              <li>
                <img src={Youtube} alt="" />
              </li>
              <li>
                <img src={Youtube} alt="" />
              </li>
              <li>
                <img src={Youtube} alt="" />
              </li>
              <li>
                <img src={Youtube} alt="" />
              </li>
            </ul>
          </div>
        </article>
        <article className="youtube__box2">
          <h3>화제의 TV레시피</h3>
          <div>dd</div>
        </article>
      </div>
    </section>
  )
}

export default YoutubeConts
