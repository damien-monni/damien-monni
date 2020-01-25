import React from 'react';

const HeaderCode = ({ className }) => {
  return (
    <picture className={className}>
      <source type="image/webp" srcSet="/img/home-code.webp?v1" />
      <img src="/img/home-code.png?v1" alt="header code snippet" />
    </picture>
  );
};

export default HeaderCode;
