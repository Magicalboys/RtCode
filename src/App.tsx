import Home from "./page/home/index";
import Content from "./page/content/index";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <div>
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path='/content' element={<Content />}></Route>
        </Routes>
      </div>
    </>
  );
};

export default App;
