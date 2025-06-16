import React, { use, useState } from 'react';
import BorrowedBooksCardPage from './BorrowedBooksCardPage';
const BorrowedBooksCard = ({ BorrowedBooksData }) => {
  const data = use(BorrowedBooksData)
  const [borrowData, setBorrowData] = useState(data);
  // console.log(data)
  return (
    <div>
      {
        borrowData.map(oneborror => <BorrowedBooksCardPage key={oneborror._id} oneborror={oneborror} borrowData={borrowData} setBorrowData={setBorrowData} ></BorrowedBooksCardPage>)
      }
    </div>

  );
};

export default BorrowedBooksCard;