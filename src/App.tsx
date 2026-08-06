import { Route, Routes } from "react-router";
import { CaseStudy } from "@/pages/CaseStudies";
import { Home } from "@/pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects/:slug" element={<CaseStudy />} />
    </Routes>
  );
}

export default App;
