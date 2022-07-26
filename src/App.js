import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./components/Home/index"
import ViewALL from "./components/ViewALL/index"
import NotFound from "./components/404NotFound/index"

import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/viewall/" element={<ViewALL />} />
        <Route path="/NotFound" element={<NotFound />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
