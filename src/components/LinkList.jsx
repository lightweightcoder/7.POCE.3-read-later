/* eslint-disable react/prop-types */
import React, { useState } from 'react';

export default function LinkList({
  linkList, readList, sendLinkList, sendReadList,
}) {
  // handle to transfer a link from link list to unread link list
  const handleMarkRead = (event) => {
    const markReadIndex = Number(event.target.value);

    const markedReadLink = linkList[markReadIndex];

    sendReadList([markedReadLink, ...readList]);

    const updatedLinkList = linkList.filter((_, i) => i !== markReadIndex);

    sendLinkList(updatedLinkList);
  };

  // create the jsx for each link in the link list
  const listItems = linkList.map((link, index) => (
    <div key={index} className="row d-flex justify-content-center">
      <div className="col-6">
        <li>
          {`${link} `}
        </li>
      </div>
      <div className="col-6">
        <input type="checkbox" value={index} onChange={handleMarkRead} checked={false} />
      </div>
    </div>
  ));

  // return the jsx display for the link list
  return (
    <div>
      <h4>Link List</h4>
      <div className="row d-flex justify-content-center">
        <div className="col-6">
          <h5>Links</h5>
        </div>
        <div className="col-6">
          <h5>Mark as Read</h5>
        </div>
      </div>
      <ul>
        {listItems}
      </ul>
    </div>
  );
}
