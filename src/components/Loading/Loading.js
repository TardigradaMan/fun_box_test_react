import React from 'react';
import CatLoading from './giphy.gif';
import './Loading.scss';

function Error() {
  return (
    <div className="loading">
      <img className="loading__img" src={CatLoading} alt="loading" />
      <h2 className="loading__title">Загружаю, осталось совсем чуть-чуть</h2>
    </div>
  );
}

export default Error;
