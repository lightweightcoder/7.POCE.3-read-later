/* eslint-disable react/prop-types */
import React, { useState } from 'react';

export default function LinkList({
  readList, linkList, sendLinkList, sendReadList,
}) {
  // handle to transfer a link from read link list to unread link list
  const handleMarkUnread = (event) => {
    const markUnreadIndex = Number(event.target.value);

    const markedUnreadLink = readList[markUnreadIndex];

    sendLinkList([markedUnreadLink, ...linkList]);

    const updatedReadList = readList.filter((_, i) => i !== markUnreadIndex);

    sendReadList(updatedReadList);
  };

  // create the jsx for each link in the read list
  const listItems = readList.map((link, index) => (
    <div key={index} className="row d-flex justify-content-center">
      <div className="col-6">
        <li key={index}>
          {`${link} `}
        </li>
      </div>
      <div className="col-6">
        <input type="checkbox" value={index} checked={false} onChange={handleMarkUnread} />
      </div>
    </div>
  ));

  // return the jsx display for the link list
  return (
    <div>
      <h4>Read Link List</h4>
      <div className="row d-flex justify-content-center">
        <div className="col-6">
          <h5>Links</h5>
        </div>
        <div className="col-6">
          <h5>Mark as Unread</h5>
        </div>
      </div>
      <ul>
        {listItems}
      </ul>
    </div>
  );
}
