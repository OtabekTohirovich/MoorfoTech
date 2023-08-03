import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import ServicesPage from "./pages/ServicesPage";
import CompanyPage from "./pages/CompanyPage";
import PartfolioPage from "./pages/PartfolioPage";
import ContactsPage from "./pages/ContactsPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/company" element={<CompanyPage />} />
        <Route path="/partfolio" element={<PartfolioPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
