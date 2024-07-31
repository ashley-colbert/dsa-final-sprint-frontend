import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import DisplayTree from "./pages/DisplayTree";
import Home from "./pages/Home";
import Input from "./pages/Input";
import Layout from "./pages/Layout";
import PreviousTrees from "./pages/PreviousTrees";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="enter-numbers" element={<Input />} />
          <Route path="process-numbers" element={<DisplayTree />} />
          <Route path="previous-trees" element={<PreviousTrees />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
