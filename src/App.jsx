import React from 'react';
import { 
  Code2, 
  Blocks, 
  Cpu, 
  Shield, 
  ArrowRight, 
  Activity, 
  Globe, 
  Layout, 
  Smartphone,
  Cloud,
  ChevronRight
} from 'lucide-react';
import './App.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <div className="logo">
          <Code2 className="logo-icon" size={32} />
          <span>TWO SYNTAX</span>
        </div>
        <ul className="nav-links">
          <li><a href="#home" className="nav-link">Home</a></li>
          <li><a href="#services" className="nav-link">Services</a></li>
          <li><a href="#about" className="nav-link">About</a></li>
          <li><a href="#contact" className="nav-link">Contact</a></li>
        </ul>
        <div className="nav-buttons">
          <button className="btn btn-secondary">Log In</button>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="bg-orb orb-1"></div>
      <div className="bg-orb orb-2"></div>
      
      <div className="container">
        <div className="hero-content">
          <div className="badge animate-fade-up">
            <Activity size={16} />
            <span>V2.0 is now live</span>
          </div>
          <h1 className="animate-fade-up delay-1">
            Your Comprehensive <br/>
            <span className="text-gradient">Business Digital Solution</span>
          </h1>
          <p className="hero-desc animate-fade-up delay-2">
            We empower brands with high-performance software, providing a complete business digital solution that scales with your needs and drives innovation.
          </p>
          <div className="hero-buttons animate-fade-up delay-3">
            <button className="btn btn-primary">
              Start your project <ArrowRight size={20} />
            </button>
            <button className="btn btn-secondary">
              View our work
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    {
      icon: <Layout size={28} />,
      title: 'Web Application Development',
      desc: 'Build scalable, secure, and beautiful web applications using modern frameworks like React, Vue, and Next.js.'
    },
    {
      icon: <Smartphone size={28} />,
      title: 'Mobile App Development',
      desc: 'Create native and cross-platform mobile experiences that users love for iOS and Android.'
    },
    {
      icon: <Cloud size={28} />,
      title: 'Cloud Infrastructure',
      desc: 'Architect and deploy robust cloud solutions on AWS, Azure, and Google Cloud for maximum reliability.'
    },
    {
      icon: <Cpu size={28} />,
      title: 'AI & Machine Learning',
      desc: 'Integrate cutting-edge AI models to automate processes and unlock deep insights from your data.'
    },
    {
      icon: <Shield size={28} />,
      title: 'Cybersecurity',
      desc: 'Protect your digital assets with enterprise-grade security audits, penetration testing, and compliance.'
    },
    {
      icon: <Blocks size={28} />,
      title: 'API Integration',
      desc: 'Connect your systems seamlessly with custom API development and third-party software integrations.'
    }
  ];

  return (
    <section id="services" className="section">
      <div className="container">
        <div className="services-header animate-fade-up">
          <h2 className="text-gradient">Our Services</h2>
          <p>Comprehensive software engineering solutions tailored to your unique business challenges and goals.</p>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }} key={index}>
              <div className="icon-wrapper">
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <a href="#" className="service-link">
                Learn more <ChevronRight size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="stats">
      <div className="container">
        <div className="stats-grid">
          <div className="stat-item">
            <h3>250+</h3>
            <p>Projects Delivered</p>
          </div>
          <div className="stat-item">
            <h3>99%</h3>
            <p>Client Satisfaction</p>
          </div>
          <div className="stat-item">
            <h3>50+</h3>
            <p>Expert Engineers</p>
          </div>
          <div className="stat-item">
            <h3>24/7</h3>
            <p>Support & Maintenance</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="section cta-section">
      <div className="container">
        <div className="cta-box">
          <div className="bg-orb orb-3"></div>
          <h2>Ready to transform your ideas into reality?</h2>
          <p>Join hundreds of forward-thinking companies that trust us to build their mission-critical software.</p>
          <button className="btn btn-primary">
            Schedule a Consultation <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-about">
            <div className="logo">
              <Code2 className="logo-icon" size={28} />
              <span>TWO SYNTAX</span>
            </div>
            <p>Your complete business digital solution to drive growth, efficiency, and innovation worldwide.</p>
          </div>
          
          <div className="footer-links">
            <h4>Company</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-links">
            <h4>Services</h4>
            <ul>
              <li><a href="#">Web Development</a></li>
              <li><a href="#">Mobile Apps</a></li>
              <li><a href="#">Cloud Solutions</a></li>
              <li><a href="#">AI Integration</a></li>
            </ul>
          </div>
          
          <div className="footer-links">
            <h4>Legal</h4>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} TWO SYNTAX. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Services />
      <Stats />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
