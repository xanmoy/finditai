import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import { MoveUpRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Navbar />
      <div className='flex flex-col lg:flex-row items-center justify-center h-screen p-6 lg:p-80 '>
        <div className='flex-1 lg:pl-[40px] text-left flex flex-col justify-center lg:justify-start'>
          <h2 className="synthia-text pb-0.5 lg:pb-0 font-semibold lg:text-6xl text-5xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-indigo-600 mb-6">
            Introducing
          </h2>
          <h2 className="synthia-text pb-0.5 lg:pb-0 font-semibold	text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-indigo-600 mb-6">
            Synthia AI
          </h2>
          <span className="mb-2">
            Synthia AI is a powerful AI developed by
            <a href="https://xanmoy.me" className='text-indigo-600'> Xanmoy</a>
            
            .
          
         
            Get answers to your questions, help with programming, and much more.
          
          </span>
          <div className='flex flex-row justify-start lg:justify-start p-6 pl-0 mt-3 lg:mt-0'>
            <Link href="/chat" className='btn bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xl rounded-lg py-3 px-6 lg:py-4 lg:px-8'>
             
              Try Synthia AI ↗

              {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"  className="lucide lucide-move-up-right"><path d="M13 5H19V11" /><path d="M19 5L5 19" /></svg> */}
              
            </Link>
          </div>
        </div>



        <div className='flex-1 flex justify-center'>
          <Image
            src={'/synthia.jpeg'}
            alt="hero"
            width={400}
            height={400}
            className="object-cover"
          />
        </div>
      </div>
     
      <Footer />
    </div>
  );
}
