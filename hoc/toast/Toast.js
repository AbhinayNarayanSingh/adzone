import { ERROR_TOAST_ICON, SUCCESS_TOAST_ICON } from "@/Environment";
import { useSelector } from "react-redux";

const Toast = () => {
  const showToast = useSelector((state) => state.toast)

  return (
    <div id="toast">
      <div className='toast-outer-container'>
        {showToast.show && <div className={`toast-container ${showToast?.isError ? "ERROR" : "SUCCESS"}`}>
          <img src={showToast?.isError ? ERROR_TOAST_ICON : SUCCESS_TOAST_ICON} alt="toast" />
          <p>{showToast?.message}</p>
        </div>}
      </div>

    </div>
  )
}

export default Toast


// useEffect(() => {
//   let timeoutId;

//   if (showToast.show) {
//     timeoutId = setTimeout(() => {
//       setShowToast(defaultState)
//     }, 30000);
//   }

//   return () => {
//     clearTimeout(timeoutId);
//   };
// }, [showToast]);