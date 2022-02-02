// import "./App.css";
import Body from "../../body/Body";
import { useState, useEffect } from "react";
import { GooSpinner } from "react-spinners-kit";

function Home() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
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
      )}
    </>
  );
}

export default Home;
