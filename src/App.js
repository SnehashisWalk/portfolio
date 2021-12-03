import "./App.css";
import Art from "./components/art/Art";
import Body from "./components/body/Body";
import { useState, useEffect } from "react";
import { GooSpinner } from "react-spinners-kit";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {loading ? (
        <div className="loadingScreen">
          <GooSpinner size={100} color="#11998e" loading={loading} />
        </div>
      ) : (
        <>
          <Body />
        </>
        /* <div className="container">
          <div className="art">
            <Art />
          </div>
          <Body />
        </div> */
      )}
    </>
  );
}

export default App;
