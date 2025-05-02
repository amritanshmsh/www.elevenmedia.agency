export default function Blogs() {
  const blogs = [
    {
      title: "Mastering Social Media Strategy in 2025",
      image: "/images/blog1.jpg",
      link: "https://medium.com/@elevenagency/mastering-social-media-strategy-2025"
    },
    {
      title: "Top 5 Growth Hacks for Modern Brands",
      image: "/images/blog2.jpg",
      link: "https://medium.com/@elevenagency/top-5-growth-hacks-modern-brands"
    },
    {
      title: "Design Trends That Drive Engagement",
      image: "/images/blog3.jpg",
      link: "https://medium.com/@elevenagency/design-trends-drive-engagement"
    }
  ];

  return (
    <section className="w-full bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
          From Our Blog
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
          Explore the latest insights, strategies, and trends from the Eleven team. Dive into our Medium stories for deeper learning.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <a
              key={index}
              href={blog.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gray-50 rounded-lg overflow-hidden shadow hover:shadow-lg transition duration-300"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {blog.title}
                </h3>
                <p className="text-purple-700 font-semibold">Read on Medium →</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
