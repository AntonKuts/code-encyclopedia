import React from 'react';
import './Header.css';
import Link from './Link';
import { getStartInfo } from './data';

const Header = (props) => {
  const {
    tost,
    setTost,
    lessons,
    setInfo,
    language,
    setLanguage,
    selectLesson,
    setStateTost,
    setSelectLesson
  } = props;

  const changeLanguage = () => {
    const newLanguage = language === 'ua' ? 'en' : 'ua';
    setTost(`Language change to ${language === 'ua' ? 'English' : 'Ukrainian'}!`);
    setLanguage(newLanguage);
  }

  const changeLesson = (number) => {
    setTost(number === 0
      ? 'No selected lesson'
      : `Selected lesson ${number}!`
    );
    setSelectLesson(number);
    setInfo(getStartInfo(number))
  }

  return (
    <>
      <div className="tost" onClick={() => setStateTost('')}>
        {tost}
      </div>
      <div className={`right-panel change-language ${language === 'ua' ? 'select-lesson-box' : ''}`} onClick={() => changeLanguage()}>
        {language === 'ua' ? 'Eng' : 'Ukr'}
      </div>
      <div className={`right-panel change-lessons ${selectLesson === 0 ? '' : 'select-lesson-box'}`}>
        <p>lessons:</p>
        {lessons.map((number, item) =>
          <button key={item} className={selectLesson === number ? 'select-lesson' : ''} onClick={() => changeLesson(number)}>
            {number ? number : 'none'}
          </button>
        )}
      </div>
    </>
  );
}

export default Header;
