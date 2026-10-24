import React from 'react'
import Header from "../../Components/Header/Header"
import pic from "../../assets/about-story.svg"
import "./Aboutus.css"
import Cta from "../../Components/Cta/Cta"
import Footer from "../../Components/Footer/Footer"
const Aboutus = () => {
  return (
    <div>
    <Header/>

        {/* <!-- Hero Section --> */}
    <section className="hero">
        <div className="container">
            <span className="badge">About Us</span>
            <h1>Who we are and why Nexora exists</h1>
            <p>We started Nexora because good technology should not be out of reach for small businesses.</p>
        </div>
    </section>

    {/* <!-- Our Story Section --> */}
    <section className="story-section">
        <div className="container story-grid">
            <div className="story-text">
                <h2>Our story</h2>
                <p>Nexora began with a simple frustration: businesses were paying for software they could not use and security they could not trust. We set out to build the opposite — clear, dependable and useful.</p>
            </div>
            <div className="story-image">
                <div className="image-placeholder"><img src={pic} alt="" /></div>
            </div>
        </div>
    </section>

    {/* <!-- Mission & Vision Cards --> */}
    <section className="mission-vision-section">
        <div className="container grid-2">
            <div className="card">
                <h3>Our mission</h3>
                <p>To help organizations solve real problems with software that is simple to use, secure by default and built to last.</p>
            </div>
            <div className="card">
                <h3>Our vision</h3>
                <p>A digital future where every business, large or small, can compete with confidence.</p>
            </div>
        </div>
    </section>

    {/* <!-- Our Core Values --> */}
    <section className="values-section">
        <div className="container">
            <h2>Our core values</h2>
            <div className="grid-4">
                <div className="card">
                    <h4>Clarity</h4>
                    <p>We explain choices in plain language.</p>
                </div>
                <div className="card">
                    <h4>Quality</h4>
                    <p>We ship clean, tested work.</p>
                </div>
                <div className="card">
                    <h4>Security</h4>
                    <p>Safety is built in, not added later.</p>
                </div>
                <div className="card">
                    <h4>Growth</h4>
                    <p>We learn and improve with every project.</p>
                </div>
            </div>
        </div>
    </section>

   
    {/* <!-- Why Clients Choose Nexora --> */}
    <section className="why-choose-section">
        <div className="container">
            <h2>Why clients choose Nexora</h2>
            <div className="grid-3">
                <div className="card">
                    <h4>One team, end to end</h4>
                    <p>Strategy, design, code and security under one roof.</p>
                </div>
                <div className="card">
                    <h4>Honest communication</h4>
                    <p>Weekly updates and no hidden costs.</p>
                </div>
                <div className="card">
                    <h4>Built for local reality</h4>
                    <p>Mobile-first and tuned for real network conditions.</p>
                </div>
            </div>
        </div>
    </section>
    <Cta/>
    <Footer/>
    </div>
  )
}

export default Aboutus
