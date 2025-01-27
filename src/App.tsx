import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import "./style.css";
/* import LinkedinNavbar from "./components/LinkedinNavbar"; */
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FooterSection from "./components/Footer";
import ProfilePage from "./components/profile/ProfilePage";

function App() {
  return (
    <BrowserRouter>
      {/* <LinkedinNavbar /> */}
      <Routes>
        <Route path="/" element={<ProfilePage />} />
      </Routes>
      <FooterSection />
    </BrowserRouter>
  );
}

export default App;
