import React from 'react';

const Tooltip = ({tooltipText, children, display}) => (
  display
    ?
      <>
        <span className="sep">|</span>
        <div className="tooltip">
          <span className="tooltip-text">{tooltipText}</span>
          {children}
        </div>
      </>
    : null
)

export default Tooltip;
