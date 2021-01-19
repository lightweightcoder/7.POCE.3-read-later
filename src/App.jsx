/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import LinkInput from './components/LinkInput.jsx';
import LinkList from './components/LinkList.jsx';
import ReadList from './components/ReadList.jsx';

export default function App() {
  console.log('running app...');
  const [newLink, setNewLink] = useState('');
  const [linkList, setLinkList] = useState([]);
  const [readList, setReadList] = useState([]);
  console.log('newLink: ', newLink);

  const handleNewLinkSubmit = setNewLink;

  return (
    <div>
      <LinkInput sendLink={handleNewLinkSubmit} linkList={linkList} sendLinkList={setLinkList} />
      <LinkList linkList={linkList} readList={readList} sendLinkList={setLinkList} sendReadList={setReadList} />
      <ReadList linkList={linkList} readList={readList} sendLinkList={setLinkList} sendReadList={setReadList} />
    </div>
  );
}
