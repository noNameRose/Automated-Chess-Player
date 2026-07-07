import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import PixelTransition from "./pages/PixelTransition";

const App = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage/>} ></Route>
      </Routes>
    </>
  );
};

export default App;