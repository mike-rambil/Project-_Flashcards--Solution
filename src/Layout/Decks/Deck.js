import React, { useEffect, useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { deleteDeck, readDeck } from '../../utils/api/index';
import BreadCrumb from '../BreadCrumb';
import CardsList from '../Cards/CardsList';

function Deck() {
  const { deckId } = useParams();
  const history = useHistory();
  const [deck, setDeck] = useState({});

  useEffect(() => {
    async function loadDeck() {
      if (deckId) {
        const loadedDeck = await readDeck(deckId);
        setDeck(() => loadedDeck);
      }
    }
    loadDeck();
  }, [deckId]);

  const handleDeckDelete = async () => {
    const confirm = window.confirm(
      'Delete this deck? You will not be able to recover it.'
    );
    if (confirm) {
      await deleteDeck(deckId)
        .then((res) => console.log(res))
        .catch(console.log);
      history.push('/');
    }
  };

  if (deck.id) {
    return (
      <div>
        <BreadCrumb
          link={`/decks/${deckId}`}
          linkName={deck.name}
          pageName={deck.name}
        />
        <h3>{deck.name}</h3>
        <p>{deck.description}</p>
        <div className='row justify-content-between'>
          <div className='col-8'>
            <Link to={`/decks/${deckId}/edit`}>
              <button className='btn btn-secondary mr-1'>Edit</button>
            </Link>
            <Link to={`/decks/${deckId}/study`}>
              <button className='btn btn-primary mr-1'>Study</button>
            </Link>
            <Link to={`/decks/${deckId}/cards/new`}>
              <button className='btn btn-primary'>Add Card</button>
            </Link>
          </div>
          <div className='col-2'>
            <button className='btn btn-danger' onClick={handleDeckDelete}>
              Delete
            </button>
          </div>
        </div>
        <CardsList deck={deck} />
      </div>
    );
  }
  return 'There must be at least 3 cards to Study. Create more cards!';
}

export default Deck;
