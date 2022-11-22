import React from 'react'

const HeaderCont = () => {
  return (
    <section className="header__wrap">
      <article className="header__inner">
        <h1>
          RECIPES
          <span className="header__box"></span>
        </h1>
        <div class="header__mune">
          <ul>
            <li>
              <img
                className="header__icon"
                src="/src/img/orange-one.png"
                alt="라임"
              />
              오늘의 레시피
            </li>
            <li>CLASSIFICATION</li>
            <li>RANKING</li>
            <li>YOUTUBE</li>
          </ul>
        </div>
        <div className="header__more">
          <span className="header__box"></span>
          <h2>MORE</h2>
        </div>
      </article>
    </section>
  )
}

export default HeaderCont
