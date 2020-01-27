import React, { useState } from 'react';
import './App.css';
import Content from './Content';
import Header from './Header';
import { getStartInfo } from './data';

const App = () => {
  const [language, setLanguage] = useState('ua');
  const [info, setInfo] = useState(getStartInfo());
  const [tost, setStateTost] = useState('');
  const [lessons, setLessons] = useState([ ...new Set(info.map(word=> word.lesson))]);
  const [selectLesson, setSelectLesson] = useState(0);

  const setTost = (text) => {
    setStateTost(text);
    setTimeout(()=>setStateTost(''), 300);
  }

  const onlyTitles = info.map(word=> word.tatle); //toDo

  return (
    <div className="App">
      <Header
        tost={tost}
        setInfo={setInfo}
        lessons={lessons}
        setTost={setTost}
        language={language}
        setLanguage={setLanguage}
        selectLesson={selectLesson}
        setStateTost={setStateTost}
        setSelectLesson={setSelectLesson}
      />
      <Content
        info={info}
        setTost={setTost}
        setInfo={setInfo}
        language={language}
      />
    </div>
  );
}

export default App;
