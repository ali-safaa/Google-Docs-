import React from 'react'
import dynamic from "next/dynamic"
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
const Editor = dynamic(() => import('react-draft-wysiwyg').then
(module => module.Editor),{
    ssr: false
})
function TextEditer() {
    return (
        <div className="bg-[#f8f9fa] pb-16 min-h-screen">
          <Editor toolbarClassName="flex sticky top-0 z-50 justify-center mx-auto"/>
        </div>
    )
}

export default TextEditer
