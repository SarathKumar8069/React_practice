import React, { useRef } from 'react'
import Cards from './Cards'


function Foreground() {

    const ref=useRef(null);
    const data=[
        {
         desc:"This is the first card in the docs and it is stored in as components", 
         filesize:".9mb",
         close:true,
         tag:{isOpen:true, 
            Tagtitle:"Download now",
            tagcolor:"green"}
        },
        {
         desc:"This is the first card in the docs and it is stored in as components", 
         filesize:".9mb",
         close:true,
         tag:{isOpen:true, 
            Tagtitle:"Download now",
            tagcolor:"blue"}
        },
        {
         desc:"This is the first card in the docs and it is stored in as components", 
         filesize:".9mb",
         close:true,
         tag:{isOpen:true, 
            Tagtitle:"Download now",
            tagcolor:"green"}
        }
    ]
  return (
    <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full bg-sky-800/200 flex gap-5 flex-wrap'>
        {data.map((item,index)=>(
            <Cards data={item} reference={ref}/>
        ))}
     
    </div>
  )
}

export default Foreground
