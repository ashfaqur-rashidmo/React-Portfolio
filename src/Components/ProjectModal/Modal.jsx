import React from 'react';
import { Badge, Button, Group, Image, Indicator, Modal, ScrollArea, Text } from '@mantine/core';

const ModalComponent = ({ opened, onClose, title, live, desc, image, link, technologies, github,code}) => {
    return (
        
       <Modal.Root  scrollAreaComponent={ScrollArea.Autosize} size='70%' className='font-mono' opened={opened} onClose={onClose}>
        <Modal.Overlay />
        <Modal.Content className='rounded-xl text-[#ffffff]'>
            <Modal.Header className='bg-bgColor border-primaryColor border-2 border-b-0 rounded-tl-2xl rounded-tr-2xl'>
            <Modal.Title data-autofocus className='text-4xl font-bold flex items-center gap-8'>
                    {title} 
                    {live && (
                        <Badge size='lg' variant='outline' color='red'  rightSection={<Indicator color='red' position='middle-end' size={7} processing></Indicator>}>
                            Live
                        </Badge>
                    )}
                </Modal.Title>
                <Modal.CloseButton size='md' iconSize='30px' />
            </Modal.Header>
            <Modal.Body className='!bg-bgColor pt-4 !border-primaryColor !border-2 !border-t-0 !rounded-bl-2xl !rounded-br-2xl'>
            <Image className='!rounded-xl  shadow-[0_0_5px_0_#64FFDA]'
                    src={image}
                    alt={title}
                />
                <Group mt="xs" mb="xs">
                {technologies.map((tech, index) =>   (
                    <Badge key={index} variant='light' size='xl' color='#64FFDA'>
                        {tech}
                    </Badge>
                ))}
            </Group>
            <Text className='!text-justify'  size="sm" c="dimmed">
                {desc}
            </Text>
            <Group justify='space-between' mt='md'>
            <a href={github} target='blank' className='w-[48%]'><Button variant='filled' size='lg' color='#64FFDA' fullWidth mt="md" radius="md">
                View Code
            </Button></a>
            <a href={link} target='blank' className='w-[48%]'><Button variant='outline' size='lg' color='#64FFDA' className='text-[#ffffff]' fullWidth mt="md" radius="md">
                View Live App
            </Button></a>
            </Group>
            </Modal.Body>
        </Modal.Content>
       </Modal.Root>
       
    );
};

export default ModalComponent;
