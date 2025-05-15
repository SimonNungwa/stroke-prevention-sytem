import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CheckRiskFactor from './pages/checkRiskFactor';
import Dashboard from './pages/StrokePrevention';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/checkRiskFactor" element={<CheckRiskFactor />} />
          
          {/* <Route path="/Search" element={<Search />} />
                <Route path="/Saved" element={<Saved />} />
                <Route path="/Account" element={<Account />} />
                <Route path="/Auth" element={<Auth />} />
                <Route path="*" element={<MissingPage />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;