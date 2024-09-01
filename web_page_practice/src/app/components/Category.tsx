import React from "react";
import "./Category.css";

function Category() {
  return (
    <div className="category-container">
      <div className="category-list">
        <div className="category-list-it">IT • 프로그래밍</div>
        <div className="category-list-design">디자인</div>
        <div className="category-list-living">생활</div>
        <div className="category-list-music">음악</div>
        <div className="category-list-history">역사</div>
        <div className="category-list-exercise">운동</div>
        <div className="category-list-law">법</div>
        <div className="category-list-politics">정치</div>
        <div className="category-list-game">게임</div>
        <div className="category-list-education">교육</div>
      </div>
    </div>
  );
}

export default Category;
