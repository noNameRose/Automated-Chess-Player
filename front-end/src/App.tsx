import { Route, Routes } from "react-router-dom";
import LandingPage from "./Page/LandingPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
      </Routes>
    </>
  );
};

export default App;