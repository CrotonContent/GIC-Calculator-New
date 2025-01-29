import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Landmark } from 'lucide-react';
import Calculator from './components/calculator/Calculator';
import GICInformation from './components/content/GICInformation';
import FAQ from './components/FAQ';
import Footer from './components/layout/Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import BlogList from './pages/blog/BlogList';
import BlogPost from './pages/blog/BlogPost';
import AuthorPage from './pages/blog/AuthorPage';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Landmark className="h-8 w-8 text-blue-600" />
                <span className="ml-2 text-2xl font-bold text-gray-900">GICCalculator.ca</span>
              </div>
              <nav>
                <ul className="flex space-x-6">
                  <li>
                    <a href="/blog" className="text-gray-600 hover:text-gray-900">Blog</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>

        <Routes>
          <Route path="/" element={
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center">
                Calculate Your GIC Returns
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-12">
                Plan your secure investment with our GIC calculator. Get instant calculations for your
                Guaranteed Investment Certificate returns with current Canadian rates.
              </p>
              <Calculator />
              <GICInformation />
              <FAQ />
            </main>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/blog/author/:slug" element={<AuthorPage />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;