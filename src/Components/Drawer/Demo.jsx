import React from 'react';
import { useDisclosure } from '@mantine/hooks';
import { Drawer, Burger, useMatches } from '@mantine/core';
import { navLinks } from '../Header/Header';

const Demo = () => {
  const [opened, { toggle }] = useDisclosure(false);
  const size = useMatches({
    xs: 'md',
    sm: 'lg',
  });

  return (
    <>
      <Drawer.Root
        className='bs:hidden !-z-10' 
        position='right'
        opened={opened}
        onClose={toggle}
        size='50vw'
       
      >
        <Drawer.Overlay className='!-z-0 !backdrop-opacity-85 blur-sm'/>
        <Drawer.Content className='!-z-0' bg='#0A192F'>
          <Drawer.Body className='mt-28 flex flex-col gap-5'>
            {navLinks(true,toggle)}
          </Drawer.Body>
        </Drawer.Content>
      </Drawer.Root>

      <Burger
        className='bs:hidden !z-50 relative' 
        size='lg'
        color='#64FFDA'
        opened={opened}
        onClick={toggle}
      /> 
    </>
  );
}

export default Demo;
