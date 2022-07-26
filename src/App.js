import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


import Home from "./components/Home/index"
import AllGrains from "./components/ViewALL/AllGrains"
import AllHerbs from "./components/ViewALL/AllHerbs"
import AllPulses from "./components/ViewALL/AllPulses"
import AllSalts from "./components/ViewALL/AllSalts"
import AllSeeds from "./components/ViewALL/AllSeeds"
import AllSpices from "./components/ViewALL/AllSpices"
import AllSquash from "./components/ViewALL/AllSquash"
import AllFlour from "./components/ViewALL/AllFlour"
import NotFound from "./components/404NotFound/index"
import "./App.css";



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AllGrains" element={<AllGrains />} />
        <Route path="/AllHerbs" element={<AllHerbs />} />
        <Route path="/AllPulses" element={<AllPulses />} />
        <Route path="/AllSalts" element={<AllSalts />} />
        <Route path="/AllSeeds" element={<AllSeeds />} />
        <Route path="/AllSpices" element={<AllSpices />} />
        <Route path="/AllSquash" element={<AllSquash />} />
        <Route path="/AllFlour" element={<AllFlour />} />
        <Route path="/NotFound" element={<NotFound />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>             
  )
}

export default App
