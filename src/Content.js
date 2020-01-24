
import React, { useState } from 'react';
import './Content.css';
import Tooltip from './Tooltip';

const Content = ({language, setTost}) => {
  const startInfo = [
    {
      id: 1,
      title: 'length',
      intro: 'The length of the array or string.',
      introUa: 'Довжина масиву або рядка.',
      similarTopics: ['arr', 'forIn'],
      like: false,
      category: 'js',
      descriptionEng: 'Refreshes on change. For array it can be set, for a line not. If you specify more - fill in the empty elements. If less - irrevocably crop',
      descriptionUa: 'Оновляеться при зміні. Для масиву може бути заданий, для рядка ні. Якщо вказати більше - заповнитися порожніми елементами. Якщо менше - безповоротно обріже масив.',
      linkToDocumentationEng: [
        'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/length'
      ],
      linkToDocumentationUA: [
        'https://developer.mozilla.org/uk/docs/Web/JavaScript/Reference/Global_Objects/String/length',
        'https://learn.javascript.ru/array#nemnogo-o-length'
      ],
      author: 'Anton Kuts',
      dateIntroductionOrUpdate: '08.01.2020',
      code: ['arr.length'],
      display: true,
      mandatoryAttributes: null,
      lesson: 0
    },
    {
      id: 2,
      title: 'for',
      intro: 'Loop array or string.',
      introUa: 'Цикл, перебір масиву чи рядка.',
      similarTopics: ['arr', 'length'],
      like: true,
      category: 'js',
      descriptionEng: 'You can end the iteration by specifying -continue-, or end the loop immediately -break-.',
      descriptionUa: 'Можна припинити ітерацію вказавши -continue-, або одразу припинити цикл -break-.',
      linkToDocumentationEng: [
        'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for'
      ],
      linkToDocumentationUA: [
        'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/for',
        'https://learn.javascript.ru/while-for#tsikl-for'
      ],
      author: 'Anton Kuts',
      dateIntroductionOrUpdate: '08.01.2020',
      code:'for (var i = 0; i < arr.length; i++) { \n arr[i];\n}',
      display: true,
      mandatoryAttributes: '(;;)',
      lesson: 0
    },
    {
      id: 3,
      title: 'DOCTYPE',
      intro: 'The type of the current document.',
      introUa: 'Tип поточного документа.',
      similarTopics: ['html'],
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
      dateIntroductionOrUpdate: '20.01.2020',
      code:'<!DOCTYPE html>',
      display: true,
      mandatoryAttributes: '<!DOCTYPE html>',
      lesson: 1
    },
    {
      id: 3,
      title: 'html',
      intro: 'The main container for the entire page.',
      introUa: 'Основний контейнер для всієї сторінки.',
      similarTopics: ['DOCTYPE'],
      like: true,
      category: 'html',
      descriptionEng: 'Comes after DOCTYPE and includes <head> and <body>.',
      descriptionUa: 'Іде після DOCTYPE і включає <head> та <body>.',
      linkToDocumentationEng: [
        'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/html'
      ],
      linkToDocumentationUA: [
        'https://developer.mozilla.org/uk/docs/Web/HTML/%D0%95%D0%BB%D0%B5%D0%BC%D0%B5%D0%BD%D1%82/html',
      ],
      author: 'Anton Kuts',
      dateIntroductionOrUpdate: '24.01.2020',
      code:'<html>\n some code\n</html>',
      display: true,
      mandatoryAttributes: '<html></html>',
      lesson: 1
    }
  ];

  // authorContactLink: 'https://www.linkedin.com/in/anton-kuts/',

  const [info, setInfo] = useState(startInfo);

  const setLike = item => {
    item.like = !item.like;
    const newInfo = [...info];
    newInfo.splice(item.id-1, 1, item);
    setInfo(newInfo);
  }

  function updateClipboard(text, code) {
    navigator.clipboard.writeText(code)
    .then(()=> setTost(`Code '${text}' successfully copy.`), ()=>setTost(`Code '${text}' failed copy!`));
  }

  return (
    <div className="content">
      {info.map((item, index) =>
        <div className="main-box" key={item.title + index}>
          <div className="title-box">
            { item.title
              ?
              <>
                <a name={item.title} className="a-for-anchor-in" >
                  <h3>{item.title}</h3>
                </a>
                <p className= {`like ${item.like ? 'yesLike' : 'noLike'}`} onClick={() => setLike(item)}>
                  like
                </p>
              </>
              : null
            }
            { item.title && item.code
              ?
                <button onClick={()=> updateClipboard(item.title, item.code)}>
                  {language === 'ua' ? 'скопіювати код' : 'copy code'}
                </button>
              : null
            }
            <Tooltip
              display={item.category}
              tooltipText={'Category'}
              children={<p>{item.category}</p>}
            />
            <Tooltip
              display={item.similarTopics && item.similarTopics.length > 0}
              tooltipText={'Similar topics'}
              children={item.similarTopics && item.similarTopics.map((item, index) =>
                <a key={item + index} href={`#${item}`}>{item}</a> )}
            />
            <Tooltip
              display={item.mandatoryAttributes}
              tooltipText={'Mandatory Attributes'}
              children={<p className="mandatory-attributes">{item.mandatoryAttributes}</p>}
            />
            <Tooltip
              display={item.linkToDocumentationEng && item.linkToDocumentationEng.length > 0}
              tooltipText={'Links'}
              children={item.linkToDocumentationEng && item.linkToDocumentationEng.map((item, index) =>
                <a key={item + index} href={item} target="_blank" rel="noopener noreferrer">
                  Link {index+1}
                </a> )
              }
            />
            <Tooltip
              display={item.linkToDocumentationUA && item.linkToDocumentationUA.length > 0 && language === 'ua'}
              tooltipText={'Links UA'}
              children={item.linkToDocumentationUA && item.linkToDocumentationUA.map((item, index) =>
                <a key={item + index} href={item} target="_blank" rel="noopener noreferrer">
                  Links UA {index+1}
                </a> )
              }
            />
            <Tooltip
              display={item.lesson}
              tooltipText={'Lesson'}
              children={<p>{item.lesson}</p>}
            />
            <Tooltip
              display={item.dateIntroductionOrUpdate}
              tooltipText={'Date'}
              children={<p>{item.dateIntroductionOrUpdate}</p>}
            />
          </div>
          { item.title && item.code
            ?
            <pre className="code-box" onClick={()=> updateClipboard(item.title, item.code)}>
              {item.code}
            </pre>
            : null
          }
          { item.introUa || item.intro || item.descriptionUa || item.descriptionEng
            ?
              <div className="discription-box">
                <p>{language === 'ua' && item.introUa ? item.introUa : item.intro ? item.intro : null}</p>
                <p>{language === 'ua' && item.descriptionUa ? item.descriptionUa : item.descriptionEng ? item.descriptionEng : null}</p>
              </div>
            : null
          }
        </div>)
      }
    </div>
  );
}

export default Content;
