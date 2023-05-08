import React, { useState } from 'react';
import {RiArrowDownSFill, RiArrowUpSFill} from 'react-icons/ri';
import MainMiddleTextComp from './MainMiddleTextComp';
import MainPadding from './MainPadding';
import {SiBinance} from 'react-icons/si';
import coinFlipContract from "@/common/abi/json/CoinFlip.json"
import { 
  useAccount, 
  useBalance, 
  useNetwork,
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
   } from 'wagmi';
import {ethers} from "ethers";
import { FlipCoin } from '../constants/flipCoin';
import customHook from '../hooks/customHook';

interface BettingSectionProps{
  choice: boolean
}

export const toEther = (bigNum: ethers.BigNumber | undefined) => {
  return ethers.utils.formatEther(bigNum ?? 0).slice(0, 6)
}
export default function MainMiddle({choice}:BettingSectionProps) {
const [amount, setAmount] = useState("0");

const {address, isConnecting} = useAccount();
const {chain}= useNetwork();

const balance = useBalance({
  address: address,
  chainId: Number(FlipCoin.chainId),
})
const {data: contractBalance} = useBalance({
  address: FlipCoin.address,
  chainId: Number(FlipCoin.chainId),
})

const debouncedChoice = customHook(choice, 500)
const debouncedAmount = customHook(amount, 500)

const   { config } = usePrepareContractWrite({
  address: FlipCoin.address,
  abi: coinFlipContract.abi,
  functionName: "flip",
  args: [Number(debouncedChoice)],
  overrides:{
    value: ethers.utils.parseEther(debouncedAmount),
  },
  enabled: Number(debouncedAmount)> 0,
})

const {data,write} = useContractWrite(config);
 const [isOpen, setIsOpen] = useState(false);

  function closeOnClick()
{
  if(isOpen)
  {
    setIsOpen((prev)=> !prev);
  }
}

  return (
    <div className="flex flex-1 flex-col items-center lg:p-[12px] p-2 " onClick={() => closeOnClick()}>

              <p className="text-white font-bold font-sans text-[72px] ">
                1.94x
              </p>
              <video src="/Matic_heads.webm"  width="140" height="140" autoPlay={true} />
              <div className="flex justify-center w-full">
                <div className="uppercase bg-ui-200 text-sm font-bold text-font-400 rounded-l-xl h-[56px] w-1/3 flex items-center justify-center border-r border-r-ui-400">
                  <p>bet</p>
                </div>

                <div className="bg-ui-200 flex items-center border-r border-r-ui-400 w-2/3">
                <input required type="text" inputMode="numeric" defaultValue={amount} className=" bg-ui-200 text-white text-xl mx-[20px] w-1/2 " />
                <button className=" bg-ui-400 text-font-400 rounded-xl m-[14px] h-[28px] w-[50px] ">max</button>
                </div>
                <div className="bg-ui-200 rounded-r-xl w-1/3 flex items-center justify-center cursor-pointer  hover:bg-ui-300"  
                onClick={() => {if(!isOpen) {setIsOpen((prev)=> !prev);}
                                if(isOpen) closeOnClick;
              }}>
                    <div className="flex items-center justify-center w-full">

                    {!isOpen ? (<RiArrowDownSFill className="text-font-400 text-2xl" />) 
                    : (<RiArrowUpSFill className="text-font-400 text-2xl"/>) }
                    {
                    isOpen && (

                    <div className="absolute rounded-[7px] w-[180px] h-[120px] bg-back-250 p-[4px] top-[470px]" onClick={() => setIsOpen(false)}>
                        <MainPadding  isPicked text="BNB" imageString="/logo/logo.svg" />
                        <MainPadding  text="BETS" imageString="/logo/Binance.png" hasInfo />
                    </div>
                            )
                    }
                        <span className="uppercase text-white text-[13px] font-bold m-custom1 hidden md:block">

                          eth
                        </span>
                        <div className="w-[20px] h-[20px] mt-[2px] text-accent-300">
                          <SiBinance />
                        </div>
                    </div>
                </div>
              </div>
              <MainMiddleTextComp 
              bal= {toEther(balance?.data?.value)}
              />
              <div className="mt-12 w-[100%] flex justify-center">
                <button type="button" disabled={true} className="rounded-xl border-2 border-accent-300 bg-transparent text-accent-300 text-[15px] font-semibold w-full h-[50px]">
                    Connect your Wallet
                    </button>
              </div>
           </div>        
  )
}
