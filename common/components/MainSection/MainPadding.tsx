import clsx from 'clsx';
import Image from 'next/image';
import React from 'react'
import {GoCheck} from 'react-icons/go'
import {ImInfo} from 'react-icons/im'


interface MainPadding{
    isPicked?: boolean;
    text: string;
    imageString: string;
    hasInfo?: boolean;
}
export default function MainPadding({isPicked,text,imageString,hasInfo}:MainPadding) {
  return (
    <div className="flex px-[16px] rounded-[7px] bg-back-200 h-[55px] items-center hover:bg-ui-100">

        <div className="mr-[12px] my-[16px] w-[24px] ">
            <GoCheck className={clsx("text-white w-[16px] h-[16px] font-bold",!isPicked && "hidden")} />
        </div>
        <div className="flex items-center w-[30px] h-[40px]">
            <span className="uppercase text-white text-sm py-[12px] font-semibold ">
             {text}
            </span>
        </div>
        <div className=" flex items-center ml-[16px] h-[40px]">
            <div className="flex items-center" >
             <Image src={imageString} alt="" width={24} height={24}/>
            </div>

        <div className={clsx(hasInfo? "p-[8px] text-white" : "hidden")}>
        <ImInfo />
        </div>
        </div>   
    </div>
  )
}
