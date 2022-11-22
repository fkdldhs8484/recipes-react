import React from 'react'

import Github from './assets/img/github-icon.png'
import Twitter from './assets/img/twitter-icon.png'

const FooterCont = () => {
  return (
    <section className="footer__wrap">
      <article className="footer__inner">
        <div className="footer__icon">
          <img src={Github} alt="github" />
          <img src={Twitter} alt="twitter" />
        </div>
        <div className="desc">© RECIPES VIDEOS AND PHOTOS</div>
        <div className="desc">COPYRIGHT 2022.</div>
      </article>
    </section>
  )
}

export default FooterCont
