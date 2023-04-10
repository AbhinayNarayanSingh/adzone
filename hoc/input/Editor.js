import dynamic from "next/dynamic";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";

const TextEditor = ({ value, setValue, error }) => {
  const modules = {
    toolbar: [],
    clipboard: { matchVisual: false, },
  };
  return (
    <div className={"text-editor"}>
      <ReactQuill
        value={value}
        onChange={setValue}
        modules={modules}
        placeholder="Start writting here..."
      ></ReactQuill>
    </div>
  );
};

export default TextEditor;
