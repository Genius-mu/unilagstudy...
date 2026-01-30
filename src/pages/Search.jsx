import React, { useState } from "react";
import { Search, X, BookOpen, Download, Eye } from "lucide-react";
import { motion } from "framer-motion";
import Hero2 from "../component/Hero2";

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  const departments = [
    "Computer Science",
    "Mass Communication",
    "Law",
    "Business Admin",
    "Accounting",
    "Economics",
    "Electrical Engineering",
    "Medicine",
    "Pharmacy",
    "Psychology",
  ];

  const levels = [
    "100 Level",
    "200 Level",
    "300 Level",
    "400 Level",
    "500 Level",
  ];
  const years = ["2024", "2023", "2022", "2021", "2020", "2019"];

  // Sample materials data
  const materials = [
    {
      id: 1,
      title: "Data Structures and Algorithms Past Questions",
      department: "Computer Science",
      level: "200 Level",
      year: "2024",
      downloads: 234,
      views: 1200,
    },
    {
      id: 2,
      title: "Introduction to Mass Communication Theory",
      department: "Mass Communication",
      level: "100 Level",
      year: "2023",
      downloads: 189,
      views: 890,
    },
    {
      id: 3,
      title: "Constitutional Law Past Questions",
      department: "Law",
      level: "300 Level",
      year: "2024",
      downloads: 456,
      views: 2100,
    },
    {
      id: 4,
      title: "Financial Accounting Exam Questions",
      department: "Accounting",
      level: "200 Level",
      year: "2023",
      downloads: 312,
      views: 1450,
    },
    {
      id: 5,
      title: "Microeconomics Theory Notes",
      department: "Economics",
      level: "200 Level",
      year: "2024",
      downloads: 278,
      views: 1320,
    },
    {
      id: 6,
      title: "Circuit Analysis Past Questions",
      department: "Electrical Engineering",
      level: "300 Level",
      year: "2023",
      downloads: 198,
      views: 950,
    },
  ];

  const filteredMaterials = materials.filter((material) => {
    const matchesSearch = material.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesDepartment =
      !selectedDepartment || material.department === selectedDepartment;
    const matchesLevel = !selectedLevel || material.level === selectedLevel;
    const matchesYear = !selectedYear || material.year === selectedYear;

    return matchesSearch && matchesDepartment && matchesLevel && matchesYear;
  });

  const clearFilters = () => {
    setSelectedDepartment("");
    setSelectedLevel("");
    setSelectedYear("");
  };

  return (
    <div
      className="w-full min-h-screen h-screen bg-gray-50"
      style={{ fontFamily: '"Bricolage Grotesque", sans-serif' }}
    >
      {/* Hero Section */}
      <Hero2 vid={"/videos/vid3.mp4"} />

      {/* Filters Section */}
      {showFilters && (
        <motion.section
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="w-full bg-white shadow-md py-8"
        >
          <div className="w-[90%] max-w-[1200px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Department Filter */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Department
                </label>
                <select
                  value={selectedDepartment}
                  onChange={(e) => setSelectedDepartment(e.target.value)}
                  className="w-full py-3 px-4 rounded-xl border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">All Departments</option>
                  {departments.map((dept) => (
                    <option key={dept} value={dept}>
                      {dept}
                    </option>
                  ))}
                </select>
              </div>

              {/* Level Filter */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Level
                </label>
                <select
                  value={selectedLevel}
                  onChange={(e) => setSelectedLevel(e.target.value)}
                  className="w-full py-3 px-4 rounded-xl border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">All Levels</option>
                  {levels.map((level) => (
                    <option key={level} value={level}>
                      {level}
                    </option>
                  ))}
                </select>
              </div>

              {/* Year Filter */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Year
                </label>
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="w-full py-3 px-4 rounded-xl border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">All Years</option>
                  {years.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Clear Filters Button */}
            {(selectedDepartment || selectedLevel || selectedYear) && (
              <div className="mt-4 flex justify-end">
                <button
                  onClick={clearFilters}
                  className="flex items-center gap-x-2 text-blue-600 hover:text-blue-800 font-semibold transition duration-300"
                >
                  <X size={18} />
                  Clear All Filters
                </button>
              </div>
            )}
          </div>
        </motion.section>
      )}

      {/* Results Section */}
      <section className="w-full py-12">
        <div className="w-[90%] max-w-[1200px] mx-auto">
          {/* Results Count */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              {filteredMaterials.length} Materials Found
            </h2>
            <p className="text-gray-600 mt-1">
              Browse through our collection of study materials
            </p>
          </div>

          {/* Materials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMaterials.map((material, i) => (
              <motion.div
                key={material.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:-translate-y-2"
              >
                {/* Material Icon */}
                <div className="bg-blue-500/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <BookOpen className="text-blue-600" size={24} />
                </div>

                {/* Title */}
                <h3 className="font-bold text-lg text-gray-900 mb-3 line-clamp-2">
                  {material.title}
                </h3>

                {/* Meta Information */}
                <div className="flex flex-col gap-y-2 mb-4">
                  <div className="flex items-center gap-x-2">
                    <span className="bg-green-500/20 text-green-700 text-xs font-semibold py-1 px-3 rounded-full">
                      {material.department}
                    </span>
                  </div>
                  <div className="flex items-center gap-x-2 text-sm text-gray-600">
                    <span>{material.level}</span>
                    <span>•</span>
                    <span>{material.year}</span>
                  </div>
                </div>

                {/* Stats */}
                <div className="flex items-center gap-x-4 mb-4 text-sm text-gray-500">
                  <div className="flex items-center gap-x-1">
                    <Download size={16} />
                    <span>{material.downloads}</span>
                  </div>
                  <div className="flex items-center gap-x-1">
                    <Eye size={16} />
                    <span>{material.views}</span>
                  </div>
                </div>

                {/* Action Button */}
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-xl font-semibold transition duration-300">
                  View Material
                </button>
              </motion.div>
            ))}
          </div>

          {/* No Results */}
          {filteredMaterials.length === 0 && (
            <div className="text-center py-16">
              <div className="bg-gray-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="text-gray-400" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                No materials found
              </h3>
              <p className="text-gray-600">
                Try adjusting your search or filters to find what you're looking
                for
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default SearchPage;
