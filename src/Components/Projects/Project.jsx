import React from 'react';
import Cards from './Cards';
import { ProjectInfo } from './CardInfo';

const Project = () => {
    return (
        <div data-aos="fade-right" data-aos-duration="800" className='px-16 items-center md:px-6 lg:px-16 xl:px-16 md:mx-16 lg:mx-8 lg-mx:pl-14 xl:mx-10 my-5 font-mono  ' id='projects'>
            <div className="flex justify-center items-center">
                <h1 className='text-3xl sm-mx:text-3xl xs-mx:text-2xl md:text-4xl font-bold text-[#ffffff] text-center mb-4 xs-mx:ml-28'>
                    <span className='text-primaryColor'>02.&nbsp;</span>Projects
                </h1>
            </div>
            
           
            <div className='flex flex-wrap items-center justify-around gap-4 md:gap-3 lg-mx:items-center md:items-center md:w-[100%] md:h-[100%] md:mt-7 xs-mx:w-[155%]'>
                {ProjectInfo.map((project, index) => (
                    <Cards 
                        key={index} 
                        title={project.title} 
                        desc={project.desc} 
                        image={project.image} 
                        live={project.live}
                        technologies={project.technologies}
                        github={project.github}
                        link={project.link}
                    />
                ))}
            </div>
        </div>
    );
};

export default Project;