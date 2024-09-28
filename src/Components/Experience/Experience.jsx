import { Text, Timeline } from '@mantine/core';
import { IconBriefcaseFilled, IconCalendarDue, IconPointFilled } from '@tabler/icons-react';
import React from 'react';
import { ExperienceInfo } from '../Projects/CardInfo';

const TimelineItem = ({ items }) => {
  return (
    <Timeline data-aos="fade-down-right" data-aos-duration="700" color="#64FFDA" active={2} bulletSize={28} lineWidth={2}>
      {items.map((item, index) => (
        <Timeline.Item
          key={index}
          bullet={<IconBriefcaseFilled size={28} className="text-bgColor" />} 
          lineVariant='dotted'
          className='pt-12 mb-2'
        >
          
          <div className="border shadow-[0_0px_10px_0_#64FFDA50] flex flex-col gap-5 border-primaryColor p-4 lg:p-6 rounded-2xl font-mono">
            <div className="flex flex-col lg:flex-row gap-5 items-center">
              <div>
                <img className="rounded-lg w-16" src={item.imageCompany} alt="company" />
              </div>
              <div className="flex flex-col text-[#ffffff]">
                <div className="text-2xl font-semibold">{item.role}</div>
                <div className="text-lg font-semibold flex gap-1">
                  {item.company}
                  <IconCalendarDue /> {item.date}
                </div>
              </div>
            </div>
            <div className="text-textColor text-justify mt-2 leading-6">
              {item.desc}
            </div>
            <div className="text-textColor flex items-center">
              <span className="font-semibold text-lg text-[#ffffff]">Skills:&nbsp;</span>
              <div className="flex gap-2 items-center flex-wrap">
                {item.skills.map((skill, index) => (
                  <span key={index} className="flex items-center">
                    <IconPointFilled size={16} /> {skill}
                    {index < item.skills.length - 1}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Timeline.Item>
      ))}
      <Timeline.Item
        bullet={<IconBriefcaseFilled size={28} className="text-bgColor" />}
        lineVariant='dotted'
      />
    </Timeline>
  );
};

const Experience = () => {
  return (
    <div className="px-4 lg:px-16 mx-4 lg:mx-20 my-5 font-mono" id="experience">
      <h1 className="text-4xl mb-5 font-bold text-[#ffffff] text-center mt-14">
        <span className="text-primaryColor">04.&nbsp;</span>Experience
      </h1>
      <TimelineItem items={ExperienceInfo} />
    </div>
  );
};

export default Experience;
