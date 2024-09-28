import React from 'react';
import {Info, socialLinks} from '../Projects/CardInfo'

const Footer = () => {
   
        const socialIcons = socialLinks.map((socialLink, index) => (
            <a
                key={index}
                href={socialLink.link} target='_blank' rel='noopener noreferrer'
                className='font-mono text-lg hover:text-primaryColor hover:scale-105 transition transform duration-300 ease-in-out'
            >
                <socialLink.icon size={30} />
            </a>
        ));
    return (
        <div className=' mx-36 mt-10 mb-10 font-mono flex flex-col gap-2 items-center'>
            <hr className='w-full border-t-2 border-primaryColor mb-4' />
            <div className='text-3xl text-primaryColor font-semibold'>{Info.name}</div>
            <div className='md-mx:flex hidden text-textColor gap-8 sm-mx:gap-6'>{socialIcons}</div>
            <div className='text-textColor text-xl'>Copyright &copy;{new Date().getFullYear()} {Info.name} | All Right Reserved</div>
        </div>
    );
};

export default Footer;