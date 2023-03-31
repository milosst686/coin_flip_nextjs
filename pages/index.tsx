import Head from 'next/head'
import { clsx } from 'clsx';
import NavBarItem from './common/components/NavBarItem/NavBarItem';
import Image from 'next/image';
import logoImg from './common/components/Logo/logo.png';
import bgImage from './common/components/Logo/coinflip_bg.jpeg';

export default function Home() {
  return (
    <>
      <Head>
        <title>Coin flip</title>
      </Head>
      <main>
      <nav >
      <div className="flex bg-ui-200  ">
       <div className={clsx(" bg-ui-300 h-screen w-[20%] shadow-black  shadow-2xl")}>
        <div className="flex items-center px-4">
          <Image src={logoImg} alt="/" width='50'height='50' />
          <p className="pt-4 text-red-400 font-bold">BWS GAMES</p>
        </div>
        <div className="py-4">
          <h2 className="text-sm text-font-100 py-4 uppercase px-4">Games</h2>
            <div>
              <NavBarItem text="Dice"  isActive/>
              <NavBarItem text="Coin toss"  />
              <NavBarItem text="Rulette"  />
              <NavBarItem text="Keno"  isSoon/>
              <NavBarItem text="Toss battle"  isSoon/>
              <NavBarItem text="Rusian Rulette"  isSoon/>
            </div>
        </div>
        <div className="py-4">
          <h2 className="text-sm  text-font-100 py-4 uppercase px-4">protocol</h2>
            <div>
              <NavBarItem text="Analytics"  />
              <NavBarItem text="Leaderboard"  />
              <NavBarItem text="Dividends"  isSoon/>
            </div>
        </div>
       </div>
       <div className=" w-full pl-4 py-6">
      <div className=" w-full flex justify-between">
        <div >
        <button className=" py-2 uppercase rounded-full border-font-100 border-2 w-32">
          <span className="text-font-100 text-sm"> Swap $Coins</span>  
        </button>
        </div>
        <div className="flex items-center pr-12 ">
          <span className="rounded-full bg-ui-100 text-white px-5 ">sdadasd</span>
          <span className="rounded-full bg-ui-100 text-white px-2">sdadasd</span>
          <button className="rounded-full bg-accent-200 px-2 text-white">Connect wallet</button>
        </div>
      </div>
      <div className="pr-4 py-8">
        <div >
          <Image 
          src={bgImage}
          alt="BWS resort"
          className=" rounded-xl object-cover w-[100%]"
          />
          <NavBarItem text="Analytics"  />          

        </div>
      </div>
       </div>
      </div>
      </nav>
      </main>
    </>
  )
}
