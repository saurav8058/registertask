import React from "react";

const BlogGrid = () => {
  const blogs = [
    {
      id: 1,
      image: "/assets/photo.jpg",
      title: "Small Business & Startup",
      author: "Prabhash Mishra",
      date: "1 Jan 2023 - Today",
      description:
        "Like to know the secrets of transforming a 2-14 team into a Super Bowl winning Dynasty?",
      tags: ["Tax Audit", "Management"],
    },
    {
      id: 2,
      image: "/assets/photo.jpg",
      title: "Scale-Up Company Offer",
      author: "Mahesh Kumar",
      date: "1 Jan 2023",
      description:
        "Mental models are simple expressions of complex processes or relationships.",
      tags: ["Tax", "Research", "Compliance"],
    },
    {
      id: 3,
      image: "/assets/photo.jpg",
      title: "Growing Business Package",
      author: "Rakhi Verma",
      date: "1 Jan 2023",
      description:
        "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
      tags: ["Audit", "Money Back"],
    },
    {
      id: 4,
      image: "/assets/photo.jpg",
      title: "Scale-Up Company Offer",
      author: "Karan Kumar",
      date: "1 Jan 2023",
      description: "Collaboration makes our team stronger, and our individual designs better.",
      tags: ["Money", "Management"],
    },
    {
      id: 5,
      image: "/assets/photo.jpg",
      title: "Scale-Up Company Offer",
      author: "Richa Singh",
      date: "1 Jan 2023",
      description:
        "JavaScript frameworks make development easy with extensive features and functionalities.",
      tags: ["Tax Return", "New", "Audit"],
    },
    {
      id: 6,
      image: "/assets/photo.jpg",
      title: "Scale-Up Company Offer",
      author: "Miss Nora",
      date: "1 Jan 2023",
      description:
        "Starting a community doesn’t need to be complicated, but how do you get started?",
      tags: ["Private Limited Company", "Customer Success"],
    },
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="text-center mb-12">
        <h4 className="text-orange-500 text-sm uppercase tracking-wide">
          Explore Our Blogs
        </h4>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
          Accelerate Digital Transformation
        </h2>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 lg:px-20">
        {blogs.map((blog) => (
          <div key={blog.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <p className="text-sm text-gray-500">
                {blog.author} • {blog.date}
              </p>
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mt-2">
                {blog.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mt-2">{blog.description}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {blog.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-xs sm:text-sm font-semibold text-[#6941C6] bg-[#F9F5FF] px-3 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Show More Button */}
      <div className="text-center mt-12">
        <button className="px-6 py-3 bg-[#1C4670] text-white rounded-md hover:bg-blue-800 transition duration-300">
          Show More Blogs <span className="text-lg">→</span>
        </button>
      </div>
    </div>
  );
};

export default BlogGrid;
