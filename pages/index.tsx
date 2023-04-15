import Head from 'next/head'
import MainSection from '@/common/components/MainSection/MainSection';
import Header from '@/common/components/Header/Header';
import NavBar from '@/common/components/NavBarItem/NavBar';
import Footer from '@/common/components/Footer/Footer';


export default function Home() {
  return (
    <>
      <Head>
        <title>Coin flip</title>
      </Head>
      <main>
        <nav >
          <div className="flex bg-ui-200 min-h-screen w-full tracking-wider">
            <div className="invisible lg:visible">
            <NavBar />
            </div>
            <div className=" lg:ml-[264px] w-full">
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
