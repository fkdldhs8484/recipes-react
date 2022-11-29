import React from 'react'

const ClassBtn = ({ displayName }) => {
  const onClick1 = () => {
    displayName('Crazy About Cookies')
  }

  const onClick2 = () => {
    displayName('Crazy About Cookies')
  }

  const onClick3 = () => {
    displayName('Crazy About Cookies')
  }

  const onClick4 = () => {
    displayName('Crazy About Cookies')
  }

  const onClick5 = () => {
    displayName('Crazy About Cookies')
  }

  const onClick6 = () => {
    displayName('Crazy About Cookies')
  }

  const onClick7 = () => {
    displayName('Crazy About Cookies')
  }

  const onClick8 = () => {
    displayName('Crazy About Cookies')
  }

  const onClick9 = () => {
    displayName('Crazy About Cookies')
  }

  const onClick10 = () => {
    displayName('Crazy About Cookies')
  }

  const onClick11 = () => {
    displayName('Crazy About Cookies')
  }

  const onClick12 = () => {
    displayName('Crazy About Cookies')
  }

  const onClick13 = () => {
    displayName('Crazy About Cookies')
  }

  const onClick14 = () => {
    displayName('Crazy About Cookies')
  }

  return (
    <section className="class__wrap">
      <div className="class__inner">
        <div className="class__box">
          <div className="class__bar">
            <div className="bar-t">
              <div className="icon_cont">
                <img src="/assets/fried-egg.png" alt="반찬" />
                <button type="submit" onClick={onClick1}>
                  반찬
                </button>
              </div>
              <div className="icon_cont">
                <img src="/assets/hot-soup.png" alt="국/탕" />
                <button type="submit" onClick={onClick2}>
                  국/탕
                </button>
              </div>
              <div className="icon_cont">
                <img src="/assets/donut.png" alt="국/탕" />
                <button type="submit" onClick={onClick3}>
                  디저트
                </button>
              </div>
              <div className="icon_cont">
                <img src="/assets/oden.png" alt="면/만두" />
                <button type="submit" onClick={onClick4}>
                  면/만두
                </button>
              </div>
              <div className="icon_cont">
                <img src="/assets/bob.png" alt="국/탕" />
                <button type="submit" onClick={onClick5}>
                  밥/죽/떡
                </button>
              </div>
              <div className="icon_cont">
                <img src="/assets/Kimchi.png" alt="국/탕" />
                <button type="submit" onClick={onClick6}>
                  김치/젓갈류
                </button>
              </div>
              <div className="icon_cont">
                <img src="/assets/sandwichi.png" alt="국/탕" />
                <button type="submit" onClick={onClick7}>
                  샌드위치
                </button>
              </div>
              <div className="icon_cont">
                <img src="/assets/jungol.png" alt="국/탕" />
                <button type="submit" onClick={onClick8}>
                  찌개/전골
                </button>
              </div>
              <div className="icon_cont">
                <img src="/assets/salad.png" alt="국/탕" />
                <button type="submit" onClick={onClick9}>
                  샐러드
                </button>
              </div>
            </div>
            <div className="bar-b">
              <div className="icon_cont">
                <img src="/assets/steak.png" alt="국/탕" />
                <button type="submit" onClick={onClick10}>
                  양식
                </button>
              </div>
              <div className="icon_cont">
                <img src="/assets/ting.png" alt="국/탕" />
                <button type="submit" onClick={onClick11}>
                  튀김
                </button>
              </div>
              <div className="icon_cont">
                <img src="/assets/drink.png" alt="국/탕" />
                <button type="submit" onClick={onClick12}>
                  차/음료
                </button>
              </div>
              <div className="icon_cont">
                <img src="/assets/fish.png" alt="국/탕" />
                <button type="submit" onClick={onClick13}>
                  고기/생선
                </button>
              </div>
              <div className="icon_cont">
                <img src="/assets/tray.png" alt="국/탕" />
                <button type="submit" onClick={onClick14}>
                  기타
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ClassBtn
