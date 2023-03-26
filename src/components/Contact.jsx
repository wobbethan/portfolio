import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";





const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const {target } = e;
    const {name, value} = e.target

    setForm({...form, [name]: value})

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true)

    emailjs.send(
      'service_0uc8mor',
     'template_2nvt19k', 
     {
      from_name: form.name,
      to_name:"Ethan",
      from_email: form.email,
      to_email: "wobbethan.business@gmail.com",
      message: form.message
     },
     'NmnYugA-Qg1gvehfu'
    ).then(() => {
      setLoading(false);
      alert('Message Sent!');
      setForm({
        name: '',
        email: '',
        message: '',
      })
    } , (error) => {

    setLoading(false)
    console.log(error)
    alert('Message failed to send')


    })
  }


// template_2nvt19k
// service_0uc8mor
// NmnYugA-Qg1gvehfu


  return (
    <div className={`xl:mt-15 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
      <motion.div
      variants={slideIn('left', "tween", 0.2, 1)}
      className = "flex-[0.75] p-8 rounded-2xl"

      >
        <p className = {styles.sectionSubText} >Get in touch</p>
        <h3 className = {styles.sectionHeadText}>Contact.</h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
            <label className = "flex flex-col">
              <span className = "text-white font-medium mb-4"> Your Name</span>
              <input
              type = "text"
              name = "name"
              value = {form.name}
              onChange = {handleChange}
              placeholder = "What's your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-white text-white rounded-lg outline-none border-none font-medium"
              style = {{backgroundColor: '#046e8f'}}
              />
              
              
            </label>

            <label className = "flex flex-col">
              <span className = "text-white font-medium mb-4"> Your E-Mail</span>
              <input
              type = "email"
              name = "email"
              value = {form.email}
              onChange = {handleChange}
              placeholder = "What's your E-Mail?"
              className=" py-4 px-6 placeholder:text-white text-white rounded-lg outline-none border-none font-medium"
              style = {{backgroundColor: '#046e8f'}}
              />
              
              
            </label>


            <label className = "flex flex-col">
              <span className = "text-white font-medium mb-4"> Your message</span>
              <textarea
              rows="7"
              name = "message"
              value = {form.message}
              onChange = {handleChange}
              placeholder = "message"
              className="bg-tertiary py-4 px-6 placeholder:text-white text-white rounded-lg outline-none border-none font-medium"
              style = {{backgroundColor: '#046e8f'}}
              />
              
              
            </label>

            <button
            type = 'submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'
            style = {{backgroundColor: '#046e8f'}}            >
              {loading? 'Sending...': 'Send'}

            </button>
        </form>
        </motion.div>

        <motion.div
        variants={slideIn('right', "tween", 0.2, 1)}
        className = "xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"

        >
          <EarthCanvas/>

        </motion.div>

    </div>
  )
}

export default SectionWrapper(Contact,"contact")