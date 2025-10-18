import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import AskAI from './pages/AskAI';
import Login from './pages/Login';
import Signup from './pages/Signup';
export function App() {
  return <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="ask-ai" element={<AskAI />} />
        </Route>
      </Routes>
    </Router>;
}