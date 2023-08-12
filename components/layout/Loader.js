import { useEffect } from "react";
import { useSelector } from "react-redux";

const Loader = () => {
  
  const {loader, purpose} = useSelector((state) => state.loader)

  useEffect(() => {
    if(loader) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }, [loader])
  return (
    loader && (
      <div className="full-page-loader">
        <div className="dot-bricks"></div>
        {purpose != "" ? <p>{purpose}</p> : null}
        
      </div>
    )
  );
};

export default Loader;
