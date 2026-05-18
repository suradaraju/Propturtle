import { Link } from "react-router-dom";
import { blogs } from "../data/blogs";
import "../assets/css/HomeBlogs.css"; // reuse same styles

export default function HomeBlogs() {
  // Show only first 3 blogs
  const featuredBlogs = blogs.slice(0, 3);

  return (
    <section className="home-blogs-section">
      <div className="container">

        <div className="home-blogs-header">
          <h2>Blogs</h2>
          <p>Latest Blogs on fractional real estate and investing</p>
        </div>

        <div className="blogs-grid">
          {featuredBlogs.map((blog) => (
            <div className="blog-card" key={blog.id}>
              <img src={blog.image} alt={blog.title} />

              <div className="blog-card-body">
                <h3>{blog.title}</h3>
                <p>{blog.excerpt}</p>

                <Link to={`/blogs/${blog.slug}`} className="read-more-blog">
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="home-blogs-footer">
          <Link to="/blogpage" className="view-all-blogs-btn">
            View All Blogs →
          </Link>
        </div>

      </div>
    </section>
  );
}
