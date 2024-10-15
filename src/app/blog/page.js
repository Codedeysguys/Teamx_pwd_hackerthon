
"use client";
import { useState } from 'react';
import { blogs } from '../../lib/blogbinding'; 

const Blogs = () => {
  const [currentPage, setCurrentPage] = useState(1);
  
  // Adjust the blogs per page based on the screen size
  const blogsPerPage = 8; // Set to 8 to maximize the grid (2 rows of 4 on large screens)

  // Get current blogs based on pagination
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  // Handle pagination click
  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6">Parenting Blogs for PWD</h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {currentBlogs.map((blog, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-2xl font-semibold text-blue-500 hover:text-blue-600 transition-colors duration-300">
                {blog.Title}
              </h2>
              <span className="bg-blue-200 text-blue-600 text-xs font-medium px-2 py-1 rounded-full">
                {blog.category}
              </span>
            </div>
            <p className="text-gray-700 mt-2 font-medium leading-relaxed">
              {blog.preview}
            </p>
            <div className="mt-4 flex justify-between items-center">
              <div>
                <p className="text-xs text-gray-600">By {blog.author}</p>
                <p className="text-xs text-gray-500">{blog.Read}</p>
              </div>
              <a
                href={`/blog/${index}`}
                className="text-blue-600 hover:text-blue-700 text-xs font-semibold transition-colors duration-300"
              >
                Read more
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-8 flex justify-center">
        {Array.from(
          { length: Math.ceil(blogs.length / blogsPerPage) },
          (_, i) => (
            <button
              key={i}
              onClick={() => handleClick(i + 1)}
              className={`mx-2 px-4 py-2 rounded ${
                currentPage === i + 1
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-800'
              }`}
            >
              {i + 1}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default Blogs;
