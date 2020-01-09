
import React, { useState } from 'react';
import './Content.css';

const Content = () => {
  const startInfo = [
    {
      id: 1,
      title: 'length',
      titleUa: 'Довжина масиву або рядка',
      similarTopics: ['arr', 'forIn'],
      like: false,
      category: 'js',
      descriptionEng: 'The length of the array or string. Refreshes on change. For array it can be set, for a line not. If you specify more - fill in the empty elements. If less - irrevocably crop',
      descriptionUa: 'Довжина масиву або рядки. Обновляеться при зміні. Для масиву може бути заданий, для рядка немає. Якщо вказати більше - заповнитися порожніми елементами. Якщо менше - безповоротно обріже масив',
      linkToDocumentationEng: [
        'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/length'
      ],
      linkToDocumentationUA: [
        'https://developer.mozilla.org/uk/docs/Web/JavaScript/Reference/Global_Objects/String/length',
        'https://learn.javascript.ru/array#nemnogo-o-length'
      ],
      author: 'Anton Kuts',
      authorContactLink: 'https://www.linkedin.com/in/anton-kuts/',
      dateIntroductionOrUpdate: 'https://www.linkedin.com/in/anton-kuts/',
      code: 'arr.length',
      display: true,
      mandatoryAttributes: null
    },
    {
      id: 2,
      title: 'for',
      titleUa: 'Цикл, перебір масиву чи рядка',
      similarTopics: ['arr', 'length'],
      like: true,
      category: 'js',
      descriptionEng: 'Loop array or string',
      descriptionUa: 'Цикл, перебір масиву чи рядка',
      linkToDocumentationEng: [
        'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for'
      ],
      linkToDocumentationUA: [
        'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/for',
        'https://learn.javascript.ru/while-for#tsikl-for'
      ],
      author: 'Anton Kuts',
      authorContactLink: 'https://www.linkedin.com/in/anton-kuts/',
      dateIntroductionOrUpdate: 'https://www.linkedin.com/in/anton-kuts/',
      code: 'for (var i = 0; i < arr.length; i++) { arr[i] }',
      display: true,
      mandatoryAttributes: '(;;)'
    }
  ];
  const [info, setInfo] = useState(startInfo);
  const setLike = item => {
    item.like = !item.like;
    const newInfo = [...info];
    newInfo.splice(item.id-1, 1, item);
    setInfo(newInfo);
  }
  console.log('________info_________');
  console.log(info);
  return (
    <div className="content">
      {info.map(item =>
      <div className="main-box" key={item.title}>
        <div className="title-box">
          <a name={item.title} className="a-for-anchor-in" >
            <h3>{item.title}</h3>
          </a>
          <p className= {`like ${item.like ? 'yesLike' : 'noLike'}`} onClick={() => setLike(item)}>like</p>
          <span className="sep">|</span>
          <p>{item.titleUa}</p>
          <span className="sep">|</span>
          <div className="tooltip-category">
            <span className="tooltip-text-category">category</span>
            <p>{item.category}</p>
          </div>
          <span className="sep">|</span>
          <div className="tooltip-similar-topics">
            <span className="tooltip-text-similar-topics">similar topics</span>
            {item.similarTopics.map(item => <a key={item} href={`#${item}`}>{item}</a> )}
          </div>
        </div>
      </div>)}
    </div>
  );
}

export default Content;
