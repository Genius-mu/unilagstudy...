import React, { useState, useRef } from "react";
import {
  Upload,
  X,
  FileText,
  CheckCircle,
  AlertCircle,
  File,
  Image as ImageIcon,
  FileSpreadsheet,
  Award,
  Users,
  Clock,
  ChevronRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const UploadPage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [dragActive, setDragActive] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [errors, setErrors] = useState({});
  const fileInputRef = useRef(null);

  const [formData, setFormData] = useState({
    title: "",
    department: "",
    level: "",
    year: "",
    courseCode: "",
    materialType: "",
    description: "",
  });

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
    "Mathematics",
    "Chemistry",
    "Biology",
  ];

  const levels = [
    "100 Level",
    "200 Level",
    "300 Level",
    "400 Level",
    "500 Level",
    "600 Level",
  ];

  const materialTypes = [
    "Past Questions",
    "Lecture Notes",
    "Textbook",
    "Summary/Handout",
    "Assignment",
    "Lab Report",
    "Project",
    "Other",
  ];

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 10 }, (_, i) =>
    (currentYear - i).toString(),
  );

  const maxFileSize = 10 * 1024 * 1024; // 10MB
  const allowedFileTypes = [
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "application/vnd.ms-powerpoint",
    "application/vnd.openxmlformats-officedocument.presentationml.presentation",
    "image/jpeg",
    "image/png",
    "image/jpg",
  ];

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const validateFile = (file) => {
    const newErrors = {};

    // Check file size
    if (file.size > maxFileSize) {
      newErrors.file = `File size exceeds 10MB limit (${(file.size / 1024 / 1024).toFixed(2)}MB)`;
      return newErrors;
    }

    // Check file type
    if (!allowedFileTypes.includes(file.type)) {
      newErrors.file = `Invalid file type. Allowed: PDF, DOC, DOCX, PPT, PPTX, JPG, PNG`;
      return newErrors;
    }

    return newErrors;
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      const fileErrors = validateFile(file);

      if (Object.keys(fileErrors).length > 0) {
        setErrors(fileErrors);
        setTimeout(() => setErrors({}), 5000);
      } else {
        setSelectedFile(file);
        setErrors({});
      }
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const fileErrors = validateFile(file);

      if (Object.keys(fileErrors).length > 0) {
        setErrors(fileErrors);
        setTimeout(() => setErrors({}), 5000);
        e.target.value = null;
      } else {
        setSelectedFile(file);
        setErrors({});
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const removeFile = () => {
    setSelectedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = null;
    }
    setErrors((prev) => {
      const newErrors = { ...prev };
      delete newErrors.file;
      return newErrors;
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!selectedFile) {
      newErrors.file = "Please select a file to upload";
    }
    if (!formData.title.trim()) {
      newErrors.title = "Title is required";
    }
    if (!formData.department) {
      newErrors.department = "Department is required";
    }
    if (!formData.level) {
      newErrors.level = "Level is required";
    }
    if (!formData.year) {
      newErrors.year = "Year is required";
    }
    if (!formData.courseCode.trim()) {
      newErrors.courseCode = "Course code is required";
    }
    if (!formData.materialType) {
      newErrors.materialType = "Material type is required";
    }

    return newErrors;
  };

  const simulateUpload = () => {
    return new Promise((resolve) => {
      let progress = 0;
      const interval = setInterval(() => {
        progress += 10;
        setUploadProgress(progress);

        if (progress >= 100) {
          clearInterval(interval);
          resolve();
        }
      }, 200);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      // Scroll to first error
      const firstErrorField = document.querySelector(".border-red-500");
      if (firstErrorField) {
        firstErrorField.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      return;
    }

    setIsUploading(true);
    setUploadProgress(0);

    try {
      // Simulate file upload
      await simulateUpload();

      // Here you would normally send the data to your backend
      const uploadData = new FormData();
      uploadData.append("file", selectedFile);
      uploadData.append("title", formData.title);
      uploadData.append("department", formData.department);
      uploadData.append("level", formData.level);
      uploadData.append("year", formData.year);
      uploadData.append("courseCode", formData.courseCode);
      uploadData.append("materialType", formData.materialType);
      uploadData.append("description", formData.description);

      // Simulate API call
      // const response = await fetch('/api/upload', {
      //   method: 'POST',
      //   body: uploadData
      // });

      setUploadSuccess(true);
      setIsUploading(false);

      // Reset form after 3 seconds
      setTimeout(() => {
        setUploadSuccess(false);
        setSelectedFile(null);
        setUploadProgress(0);
        setFormData({
          title: "",
          department: "",
          level: "",
          year: "",
          courseCode: "",
          materialType: "",
          description: "",
        });
        if (fileInputRef.current) {
          fileInputRef.current.value = null;
        }
      }, 3000);
    } catch (error) {
      console.error("Upload error:", error);
      setErrors({ submit: "Upload failed. Please try again." });
      setIsUploading(false);
      setUploadProgress(0);
    }
  };

  const isFormValid =
    selectedFile &&
    formData.title &&
    formData.department &&
    formData.level &&
    formData.year &&
    formData.courseCode &&
    formData.materialType;

  const getFileIcon = (file) => {
    if (!file) return FileText;

    const type = file.type;
    if (type.includes("pdf")) return FileText;
    if (type.includes("image")) return ImageIcon;
    if (type.includes("sheet") || type.includes("excel"))
      return FileSpreadsheet;
    if (type.includes("presentation") || type.includes("powerpoint"))
      return File;
    return FileText;
  };

  const FileIcon = getFileIcon(selectedFile);

  return (
    <div
      className="w-full min-h-screen bg-gray-50"
      style={{ fontFamily: '"Bricolage Grotesque", sans-serif' }}
    >
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-blue-600 py-20 md:py-28">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 w-[90%] max-w-[900px] mt-9 md:mt-0 mx-auto flex flex-col gap-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-bold text-4xl md:text-6xl text-white text-center"
          >
            Share Your Materials
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/90 text-center text-lg md:text-xl max-w-2xl mx-auto"
          >
            Help your fellow students succeed by uploading verified study
            materials and past questions
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex justify-center gap-8 mt-4"
          >
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white">
                5,000+
              </div>
              <div className="text-sm text-white/80">Materials Shared</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white">
                1,200+
              </div>
              <div className="text-sm text-white/80">Contributors</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white">
                50K+
              </div>
              <div className="text-sm text-white/80">Downloads</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Upload Form Section */}
      <section className="w-full py-12 md:py-16">
        <div className="w-[90%] max-w-[900px] mx-auto">
          {/* Success Message */}
          <AnimatePresence>
            {uploadSuccess && (
              <motion.div
                initial={{ opacity: 0, y: -20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                className="bg-white border-2 border-green-500 rounded-2xl p-6 md:p-8 mb-8 shadow-xl"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <CheckCircle className="text-green-600" size={32} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-xl md:text-2xl text-gray-900 mb-2">
                      Upload Successful!
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Your material has been uploaded successfully and is now
                      being reviewed. It will be available to other students
                      once approved.
                    </p>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock size={16} />
                      <span>Review typically takes 24-48 hours</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Error Message */}
          <AnimatePresence>
            {errors.submit && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="bg-red-50 border-2 border-red-500 rounded-2xl p-6 mb-8"
              >
                <div className="flex items-start gap-4">
                  <AlertCircle className="text-red-600" size={24} />
                  <div>
                    <h3 className="font-bold text-lg text-red-900 mb-1">
                      Upload Failed
                    </h3>
                    <p className="text-red-700">{errors.submit}</p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main Upload Card */}
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10">
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                Upload New Material
              </h2>
              <p className="text-gray-600">
                Fill in the details below to share your study material
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-y-6">
              {/* File Upload Area */}
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-3">
                  Upload File *
                </label>
                <div
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                  className={`border-2 border-dashed rounded-2xl p-8 md:p-12 text-center transition-all duration-300 ${
                    dragActive
                      ? "border-blue-500 bg-blue-50 scale-[1.02]"
                      : errors.file
                        ? "border-red-500 bg-red-50"
                        : "border-gray-300 bg-gray-50 hover:border-blue-400 hover:bg-blue-50/30"
                  }`}
                >
                  {!selectedFile ? (
                    <div className="flex flex-col items-center gap-y-4">
                      <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center">
                        <Upload className="text-blue-600" size={40} />
                      </div>
                      <div>
                        <p className="font-bold text-lg text-gray-900 mb-1">
                          {dragActive
                            ? "Drop your file here"
                            : "Drag and drop your file here"}
                        </p>
                        <p className="text-sm text-gray-600 mb-6">
                          or click the button below to browse
                        </p>
                        <label className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-xl font-semibold cursor-pointer inline-block transition-all duration-300 hover:shadow-lg hover:scale-105">
                          Choose File
                          <input
                            ref={fileInputRef}
                            type="file"
                            onChange={handleFileChange}
                            className="hidden"
                            accept=".pdf,.doc,.docx,.ppt,.pptx,.jpg,.jpeg,.png"
                          />
                        </label>
                      </div>
                      <div className="flex flex-wrap justify-center gap-2 text-xs text-gray-500 mt-2">
                        <span className="bg-white px-3 py-1 rounded-full border border-gray-200">
                          PDF
                        </span>
                        <span className="bg-white px-3 py-1 rounded-full border border-gray-200">
                          DOC
                        </span>
                        <span className="bg-white px-3 py-1 rounded-full border border-gray-200">
                          DOCX
                        </span>
                        <span className="bg-white px-3 py-1 rounded-full border border-gray-200">
                          PPT
                        </span>
                        <span className="bg-white px-3 py-1 rounded-full border border-gray-200">
                          PPTX
                        </span>
                        <span className="bg-white px-3 py-1 rounded-full border border-gray-200">
                          JPG
                        </span>
                        <span className="bg-white px-3 py-1 rounded-full border border-gray-200">
                          PNG
                        </span>
                      </div>
                      <p className="text-xs text-gray-500 mt-2">
                        Maximum file size: 10MB
                      </p>
                    </div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex items-center justify-between bg-white rounded-xl p-5 border-2 border-gray-200"
                    >
                      <div className="flex items-center gap-x-4">
                        <div className="bg-blue-100 w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0">
                          <FileIcon className="text-blue-600" size={28} />
                        </div>
                        <div className="text-left min-w-0">
                          <p className="font-bold text-gray-900 truncate">
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
                        className="text-red-500 hover:text-red-700 hover:bg-red-50 p-2 rounded-lg transition-all duration-300 flex-shrink-0"
                        title="Remove file"
                      >
                        <X size={24} />
                      </button>
                    </motion.div>
                  )}
                </div>
                {errors.file && (
                  <p className="text-red-600 text-sm mt-2 flex items-center gap-1">
                    <AlertCircle size={16} />
                    {errors.file}
                  </p>
                )}
              </div>

              {/* Upload Progress */}
              {isUploading && (
                <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-semibold text-gray-900">
                      Uploading...
                    </span>
                    <span className="font-bold text-blue-600">
                      {uploadProgress}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <motion.div
                      className="bg-blue-600 h-full rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${uploadProgress}%` }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </div>
              )}

              {/* Title */}
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-3">
                  Material Title *
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="e.g., Data Structures and Algorithms Past Questions 2024"
                  className={`w-full py-3 px-4 rounded-xl border-2 transition-colors duration-300 ${
                    errors.title
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-200 focus:border-blue-500"
                  } focus:outline-none focus:ring-2`}
                  disabled={isUploading}
                />
                {errors.title && (
                  <p className="text-red-600 text-sm mt-2 flex items-center gap-1">
                    <AlertCircle size={16} />
                    {errors.title}
                  </p>
                )}
              </div>

              {/* Department and Level */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-3">
                    Department *
                  </label>
                  <select
                    name="department"
                    value={formData.department}
                    onChange={handleInputChange}
                    className={`w-full py-3 px-4 rounded-xl border-2 transition-colors duration-300 cursor-pointer ${
                      errors.department
                        ? "border-red-500 focus:ring-red-500"
                        : "border-gray-200 focus:border-blue-500"
                    } focus:outline-none focus:ring-2`}
                    disabled={isUploading}
                  >
                    <option value="">Select Department</option>
                    {departments.map((dept) => (
                      <option key={dept} value={dept}>
                        {dept}
                      </option>
                    ))}
                  </select>
                  {errors.department && (
                    <p className="text-red-600 text-sm mt-2 flex items-center gap-1">
                      <AlertCircle size={16} />
                      {errors.department}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-3">
                    Level *
                  </label>
                  <select
                    name="level"
                    value={formData.level}
                    onChange={handleInputChange}
                    className={`w-full py-3 px-4 rounded-xl border-2 transition-colors duration-300 cursor-pointer ${
                      errors.level
                        ? "border-red-500 focus:ring-red-500"
                        : "border-gray-200 focus:border-blue-500"
                    } focus:outline-none focus:ring-2`}
                    disabled={isUploading}
                  >
                    <option value="">Select Level</option>
                    {levels.map((level) => (
                      <option key={level} value={level}>
                        {level}
                      </option>
                    ))}
                  </select>
                  {errors.level && (
                    <p className="text-red-600 text-sm mt-2 flex items-center gap-1">
                      <AlertCircle size={16} />
                      {errors.level}
                    </p>
                  )}
                </div>
              </div>

              {/* Year and Course Code */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-3">
                    Academic Year *
                  </label>
                  <select
                    name="year"
                    value={formData.year}
                    onChange={handleInputChange}
                    className={`w-full py-3 px-4 rounded-xl border-2 transition-colors duration-300 cursor-pointer ${
                      errors.year
                        ? "border-red-500 focus:ring-red-500"
                        : "border-gray-200 focus:border-blue-500"
                    } focus:outline-none focus:ring-2`}
                    disabled={isUploading}
                  >
                    <option value="">Select Year</option>
                    {years.map((year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>
                  {errors.year && (
                    <p className="text-red-600 text-sm mt-2 flex items-center gap-1">
                      <AlertCircle size={16} />
                      {errors.year}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-3">
                    Course Code *
                  </label>
                  <input
                    type="text"
                    name="courseCode"
                    value={formData.courseCode}
                    onChange={handleInputChange}
                    placeholder="e.g., CSC 201"
                    className={`w-full py-3 px-4 rounded-xl border-2 transition-colors duration-300 uppercase ${
                      errors.courseCode
                        ? "border-red-500 focus:ring-red-500"
                        : "border-gray-200 focus:border-blue-500"
                    } focus:outline-none focus:ring-2`}
                    disabled={isUploading}
                  />
                  {errors.courseCode && (
                    <p className="text-red-600 text-sm mt-2 flex items-center gap-1">
                      <AlertCircle size={16} />
                      {errors.courseCode}
                    </p>
                  )}
                </div>
              </div>

              {/* Material Type */}
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-3">
                  Material Type *
                </label>
                <select
                  name="materialType"
                  value={formData.materialType}
                  onChange={handleInputChange}
                  className={`w-full py-3 px-4 rounded-xl border-2 transition-colors duration-300 cursor-pointer ${
                    errors.materialType
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-200 focus:border-blue-500"
                  } focus:outline-none focus:ring-2`}
                  disabled={isUploading}
                >
                  <option value="">Select Material Type</option>
                  {materialTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
                {errors.materialType && (
                  <p className="text-red-600 text-sm mt-2 flex items-center gap-1">
                    <AlertCircle size={16} />
                    {errors.materialType}
                  </p>
                )}
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-3">
                  Description (Optional)
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Add any additional details about this material that might help other students..."
                  rows="5"
                  className="w-full py-3 px-4 rounded-xl border-2 border-gray-200 focus:outline-none focus:border-blue-500 focus:ring-2 resize-none transition-colors duration-300"
                  disabled={isUploading}
                  maxLength={500}
                />
                <div className="flex justify-between items-center mt-2">
                  <p className="text-xs text-gray-500">
                    Provide context to help students understand what this
                    material covers
                  </p>
                  <p className="text-xs text-gray-500">
                    {formData.description.length}/500
                  </p>
                </div>
              </div>

              {/* Guidelines */}
              <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
                <div className="flex items-start gap-x-4">
                  <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                    <AlertCircle className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-900 mb-3 text-lg">
                      Upload Guidelines
                    </h4>
                    <ul className="text-sm text-blue-800 space-y-2">
                      <li className="flex items-start gap-2">
                        <ChevronRight
                          size={16}
                          className="mt-0.5 flex-shrink-0"
                        />
                        <span>
                          Ensure the material is accurate, clear, and helpful to
                          other students
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight
                          size={16}
                          className="mt-0.5 flex-shrink-0"
                        />
                        <span>
                          Do not upload copyrighted textbooks or proprietary
                          content
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight
                          size={16}
                          className="mt-0.5 flex-shrink-0"
                        />
                        <span>
                          File should be clear, readable, and properly formatted
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight
                          size={16}
                          className="mt-0.5 flex-shrink-0"
                        />
                        <span>
                          Provide accurate metadata (title, department, level,
                          etc.) for easy discovery
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight
                          size={16}
                          className="mt-0.5 flex-shrink-0"
                        />
                        <span>
                          Your upload will be reviewed before being published to
                          ensure quality
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={!isFormValid || isUploading}
                className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-2 ${
                  isFormValid && !isUploading
                    ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl hover:scale-[1.02]"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
              >
                {isUploading ? (
                  <>
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Uploading... {uploadProgress}%
                  </>
                ) : (
                  <>
                    <Upload size={20} />
                    Upload Material
                  </>
                )}
              </button>

              {!isFormValid && !isUploading && (
                <p className="text-center text-sm text-gray-500">
                  Please fill in all required fields (*) to upload
                </p>
              )}
            </form>
          </div>

          {/* Benefits Section */}
          <div className="mt-16">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-10">
              Why Upload Your Materials?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: Users,
                  title: "Help Others Succeed",
                  description:
                    "Share knowledge and help fellow students excel in their studies",
                  color: "blue",
                },
                {
                  icon: Award,
                  title: "Build Your Reputation",
                  description:
                    "Earn recognition and badges for your valuable contributions",
                  color: "blue",
                },
                {
                  icon: Clock,
                  title: "Easy Access Anytime",
                  description:
                    "Access all your uploaded materials from anywhere, anytime",
                  color: "blue",
                },
              ].map((benefit, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg p-8 text-center hover:-translate-y-2 transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:shadow-2xl group"
                >
                  <div
                    className={`bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:bg-blue-200 transition-colors duration-300`}
                  >
                    <benefit.icon className="text-blue-600" size={32} />
                  </div>
                  <h3 className="font-bold text-xl text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Community Impact */}
          <div className="mt-12 bg-blue-600 rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Join Our Growing Community
            </h3>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Every material you share helps countless students prepare better
              for their exams and understand their courses more deeply.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-white">
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-1">
                  5,000+
                </div>
                <div className="text-sm text-white/80">Materials Shared</div>
              </div>
              <div className="hidden md:block w-px bg-white/30"></div>
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-1">50K+</div>
                <div className="text-sm text-white/80">Total Downloads</div>
              </div>
              <div className="hidden md:block w-px bg-white/30"></div>
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-1">
                  1,200+
                </div>
                <div className="text-sm text-white/80">Active Contributors</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UploadPage;
