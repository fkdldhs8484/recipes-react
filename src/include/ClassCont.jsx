import React from 'react'

import star from '../assets/img/star.png'

const ClassCont = ({ images }) => {
  return (
    <section className="class__wrap">
      <div className="class__inner">
        <div className="class__box">
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
