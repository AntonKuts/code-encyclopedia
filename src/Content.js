
import React, { useState } from 'react';
import './Content.css';
import Tooltip from './Tooltip';
import { getStartInfo } from './data';

const Content = ({language, setTost}) => {

  const [info, setInfo] = useState(getStartInfo());

  const setLike = item => {
    item.like = !item.like;
    const newInfo = [...info];
    newInfo.splice(item.id-1, 1, item);
    setInfo(newInfo);
  };

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
};

export default Content;
