"use client"; // This marks the component as a Client Component

import { blogs } from '../../../lib/blogbinding'; // Adjust the path to your blogs data

const BlogDetail = ({ params }) => {
  const { id } = params; // Access the dynamic route parameter

  // Ensure id is a valid number
  const blogIndex = parseInt(id, 10);
  const blog = blogs[blogIndex]; // Fetch the blog using the index

  if (!blog) return <p className="text-center text-red-500">Blog not found</p>; // Handle invalid blog index

  return (
    <div className="container mx-auto p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg transition-shadow duration-300 hover:shadow-xl">
        <h1 className="text-4xl font-bold text-blue-500 mb-4 hover:underline transition-colors duration-300">
          {blog.Title}
        </h1>
        <div className="flex justify-between items-start mb-4">
          <div>
            <p className="text-sm text-gray-800">By {blog.author}</p>
            <p className="text-sm text-gray-600">{blog.date} • {blog.Read}</p>
          </div>
          <span className="bg-blue-100 text-blue-600 text-xs font-medium px-2 py-1 rounded-full">
            {blog.category}
          </span>
        </div>
        <div className="mt-6">
          <p className="text-gray-700 whitespace-pre-line leading-relaxed">
            {blog.content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
