import dynamic from "next/dynamic";
import { useState } from "react";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";

const TextEditor = ({ name, setValue, error }) => {
  const modules = {
    toolbar: [],
    clipboard: { matchVisual: false },
  };
  const [editorValue, setEditorValue] = useState();

  const changeHandler = (value) => {
    setEditorValue(value);
    let e = {
      target: {
        value: editorValue,
        name: name,
      },
    };
    setValue(e);
  };
  return (
    <div className={"text-editor"}>
      <ReactQuill
        value={editorValue}
        onChange={changeHandler}
        modules={modules}
        placeholder="Start writting here..."
      />
    </div>
  );
};

export default TextEditor;
