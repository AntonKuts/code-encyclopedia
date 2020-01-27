import React from 'react';

const Link = ({text, href='', key='', className='', name='', target='', rel=''}) => (
    <a key={key} href={href} name={name} className={className} target={target} rel={rel}>
      {text}
    </a>
);

export default Link;
