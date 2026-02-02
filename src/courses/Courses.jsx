import { useParams, Link } from "react-router-dom";
import Docs from "../utils/Docs";

const Courses = () => {
  const { id } = useParams();
  const course = Docs.find((c) => c.id === id);

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center p-8 bg-white rounded-lg shadow-md max-w-md">
          <div className="text-6xl mb-4">📚</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Course Not Found
          </h2>
          <p className="text-gray-600 mb-6">
            The course you're looking for doesn't exist or may have been
            removed.
          </p>
          <Link
            to="/"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Courses
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen mt-20 bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-6">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {course.title}
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            {course.description}
          </p>
        </div>

        {/* Documents Section */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Course Materials
          </h2>

          {course.docs.length === 0 ? (
            <p className="text-gray-500 text-center py-8">
              No documents available yet.
            </p>
          ) : (
            <div className="space-y-3">
              {course.docs.map((doc, i) => (
                <a
                  key={i}
                  href={doc}
                  download
                  className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:bg-blue-50 hover:border-blue-300 transition-all group"
                >
                  <span className="text-2xl">📄</span>
                  <div className="flex-1">
                    <span className="text-gray-800 font-medium group-hover:text-blue-600">
                      Document {i + 1}
                    </span>
                  </div>
                  <svg
                    className="w-5 h-5 text-gray-400 group-hover:text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Courses;
