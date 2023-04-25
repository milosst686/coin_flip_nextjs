import React, { useState } from 'react';
import {BsFillBellFill} from 'react-icons/bs';
import {SiBinance} from 'react-icons/si';
import {MdKeyboardArrowDown,MdKeyboardArrowUp,MdOutlineLan} from 'react-icons/md';
import HeaderPadingItem from './HeaderPadingItem';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import {FaGripLines} from 'react-icons/fa';
import NavBar from '../NavBarItem/NavBar';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <div className="w-full" >
      <div className="flex justify-between pt-5">
      <div className="flex items-center justify-center lg:hidden ml-5 hover:bg-ui-400 rounded-full h-[40px] w-[36px]" onClick={()=>{setIsOpen(!isOpen)}} >
            <FaGripLines className=" h-[24px] w-[24px] text-white"/>
          
          </div>
          {
                    isOpen && (
                    <div className="absolute left-0 top-0 right-0 bottom-0 " onClick={()=>{setIsOpen(!isOpen)}}>
                       <NavBar />
                    </div>
                            )
                    }
        <div className="mx-0 hidden lg:block">
        <button className=" uppercase rounded-full border-accent-250 border  w-[117px] h-[36px] ml-5 items-center">
          <span className="text-accent-250 text-[13px]"> Swap $Coins</span>  
        </button>
        </div>
        
        <div className="flex items-center pr-5 gap-x-4 ">
         <div className="items-center lg:gap-x-4 hidden lg:flex">
         <span className="rounded-full bg-ui-100 text-white w-[48px] h-[36px] flex items-center justify-center"> 
            <BsFillBellFill />
          </span>
          <span className="rounded-full bg-ui-100 h-[36px] w-[70px] text-accent-300 flex items-center justify-center cursor-pointer"  onClick={()=>{setIsOpen(!isOpen)}}>

            <SiBinance className="h-5 w-5"/>
            {!isOpen ? (<MdKeyboardArrowDown className="h-5 w-5" />) : (<MdKeyboardArrowUp className="h-5 w-5" />) }
          </span>
          {
            isOpen && (

              <div className=" absolute rounded-[7px] w-[280px] h-[360px] bg-back-250 mt-[410px] ml-5 p-[4px]"  onClick={()=>{setIsOpen(!isOpen)}}>
                  <HeaderPadingItem  imageString="/logo/Polygon.png" text="Polygon" />
                  <HeaderPadingItem  imageString="/logo/Binance.png" text="BNB Smart Chain" isCurrent buttonText="Current"/>
                  <HeaderPadingItem  imageString="/logo/Avalanche.png" text="Avalanche" />
                  <HeaderPadingItem  imageString="/logo/Arbitrum.png" text="Arbitrum One" isSoon buttonText="Soon"/>
                  <HeaderPadingItem  imageString="/logo/Polygon.png" text="Polygon Testnet" />
                  <HeaderPadingItem  imageString="/logo/Binance.png" text="BNB Smart Chain Testnet" />
                  <HeaderPadingItem  imageString="/logo/Avalanche.png" text="Avalanche Testnet" />
                  <HeaderPadingItem  imageString="/logo/Arbitrum.png" text="Arbitrum Tinkeby" isSoon buttonText="Soon"/>
              </div>
            )
          }
         </div>
          <div className=" text-[13px] font-medium w-auto  flex items-center justify-center cursor-pointer pr-2">
          <ConnectButton accountStatus="address"
         showBalance={false}
         chainStatus="icon" />

          </div>
        </div>
      </div>
       </div>
  )
}
