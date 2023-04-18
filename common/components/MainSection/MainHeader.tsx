import React, { useState } from 'react'
import {AiOutlineInfoCircle} from 'react-icons/ai';
import {BsFileEarmarkCode, BsPersonCircle} from 'react-icons/bs'
import {BiFullscreen} from  'react-icons/bi';
import {MdVolumeUp, MdOutlineLensBlur} from 'react-icons/md';
import Analytics from '../PopUpItems/Analytics';


export default function MainHeader() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex w-full justify-between ">
              <div className="flex gap-x-4 px-4 items-center  text-white font-bold mt-1">
              <p >Coin toss</p>
              <AiOutlineInfoCircle />
              <BsFileEarmarkCode  />
              <BiFullscreen  />
              <MdVolumeUp  />
              <MdOutlineLensBlur />
              </div>
              <div className=" border-2 border-accent-100 w-[103px] h-[32px] rounded-xl mt-1 mr-6 text-accent-100 flex items-center justify-center cursor-pointer" onClick={()=>{setIsOpen(!isOpen)}} >
                <p >Analytics</p>
                <BsPersonCircle className="ml-1"/>
              </div>
              {
                    isOpen && (                      
                    <div onClick={()=>{setIsOpen(!isOpen)}}>
                      <Analytics />
                    </div>
                            )
              }
            </div>
  )
}
