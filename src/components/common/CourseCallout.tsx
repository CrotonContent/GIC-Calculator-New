import { Link } from 'react-router-dom';

export default function CourseCallout() {
  return (
    <div className="mt-16 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Unlock Higher Returns in 5 Days 🚀
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Join thousands of Canadians who boosted their GIC earnings with our free email course.
        </p>
        
        <Link 
          to="/gic-course"
          className="inline-flex items-center px-8 py-4 text-lg font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
        >
          Start My Free Course →
        </Link>

        <div className="mt-6">
          <div className="flex justify-center text-blue-600 text-2xl mb-2">
            ⭐⭐⭐⭐⭐
          </div>
          <blockquote className="text-gray-600 italic">
            "The course transformed how I use GICs. Now I earn 23% more yearly!"
            <footer className="text-gray-900 font-medium mt-2">
              – Sarah D., Toronto
            </footer>
          </blockquote>
        </div>
      </div>
    </div>
  );
}