import { useRouter } from 'next/dist/client/router'
import React from 'react'

function DocumentRow(props) {
    const router = useRouter();
    return (
        <div>
            <div className="flex items-center my-3">
            <h3 onClick={() => router.push(`/doc/${props.id}`)} className="text-gray-500 font-bold ml-2 cursor-pointer">{props.fileName}</h3>
            </div>
        </div>
    )
}

export default DocumentRow
