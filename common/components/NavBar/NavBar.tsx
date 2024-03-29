import React from 'react'
import NavBarItem from './NavBarItem'
import Image from 'next/image'
import {FaTwitter, FaTelegramPlane} from 'react-icons/fa'
import {SiCoinmarketcap} from 'react-icons/si'

export default function NavBar() {
  return (
       <div className=" bg-ui-300 h-screen shadow-black shadow-2xl fixed pb-[20px] flex flex-col justify-between  px-[20px] py-[16px]  ">
        <div>

          <div className="flex items-center h-[50px]">
          <Image src="/logo/logo.svg" alt="/" width={34} height={34} className="my-[8px] mr-[11px]"/>
          <p className="font-extrabold text-[18px] text-white">BestGames</p>
          </div>
  
       <div>
       <div className="py-[8px] h-[490px]">
          <div className=" flex items-center h-[45px] font-semibold">
          <h2 className=" text-font-100 uppercase px-[14px] text-[12px]">Games</h2>
          </div>
        <div>
            <div>
              <NavBarItem text="Dice"  />
              <NavBarItem text="Coin toss"  isActive/>
              <NavBarItem text="Roulette"  />
              <NavBarItem text="Keno"  isSoon/>
              <NavBarItem text="Toss battle"  isSoon/>
              <NavBarItem text="Rusian Roulette"  isSoon/>
            </div>
        </div>
        <div className="mt-[30px] h-[45px] flex items-center">
        <h2 className="px-[14px] text-[12px] text-font-100 uppercase">protocol</h2>
        </div>
        <div>
            <div>
              <NavBarItem text="Analytics"  />
              <NavBarItem text="Leaderboard"  />
              <NavBarItem text="Dividends"  isSoon/>
            </div>
        </div>
        </div>
       </div>
        </div>
        <div>
        <div className="flex text-white text-[12px] font-semibold ">
          <a href="" target="_blank" className="px-[16px] h-[44px]">
            <div className="flex items-center justify-center pl-[8px] py-[12px] h-[20px] ">
              <p >
                Vote
              </p>
            </div>
          </a>
          <a href="" target="_blank" className="px-[16px] h-[44px]">
            <div className="flex items-center justify-center pl-[8px] py-[12px] h-[20px] ">
              <p >
                Documentation
              </p>
            </div>
          </a>
        </div>
       <div className="">
       <div className="flex items-center text-white  w-[232px] h-[40px] text-[15px]" >
          <a href="" target="_blank" className=" flex items-center justify-center w-[36px] h-[36px] hover:bg-ui-400 rounded-full">
            <Image src="/rightArrow.png" alt="" height={15} width={15}/>
          </a>
          <a href="" target="_blank" className=" flex items-center justify-center w-[36px] h-[36px] hover:bg-ui-400 rounded-full">
            <FaTwitter className="w-[15px] h-[15px]"/>
          </a>
          <a href="" target="_blank" className=" flex items-center justify-center w-[36px] h-[36px] hover:bg-ui-400 rounded-full">
            <FaTelegramPlane className="w-[15px] h-[15px]" />
          </a>
          <a href="" target="_blank" className=" flex items-center justify-center w-[36px] h-[36px] hover:bg-ui-400 rounded-full">
            <SiCoinmarketcap className="w-[15px] h-[15px]"/>
          </a>
        </div>
       </div>
        <hr className="border-t-ui-100 mx-[24px] my-[12px]" />
        <div className="px-[16px] h-[60px] flex items-center">
          <div className=" flex items-center  justify-center w-[132px] my-[12px] mr-[32px]  h-[36px] rounded-[14px] hover:bg-ui-400 bg-ui-500 shadow-lg shadow-black ">
            <a href="" target="_blank" className=" flex items-center text-sm text-white gap-x-1 ">
              <Image src="/logo/logo.svg" alt="logo" width={20} height={20}/>
            <span>
              $0.0009557
            </span>
          </a>
          </div>
          <div className="w-[40px]"></div>
        </div>
        </div>
       </div>
  )
}
