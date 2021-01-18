/* eslint-disable react/prop-types */
import React, { useState } from 'react';

function LinkInput({ sendLink, linkList, sendLinkList }) {
  const [newLink, setNewLink] = useState('');
  console.log('link list in LinkInput component: ', linkList);

  // handle for submitting new link
  const handleLinkInputSubmit = () => {
    console.log('inside handleLinkInputSubmit');

    console.log('newlink when input is submitted', newLink);

    // add the new link to the link list
    linkList.push(newLink);
    const newLinkListCopy = [...linkList];

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
    const newLink = event.target.value;

    // change the display of the input value
    setNewLink(newLink);

    // set the link in the parent component
    sendLink(newLink);
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

function LinkList({ linkList }) {
  // create the jsx for each link in the link list
  const listItems = linkList.map((link, index) => (
    <li key={index}>
      {link}
    </li>
  ));

  // return the jsx display for the link list
  return (
    <div>
      <h5>Link List</h5>
      <ul>
        {listItems}
      </ul>
    </div>
  );
}

export default function App() {
  console.log('running app...');
  const [newLink, setNewLink] = useState('');
  const [linkList, setLinkList] = useState([]);
  console.log('newLink: ', newLink);

  const handleNewLinkSubmit = setNewLink;

  return (
    <div>
      <LinkInput sendLink={handleNewLinkSubmit} linkList={linkList} sendLinkList={setLinkList} />
      <LinkList linkList={linkList} />
    </div>
  );
}
