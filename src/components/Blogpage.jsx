import { Link } from "react-router-dom";
import bg1 from '../assets/images/backgrounds/About-Propturtle.jpg';
import { blogs } from "../data/blogs";
import "../assets/css/Blogpage.css";
import Navbar from "./Navbar";
import Footer from "./footer";
import { Helmet } from "react-helmet-async";

export default function BlogsPage() {
  return (
    <>
     <Helmet>
      <title>Fractional Real Estate Hyderabad Blog | Investment Guides | PropTurtle</title>
      <meta
              name="description"
              content="Explore blogs on fractional real estate in Hyderabad, commercial property investment, passive income strategies, and expert investor insights."
              
            />
    </Helmet>
    <Navbar />
    <section className="page-header">
    
                        <div className="page-header__bg" style={{ backgroundImage: `URL(${bg1})` }}></div>
                        <div className="container">
                            {/* <img src={pg1} alt="About Us" className="page-header__shape" /> */}
                            <h2 className="page-header__title">Propturtle Blogs</h2>
                            {/* <p className="prop-p">PropTurtle is a real estate investment and development platform that builds income-generating real estate businesses for long-term investors.</p> */}
                        </div>
                    </section>
    <div className="blogs-page container">
      {/* <h1>Propturtle Blogs</h1> */}

      <div className="blogs-grid">
        {blogs.map((blog) => (
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
    </div>
    <Footer />
    </>
  );
}
