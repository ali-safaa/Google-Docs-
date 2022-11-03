import { doc, getDoc } from 'firebase/firestore';
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import DocumentRow from './DocumentRow';
import Modal from './Modal';

function Feed() {
  const [openModal, setOpenModal] = useState(false);
  const { data: session } = useSession();
  const [data, setData] = useState([]);
  const getData = async () => {
    const docRef = doc(db, 'usersDocs', 'Shadow Mary');
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setData(docSnap.data());
    } else {
      console.log('No such document!');
    }
  };
  getData();
  return (
    <div>
      <section className="bg-gray-100 py-2 mt-3">
        <h2 className="text-gray-500 font-bold text-center text-lg my-2">
          Start new document
        </h2>
        {!session ? (
          <h3 className="text-center sm:text-xl text-md text-gray-500">
            sorry you can't make file without signin first
          </h3>
        ) : (
          <>
            <div
              onClick={() => setOpenModal(true)}
              className="bg-white cursor-pointer w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] m-auto text-center flex items-center justify-center"
            >
              <i className="fas fa-plus text-gray-500 text-3xl"></i>
            </div>
            <h3 className="text-gray-500 font-bold text-center my-2">blank</h3>
            {openModal && <Modal closeModal={setOpenModal} />}
          </>
        )}
      </section>
      {!session ? (
        <h1 className="text-center mt-10 text-gray-500">
          ! Opps theres no file here signin to show your files
        </h1>
      ) : (
        <>
          <section>
            <div className="max-w-3xl mx-auto py-8">
              <div className="flex items-center justify-between px-2 text-sm text-gray-700">
                <h2 className="flex-grow">My Document</h2>
                <p className="mr-12">Date Created</p>
                <i className="fas fa-file text-2xl"></i>
              </div>
            </div>
          </section>

          <DocumentRow data={data} />
        </>
      )}
    </div>
  );
}

export default Feed;
