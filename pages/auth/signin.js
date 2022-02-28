import { getProviders, signIn } from 'next-auth/react';
import Head from 'next/head';

export default function SignIn({ providers }) {
  return (
    <div>
      <Head>
        <title>signin page</title>
      </Head>
      {Object.values(providers).map((provider) => (
        <div
          className="text-center grid place-items-center h-screen"
          key={provider.name}
        >
          <img
            className="w-[150px] m-auto"
            src="https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Google_Docs.max-1100x1100.png"
            alt="logo"
          />
          <button
            className="text-white hover:bg-black bg-blue-500 px-10 py-2"
            onClick={() => signIn(provider.id, { callbackUrl: '/' })}
          >
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </div>
  );
}

// This is the recommended way for Next.js 9.3 or newer
export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
