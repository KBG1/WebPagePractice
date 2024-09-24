import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-list'>
        <div className='footer-information-test'>🔎 웹사이트 이용 약관</div>
        <div className='footer-information-test'>📜 질문 전체 보기</div>
        <div className='footer-information-test'>🏆 각 분야별 답변왕</div>
        <div className='footer-information-test'>📢 공지 사항</div>
      </div>
      <div className='tag'>
        <p>
          ✨ 이 웹사이트는 절대로 상업적으로 사용하지 않으며, 개인
          포트폴리오용으로 제작한 웹사이트 입니다.
        </p>
        <p>Designed by KBG</p>
      </div>
    </div>
  );
}

export default Footer;
