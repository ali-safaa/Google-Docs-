import { useState } from 'react';
import dynamic from 'next/dynamic';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { db } from '../firebase';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { EditorState } from 'draft-js';
import { convertFromRaw, convertToRaw } from 'draft-js';
import { useDocumentOnce } from 'react-firebase-hooks/firestore';
import { useEffect } from 'react';
function TextEditer() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const router = useRouter();
  const { id } = router.query;
  const { data: session } = useSession();
  const Editor = dynamic(
    () => import('react-draft-wysiwyg').then((module) => module.Editor),
    {
      ssr: false,
    }
  );

  const [snapshot] = useDocumentOnce(
    db
      .collection('userDocs')
      .doc(session?.user?.name)
      .collection('docs')
      .doc(id)
  );

  useEffect(() => {
    if (snapshot?.data()?.editorState) {
      setEditorState(
        EditorState.createWithContent(
          convertFromRaw(snapshot.data().editorState)
        )
      );
    }
  }, [snapshot]);

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
    db.collection('userDocs')
      .doc(session.user.name)
      .collection('docs')
      .doc(id)
      .set(
        {
          editorState: convertToRaw(editorState.getCurrentContent()),
        },
        {
          merge: true,
        }
      );
  };
  return (
    <div className="bg-gray-100 shadow-md h-[300px] md:mx-8 mx-5">
      <Editor
        editorState={editorState}
        onEditorStateChange={onEditorStateChange}
        toolbarClassName="sticky top-0"
        editorClassName="bg-white h-full pl-3"
      />
    </div>
  );
}

export default TextEditer;
