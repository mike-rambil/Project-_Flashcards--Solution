import React from 'react';
import { Link } from 'react-router-dom';

function Card({ card, handleCardDelete }) {
  return (
    <div className='container'>
      <div className='row text-center'>
        <div className='card'>
          <div className='card-body row'>
            <p className='card-text col-6'>{card.front}</p>
            <p className='card-text col-6'>{card.back}</p>
          </div>

          <div className='row'>
            <div>
              <Link to={`/decks/${card.deckId}/cards/${card.id}/edit`}>
                <button className='btn btn-secondary mr-1'>Edit</button>
              </Link>

              <button
                value={card.id}
                className='btn btn-danger'
                onClick={handleCardDelete}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
