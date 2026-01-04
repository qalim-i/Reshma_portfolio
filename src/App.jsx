import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/layout';
import Hero from './components/sections/hero';
import CV from './components/sections/cv';
import Courses from './components/sections/courses';
import CourseMaterials from './components/sections/course-materials';

import ScrollToTop from './components/utils/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/course-materials" element={<CourseMaterials />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
