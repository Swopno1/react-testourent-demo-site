import React from 'react';

const Heading = ({ children, className }) => {
  return <h1 className={`headtext__cormorant ${className}`}>{children}</h1>;
};

export default Heading;
