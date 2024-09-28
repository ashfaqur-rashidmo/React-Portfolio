import { IconBrandGithub, IconBrandInstagram, IconBrandLeetcode, IconBrandLinkedin, IconBrandYoutube } from '@tabler/icons-react';
import React from 'react';

const Social = () => {
    const socialLinks = [
        { link: "https://github.com/ashfaqur-rashidmo", icon: IconBrandGithub },
        { link: 'https://www.linkedin.com/in/ashfaqur-rashid-77155a251/', icon: IconBrandLinkedin },
        { link: 'https://www.instagram.com/alternative_satisfied/', icon: IconBrandInstagram },
        { link: 'https://www.youtube.com/@ashfaqurrashid8144', icon: IconBrandYoutube },
        { link: 'https://leetcode.com/u/Ashfaq08/', icon: IconBrandLeetcode }
    ];

    const socialIcons = socialLinks.map((socialLink, index) => (
        <a
            key={index}
            href={socialLink.link} target='_blank' rel='noopener noreferrer'
            className='font-mono text-lg hover:text-primaryColor hover:-translate-x-2 transition transform duration-300 ease-in-out'
        >
            <socialLink.icon className='md:-rotate-90' size={30} />
        </a>
    ));

    return (
        <div className="flex text-textColor items-center gap-10 fixed rotate-90 bottom-40 -left-48 sm-mx:hidden lg-mx:-left-50">
            {socialIcons}
            <hr className='border-[2px] w-40 rounded-full bg-textColor border-textColor ' />
        </div>
    );
};

export default Social;