import Head from 'next/head';
import Header from '../components/Header';
import Feed from '../components/Feed';
export default function Home() {
  return (
    <div>
      <Head>
        <title>home page</title>
      </Head>
      <Header />
      <Feed />
    </div>
  );
}
