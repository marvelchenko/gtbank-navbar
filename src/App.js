import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import { useState } from "react";
import { countries, locate, mobilemenu, personal } from "./DummyData";
import CountryPage from "./components/CountryPage";


function App() {
  const [items, setItems] = useState(countries)
  const [branch, setBranch] = useState(locate)
  const [account, setAcount] = useState(personal)
  const [menu, setMenu] = useState(mobilemenu)
  return (
    <>
    <Router>
      <Navbar items={items} branch={branch} account={account} menu={menu} />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/country/:id" element={<CountryPage />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
