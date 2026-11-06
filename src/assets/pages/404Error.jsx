import { Link } from 'react-router-dom'

export default function Error() {
  return (
    <div className='h-screen flex flex-col justify-center items-center gap-5'> 
      <span className='font-SFBlack text-9xl bg-gradient-to-l from-[#23746e] to-[#103A37] text-transparent bg-clip-text'>Oops!</span> 
      <span className='font-SFBold text-lg'>404 - PAGE NOT FOUND</span> 
      <span>The page you were looking for doesn't exist </span>
      <Link to="/" className='bg-[#005B65] outline-none rounded-3xl text-white px-8 py-2 hover:bg-[#1f4f54]  '>GO TO HOMEPAGE</Link>
    </div>
  )
}
