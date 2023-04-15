import React,{useState}from 'react';
import {BsFillBellFill} from 'react-icons/bs';
import {SiBinance} from 'react-icons/si';
import {MdKeyboardArrowDown,MdKeyboardArrowUp,MdOutlineLan} from 'react-icons/md';
import HeaderPadingItem from './HeaderPadingItem';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import {FaGripLines} from 'react-icons/fa';
import NavBar from '../NavBarItem/NavBar';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  function openNavBar()
  {
    if(!isNavOpen)
    {
        setIsNavOpen(true);
    }
    else
    setIsNavOpen(false);
  }
  
  function closeOnClick()
  {
    if(isOpen)
    {
      setIsOpen((prev)=> !prev);
    }
  }
  return (
    <div className="w-full"  >
      <div className="flex justify-between pt-5">
      <div className="flex items-center justify-center  lg:hidden ml-5 hover:bg-ui-400 rounded-full h-[40px] w-[36px]" onClick={()=>{openNavBar()}}>
            <FaGripLines className=" h-2/3 w-2/3 text-white"/>
          
          </div>
          {
                    isNavOpen && (
                    <div className="absolute left-0 top-0 right-0 bottom-0 " onClick={()=>{setIsNavOpen(false)}}>
                       <NavBar />
                    </div>
                            )
                    }
        <div className="mx-0 invisible lg:visible">
        <button className=" uppercase rounded-full border-accent-250 border  w-[117px] h-[36px] ml-5 items-center">
          <span className="text-accent-250 text-[13px]"> Swap $Coins</span>  
        </button>
        </div>
        
        <div className="flex items-center pr-5 gap-x-4 ">
         <div className="flex items-center gap-x-4 invisible lg:visible">
         <span className="rounded-full bg-ui-100 text-white w-[48px] h-[36px] flex items-center justify-center"> 
            <BsFillBellFill />
          </span>
          <span className="rounded-full bg-ui-100 h-[36px] w-[70px] text-accent-300 flex items-center justify-center" onClick={()=>{setIsOpen(!isOpen)}}>
            <SiBinance className="h-5 w-5"/>
            <MdKeyboardArrowDown className="h-5 w-5" />
          </span>
          {
            isOpen && (
              <div className=" absolute rounded-[7px] w-[280px] h-[360px] bg-back-250 mt-[410px] ml-5 p-[4px]">
                  <HeaderPadingItem  imageString="/logo/Polygon.png" text="Polygon" />
                  <HeaderPadingItem  imageString="/logo/Binance.png" text="BNB Smart Chain" isCurrent isText="Current"/>
                  <HeaderPadingItem  imageString="/logo/Avalanche.png" text="Avalanche" />
                  <HeaderPadingItem  imageString="/logo/Arbitrum.png" text="Arbitrum One" isSoon isText="Soon"/>
                  <HeaderPadingItem  imageString="/logo/Polygon.png" text="Polygon Testnet" />
                  <HeaderPadingItem  imageString="/logo/Binance.png" text="BNB Smart Chain Testnet" />
                  <HeaderPadingItem  imageString="/logo/Avalanche.png" text="Avalanche Testnet" />
                  <HeaderPadingItem  imageString="/logo/Arbitrum.png" text="Arbitrum Tinkeby" isSoon isText="Soon"/>
              </div>
            )
          }
         </div>
          <div className=" text-[13px] font-medium w-auto  flex items-center justify-center cursor-pointer pr-1">
          <ConnectButton />
          </div>
        </div>
      </div>
       </div>
  )
}
