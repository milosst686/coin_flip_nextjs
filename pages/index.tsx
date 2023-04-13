import Head from 'next/head'
import MainSection from '@/common/components/MainSection/MainSection';
import Header from '@/common/components/Header/Header';
import NavBar from '@/common/components/NavBarItem/NavBar';
import Footer from '@/common/components/Footer/Footer';
import Analytics from '@/common/components/PopUpItems/Analytics';


export default function Home() {
  return (
    <>
      <Head>
        <title>Coin flip</title>
      </Head>
      <main>
        <nav >
          <div className="flex bg-ui-200 min-h-screen">
            <NavBar/>
            <div className=" ml-[20%] w-full">
              <Header />
              <MainSection  />
              <Footer />
            </div>
           
          </div>
          
        </nav>
      </main>
    </>
  )
}
