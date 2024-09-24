import React from "react";
import "./Category.css";

function Category() {
  return (
    //카테고리 컨테이너.. 누르면 목록을 띄워 줘야한다.
    <div className="category-container">
      <div className="category-list">
        <div className="category-list-item">
          IT • 프로그래밍
          <div className="category-mega-menu">
            <ul>
              <li>웹</li>
              <li>모바일</li>
              <li>네트워크</li>
              <li>컴퓨터 구조</li>
              <li>데이터베이스</li>
              <li>인공지능</li>
              <li>코딩테스트</li>
            </ul>
          </div>
        </div>
        <div className="category-list-item">
          디자인
          <div className="category-mega-menu">
            <ul>
              <li>UI/UX</li>
              <li>그래픽 디자인</li>
              <li>일러스트레이션</li>
              <li>애니메이션</li>
              <li>Design Tools</li>
            </ul>
          </div>
        </div>
        <div className="category-list-item">
          생활
          <div className="category-mega-menu">
            <ul>
              <li>청소</li>
              <li>이사</li>
              <li>장소 추천</li>
              <li>취미</li>
            </ul>
          </div>
        </div>
        <div className="category-list-item">음악
        <div className="category-mega-menu">
            <ul>
              <li>클래식</li>
              <li>K-POP</li>
              <li>성악</li>
              <li>보컬</li>
              <li>기타</li>
              <li>드럼</li>
              <li>피아노</li>
              <li>오케스트라</li>
            </ul>
          </div>
        </div>
        <div className="category-list-item">역사
        <div className="category-mega-menu">
            <ul>
              <li>한국사</li>
              <li>세계사</li>
              <li>동아시아사</li>
              <li>근현대사</li>
            </ul>
          </div>
        </div>
        <div className="category-list-item">운동
        <div className="category-mega-menu">
            <ul>
              <li>헬스</li>
              <li>축구</li>
              <li>야구</li>
              <li>농구</li>
              <li>배구</li>
              <li>배드민턴</li>
              <li>탁구</li>
            </ul>
          </div>
        </div>
        <div className="category-list-item">법
        <div className="category-mega-menu">
            <ul>
              <li>민법</li>
              <li>형법</li>
              <li>법률</li>              
            </ul>
          </div>
        </div>
        <div className="category-list-item">정치
        <div className="category-mega-menu">
            <ul>
              <li>제도 문의</li>
            </ul>
          </div>
        </div>
        <div className="category-list-item">게임
        <div className="category-mega-menu">
            <ul>
              <li>게임 정보</li>
              <li>게임 문의</li>
              <li>게임 제작</li>
              <li>공략</li>
            </ul>
          </div>
        </div>
        <div className="category-list-item">교육
          <div className="category-mega-menu">
            <ul>
              <li>초등 교육</li>
              <li>중등 교육</li>
              <li>고등 교육</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
