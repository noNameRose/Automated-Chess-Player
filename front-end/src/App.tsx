import { Route, Routes } from "react-router-dom";
import LandingPage from "./Page/LandingPage";
import PixelAnimator from "./Component/PixelAnimator";
import { PixelController } from "./Entity/PixelController";
import { useState } from "react";
import { TransitionContext } from "./context/TransitionContext";


const App = () => {
  const pixelController = new PixelController();
  const [isTransition, setIsTransition] = useState<boolean>(true);
  return (
    <>
      <TransitionContext value={{isTransition: isTransition, setIsTransition: setIsTransition}}>
        <PixelAnimator pixelController={pixelController}/>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
        </Routes>
      </TransitionContext>
    </>
  );
};

export default App;