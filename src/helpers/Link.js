import React from 'react';

const Link = ({text, href='', className='', name='', target='', rel=''}) => (
    <a href={href} name={name} className={className} target={target} rel={rel}>
      {text}
    </a>
);

export default Link;
