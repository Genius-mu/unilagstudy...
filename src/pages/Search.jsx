import React, { useState } from "react";
import {
  Search,
  X,
  BookOpen,
  Download,
  Eye,
  Filter,
  SlidersHorizontal,
  TrendingUp,
  Clock,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Hero2 from "../component/Hero2";
import { Link } from "react-router-dom";

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState("recent");

  const departments = [
    "Computer Science",
    "Physics",
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
      id: "cs",
      title: "Computer Science Materials",
      department: "Computer Science",
      level: "200 Level",
      year: "2024",
      downloads: 234,
      views: 1200,
      materialsCount: 45,
      lastUpdated: "2 days ago",
      link: "/course/cs",
    },
    {
      id: "physics",
      title: "Physics Materials",
      department: "Physics",
      level: "100 Level",
      year: "2023",
      downloads: 189,
      views: 890,
      materialsCount: 32,
      lastUpdated: "1 week ago",
      link: "/course/physics",
    },
    {
      id: "law",
      title: "Law Materials",
      department: "Law",
      level: "300 Level",
      year: "2024",
      downloads: 456,
      views: 2100,
      materialsCount: 58,
      lastUpdated: "1 day ago",
      link: "/course/law",
    },
    {
      id: "acc",
      title: "Accounting Materials",
      department: "Accounting",
      level: "200 Level",
      year: "2023",
      downloads: 312,
      views: 1450,
      materialsCount: 41,
      lastUpdated: "3 days ago",
      link: "/course/acc",
    },
    {
      id: "eco",
      title: "Economics Materials",
      department: "Economics",
      level: "200 Level",
      year: "2024",
      downloads: 278,
      views: 1320,
      materialsCount: 37,
      lastUpdated: "5 days ago",
      link: "/course/eco",
    },
    {
      id: "elec",
      title: "Electrical Engineering Materials",
      department: "Electrical Engineering",
      level: "300 Level",
      year: "2023",
      downloads: 198,
      views: 950,
      materialsCount: 29,
      lastUpdated: "1 week ago",
      link: "/course/elec",
    },
  ];

  const filteredMaterials = materials.filter((material) => {
    const matchesSearch =
      material.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      material.department.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDepartment =
      !selectedDepartment || material.department === selectedDepartment;
    const matchesLevel = !selectedLevel || material.level === selectedLevel;
    const matchesYear = !selectedYear || material.year === selectedYear;

    return matchesSearch && matchesDepartment && matchesLevel && matchesYear;
  });

  // Sort materials
  const sortedMaterials = [...filteredMaterials].sort((a, b) => {
    switch (sortBy) {
      case "popular":
        return b.views - a.views;
      case "downloads":
        return b.downloads - a.downloads;
      case "recent":
      default:
        return b.year - a.year;
    }
  });

  const clearFilters = () => {
    setSelectedDepartment("");
    setSelectedLevel("");
    setSelectedYear("");
    setSearchQuery("");
  };

  const activeFiltersCount = [
    selectedDepartment,
    selectedLevel,
    selectedYear,
  ].filter(Boolean).length;

  return (
    <div
      className="w-full min-h-screen bg-gray-50"
      style={{ fontFamily: '"Bricolage Grotesque", sans-serif' }}
    >
      {/* Hero Section */}
      <Hero2 vid={"/videos/vid3.mp4"} />

      {/* Search and Filter Bar */}
      <section className="w-full bg-white shadow-sm border-b border-gray-200 sticky top-20 md:top-24 z-40">
        <div className="w-[90%] max-w-[1200px] mx-auto py-6">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search Input */}
            <div className="flex-1 relative">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Search materials, departments, courses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 md:py-4 rounded-xl border-2 border-gray-200 focus:outline-none focus:border-blue-500 transition-colors duration-300 text-gray-900 placeholder-gray-400"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X size={20} />
                </button>
              )}
            </div>

            {/* Filter Toggle Button */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`flex items-center justify-center gap-2 px-6 py-3 md:py-4 rounded-xl font-semibold transition-all duration-300 border-2 ${
                showFilters
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white text-gray-700 border-gray-200 hover:border-blue-500 hover:text-blue-600"
              }`}
            >
              <SlidersHorizontal size={20} />
              <span>Filters</span>
              {activeFiltersCount > 0 && (
                <span className="bg-blue-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                  {activeFiltersCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <AnimatePresence>
        {showFilters && (
          <motion.section
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full bg-white shadow-md border-b border-gray-200"
          >
            <div className="w-[90%] max-w-[1200px] mx-auto py-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Department Filter */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Department
                  </label>
                  <select
                    value={selectedDepartment}
                    onChange={(e) => setSelectedDepartment(e.target.value)}
                    className="w-full py-3 px-4 rounded-xl border-2 border-gray-200 focus:outline-none focus:border-blue-500 transition-colors duration-300 bg-white text-gray-900 cursor-pointer"
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
                    className="w-full py-3 px-4 rounded-xl border-2 border-gray-200 focus:outline-none focus:border-blue-500 transition-colors duration-300 bg-white text-gray-900 cursor-pointer"
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
                    className="w-full py-3 px-4 rounded-xl border-2 border-gray-200 focus:outline-none focus:border-blue-500 transition-colors duration-300 bg-white text-gray-900 cursor-pointer"
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
              {activeFiltersCount > 0 && (
                <div className="mt-6 flex justify-between items-center">
                  <span className="text-sm text-gray-600">
                    {activeFiltersCount} filter
                    {activeFiltersCount > 1 ? "s" : ""} applied
                  </span>
                  <button
                    onClick={clearFilters}
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-300"
                  >
                    <X size={18} />
                    Clear All Filters
                  </button>
                </div>
              )}
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* Results Section */}
      <section className="w-full py-12">
        <div className="w-[90%] max-w-[1200px] mx-auto">
          {/* Results Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                {sortedMaterials.length} Material
                {sortedMaterials.length !== 1 ? "s" : ""} Found
              </h2>
              <p className="text-gray-600 mt-1">
                Browse through our collection of verified study materials
              </p>
            </div>

            {/* Sort Options */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="py-2 px-4 rounded-lg border-2 border-gray-200 focus:outline-none focus:border-blue-500 bg-white text-gray-900 font-medium cursor-pointer"
              >
                <option value="recent">Most Recent</option>
                <option value="popular">Most Popular</option>
                <option value="downloads">Most Downloads</option>
              </select>
            </div>
          </div>

          {/* Materials Grid */}
          {sortedMaterials.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedMaterials.map((material, i) => (
                <motion.div
                  key={material.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                  className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 p-6 border border-gray-100 hover:-translate-y-2 group"
                >
                  {/* Material Icon */}
                  <div className="bg-blue-50 w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors duration-300">
                    <BookOpen className="text-blue-600" size={28} />
                  </div>

                  {/* Title */}
                  <h3 className="font-bold text-xl text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
                    {material.title}
                  </h3>

                  {/* Department Badge */}
                  <div className="mb-4">
                    <span className="inline-block bg-blue-50 text-blue-700 text-sm font-semibold py-1.5 px-4 rounded-full border border-blue-200">
                      {material.department}
                    </span>
                  </div>

                  {/* Meta Information */}
                  <div className="flex flex-col gap-2 mb-4 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{material.level}</span>
                      <span>•</span>
                      <span>{material.year}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500">
                      <Clock size={14} />
                      <span>{material.lastUpdated}</span>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center gap-6 mb-6 pb-6 border-b border-gray-100">
                    <div className="flex items-center gap-2 text-sm">
                      <div className="bg-gray-100 p-2 rounded-lg">
                        <Download size={16} className="text-gray-600" />
                      </div>
                      <div>
                        <div className="font-bold text-gray-900">
                          {material.downloads}
                        </div>
                        <div className="text-xs text-gray-500">Downloads</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="bg-gray-100 p-2 rounded-lg">
                        <Eye size={16} className="text-gray-600" />
                      </div>
                      <div>
                        <div className="font-bold text-gray-900">
                          {material.views}
                        </div>
                        <div className="text-xs text-gray-500">Views</div>
                      </div>
                    </div>
                  </div>

                  {/* Materials Count */}
                  <div className="mb-4 text-sm text-gray-600">
                    <span className="font-semibold text-gray-900">
                      {material.materialsCount}
                    </span>{" "}
                    study materials available
                  </div>

                  {/* Action Button */}
                  <Link
                    to={material.link}
                    className="block w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-xl font-semibold transition-all duration-300 text-center hover:shadow-lg"
                  >
                    View Materials
                  </Link>
                </motion.div>
              ))}
            </div>
          ) : (
            /* No Results */
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-20"
            >
              <div className="bg-gray-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="text-gray-400" size={40} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                No materials found
              </h3>
              <p className="text-gray-600 mb-6 max-w-md mx-auto">
                Try adjusting your search or filters to find what you're looking
                for
              </p>
              {activeFiltersCount > 0 && (
                <button
                  onClick={clearFilters}
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300"
                >
                  <X size={18} />
                  Clear All Filters
                </button>
              )}
            </motion.div>
          )}
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="w-full py-16 bg-white border-t border-gray-200">
        <div className="w-[90%] max-w-[1200px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <BookOpen className="text-blue-600" size={28} />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">
                5,000+
              </div>
              <div className="text-sm text-gray-600">Study Materials</div>
            </div>
            <div className="text-center">
              <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Download className="text-blue-600" size={28} />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">50K+</div>
              <div className="text-sm text-gray-600">Downloads</div>
            </div>
            <div className="text-center">
              <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="text-blue-600" size={28} />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">
                1,200+
              </div>
              <div className="text-sm text-gray-600">Active Students</div>
            </div>
            <div className="text-center">
              <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Eye className="text-blue-600" size={28} />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">100K+</div>
              <div className="text-sm text-gray-600">Page Views</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SearchPage;
