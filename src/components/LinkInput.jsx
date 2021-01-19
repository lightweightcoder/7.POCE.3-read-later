/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import validUrl from 'valid-url';

export default function LinkInput({ sendLink, linkList, sendLinkList }) {
  const [newLink, setNewLink] = useState('');
  const [invalidUrlMsg, setInvalidUrlMsg] = useState('');
  console.log('link list in LinkInput component: ', linkList);

  // helper function to add a new link to link list
  const addLinkToList = () => {
    // add the new link to the link list
    const newLinkListCopy = [newLink, ...linkList];

    // set the new link list in the parent component
    sendLinkList(newLinkListCopy);

    // empty the display of the input value
    setNewLink('');

    // set the link in the parent component to empty
    sendLink('');

    // set the invalid msg to empty
    setInvalidUrlMsg('');
  };

  // handle for submitting new link
  const handleLinkInputSubmit = () => {
    console.log('inside handleLinkInputSubmit');

    // returns undefined if its not a valid url, else returns the url
    const isUrlValid = validUrl.isUri(newLink);

    // if Url is valid, add the new link to the link list, else show invalid url message to user
    if (isUrlValid) {
      addLinkToList();
    } else {
      setInvalidUrlMsg('not a valid Url');
    }
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
      <p>{invalidUrlMsg}</p>
    </div>
  );
}
