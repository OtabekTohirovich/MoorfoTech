// import { useTranslation } from "react-i18next";
import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import ServicesPage from "./pages/ServicesPage";

function App() {
  // const [t] = useTranslation("global");
  // console.log(i18n);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
