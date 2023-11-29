import { ToastContainer } from "react-toastify";
import "./i18n";
import Router from "./routes";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  return (
    <>
      <div className="App font-mono h-screen" style={{ overflowX: "clip" }}>
        <Router />
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
