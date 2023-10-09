import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import { AiFillPhone } from 'react-icons/ai';
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" integrity="sha384-KyZXEAg3QhqLMpG8r+9Pj5ghr/U4C+OGpamoFVy38p+3HIq6ebfTEF5mx3E24oM/x" crossorigin="anonymous"></link>

const Contact = () => {
  return (
<div id='contact' className='bg-gray-100 py-16 flex items-center justify-center'>
      <div className='container mx-auto px-4'>
        <h2 className='text-3xl font-semibold text-center mb-6'>CONTACT</h2>
        <div className='grid grid-cols-1 lg:grid-cols-5 gap-8'>

          {/* Left Column */}
          <div className='lg:col-span-2'>
            <div className='bg-white p-4 rounded-lg shadow-lg'>
              <h2 className='text-xl font-semibold'>Norbert Duchnowski</h2>
              <p className='text-gray-600'>Junior Front-End Developer</p>
              <p className='text-gray-700 mt-4'>
                Right section is not working yet. Please call number below or connect with me by clicking links below.
              </p>
               <div className='flex items-center space-x-4 mt-4'>
                  <div className='rounded-full bg-purple-600 p-4 hover:scale-110 transition-transform cursor-pointer m-3'>
                    <AiFillPhone className='text-white' />
                  </div> +48-662-937-202
                  </div> 
              <p className='uppercase font-semibold mt-8'>Connect With Me</p>
              <div className='flex items-center space-x-4 mt-4'>
                <a href='https://www.linkedin.com/in/norbert-duchnowski-43a555268/' target='_blank' rel='noreferrer'>
                  <div className='rounded-full bg-purple-600 p-4 hover:scale-110 transition-transform cursor-pointer'>
                    <FaLinkedinIn className='text-white' />
                  </div>
                </a>
                <a href='https://github.com/dnaid4k' target='_blank' rel='noreferrer'>
                  <div className='rounded-full bg-purple-600 p-4 hover:scale-110 transition-transform cursor-pointer'>
                    <FaGithub className='text-white' />
                  </div>
                </a>
                <a href="mailto:norbert.duchnowski@outlook.com" className="text-gray-700 text-lg">
                <div className='rounded-full bg-purple-600 p-4 hover:scale-110 transition-transform cursor-pointer'>
                  <AiOutlineMail className='text-white' />
                </div>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className='lg:col-span-3'>
            <div className='bg-white p-4 rounded-lg shadow-lg'>
              <form action='https://getform.io/f/08ebcd37-f5b5-45be-8c13-714f011ce060' method='POST' encType='multipart/form-data'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                  <div className='flex flex-col'>
                    <label className='text-sm font-semibold'>Name</label>
                    <input className='border border-gray-300 rounded-lg py-2 px-3' type='text' name='name' />
                  </div>
                  <div className='flex flex-col'>
                    <label className='text-sm font-semibold'>Phone Number</label>
                    <input className='border border-gray-300 rounded-lg py-2 px-3' type='text' name='phone' />
                  </div>
                </div>
                <div className='flex flex-col mt-4'>
                  <label className='text-sm font-semibold'>Email</label>
                  <input className='border border-gray-300 rounded-lg py-2 px-3' type='email' name='email' />
                </div>
                <div className='flex flex-col mt-4'>
                  <label className='text-sm font-semibold'>Subject</label>
                  <input className='border border-gray-300 rounded-lg py-2 px-3' type='text' name='subject' />
                </div>
                <div className='flex flex-col mt-4'>
                  <label className='text-sm font-semibold'>Message</label>
                  <textarea className='border border-gray-300 rounded-lg py-2 px-3' rows='5' name='message'></textarea>
                </div>
                <button className='bg-purple-600 text-white rounded-lg py-3 px-6 mt-6 hover:bg-purple-700 transition-colors' type='submit'>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className='flex justify-center mt-12'>
          <a href='#about'>
            <div className='rounded-full bg-white shadow-lg p-4 hover:scale-110 transition-transform cursor-pointer'>
              <HiOutlineChevronDoubleUp className='text-purple-600' size={30} />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;