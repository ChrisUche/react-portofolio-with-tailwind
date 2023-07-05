import { useState, useRef } from 'react'
import { motion as m } from "framer-motion";
import EarthCanvas from './EarthCanvas';
import { slideIn } from '../../utils/motion';
// import  emailjs  from "@emailjs/browser";


const Contact = () => {
    const formRef = useRef();
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {}

    const handleSubmit = (e) => {}

  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
       <m.div
         variants={slideIn('left', "tween", 0.2, 1)}
         className='flex-[0.75] bg-slate-400 p-8 rounded-2xl'
        >
            <p className='text-white font-serif'>Get in touch</p>
            <h3 className='text-white font-extrabold text-3xl'>Contact.</h3>

            <form
                ref={formRef}
                onSubmit={handleSubmit}
                className='mt-12 flex flex-col gap-8' 
            >
                <label className='flex flex-col'>
                    <span className='text-white font-medium mb-4'>
                        Your Name
                    </span>
                    <input
                        type='text'
                        name='name'
                        value={form.name}
                        onChange={handleChange}
                        placeholder='What is your Name?'
                        className='bg-teal-800 py-4 px-6 text-white rounded-lg outline-none border-none font-medium placeholder:text-white'
                    />
                </label>
                <label className='flex flex-col'>
                    <span className='text-white font-medium mb-4'>
                        Your Email
                    </span>
                    <input
                        type='email'
                        name='email'
                        value={form.email}
                        onChange={handleChange}
                        placeholder="What's your Email?"
                        className='bg-teal-800 py-4 px-6 text-white rounded-lg outline-none border-none font-medium placeholder:text-white'
                    />
                </label>
                <label className='flex flex-col'>
                    <span className='text-white font-medium mb-4'>
                        Your mMssage
                    </span>
                    <textarea
                        rows='7'
                        name='message'
                        value={form.message}
                        onChange={handleChange}
                        placeholder='What do you want to say?'
                        className='bg-teal-800 py-4 px-6 text-white rounded-lg outline-none border-none font-medium placeholder:text-white'
                    />
                </label>

                <button
                    type='submit'
                    className='text-white py-3 px-8 bg-slate-500 font-bold outline-none shadow-md shadow-black w-fit rounded-xl'
                >
                    {loading ? 'Sending...' : 'Send'}
                </button>

            </form>
       </m.div>
       <m.div
            variants={slideIn('right', "tween", 0.2, 1)}
            className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
       >
        <EarthCanvas />
       </m.div>
    </div>
  )
};

export default Contact