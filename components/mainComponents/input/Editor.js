import { useRef } from "react";

const TextEditor = ({ name, setValue, error }) => {
  const editor = useRef()

  const handleInput = (e) => {
    const editor = e.target.outerHTML
    
    setValue({
      target :{
      name : name,
      value : editor.replace(/ contenteditable=["']?true["']?/gi, '')
    }})
  }

  return (
    <div className={"text-editor hide-scrollbar"}>
     <div contentEditable onInput={handleInput} ref={editor} className='editor' name={name}></div>
    </div>
  );
};

export default TextEditor;
