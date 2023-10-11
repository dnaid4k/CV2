import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import { AiFillPhone } from 'react-icons/ai';
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" integrity="sha384-KyZXEAg3QhqLMpG8r+9Pj5ghr/U4C+OGpamoFVy38p+3HIq6ebfTEF5mx3E24oM/x" crossorigin="anonymous"></link>

const Contact = () => {
  return (
<div id='contact' className='bg-[#0f0f0f] py-16 flex items-center justify-center mt-10 '>
      <div className='container mx-auto px-4'>
        <h2 className='text-3xl font-semibold text-center mb-6 text-[#b9b9b9]'>CONTACT</h2>
        <div className='grid grid-cols-1 lg:grid-cols-5 gap-8'>

          {/* Left Column */}
          <div className='lg:col-span-2'>
            <div className='bg-[#181818] p-4 rounded-lg shadow-lg'>
              <h2 className='text-xl font-semibold text-[#b9b9b9]'>Norbert Duchnowski</h2>
              <p className='text-[#b9b9b9]'>Junior Front-End Developer</p>
              <p className='text-[#b9b9b9] mt-4'>
                Right section is not working yet. Please call number below or connect with me by clicking links below.
              </p>
               <div className='flex items-center space-x-4 mt-4'>
                  <div className='rounded-full bg-green-900 p-4 hover:scale-110 transition-transform cursor-pointer'>
                    <AiFillPhone className='text-[#b9b9b9]' />
                  </div>
                  <h2 className='text-[#ffffff] text-sm md:text-base lg:text-xl'>+48 662-937-202</h2>
                  </div> 
              <p className='uppercase font-semibold mt-8 text-[#b9b9b9]'>Connect With Me</p>
              <div className='flex items-center space-x-4 mt-4'>
                <a href='https://www.linkedin.com/in/norbert-duchnowski-43a555268/' target='_blank' rel='noreferrer'>
                  <div className='rounded-full bg-green-900 p-4 hover:scale-110 transition-transform cursor-pointer'>
                    <FaLinkedinIn className='text-white' />
                  </div>
                </a>
                <a href='https://github.com/dnaid4k' target='_blank' rel='noreferrer'>
                  <div className='rounded-full bg-green-900 p-4 hover:scale-110 transition-transform cursor-pointer'>
                    <FaGithub className='text-white' />
                  </div>
                </a>
                <a href="mailto:norbert.duchnowski@outlook.com" className="text-gray-700 text-lg">
                <div className='rounded-full bg-green-900 p-4 hover:scale-110 transition-transform cursor-pointer'>
                  <AiOutlineMail className='text-white' />
                </div>
                </a>
              </div>
              <h2 className='text-[#ffffff] mt-3 text-xs md:text-base lg:text-xl'>norbert.duchnowski@outlook.com</h2>
            </div>
          </div>

          {/* Right Column */}
          <div className='lg:col-span-3'>
            <div className='bg-[#181818] p-4 rounded-lg shadow-lg'>
              <form>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                  <div className='flex flex-col'>
                    <label className='text-sm font-semibold text-[#b9b9b9]'>Name</label>
                    <input className='text-[#b9b9b9] border border-gray-600 rounded-lg py-2 px-3 bg-[#3b3b3b]' type='text' name='name' />
                  </div>
                  <div className='flex flex-col'>
                    <label className='text-sm font-semibold text-[#b9b9b9]'>Phone Number</label>
                    <input className='text-[#b9b9b9] border border-gray-600 rounded-lg py-2 px-3 bg-[#3b3b3b]' type='text' name='phone' />
                  </div>
                </div>
                <div className='flex flex-col mt-4'>
                  <label className='text-sm font-semibold text-[#b9b9b9]'>Email</label>
                  <input className='text-[#b9b9b9] border border-gray-600 rounded-lg py-2 px-3 bg-[#3b3b3b]' type='email' name='email' />
                </div>
                <div className='flex flex-col mt-4'>
                  <label className='text-sm font-semibold text-[#b9b9b9]'>Subject</label>
                  <input className='text-[#b9b9b9] border border-gray-600 rounded-lg py-2 px-3 bg-[#3b3b3b]' type='text' name='subject' />
                </div>
                <div className='flex flex-col mt-4'>
                  <label className='text-sm font-semibold text-[#b9b9b9]'>Message</label>
                  <textarea className='text-[#b9b9b9] border border-gray-600 rounded-lg py-2 px-3 bg-[#3b3b3b]' rows='5' name='message'></textarea>
                </div>
                <button className='bg-green-800 text-white rounded-lg py-3 px-6 mt-6 hover:bg-red-700 transition-colors' type='submit'>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;