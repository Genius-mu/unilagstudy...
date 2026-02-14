import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Home from "./pages/Home";
import SearchPage from "./pages/Search";
import UploadPage from "./pages/Upload";
import LoginPage from "./pages/Login";
import GetStartedPage from "./pages/GetStarted";
import Courses from "./courses/Courses";

function App() {
  return (
    <>
      <div className="bg-[#f1f1f1]">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/upload" element={<UploadPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<GetStartedPage />} />
          <Route path="/course/:id" element={<Courses />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
