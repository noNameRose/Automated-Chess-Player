import { Route, Routes } from "react-router-dom";
import LandingPage from "./Page/LandingPage";
import PixelAnimator from "./Component/PixelAnimator";

const App = () => {
  return (
    <>
      <PixelAnimator/>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
      </Routes>
    </>
  );
};

export default App;