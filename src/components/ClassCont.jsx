import React from 'react'

import star from '../assets/img/star.png'

const ClassCont = () => {
  return (
    <section className="class__wrap">
      <div className="class__inner">
        <div className="class__box">
          <div className="class__bar">
            <div className="bar-t">
              <div className="icon_cont">
                <img src="/assets/fried-egg.png" alt="반찬" />
                <div>반찬</div>
              </div>
              <div className="icon_cont">
                <img src="/assets/hot-soup.png" alt="국/탕" />
                <div>국/탕</div>
              </div>
              <div className="icon_cont">
                <img src="/assets/donut.png" alt="국/탕" />
                <div>디저트</div>
              </div>
              <div className="icon_cont">
                <img src="/assets/oden.png" alt="면/만두" />
                <div>면/만두</div>
              </div>
              <div className="icon_cont">
                <img src="/assets/bob.png" alt="국/탕" />
                <div>밥/죽/떡</div>
              </div>
              <div className="icon_cont">
                <img src="/assets/Kimchi.png" alt="국/탕" />
                <div>김치/젓갈류</div>
              </div>
              <div className="icon_cont">
                <img src="/assets/sandwichi.png" alt="국/탕" />
                <div>샌드위치</div>
              </div>
              <div className="icon_cont">
                <img src="/assets/jungol.png" alt="국/탕" />
                <div>찌개/전골</div>
              </div>
              <div className="icon_cont">
                <img src="/assets/salad.png" alt="국/탕" />
                <div>샐러드</div>
              </div>
            </div>
            <div className="bar-b">
              <div className="icon_cont">
                <img src="/assets/steak.png" alt="국/탕" />
                <div>양식</div>
              </div>
              <div className="icon_cont">
                <img src="/assets/ting.png" alt="국/탕" />
                <div>튀김</div>
              </div>
              <div className="icon_cont">
                <img src="/assets/drink.png" alt="국/탕" />
                <div>차/음료</div>
              </div>
              <div className="icon_cont">
                <img src="/assets/fish.png" alt="국/탕" />
                <div>고기/생선</div>
              </div>
              <div className="icon_cont">
                <img src="/assets/tray.png" alt="국/탕" />
                <div>기타</div>
              </div>
            </div>
          </div>
          <h2>면/만두</h2>
          <div className="mando__inner">
            <div className="man-t">
              <div>
                <img src="/assets/mando1.png" alt="만두이미지1" />
                <div className="title">비엔나 만두 강정</div>
                <img src={star} alt="별" />
              </div>
              <div>
                <img src="/assets/mando2.png" alt="만두이미지1" />
                <div className="title">
                  만두강정 소스까지 다 만들기 간단간식 맥주 안주로 굿
                </div>
                <img src={star} alt="별" />
              </div>
              <div>
                <img src="/assets/mando3.png" alt="만두이미지1" />
                <div className="title">마늘종 오일 파스타 만들기</div>
                <img src={star} alt="별" />
              </div>
            </div>
            <div className="man-b">
              <div>
                <img src="/assets/mando4.png" alt="만두이미지1" />
                <div className="title">
                  간단하지만 중독성있게 맛있는 간장파스타
                </div>
                <img src={star} alt="별" />
              </div>
              <div>
                <img src="/assets/mando5.png" alt="만두이미지1" />
                <div className="title">차돌박이 파스타</div>
                <img src={star} alt="별" />
              </div>
              <div>
                <img src="/assets/mando6.png" alt="만두이미지1" />
                <div className="title">
                  깐풍만두 전분가루 없이도 맛있는 소스만들기
                </div>
                <img src={star} alt="별" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ClassCont
