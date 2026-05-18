import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes} from 'react-router-dom';
import whatsapp from './assets/images/whatsapp.png';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Loader from './components/Loader'
import Header from './components/Header';
import FaqCarousel from './components/FaqCarousel';
import Invest from './components/Invest';
import ProjectDetails from './pages/ProjectDetails';
import Build from './components/Build';
import Footer from './components/footer';
import Features from './components/Features';
import Where from './components/Where';
import How from './components/How';
import AboutUs from './components/AboutUs';
import Liveproperties from './components/LiveProperties';
import Why from './components/why';
import WhyChoose from './components/why_choose';
import Contact from './components/Contact';
import HowIt from './components/HowIt';
import Faqs from './components/Faqs';
import TrustedBrands from './components/TrustedBrand';
import Privacy from './components/PrivacyPolicy';
// import Hero from './components/Hero';
import WithUs from './components/withus';
import GarudaGateway from './pages/GarudaGateway';
import LiveProjects from './components/LiveProjects';
import NavanaamiElite from './pages/NavanaamiElite';
import NavanaamiMegaleio from './pages/NavanaamiMegaleio';
import Altilia from './pages/fiveelements';
import BlogsPage from './components/Blogpage';
import BlogDetails from './pages/BlogDetails';
import Media from './components/InMedia';
import HomeBlogs from './components/HomeBlogs';
import Terms from './components/Terms';
import ScrollToTop from './components/ScrollToTop';
// import FocusSection from './components/FocusSection';
import './App.css'

function Home (){
  return(
    <>
    
    <Header />
      <Features  />
      <TrustedBrands />
      <Where />
      <How />
      <WithUs />
      <Build />
      <Media />
      <FaqCarousel />
      
      <HomeBlogs />
      <Footer />
      </>
  );
}
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const hasLoaded = sessionStorage.getItem("siteLoaded");

    if (hasLoaded) {
      setLoading(false);
    } else {
      setTimeout(() => {
        setLoading(false);
        sessionStorage.setItem("siteLoaded", "true");
      }, 2500);
    }
  }, []);

  if (loading) {
    return <Loader />;
  }
  return (
    <>
    <ScrollToTop /> 
    <a
      href="https://wa.me/919000203636"   // 👈 replace with your number
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
    >
      <img
        src={whatsapp}
        alt="WhatsApp"
      />
    </a>
    
  <Routes>
    <Route path='/' element={<Home />}/>
    {/* <Route path='/aboutus' element={<AboutUs />}/>
    <Route path='/liveproperties' element={<Liveproperties />}/>
    <Route path='/whyInvest' element={<Why />}/>
    <Route path='/whychoose' element={<WhyChoose />}/>
    <Route path='/contact' element={<Contact />}/>
    <Route path='/HowIt' element={<HowIt />}/> */}
    <Route path='/about-us' element={<AboutUs />}/>
    <Route path='/liveproperties' element={<Liveproperties />}/>
    <Route path='/whyInvest' element={<Why />}/>
    <Route path='/why-choose-us' element={<WhyChoose />}/>
    <Route path='/contact' element={<Contact />}/>
    <Route path='/How-it-works' element={<HowIt />}/>
    <Route path='/blogpage' element={<BlogsPage />}/>
    <Route path="/blogs/:slug" element={<BlogDetails />} />
    <Route path='/Faqs' element={<Faqs />} />
    <Route path='/liveprojects' element={<LiveProjects />}/>
    <Route path='/projects/garuda-gateway' element={<GarudaGateway />}/>
    <Route path="/projects/navanaami-megaleio" element={<NavanaamiMegaleio />} />
    <Route path="/projects/altilia-villas" element={<Altilia />} />
    <Route path="/projects/navanaami-elite" element={<NavanaamiElite />} />
    <Route path='/privacy' element={<Privacy />}/>
    <Route path='/terms' element={<Terms />}/>
    {/* <Route path='/projects/:slug' element={<ProjectDetails />}/> */}
  </Routes>
   </>
  );
}

export default App
