import React from 'react';

const Link = ({link='', text, key='', className='', name=''}) => (
  link
  ?
    <a key={key} href={link} name={name} className={className}>
      {text}
    </a>
  :
    <a key={key} name={name} className={className} onClick={onclick}>
      {text}
    </a>
);

export default Link;
