import React from 'react'
import {AiOutlineInfoCircle} from 'react-icons/ai';
import {BsFileEarmarkCode, BsPersonCircle} from 'react-icons/bs'
import {BiFullscreen} from  'react-icons/bi';
import {MdVolumeUp, MdOutlineLensBlur} from 'react-icons/md';

export default function MainHeader() {
  return (
    <div className="flex w-full justify-between ">
              <div className="flex gap-x-4 px-4 py-4  text-white font-bold mt-1">
              <p >Coin toss</p>
              <AiOutlineInfoCircle />
              <BsFileEarmarkCode  />
              <BiFullscreen  />
              <MdVolumeUp  />
              <MdOutlineLensBlur />
              </div>
              <div className=" border-2 border-accent-100 w-[103px] h-[32px] rounded-xl my-4 mr-6 text-accent-100 flex items-center justify-center">
                <div className=" px-[12px] py-[8px] flex">
                <p className="font-bold text-[12px]">Analytics</p>
                <BsPersonCircle className="ml-1 font-bold"/>
                </div>
              </div>
            </div>
  )
}
