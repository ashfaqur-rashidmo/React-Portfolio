import React from 'react';
import { Avatar } from '@mantine/core';

const SkillBadge = ({ skills }) => {
    return skills.map((skill, index) => (
        <div key={index} className="flex gap-1 border border-textColor rounded-2xl items-center py-4 px-4 mb-1">
            <Avatar className='w-[48px] ' variant="transparent" radius="xs" src={`/public/Icons/${skill}.png`} />
            <div className='text-textColor text-lg'>{skill}</div>
        </div>
    ));
};

const SkillCard = ({ title, skills }) => {
    return (
        <div 
            data-aos="fade-left" 
            data-aos-duration="500" 
            className="w-[49%] xl-mx:w-[48%] xs-mx:w-[240%] xxs-mx:w-60 sm-mx:w-[80%] sm-mx:flex-col shadow-[0_0_10px_0_#64FFDA50] rounded-2xl border-2 border-primaryColor p-5 flex flex-col justify-between"
        >
            <div className="text-3xl text-[#ffffff] text-center font-bold mb-4">
                {title}
            </div>
            <div className="flex gap-5 justify-center flex-wrap flex-grow items-center">
                <SkillBadge skills={skills} />
            </div>
        </div>
    );
};

export default SkillCard;
