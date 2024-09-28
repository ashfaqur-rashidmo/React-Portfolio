import React from 'react';
import SkillCard from './SkillCard';
import { SkillInfo } from '../Projects/CardInfo';

const Skills = () => {
    return (
        <div className='px-16 mx-20 my-5 font-mono items-center' id='skills'>
            <h1 className='text-4xl mb-5 font-bold text-[#ffffff] text-center'>
                <span className='text-primaryColor'>03.&nbsp;</span>Skills
            </h1>
            <div className='flex flex-wrap gap-4 justify-between sm-mx:flex-col'>
                {SkillInfo.map((skill, index) => (
                    <SkillCard 
                        key={index} 
                        title={skill.title} 
                        skills={skill.skills} 
                    />
                ))}
            </div>
        </div>
    );
};

export default Skills;