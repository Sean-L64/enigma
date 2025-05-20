import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Analytics } from "@vercel/analytics/next"

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


import Home from "./pages/Home";
import NotFound from "./NotFound";
import History from "./pages/History";
import Machines from "./pages/Machines";
import Impact from "./pages/Impact";
import Turing from "./pages/Turing";
import Rejewski from "./pages/Rejewski";
import Resources from "./pages/Resources";
import Bibliography from "./pages/Bibliography";
import Admin from "./pages/Admin";
import Activate from "./components/Activate";


export default function App() {
  return (
    <BrowserRouter>
    <Analytics />
      <Navbar />
      <Activate />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/history" element={<History />} />
        <Route path="/machines" element={<Machines />} />
        <Route path="/impact" element={<Impact />} />
        <Route path="/turing" element={<Turing />} />
        <Route path="/rejewski" element={<Rejewski />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/bibliography" element={<Bibliography />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  )
}