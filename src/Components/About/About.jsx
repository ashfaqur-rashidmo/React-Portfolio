import React from 'react';
import TypewriterComponent from 'typewriter-effect';
import Data from './Data';
import { Button, useMatches } from '@mantine/core';
import photos from '../Photos/Ashfaq3.jpeg';
import { useDisclosure } from '@mantine/hooks';
import Resumer from '../Resumer/Resumer';
import { IconDownload } from '@tabler/icons-react';
import Particles from './MagicUi';
import { NeonGradientCard } from './BackgroundImage';
import { Info } from '../Projects/CardInfo';


const About = () => {
    const [opened, { open, close }] = useDisclosure(false);
    const btn = useMatches({
        xs: 'xs',
        sm: 'sm',
        md: 'md',
        lg: 'lg',
    });

    return (
        <>
            <div
                data-aos="fade-up"
                data-aos-duration="600"
                className='min-h-screen flex flex-col lg:flex-row-reverse justify-around items-center font-mono pt-16 md-mx:pt-24 px-10 py-10 lg-mx:pt-28 lg-mx:ml-6 lg-mx:px-8 xs-mx:pl-20 relative overflow-hidden xs-mx:w-fit xxs-mx:w-fit'
                id='home'
            >
                {/* Particles Background */}
                <Particles
                    className="absolute -z-20 inset-0"
                    quantity={2000}
                    ease={80}
                    vx={0.2}
                    vy={0.2}
                    color='#64FFDA'
                    refresh
                />

                {/* Profile Image Section */}
                <div className="flex justify-center items-center mt-10 md:mt-12 lg-mx:mr-9">
                    <NeonGradientCard className="h-[350px] w-[350px] sm-mx:h-[300px] sm-mx:w-[300px] md-mx:h-[250px] md-mx:w-[250px] md-mx:mt-2 lg-mx:h-[320px] lg-mx:w-[320px] xs-mx:h-[300px] xs-mx:w-[300px] flex items-center justify-center lg:mr-6">
                        <img className="h-full w-full rounded-full object-cover" src={photos} alt="profile" />
                    </NeonGradientCard>
                </div>

                {/* Text Section */}
                <div className='w-full lg:w-3/6 flex flex-col items-start gap-4 lg:ml-9 mt-6 md:pt-6 lg:mt-12 lg-mx:items-center'>
                    
                    <div className='text-primaryColor text-[3.5rem] lg:text-[2.5rem] md:text-[2rem] sm:text-[1.5rem] xs-mx:text-[1.25rem]'>
                        Hi, I am
                    </div>

                    
                    <div className='text-white text-[4.25rem] font-extrabold lg-mx:text-[3.5rem] md-mx:text-[3rem] sm-mx:text-[2.5rem] xs-mx:text-[2rem]'>
                        {Info.name}
                    </div>

                    
                    <div className='text-white text-[2.5rem] lg-mx:text-[2rem] md-mx:text-[1.75rem] sm-mx:text-[1.5rem] xs-mx:text-[1.45rem] flex'>
                        I'm a&nbsp;
                        <span className='text-primaryColor font-semibold'>
                            <TypewriterComponent
                                options={{
                                    strings: Data.stack,
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </span>
                    </div>

                    {/* Bio Text */}
                    <div className='text-textColor text-[1.5rem] lg-mx:text-[1.25rem] md-mx:text-[1rem] sm-mx:text-[0.875rem] xs-mx:text-[0.95rem] w-full lg-mx:w-3/4 text-justify my-8 font-semibold sm-mx:w-14 xs-mx:w-64'>
                        {Data.bio}
                    </div>

                    {/* Buttons */}
                    <div className='flex gap-3 justify-center lg:justify-start'>
                        <Button onClick={open} className='!text-bgColor !w-fit' size={btn} variant="filled" color='#64FFDA'>
                            Resume
                        </Button>
                        <Button
                            component="a"
                            href="/Ashfaqur_Rashid.pdf"
                            size={btn}
                            download={`${Info.name}.pdf`}
                            className='text-white w-fit'
                            variant="outline"
                            color='#64FFDA'
                            rightSection={<IconDownload size={22} />}
                        >
                            Download CV
                        </Button>
                    </div>
                </div>
            </div>
            <Resumer opened={opened} close={close} />
        </>
    );
};

export default About;
