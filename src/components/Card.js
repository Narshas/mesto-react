import React from 'react';

export function Card({ cardData, onCardClick }) {
    const handleZoomClick = () => {
        onCardClick(cardData);
    }

    return (
        <li className="elements__item">
            <button type="button" className="elements__trash-button" aria-label="удалить карточку места"></button>
            <img src={cardData.link} alt={cardData.name} className="elements__image" onClick={handleZoomClick} />
            <div className="elements__block">
                <h2 className="elements__title">{cardData.name}</h2>
                <div className="elements__like-container">
                    <button type="button" className="elements__like-button" aria-label="поставить лайк месту"></button>
                    <p className="elements__like-counter">{cardData.likes.length}</p>
                </div>
            </div>
        </li>
    )
}