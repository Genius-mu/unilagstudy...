import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Home from "./pages/Home";
import SearchPage from "./pages/Search";

function App() {
  return (
    <>
      <div className="bg-[#f1f1f1]">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
