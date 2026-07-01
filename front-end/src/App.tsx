import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";

const App = () => {

  return (
    <>
      <Routes>
        <Route path="/helloWorld" element={<LandingPage/>} ></Route>
      </Routes>
    </>
  );
};

export default App;