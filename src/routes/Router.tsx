import { Route, Routes, useLocation } from "react-router-dom";
import LayoutWrapper from "../components/layout-wrapper/LayoutWrapper";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Education from "../pages/education/Education";
import Experience from "../pages/experience/Experience";
import ResearchWork from "../pages/research-work/ResearchWork";
import Achievements from "../pages/achievements/Achievements";
import ContactMe from "../pages/contact-me/ContactMe";
import ExtracurricularActivity from "../pages/extracurricular-activity/ExtracurricularActivity";
import { useEffect } from "react";

const AppRouter = () => {
  const location = useLocation();

  useEffect(() => {
    const pathName = location.pathname.slice(1);

    let capitalizedPathname;
    if (pathName === "") {
      capitalizedPathname = "Home";
    } else {
      capitalizedPathname =
        pathName.charAt(0).toUpperCase() + pathName.slice(1);
    }

    document.title = `${capitalizedPathname} - BN Roy`;
  }, [location.pathname]);

  return (
    <Routes>
      <Route element={<LayoutWrapper />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/education" element={<Education />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/research-works" element={<ResearchWork />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/contact-me" element={<ContactMe />} />
        <Route
          path="/extracurricular-activities"
          element={<ExtracurricularActivity />}
        />
      </Route>
    </Routes>
  );
};

export default AppRouter;
