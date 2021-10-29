import { collection, onSnapshot } from '@firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from '../firebase';
import DocumentRow from './DocumentRow';
import Modal from './Modal';

function Feed() {
    const [openModal, setOpenModal] = useState(false);
    const [data, setData] = useState([]);
    console.log(data)
    useEffect(() => {
      onSnapshot(collection(db, 'input'), (snapshot) =>
      setData(snapshot.docs.map(doc => ({...doc.data(), id:doc.id})))
      )
    },[])
    return (
        <div>
          <section className="bg-gray-100 py-2 mt-3">
        <h2 className="text-gray-500 font-bold text-center text-lg my-2">Start new document</h2>
        <div className="bg-white w-[150px] h-[150px] m-auto text-center flex items-center justify-center">
          <i onClick={() => setOpenModal(true)} className="fas fa-plus text-gray-500 cursor-pointer text-3xl"></i>
        </div>
        <h3 className="text-gray-500 font-bold text-center my-2">blank</h3>
         {openModal && <Modal closeModal={setOpenModal} />}
      </section>
      <section>
        <div className="max-w-3xl mx-auto py-8">
         <div className="flex items-center justify-between px-2 text-sm text-gray-700">
         <h2 className="flex-grow">My Document</h2>
          <p className="mr-12">Date Created</p>
          <i className="fas fa-file text-2xl"></i>
         </div>
        </div>
         </section>
         {data.map(data => 
         <DocumentRow
         key={data.id}
         id={data.id}
         fileName={data.fileName}
         />
          )}
        </div>
    )
}

export default Feed
