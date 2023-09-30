import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { createDeck } from '../../utils/api/index';
import BreadCrumb from '../BreadCrumb';
import DeckForm from './DeckForm';

function NewDeck() {
  const initialFormState = {
    name: '',
    description: '',
  };

  const [formData, setFormData] = useState({ ...initialFormState });
  const history = useHistory();

  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    async function deckCreate() {
      try {
        const newDeck = await createDeck(formData);
        history.push(`/decks/${newDeck.id}`);
      } catch (error) {
        console.log(error);
      }
    }
    deckCreate();
  };

  return (
    <div>
      <BreadCrumb link={`/decks/new`} pageName={'Create Deck'} />
      <div>
        <h1>Create Deck</h1>
        <br />
        <DeckForm
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
        <br />
        <br />
        <Link to='/'>
          <button className='btn btn-secondary mr-2'>Cancel</button>
        </Link>
        <button
          type='submit'
          className='btn btn-primary'
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default NewDeck;
