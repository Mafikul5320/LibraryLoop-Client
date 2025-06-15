import React, { useState } from 'react';
import BorrowedBooksCardPage from './BorrowedBooksCardPage';
const BorrowedBooksCard = ({ BorrowedBooksData }) => {

  const [borrowData, setBorrowData] = useState(BorrowedBooksData);
  console.log(borrowData)
  return (
    <div>
      {
        borrowData.map(oneborror => <BorrowedBooksCardPage key={oneborror._id} oneborror={oneborror} borrowData={borrowData} setBorrowData={setBorrowData}></BorrowedBooksCardPage>)
      }
    </div>

  );
};

export default BorrowedBooksCard;