import { Route, Routes } from "react-router";

import { ScrollToHash } from "@/components/layout/ScrollToHash";
import { CaseStudy } from "@/pages/CaseStudies";
import { Home } from "@/pages/Home";

function App() {
  return (
    <>
      <ScrollToHash />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:slug" element={<CaseStudy />} />
      </Routes>
    </>
  );
}

export default App;
