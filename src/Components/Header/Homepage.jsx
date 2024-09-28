import React, { useEffect, useState } from 'react';
import Header from './Header';
import Mail from '../SocialLinks/Mail';
import Social from '../SocialLinks/Social';
import About from '../About/About';
import Project from '../Projects/Project';
import Skills from '../Skills/Skills';
import Experience from '../Experience/Experience';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import { Loader } from '../MagicUi/Loader';
import { Toaster } from 'react-hot-toast';

const Homepage = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 5000);

        
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className=''>
            {loading ? (
                <Loader />
            ) : (
                <>
                <Toaster/>
                    <Header />
                    <About />
                    <Project />
                    <Skills />
                    <Experience />
                    <Contact />
                    <Footer />
                    <Mail />
                    <Social />
                </>
            )}
        </div>
    );
};

export default Homepage;
