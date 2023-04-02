import React from 'react'

import {AiOutlineInfoCircle} from 'react-icons/ai';
import {BsFileEarmarkCode, BsPersonCircle} from 'react-icons/bs'
import {BiFullscreen} from  'react-icons/bi';
import {MdVolumeUp, MdOutlineLensBlur} from 'react-icons/md';

export default function 
() {
  return (
    <div className="flex w-full justify-between ">
              <div className="flex gap-x-4 px-4 py-4  text-white font-bold">
              <p >Coin toss</p>
              <AiOutlineInfoCircle className="mt-1" />
              <BsFileEarmarkCode className="mt-1" />
              <BiFullscreen className="mt-1" />
              <MdVolumeUp className="mt-1"  />
              <MdOutlineLensBlur className="mt-1" />
              </div>
              <div className=" bg-transparent border-2 border-accent-100 w-[103px] h-[32px] rounded-xl my-4 mr-6 text-accent-100 flex items-center justify-center">
                <p >Analytics</p>
                <BsPersonCircle className="ml-1"/>
              </div>
            </div>
  )
}
