
import React, { useState } from 'react';
import './Content.css';

const Content = ({language, setTost}) => {
  const startInfo = [
    {
      id: 1,
      title: 'length',
      intro: 'The length of the array or string',
      introUa: 'Довжина масиву або рядка',
      similarTopics: ['arr', 'forIn'],
      like: false,
      category: 'js',
      descriptionEng: 'The length of the array or string. Refreshes on change. For array it can be set, for a line not. If you specify more - fill in the empty elements. If less - irrevocably crop',
      descriptionUa: 'Довжина масиву або рядки. Обновляеться при зміні. Для масиву може бути заданий, для рядка ні. Якщо вказати більше - заповнитися порожніми елементами. Якщо менше - безповоротно обріже масив.',
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
      code: ['arr.length'],
      display: true,
      mandatoryAttributes: null,
      lesson: 0
    },
    {
      id: 2,
      title: 'for',
      intro: 'Loop array or string',
      introUa: 'Цикл, перебір масиву чи рядка',
      similarTopics: ['arr', 'length'],
      like: true,
      category: 'js',
      descriptionEng: 'Cycle, array, or row search. You can end the iteration by specifying -continue-, or end the loop immediately -break-.',
      descriptionUa: 'Цикл, перебір масиву чи рядка. Можна припинити ітерацію вказавши -continue-, або одразу припинити цикл -break-.',
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
      code:'for (var i = 0; i < arr.length; i++) { \n arr[i];\n}',
      display: true,
      mandatoryAttributes: '(;;)',
      lesson: 0
    },
    {
      id: 3,
      title: 'DOCTYPE',
      intro: 'The type of the current document',
      introUa: 'Tип поточного документа',
      similarTopics: [],
      like: true,
      category: 'html',
      descriptionEng: 'Designed to specify the current document type - DTD (document type definition). <! DOCTYPE> should be the first element in your html document. This is a web browser instruction on how to interpret the current HTML page.',
      descriptionUa: 'Призначений для задання типу поточного документа - DTD (document type definition, опис типу документа). <!DOCTYPE> повинен бути першим елементом в вашому html-документі. Це інструкція для веб-браузера про те, як інтерпретувати поточну HTML сторінку.',
      linkToDocumentationEng: [
        'https://html.spec.whatwg.org/multipage/syntax.html#the-doctype'
      ],
      linkToDocumentationUA: [
        'https://css.in.ua/html/tag/doctype',
      ],
      author: 'Anton Kuts',
      authorContactLink: 'https://www.linkedin.com/in/anton-kuts/',
      dateIntroductionOrUpdate: 'https://www.linkedin.com/in/anton-kuts/',
      code:'<!DOCTYPE html>',
      display: true,
      mandatoryAttributes: '<!DOCTYPE html>',
      lesson: 1
    }
  ];
  const [info, setInfo] = useState(startInfo);
  // const [language, setLanguage] = useState('ua');
  const setLike = item => {
    item.like = !item.like;
    const newInfo = [...info];
    newInfo.splice(item.id-1, 1, item);
    setInfo(newInfo);
  }
  function updateClipboard(text, code) {
    navigator.clipboard.writeText(code)
    .then(function() {
      setTost(`Code '${text}' successfully copy.`);
    }, function() {
      setTost(`Code '${text}' failed copy!`);
    });
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
            <p className= {`like ${item.like ? 'yesLike' : 'noLike'}`} onClick={() => setLike(item)}>
              like
            </p>
            <button onClick={()=> updateClipboard(item.title, item.code)}>
              {language === 'ua' ? 'скопіювати код' : 'copy code'}
            </button>
            <p>{language === 'ua' ? item.introUa : item.intro}</p>
            <span className="sep">|</span>
            <div className="tooltip">
              <span className="tooltip-text">category</span>
              <p>{item.category}</p>
            </div>
            {item.similarTopics.length > 0
              ?
              <>
                <span className="sep d1">|</span>
                <div className="tooltip">
                  <span className="tooltip-text">similar topics</span>
                  {item.similarTopics.map(item => <a key={item} href={`#${item}`}>{item}</a> )}
                </div>
              </>
              : null
            }
            { item.mandatoryAttributes
              ?
              <>
                <span className="sep d2">|</span>
                <div className="tooltip">
                  <span className="tooltip-text">Mandatory Attributes</span>
                  <p className="mandatory-attributes">{item.mandatoryAttributes}</p>
                </div>
              </>
            : null
            }
            <span className="sep">|</span>
            <div className="tooltip">
              <span className="tooltip-text">Links</span>
              {item.linkToDocumentationEng.map((item, index) =>
                <a key={item} href={item} target="_blank" rel="noopener noreferrer">
                  Link {index+1}
                </a> )
              }
            </div>
            { item.linkToDocumentationUA && language === 'ua'
              ?
              <>
                <span className="sep">|</span>
                <div className="tooltip">
                  <span className="tooltip-text">Links UA</span>
                  {item.linkToDocumentationUA.map((item, index) =>
                    <a key={item} href={item} target="_blank" rel="noopener noreferrer">
                      Links UA {index+1}
                    </a> )
                  }
                </div>
              </>
              : null
            }
            { item.lesson
              ?
              <>
                <span className="sep d3">|</span>
                <div className="tooltip">
                  <span className="tooltip-text">Lesson</span>
                  <p>{item.lesson}</p>
                </div>
              </>
              : null
            }
          </div>
          <pre className="code-box" onClick={()=> updateClipboard(item.title, item.code)}>
            {item.code}
          </pre>
          <div className="discription-box">
            <p>{language === 'ua' ? item.descriptionUa : item.descriptionEng}</p>
          </div>
        </div>)
      }
    </div>
  );
}

export default Content;
