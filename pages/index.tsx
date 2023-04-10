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
          <div className="flex bg-ui-200 min-h-screen w-[100%] tracking-[.07em] overflow-auto">
            <div className="max-w-[264px] invisible lg:visible">
            <NavBar />
            </div>
            <div className="lg:ml-[264px] w-full">
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
