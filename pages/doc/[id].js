import { useRouter } from 'next/dist/client/router';
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { useSession } from 'next-auth/react';
import TextEditor from '../../components/TextEditor';
import { useDocumentOnce } from 'react-firebase-hooks/firestore';
import { db } from '../../firebase';
function Doc() {
  const router = useRouter();
  const { data: session } = useSession();
  const { id } = router.query;
  const [snapshot, loadingSnapshot] = useDocumentOnce(
    db
      .collection('userDocs')
      .doc(session?.user?.name)
      .collection('docs')
      .doc(id)
  );
  // if (!loadingSnapshot && !snapshot?.data()?.filename) {
  //   router.replace('/');
  // }
  return (
    <div>
      <Head>
        <title>doc page</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        />
      </Head>
      <header className="flex items-center justify-between">
        <img
          onClick={() => router.push('/')}
          className="w-10 cursor-pointer py-2"
          src="https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Google_Docs.max-1100x1100.png"
          alt="logo"
        />
        <div className="flex-grow">
          <h1 className="font-bold text-gray-500 ml-5">
            {snapshot?.data()?.filename}
          </h1>
          <div className="flex items-center space-x-3 text-sm text-gray-600 ml-5">
            <p className="cursor-pointer hover:text-blue-300">File</p>
            <p className="cursor-pointer hover:text-blue-300">Edit</p>
            <p className="cursor-pointer hover:text-blue-300">View</p>
            <p className="cursor-pointer hover:text-blue-300">Insert</p>
            <p className="cursor-pointer hover:text-blue-300">Format</p>
            <p className="cursor-pointer hover:text-blue-300">Tools</p>
          </div>
        </div>
        <div className="flex items-center space-x-2 bg-blue-400 rounded-lg px-5 mr-2 py-1 text-white hover:bg-black cursor-pointer transition-all duration-500">
          <i className="fas fa-user-friends"></i>
          <h1>share</h1>
        </div>
        <img
          className="w-10 h-10 rounded-full"
          src={session?.user?.image}
          alt=""
        />
      </header>
      <TextEditor />
    </div>
  );
}

export default Doc;
