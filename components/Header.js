import { signIn, signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/dist/client/router';

function Header() {
  const { data: session } = useSession();
  const router = useRouter();
  return (
    <header className="flex items-center shadow-md">
      <img
        onClick={() => router.push('/')}
        className="w-10 py-2 cursor-pointer"
        src="https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Google_Docs.max-1100x1100.png"
        alt="logo"
      />
      <h3 className="font-bold cursor-pointer text-gray-500">docs</h3>
      <div className="bg-gray-200 space-x-2 ml-2 pl-3 py-2 rounded-md flex-grow">
        <i className="fas fa-search text-gray-500"></i>
        <input
          className="bg-transparent outline-none placeholder-gray-500"
          type="text"
          placeholder="search"
        />
      </div>
      {session ? (
        <>
          <h3 className="font-bold mx-2 text-gray-500">{session.user.name}</h3>
          <img
            onClick={signOut}
            className="w-10 h-10 cursor-pointer rounded-full mx-2"
            src={session.user.image}
            alt="user"
          />
        </>
      ) : (
        <button className="mx-4 text-gray-700" onClick={signIn}>
          sign in
        </button>
      )}
    </header>
  );
}

export default Header;
