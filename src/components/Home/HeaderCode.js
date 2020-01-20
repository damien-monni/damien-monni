import React from 'react';

const HeaderCode = ({ className }) => {
  return (
    <picture className={className}>
      <source type="image/webp" srcSet="/img/home-code.webp" />
      <img src="/img/home-code.png" alt="header code snippet" />
    </picture>
  );
};

export default HeaderCode;
