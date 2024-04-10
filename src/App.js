import { BrowserRouter, Route, Routes } from "react-router-dom";
import Services from "./pages/Services";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Message from "./pages/Message";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/message" element={<Message />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contactez-nous" element={<Contact />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="/" index element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
