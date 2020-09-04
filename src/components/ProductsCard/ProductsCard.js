import React, { useState } from 'react';
import './ProductsCard.scss';
import CatImg from './cat.png';

const ProductsCard = ({ card, addToCart }) => {
  const [selected, selectedCard] = useState(false);
  const [outHover, setHoverOnCard] = useState(false);

  function setSelectedCard() {
    if (+card.quantity === 0) {
      return;
    }
    selectedCard(!selected);
    addToCart();
  }

  function hoverOnCard() {
    if (selected && !outHover) {
      setHoverOnCard(!outHover);
    }
    return;
  }

  function enterOfCard() {
    if (selected && outHover) {
      setHoverOnCard(!outHover);
    }
  }

  const {
    title,
    description,
    descriptionOver,
    portion,
    volume,
    quantity,
    footerText,
  } = card;

  const cardClass = ['card'];
  if (+quantity === 0) {
    cardClass.push('card__disabled');
  }
  if (selected) {
    cardClass.push('card__selected');
  }

  let endedUpTitle;

  if (!selected && card.quantity > 0) {
    endedUpTitle = (
      <div>
        Чего сидишь? Порадуй котэ
        <span onClick={() => setSelectedCard()} className="card__link">
          купи
        </span>
      </div>
    );
  }
  if (selected && card.quantity > 0) {
    endedUpTitle = <div>{footerText}</div>;
  }
  if (+quantity === 0) {
    endedUpTitle = (
      <div>
        Печалька c <span>{title}</span> закончился
      </div>
    );
  }

  return (
    <div className="card__wrapper">
      <div
        onMouseLeave={() => hoverOnCard()}
        onClick={() => setSelectedCard()}
        onMouseEnter={() => enterOfCard()}
        className={cardClass.join(' ')}
      >
        {!outHover && <p className="card__subtitle">{description}</p>}
        {outHover && (
          <p className="card__subtitle card__subtitle--off">
            {descriptionOver}
          </p>
        )}
        <h2 className="card__title">Нямушка</h2>
        <p className="card__title-small">с {title}</p>
        <p className="card__description">
          {portion} порций <br />
          {volume >= 5 && (
            <span>
              5 мышей в подарок
              <br />
              заказчик доволен
            </span>
          )}
          {0.5 < volume && volume < 5 && <span>2 мыши в подарок</span>}
          <br />
        </p>
        <img className="card__img" src={CatImg} alt={`нямушка с ${title}`} />
        <div className="card__size">
          <span>{volume}</span>
          <span>кг</span>
        </div>
      </div>
      <div className="card__buy">{endedUpTitle}</div>
    </div>
  );
};

export default ProductsCard;
