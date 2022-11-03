import { useRouter } from 'next/dist/client/router';

function DocumentRow({ data }) {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`/doc/${id}`)}
      className="flex items-center justify-between mx-3 hover:bg-gray-300 py-1 px-3 rounded-md cursor-pointer"
    >
      <h3 className="text-gray-600 flex justify-center items-center">
        {data.filename}
      </h3>
      <small>{data.name}</small>
    </div>
  );
}

export default DocumentRow;
