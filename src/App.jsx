import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePages";
import KelasPages from "./Pages/KelasPages";
import TestimonialPages from "./Pages/TestimonialPages";
import FaqPages from "./Pages/FaqPages";
import SyaratKetenPage from "./Pages/SyaratKetenPage";
import Project from "./Pages/Project";

import NavbarComponent from "./Components/NavbarComponent";
import FooterComponent from "./Components/FooterComponent";

function App() {
  return (
    <>
      <div>
        <NavbarComponent />

        <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="/kelas" Component={KelasPages} />
          <Route path="/testimonial" Component={TestimonialPages} />
          <Route path="/faq" Component={FaqPages} />
          <Route path="/syaratketen" Component={SyaratKetenPage} />
          <Route path="/Project" Component={Project} />
        </Routes>
      </div>
      <FooterComponent />{" "}
    </>
  );
}

export default App;
