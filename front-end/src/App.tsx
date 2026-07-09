import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import PixelTransition from "./pages/PixelTransition";
import GamePage from "./pages/GamePage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage/>} ></Route>
        <Route path="/game/*" element={<GamePage/>}></Route>
      </Routes>
    </>
  );
};

export default App;