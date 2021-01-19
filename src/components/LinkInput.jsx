/* eslint-disable react/prop-types */
import React, { useState } from 'react';

export default function LinkInput({ sendLink, linkList, sendLinkList }) {
  const [newLink, setNewLink] = useState('');
  console.log('link list in LinkInput component: ', linkList);

  // handle for submitting new link
  const handleLinkInputSubmit = () => {
    console.log('inside handleLinkInputSubmit');

    console.log('newlink when input is submitted', newLink);

    // add the new link to the link list
    const newLinkListCopy = [newLink, ...linkList];

    // set the new link list in the parent component
    sendLinkList(newLinkListCopy);

    // empty the display of the input value
    setNewLink('');

    // set the link in the parent component to empty
    sendLink('');
  };

  // handle for updating the input value as the user types
  const handleChange = (event) => {
    console.log('inside handleChange');

    // change the display of the input value
    setNewLink(event.target.value);

    // set the link in the parent component
    sendLink(event.target.value);
  };

  return (
    <div>
      <label htmlFor="input-link">
        {'link to add: '}
        <input id="input-link" type="text" value={newLink} onChange={handleChange} />
      </label>
      <button type="submit" onClick={handleLinkInputSubmit}> Submit Link </button>
    </div>
  );
}
