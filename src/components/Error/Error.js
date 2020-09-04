import React from 'react';
import CatError from './tenor.gif';
import './Error.scss';

function Error() {
  return (
    <div className="error">
      <img className="error__img" src={CatError} alt="error"></img>
      <h2 className="error__title">
        Произошла ошибка, попробойте обновить страницу
      </h2>
    </div>
  );
}

export default Error;
