import React from 'react';
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import {motion} from 'framer-motion'

function Cards({ data,reference }) {
  return (
    <motion.div drag dragConstraints={reference} className='relative w-60 h-72 bg-sky-200 rounded-[45px] bg-zinc-900/90 text-white p-5 overflow-hidden'>
      <FaRegFileAlt />
      <p className='text-sm leading-tight mt-5 font-semibold'>{data.desc}</p>
      <div className='footer absolute bottom-16 left-0 w-full h-12'>
        <div className='flex justify-between items-center px-8 py-3 mb-5'>
          <h5 className='px-2'>{data.filesize}</h5>
          <span className='w-7 h-7 bg-sky-400 rounded-full flex items-center justify-center'>
            {data.close && <MdOutlineFileDownload size=".8rem" color='#000' />}
          </span>
        </div>

        {data.tag.isOpen && (
          <div className={`tag z-10 w-full py-2 ${
            data.tag.tagcolor === "blue" ? "bg-blue-600" : "bg-green-600"
          } flex justify-center items-center`}>
            <h3 className='text-sm font-semibold text-white'>{data.tag.Tagtitle}</h3>
          </div>
        )}
      </div>
    </motion.div> 
  );
}

export default Cards;
