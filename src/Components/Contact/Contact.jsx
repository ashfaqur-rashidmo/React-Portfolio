import { IconArrowRight, IconTopologyStar3 } from '@tabler/icons-react';
import FloatingInput from './Input';
import { useState } from 'react';
import { Button, useMatches } from '@mantine/core';
import { toast } from 'react-hot-toast';
import { addDoc, collection } from "firebase/firestore";
import { db } from '../Backend/Firebase'; 

const Contact = () => {
  const initialFormState = {
    name: '',
    email: '',
    phone: '',
    message: ''
  };

  const [formData, setFormData] = useState(initialFormState);
  const [formError, setFormError] = useState({});

  const validateForm = (key, value) => {
    let error = '';
   
    if (!value) {
      error = `${key} is required`;
    } 
   
    return error;
  };

  const handleInputChange = (id, value) => {
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async () => {
    let valid = true;
    let newFormError = {};

    for (let key in formData) {
      const error = validateForm(key, formData[key]);
      if (error.length > 0) {
        newFormError[key] = error;
        valid = false;
      }
    }

    setFormError(newFormError);
    
    if (valid) {
      setFormData(form);
      try {
        await addDoc(collection(db, "portfolio"), formData);
        setFormData(initialFormState);
        toast.success('Submitted Successfully!', { duration: 4000 });
      } catch (error) {
        toast.error('Failed to submit! Please try again.', { duration: 4000 });
      }
    } else {
      toast.error('Some error occurred!', { duration: 4000 });
    }
  };

  const btn = useMatches({
    xsm: 'xs',
    sm: "sm",
    md: 'md',
    lg: "lg"
  });

  return (
    <div data-aos="flip-left" data-aos-duration="3000" className="px-4 pt-5 lg:px-16 mx-4 lg:mx-20 my-5 font-mono " id="contact">
      <h1 className="text-4xl mb-5 font-bold text-[#ffffff] text-center mt-14">
        <span className="text-primaryColor">05.&nbsp;</span>Contact
      </h1>
      <div className="w-[70%] m-auto flex flex-col gap-5 border border-primaryColor p-8 rounded-3xl shadow-[0_0_10px_0_#64FFDA50]">
        <div className="text-4xl flex justify-center items-center gap-2 text-[#ffffff] font-semibold">
          Let's Connect <IconTopologyStar3 className="w-11 h-11 text-primaryColor" />
        </div>
        <FloatingInput
          id="name"
          name="Name"
          value={formData.name}
          handleInputChange={handleInputChange}
        />
        <FloatingInput
          id="email"
          name="E-mail"
          value={formData.email}
          handleInputChange={handleInputChange}
        />
        <FloatingInput
          id="phone"
          name="Phone Number"
          value={formData.phone}
          handleInputChange={handleInputChange}
        />
        <FloatingInput
          id="message"
          name="Message"
          value={formData.message}
          handleInputChange={handleInputChange}
          isTextarea={true}
        />
        <Button
          fullWidth
          onClick={handleSubmit}
          variant="filled"
          color="#64FFDA"
          size={btn}
          radius="xl"
          className='text-xl h-[55px] text-bgColor font-bold'
        >
          Send <IconArrowRight size={20} className='ml-2'/>
        </Button>
      </div>
    </div>
  );
};

export default Contact;