import Image from 'next/image';
import { ImFacebook } from "react-icons/im";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { RiComputerLine } from "react-icons/ri";
import { IoRocketOutline } from "react-icons/io5";
import { GoDatabase } from "react-icons/go";
import { RiShieldCrossLine } from "react-icons/ri";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  p-8 bg-slate-950">
      <div className="min-h-screen min-w-full grid grid-cols-12 gap-4 border">
        <div className="col-span-5 relative">
          <Image 
            src="/image_girl.jpg"
            layout="fill"
            objectFit="cover"
            alt="Picture of the author"
          />
           <div className="tintOverlay absolute inset-0 "></div>
          <div className="absolute inset-0 flex items-end justify-center">
            <div className='p-4 text-white justify-center '>
              <h1 className='text-7xl text-center pb-2'>Naomi Niko</h1>
              <h3 className='text-2xl text-center pb-2 '>Developer</h3>
              <div >
                <ul className='flex flex-row items-center justify-center gap-4'>
                <li><ImFacebook /></li>
                <li>
                <BsInstagram />
                </li>
                <li><FaLinkedinIn /></li>
                </ul>
              
              </div>

            </div>
          </div>
        </div>
        <div className="col-span-7 text-white p-5">
          <div className='p-8'>
          <h1 className=' text-5xl'>
            about me
          </h1>
          <h3 className='text-xl text-[#962CB4] pt-5 pb-5' > 28years / web / freelancer</h3>
         
          <p className='text-xl text-white/65 leading-8 pb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet eget sit amet tellus cras adipiscing. Ut etiam sit amet nisl purus in mollis. Vel pharetra vel turpis nunc eget lorem dolor. Ipsum suspendisse ultrices gravida dictum fusce.</p>
          <hr width="100%" size="2"></hr>
          <h1 className='pt-5 text-4xl pb-7'>my services</h1>
          <div className='grid grid-cols-2 gap-3'>
            <div className='col-span-1 ' >
            <RiComputerLine color="#962cb4" size="3em" />
            <h2 className='text-2xl pt-3 pb-3'>development</h2>
            <p className='text-xl text-white/65 leading-8 pb-5' >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
welcome to this channel </p>
            </div>
            <div className='col-span-1 ' >
            <IoRocketOutline color="#962cb4" size="3em" />
            <h2 className='text-2xl pt-3 pb-3'>SEO optimisation</h2>
            <p className='text-xl text-white/65 leading-8 pb-5' >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
welcome to this channel </p>
            </div>
            <div className='col-span-1 ' >
            <GoDatabase color="#962cb4" size="3em" />
            <h2 className='text-2xl pt-3 pb-3'>data base</h2>
            <p className='text-xl text-white/65 leading-8 pb-5' >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
welcome to this channel </p>
            </div>
            <div className='col-span-1 ' >
            <RiShieldCrossLine color="#962cb4" size="3em" />
            <h2 className='text-2xl pt-3 pb-3'>data security</h2>
            <p className='text-xl text-white/65 leading-8 pb-5' >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
welcome to this channel </p>
            </div>
            

          </div>
          </div>
        
         

        </div>
      </div>
    </main>
  );
}
