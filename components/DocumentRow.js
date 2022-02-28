import { useRouter } from 'next/dist/client/router';
import React from 'react';

function DocumentRow({ id, filename, date }) {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`/doc/${id}`)}
      className="flex items-center justify-between mx-3 hover:bg-gray-300 py-1 px-3 rounded-md cursor-pointer"
    >
      <h3 className="text-gray-600 flex justify-center items-center">
        {filename}
      </h3>
      <small>{date.toDate().toLocaleDateString()}</small>
    </div>
  );
}

export default DocumentRow;
