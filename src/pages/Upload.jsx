import React, { useState } from "react";
import { Upload, X, FileText, CheckCircle, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";

const UploadPage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [dragActive, setDragActive] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    department: "",
    level: "",
    year: "",
    courseCode: "",
    description: "",
  });

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

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setSelectedFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const removeFile = () => {
    setSelectedFile(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle upload logic here
    setUploadSuccess(true);
    setTimeout(() => {
      setUploadSuccess(false);
      setSelectedFile(null);
      setFormData({
        title: "",
        department: "",
        level: "",
        year: "",
        courseCode: "",
        description: "",
      });
    }, 3000);
  };

  const isFormValid =
    selectedFile &&
    formData.title &&
    formData.department &&
    formData.level &&
    formData.year &&
    formData.courseCode;

  return (
    <div
      className="w-full min-h-screen bg-gray-50"
      style={{ fontFamily: '"Bricolage Grotesque", sans-serif' }}
    >
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden h-[30em] flex justify-center items-center bg-gradient-to-r from-blue-800 via-blue-600 to-blue-800 py-16">
        <div className="w-[90%] max-w-[800px] mx-auto flex flex-col gap-y-4">
          <h1 className="font-bold text-4xl md:text-5xl text-white text-center">
            Share Your Materials
          </h1>
          <p className="text-white text-center text-lg">
            Help your fellow students by uploading past questions and study
            materials
          </p>
        </div>
      </section>

      {/* Upload Form Section */}
      <section className="w-full py-12">
        <div className="w-[90%] max-w-[800px] mx-auto">
          {/* Success Message */}
          {uploadSuccess && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-green-50 border-2 border-green-500 rounded-xl p-6 mb-6 flex items-center gap-x-4"
            >
              <CheckCircle className="text-green-600" size={32} />
              <div>
                <h3 className="font-bold text-lg text-green-900">
                  Upload Successful!
                </h3>
                <p className="text-green-700">
                  Your material has been uploaded and is now available to other
                  students.
                </p>
              </div>
            </motion.div>
          )}

          {/* Main Upload Card */}
          <div className="bg-white rounded-xl shadow-xl p-8">
            <form onSubmit={handleSubmit} className="flex flex-col gap-y-6">
              {/* File Upload Area */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Upload File *
                </label>
                <div
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                  className={`border-2 border-dashed rounded-xl p-8 text-center transition duration-300 ${
                    dragActive
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-300 bg-gray-50"
                  }`}
                >
                  {!selectedFile ? (
                    <div className="flex flex-col items-center gap-y-4">
                      <div className="bg-blue-500/10 w-16 h-16 rounded-full flex items-center justify-center">
                        <Upload className="text-blue-600" size={32} />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 mb-1">
                          Drag and drop your file here
                        </p>
                        <p className="text-sm text-gray-600 mb-4">
                          or click to browse
                        </p>
                        <label className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-xl font-semibold cursor-pointer inline-block transition duration-300">
                          Choose File
                          <input
                            type="file"
                            onChange={handleFileChange}
                            className="hidden"
                            accept=".pdf,.doc,.docx"
                          />
                        </label>
                      </div>
                      <p className="text-xs text-gray-500">
                        Supported formats: PDF, DOC, DOCX (Max 10MB)
                      </p>
                    </div>
                  ) : (
                    <div className="flex items-center justify-between bg-white rounded-xl p-4 border border-gray-200">
                      <div className="flex items-center gap-x-3">
                        <div className="bg-blue-500/10 w-10 h-10 rounded-lg flex items-center justify-center">
                          <FileText className="text-blue-600" size={20} />
                        </div>
                        <div className="text-left">
                          <p className="font-semibold text-gray-900">
                            {selectedFile.name}
                          </p>
                          <p className="text-sm text-gray-600">
                            {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                          </p>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={removeFile}
                        className="text-red-500 hover:text-red-700 transition duration-300"
                      >
                        <X size={24} />
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Title */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Material Title *
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="e.g., Data Structures Past Questions 2024"
                  className="w-full py-3 px-4 rounded-xl border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              {/* Department and Level */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Department *
                  </label>
                  <select
                    name="department"
                    value={formData.department}
                    onChange={handleInputChange}
                    className="w-full py-3 px-4 rounded-xl border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Select Department</option>
                    {departments.map((dept) => (
                      <option key={dept} value={dept}>
                        {dept}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Level *
                  </label>
                  <select
                    name="level"
                    value={formData.level}
                    onChange={handleInputChange}
                    className="w-full py-3 px-4 rounded-xl border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Select Level</option>
                    {levels.map((level) => (
                      <option key={level} value={level}>
                        {level}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Year and Course Code */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Year *
                  </label>
                  <select
                    name="year"
                    value={formData.year}
                    onChange={handleInputChange}
                    className="w-full py-3 px-4 rounded-xl border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Select Year</option>
                    {years.map((year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Course Code *
                  </label>
                  <input
                    type="text"
                    name="courseCode"
                    value={formData.courseCode}
                    onChange={handleInputChange}
                    placeholder="e.g., CSC 201"
                    className="w-full py-3 px-4 rounded-xl border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Description (Optional)
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Add any additional details about this material..."
                  rows="4"
                  className="w-full py-3 px-4 rounded-xl border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                />
              </div>

              {/* Guidelines */}
              <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-4">
                <div className="flex items-start gap-x-3">
                  <AlertCircle className="text-blue-600 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-blue-900 mb-2">
                      Upload Guidelines
                    </h4>
                    <ul className="text-sm text-blue-800 space-y-1">
                      <li>• Ensure the material is accurate and helpful</li>
                      <li>• Do not upload copyrighted content</li>
                      <li>• File should be clear and readable</li>
                      <li>• Provide accurate metadata for easy discovery</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={!isFormValid}
                className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition duration-300 ${
                  isFormValid
                    ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
              >
                Upload Material
              </button>
            </form>
          </div>

          {/* Benefits Section */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Help Others",
                description: "Share knowledge with fellow students",
              },
              {
                title: "Build Reputation",
                description: "Earn recognition for your contributions",
              },
              {
                title: "Easy Access",
                description: "Access your uploads anytime, anywhere",
              },
            ].map((benefit, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-md p-6 text-center hover:-translate-y-2 transition duration-300"
              >
                <h3 className="font-bold text-lg text-blue-700 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default UploadPage;
