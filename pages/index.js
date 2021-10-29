import React from 'react';
import Head from 'next/head'
import Header from '../components/Header'
import Feed from '../components/Feed';
import Modal from "../components/Modal"
export default function Home() {
  return (
    <div>
      <Head>
        <title>home page</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
      </Head>
      <Header />
      <Feed />
    </div>
  )
}
