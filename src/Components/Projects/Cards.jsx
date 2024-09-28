import React from 'react';
import { Badge, Button, Card, Group, Image, Indicator, Text, useMatches } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import ModalComponent from '../ProjectModal/Modal.jsx'; 

const Cards = ({ title, desc, image, link, technologies, github, live }) => {
    const [opened, { open, close }] = useDisclosure(false);
    
    const btn = useMatches({
        xs:'xs', sm:'sm', md:'md',
    })
    return (
        <div className='w-full sm:w-[47%] md:w-[47%] lg:w-[32%] xl:w-[32%] sm-mx:w-[170%] xs-mx:w-full mb-5' data-aos='fade-up' data-aos-duration='800'>
            <Card onClick={open} className='bg-bgColor cursor-pointer transition-transform duration-300 hover:scale-[1.03] border-primaryColor border-2 hover:shadow-[0_0_10px_1px_#64FFDA]' shadow="lg" padding="sm" radius="lg" withBorder>
                <Card.Section className='p-3'>
                    <Image className='!rounded-xl shadow-[0_0_5px_0_#64FFDA]'
                        src={image}
                        alt={title}
                    />
                </Card.Section>

                <Group justify="space-between" mt="xs" mb="xs">
                    <Text className='text-2xl !font-bold text-[#ffffff] flex items-center'>{title}</Text>
                    <Badge variant='outline' color="pink" rightSection={<Indicator color="green" position="middle-end" size={7} processing></Indicator>}>
                        Live 
                    </Badge> 
                </Group>

                <Group mt="xs" mb="xs">
                    {technologies.map((tech, index) => index < 3 && (
                        <Badge key={index} variant='light' size='lg' color='#64FFDA'>
                            {tech}
                        </Badge>
                    ))}
                </Group>

                <Text className='!text-justify !text-sm xs-mx:!text-xs' lineClamp={5} size="sm" c="dimmed">
                    {desc}
                </Text>

                <Button onClick={open} className='' color='#64FFDA'variant='outline' mt="md" radius="md">
                    Show More
                </Button>
            </Card>

            <ModalComponent 
                opened={opened} 
                onClose={close} 
                title={title} 
                live={live}
                desc={desc} 
                image={image} 
                link={link} 
                technologies={technologies}
                github={github}
            />
        </div>
    );
};

export default Cards;