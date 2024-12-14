import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Tools from './pages/Tools';
import JsonFormatter from './tools/JsonFormatter';
import Base64Converter from './tools/Base64Converter';
import UrlEncoder from './tools/UrlEncoder';
import ColorConverter from './tools/ColorConverter';
import PasswordGenerator from './tools/PasswordGenerator';
import HashGenerator from './tools/HashGenerator';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="tools" element={<Tools />} />
          <Route path="tools/json-formatter" element={<JsonFormatter />} />
          <Route path="tools/base64" element={<Base64Converter />} />
          <Route path="tools/url-encoder" element={<UrlEncoder />} />
          <Route path="tools/color-converter" element={<ColorConverter />} />
          <Route path="tools/password-generator" element={<PasswordGenerator />} />
          <Route path="tools/hash-generator" element={<HashGenerator />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;