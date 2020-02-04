import React, { useState }  from 'react';
import './Header.css';
import Link from '../helpers/Link';

const AllTitles = (props) => {
  const {
    info,
    language,
    setTost
  } = props;

  const [navigationOpen, setNavigationOpen] = useState(true);

  const toggleAllTitles = () => {
    setTost(navigationOpen
      ? 'Close navigation!'
      : 'Open navigation!'
    );
    setNavigationOpen(!navigationOpen);
  }

  const openForAllTitles = language === 'ua' ? 'відкрити' : 'open';
  const closeForAllTitles = language === 'ua' ? 'закрити' : 'close';

  return (
    <nav className={`left-panel all-titles ${navigationOpen ? 'open-all-titles' : ''}`}>
      {navigationOpen
        ?
          info.map((item, index) =>
          <Link key={item.title + index} href={`#${item.title}`} text={item.title} />)
        : null
      }
      <button className='button-all-titles' onClick={() => toggleAllTitles()}>
        {navigationOpen ? closeForAllTitles : openForAllTitles}
      </button>
    </nav>
  );
}

export default AllTitles;
