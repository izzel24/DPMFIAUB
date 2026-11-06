import Navbar from '../component/Navbar'
import ScrollToTop from '../component/ScrollToTop'
import Footer from '../component/Footer'

export default function MainLayout({children }) {

  return (
     <div className='h-screen'>
      <ScrollToTop />
      <Navbar />
      {children}
      <footer className='h-[350px] bg-gradient-to-l from-[#3bbdac] from-0% via-[#2BA097] via-30% via-[#256a6b] via-65% to-[#148b8f] to-95% rounded-t-[70px] mt-auto min-w-96'>
        <Footer />
      </footer>
    </div>
  )
}
