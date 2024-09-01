import Image from "next/image";
import "./Header.css";
import search from '../../../public/images/search.png';

function Header() {
  return (
    <div className="header-container">
      <div className="header-logo">
        KnowHow!
      </div>
      <div className="header-search-bar">
        <div className="header-search-wrapper">
          <input className="header-search-input" type="text" placeholder="궁금한 지식을 검색해보세요!"/>
          <Image src={search} alt="검색" className="header-search-icon" width={20} height={20}/>
        </div>
      </div>
      <div className="header-list">
        <button className="header-regist-professor">질문 하기</button>
        <button className="header-login-button">로그인</button>
        <button className="header-signup-button">회원 가입</button>
      </div>
    </div>
  );
}

export default Header;
