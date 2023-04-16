import clsx from 'clsx';
import Image from 'next/image';
import React from 'react'

interface HeaderPadingItem{
    imageString: string;
    text: string;
    isCurrent?: boolean;
    isSoon?: boolean;
    isText?: string;
}

export default function HeaderPadingItem({imageString,text,isCurrent,isSoon,isText}:HeaderPadingItem) {
  return (
    <div className={clsx("flex text-white text-sm items-center px-[16px] py-[12px] h-[44px] cursor-default", (!isSoon && !isCurrent) && " hover:bg-ui-100 rounded-[7px] cursor-pointer")}>
        <div className="flex items-center py-[10px] pr-[12px]">
            <Image src={imageString} alt="" width={20} height={20}/>
        </div>
        <div className="flex flex-1 items-center py-[12px] ">
            <p>{text}</p>
        </div>
        <div className="ml-[16px] my-[10px]">
            <div className=" py-[4px] px-[16px] ">
                <button className= {clsx(isSoon || isCurrent ? "rounded-full bg-back-300 w-[50px] h-[24px] text-xs text-font-200 cursor-default" : "hidden")}>{isText}</button>  
            </div>
        </div>
    </div>
  )
}
