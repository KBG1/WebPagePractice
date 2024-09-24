import React from 'react';
import './Community.css';

function Community() {
  return (
    <div className='community-container'>
      <div className='community-title'>
        <div className='community-main'>
          <div className='community-question'>인기 질문💭</div>
          <a href='#'>더보기</a>
        </div>
        <div className='community-ranking'>지식인 랭킹🥇</div>
      </div>

      <div className='community-table'>
        <div className='community-recent-question-container'>
          <div className='community-recent-question'>
            <p>
              <strong>[운동]</strong> 등 운동 했을 때 배기지 않는 방법이
              있을까요? <span>(65)</span>
            </p>
          </div>
          <div className='community-recent-question'>
            <p>
              <strong>[교육]</strong> 기하학 관련해서 질문 드립니다.{' '}
              <span>(32)</span>
            </p>
          </div>

          <div className='community-recent-question'>
            <p>
              <strong>[게임]</strong> 메이플 인내의 숲 공략법좀요{' '}
              <span>(18)</span>
            </p>
          </div>

          <div className='community-recent-question'>
            <p>
              <strong>[법]</strong> 교통사고 관련 질문... <span>(18)</span>
            </p>
          </div>

          <div className='community-recent-question'>
            <p>
              <strong>[생활]</strong> 청소기 추천좀 부탁드립니다!!{' '}
              <span>(20)</span>
            </p>
          </div>
        </div>
        <div className='community-ranking-container'>
          <div className='community-ranking-list'>
            <div className='community-ranking-list-element'>
              <div className='community-ranking-list-element-title'>
                <p className='community-ranking-list-element-medal'>🥇</p>
                <p className='community-ranking-list-element-nickname'>
                  무물보
                </p>
              </div>
              <p className='community-ranking-list-element-question'>
                답변한 질문 수 : 1528개
              </p>
            </div>

            <div className='community-ranking-list-element'>
              <div className='community-ranking-list-element-title'>
                <p className='community-ranking-list-element-medal'>🥈</p>
                <p className='community-ranking-list-element-nickname'>
                  안녕하세요
                </p>
              </div>
              <p className='community-ranking-list-element-question'>
                답변한 질문 수 : 1268개
              </p>
            </div>

            <div className='community-ranking-list-element'>
              <div className='community-ranking-list-element-title'>
                <p className='community-ranking-list-element-medal'>🥉</p>
                <p className='community-ranking-list-element-nickname'>
                  운영자
                </p>
              </div>
              <p className='community-ranking-list-element-question'>
                답변한 질문 수 : 1028개
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Community;
