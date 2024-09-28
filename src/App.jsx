import React, { useEffect } from 'react';
import '@mantine/core/styles.css';
import Homepage from './Components/Header/Homepage';
import { createTheme, MantineProvider } from '@mantine/core';
import { pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  useEffect (() => {
    AOS.init();
  },[]);

  const theme = createTheme({
    breakpoints: {
      xs: '320px',
      sm: '476px',
      md: '640px',
      lg: '900px',
      xl: '1024',
      '2xl': '1280',
    },
  });

  return (
    <div>
            
      <MantineProvider>
      <Homepage/>
        </MantineProvider>
    
       
    </div>
  );
};

export default App;