import React from 'react';

const Header = (props) => {
  const {
    setTost,
    setStateTost,
    setLanguage,
    language,
    tost
  } = props;
  const changeLanguage = () => {
    const newLanguage = language === 'ua' ? 'en' : 'ua';
    setTost(`Language change to ${language === 'ua' ? 'English' : 'Ukrainian'}!`);
    setLanguage(newLanguage);
  }

  return (
    <>
      <div className="tost" onClick={() => setStateTost('')}>
        {tost}
      </div>
      <div className="change-language" onClick={() => changeLanguage()}>
        {language === 'ua' ? 'Eng' : 'Ukr'}
      </div>
    </>
  );
}

export default Header;
