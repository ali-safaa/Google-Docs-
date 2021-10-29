import { addDoc, collection, serverTimestamp } from '@firebase/firestore'
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react'
import { db } from "../firebase"
import { useCollection, useCollectionOnes } from "react-firebase-hooks/firestore"
function Modal({closeModal}) {
    const [input, setInput] = useState([])
    const {data: session} = useSession();
    const handleNew = async (e) => {
        e.preventDefault();
         const docRef = await addDoc(collection(db, 'input'),{
             name: session.user.name,
             image: session.user.image,
             timestamp: serverTimestamp(),
             fileName: input
         })
         setInput("")
         closeModal(false)
    }
    return (
        <div className="fixed w-full h-full top-0 left-0 flex items-center justify-center bg-gray-300 bg-opacity-50">
            <div className="w-[400px] h-[300px] rounded-md bg-white px-2 shadow-xl">
            <button className="text-2xl" onClick={() => closeModal(false)}>x</button>
            <img className="w-[100px] m-auto" src="https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Google_Docs.max-1100x1100.png" alt="file" />
            <h3 className="font-bold text-center">Import New Document</h3>
            <form className="text-center mt-3">
            <input value={input} onChange={(e) => setInput(e.target.value)} className="bg-transparent mx-2 outline-none" type="text" placeholder="enter name of documents"/>
            </form>
            <div className="flex items-center justify-around  mt-16">
            <button className="text-red-500 font-bold rounded-md px-5 hover:text-black transition duration-500" onClick={() => closeModal(false)}>cancel</button>
            <button onClick={handleNew} className="bg-blue-500 shadow-lg font-bold hover:bg-black transition duration-500 text-white px-5 rounded-md">contine</button>
            </div>
            </div>
        </div>
    )
}

export default Modal
