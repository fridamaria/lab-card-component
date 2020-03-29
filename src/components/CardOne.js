import React from 'react';
import './cardone.css';

export const CardOne = ({ className, cardTitle, emoji, emojiAlt, subTitle, onClick, button }) => {
  return (
    <>
      <article className={className}>
        <div className="title">
          <h2>{cardTitle}</h2>
          <div className="emoji">
            <img src={emoji} alt={emojiAlt} />
          </div>
        </div>
        <div className="sub-title">
          <h3 className="sub-title-text">{subTitle}</h3>
          <button type="button" onClick={onClick}>{button}</button>
        </div>
      </article>
    </>
  )
}