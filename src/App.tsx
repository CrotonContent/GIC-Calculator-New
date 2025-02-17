import React from 'react';
import { 
  createBrowserRouter, 
  RouterProvider,
  createRoutesFromElements,
  Route,
  Link,
  Outlet
} from 'react-router-dom';
import { Landmark } from 'lucide-react';
import Calculator from './components/calculator/Calculator';
import GICInformation from './components/content/GICInformation';
import FAQ from './components/FAQ';
import Footer from './components/layout/Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import BlogList from './components/blog/BlogList';
import BlogPost from './components/blog/BlogPost';
import ErrorBoundary from './components/common/ErrorBoundary';
import SEO from './components/common/SEO';
import EmailCapture from './pages/EmailCapture';
import CourseCallout from './components/common/CourseCallout';

const Layout: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  
  return (
  <div className="min-h-screen bg-gray-50">
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Landmark className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-2xl font-bold text-gray-900">GICCalculator.ca</span>
            </Link>
          </div>
          <nav className="relative" role="navigation" aria-label="Main navigation">
            {/* Mobile menu button */}
            <button
              className="md:hidden inline-flex items-center p-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle navigation menu"
            >
              <span className="sr-only">Toggle navigation menu</span>
              {mobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>

            {/* Desktop menu */}
            <ul className="hidden md:flex md:space-x-8" role="menubar">
              <li role="none">
                <Link to="/" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors duration-200" role="menuitem">Home</Link>
              </li>
              <li role="none">
                <Link to="/blog" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors duration-200" role="menuitem">Blog</Link>
              </li>
              <li role="none">
                <Link to="/about" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors duration-200" role="menuitem">About</Link>
              </li>
              <li role="none">
                <Link to="/contact" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors duration-200" role="menuitem">Contact</Link>
              </li>
              <li role="none">
                <Link to="/gic-course" className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200 flex items-center space-x-2" role="menuitem">
                  <span>👉</span>
                  <span>Free GIC Mastery Course</span>
                </Link>
              </li>
            </ul>

            {/* Mobile menu */}
            <div
              id="mobile-menu"
              className={`absolute right-0 top-12 w-48 py-2 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 md:hidden transform transition-opacity duration-200 ease-in-out ${mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="mobile-menu-button"
            >
              <Link to="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200" role="menuitem" onClick={() => setMobileMenuOpen(false)}>Home</Link>
              <Link to="/blog" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200" role="menuitem" onClick={() => setMobileMenuOpen(false)}>Blog</Link>
              <Link to="/about" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200" role="menuitem" onClick={() => setMobileMenuOpen(false)}>About</Link>
              <Link to="/contact" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200" role="menuitem" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
              <Link to="/gic-course" className="block px-4 py-2 text-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200 flex items-center space-x-2" role="menuitem" onClick={() => setMobileMenuOpen(false)}>
                <span>👉</span>
                <span>Free GIC Mastery Course</span>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>

    <ErrorBoundary>
      <Outlet />
    </ErrorBoundary>

    <Footer />
  </div>
  );
}

const HomePage = () => (
  <>
    <SEO
      title="GIC Calculator Canada: Compare Rates & Calculate Returns (Free)"
      description="Compare current GIC rates and instantly calculate your returns. Free calculator for compound interest, monthly payments, and penalties."
      url="/"
    />
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center">
      Calculate Your GIC Returns
    </h1>
    <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-12">
      Plan your secure investment with our GIC calculator. Get instant calculations for your
      Guaranteed Investment Certificate returns with current Canadian rates.
    </p>
    <Calculator />
    <CourseCallout />
    <GICInformation />
    <FAQ />
  </main>
  </>
);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="privacy" element={<Privacy />} />
      <Route path="terms" element={<Terms />} />
      <Route path="blog">
        <Route index element={<BlogList />} />
        <Route path=":slug" element={<BlogPost />} />
      </Route>
      <Route path="gic-course" element={<EmailCapture />} />
      <Route path="*" element={
        <div className="max-w-7xl mx-auto px-4 py-8">
          <h1 className="text-2xl font-bold text-gray-900">Page not found</h1>
        </div>
      } />
    </Route>
  )
);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;