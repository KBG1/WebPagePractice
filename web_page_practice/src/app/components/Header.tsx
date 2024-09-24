'use client';

import Image from "next/image";
import "./Header.css";
import search from '../../../public/images/search.png';

function Header() {
  const clickSearchBar = () => {
    alert("검색창을 클릭했습니다!");
  }
  const clickQuestion = () => {
    alert("질문 창 클릭");
  }
  return (
    <div className="header-container">
      <a className="header-logo" href="/">
        KnowHow❔
      </a>
      <div className="header-search-bar">
        <div className="header-search-wrapper">
          <input className="header-search-input" type="text" placeholder="궁금한 지식을 검색해보세요!"/>
          <Image src={search} alt="검색" className="header-search-icon" width={20} height={20} onClick={clickSearchBar}/>
        </div>
      </div>
      <div className="header-list">
        <button className="header-regist-professor" onClick={clickQuestion}>질문 하기</button>
        <button className="header-login-button">로그인</button>
        <button className="header-signup-button">회원 가입</button>
      </div>
    </div>
  );
}

export default Header;
