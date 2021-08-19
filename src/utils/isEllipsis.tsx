import React from 'react';

const isEllipsis = (e: React.MouseEvent<HTMLDivElement>) => {
  const { offsetWidth, scrollWidth } = e.currentTarget;
  return offsetWidth < scrollWidth;
};

export default isEllipsis;
