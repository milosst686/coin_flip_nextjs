import Head from 'next/head'
import { clsx } from 'clsx';
import NavBarItem from './common/components/NavBarItem/NavBarItem';
import Image from 'next/image';
import logoImg from './common/components/Logo/logo.png';

export default function Home() {
  return (
    <>
      <Head>
        <title>Coin flip</title>
      </Head>
      <main>
      <nav >
      <div className=" bg-ui-200 ">
       <div className={clsx(" bg-ui-300 h-screen w-64 shadow-black  shadow-2xl")}>
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
      </div>
      </nav>
      </main>
    </>
  )
}
