import React from 'react';
import { Link } from 'react-router-dom';
import ListDecks from './Decks/DeckList';

function Home({ decks, setDecks }) {
  return (
    <div>
      <div>
        <Link to='/decks/new'>
          <button className='btn btn-primary btn-large'>
            <i className='bi bi-plus'></i>Create Deck
          </button>
        </Link>
      </div>
      <ListDecks decks={decks} setDecks={setDecks} />
    </div>
  );
}

export default Home;
