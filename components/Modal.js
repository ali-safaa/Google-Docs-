import { useSession } from 'next-auth/react';
import React, { useState } from 'react';
import { db } from '../firebase';
import { collection, doc, serverTimestamp, setDoc } from 'firebase/firestore';

function Modal({ closeModal }) {
  const [input, setInput] = useState('');
  const { data: session } = useSession();

  const addDocument = async (e) => {
    e.preventDefault();
    const docRef = collection(db, 'usersDocs');

    await setDoc(doc(docRef, session.user.name), {
      filename: input,
      name: session.user.name,
      date: serverTimestamp(),
    });
    setInput('');
    closeModal(false);
  };
  return (
    <div className="fixed w-full h-full top-0 flex items-center justify-center bg-gray-300 bg-opacity-50">
      <di className="w-[400px] h-[300px] rounded-xl bg-white shadow-lg">
        <img
          className="w-[100px] mx-auto pt-5"
          src="https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Google_Docs.max-1100x1100.png"
          alt="file"
        />
        <div>
          <div className="grid mt-2">
            <h3 className="font-bold text-center">Import New Document</h3>
            <form className="text-center mt-3">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="bg-transparent outline-none"
                type="text"
                placeholder="type the name of file"
              />
            </form>
          </div>
        </div>
        <div className="flex items-center justify-around  mt-16">
          <button
            className="text-red-500 font-bold rounded-md px-5 hover:text-black transition duration-500"
            onClick={() => closeModal(false)}
          >
            cancel
          </button>
          <button
            onClick={addDocument}
            className="bg-blue-500 font-bold hover:bg-black duration-500 text-white px-8 rounded-md"
          >
            continue
          </button>
        </div>
      </di>
    </div>
  );
}

export default Modal;
