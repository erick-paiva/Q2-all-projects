import { ToastContainer } from "react-toastify";
import Routes from "./routes";
import GlobalStyles from "./styles/global";

function App() {
  return (
    <>
    
      <GlobalStyles />
      <Routes />
      <ToastContainer
        className="toasty"
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;
