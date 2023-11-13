import Image from 'next/image'
import { NovusBase } from "@/lib/models"
import { Form } from "@/lib/form"
import Lamp from "@/public/images/lamp.png"
import Flow from "@/public/images/flow.png"
import localFont from 'next/font/local'

// const surt = localFont({
//   src: [
//     {path: '../public/fonts/waterlily.regular.ttf'}
//   ],
//   variable: '--font-waterlily',
// })

// const waterlily = localFont({src: '../public/fonts/waterlily.regular.ttf'})

export default async function Home() {
  let response = await fetch("http://localhost:3000/api/server")
  let json = await response.json();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-16 px-0">
      <div className="z-10 max-w-5xl w-full h-full font-mono text-sm" style={{height: "100vh"}}>
        <header className='w-full'>
          <ul className=' menu lg:menu-horizontal relative md:menu-vertical flex justify-center w-full items-center'>
            <div className='absolute left-0'>
              <p className='text-2xl' style={{fontFamily: "futura"}}>SMVITM</p>
            </div>

            <div className='flex gap-7 text-lg font-mono'>
              <p style={{color:"#ff9b9b"}}>Home</p>
              <p>Gallery</p>
              <p>Register</p>
              <p>Contact</p>
              <p>About</p>
            </div>

            <div className='absolute right-0 text-2xl'>
              <p>SMVITM</p>
            </div>
          </ul>
        </header>

        <div className='flex flex-col justify-center items-center w-full h-full absolute top-0 left-0'>
          <img src={Lamp.src} alt="" className=' w-3/6 mt-40' style={{filter: "brightness(80%) contrast(1.2) blur(0.2px)", marginLeft: "-100px"}}></img>
          <div className='absolute flex flex-col justify-center mt-20'>
            <p className=' text-8xl' style={{fontFamily: "WaterLily"}}>VARNOTSAVA - 2K23</p>
            <p className=' text-xl text-center mt-3' style={{fontFamily: "Kollektif"}}>The Festival of Joy is Back!</p>
            <div className='w-full flex justify-center mt-5'>
              <button className='btn rounded-full border-0 text-black w-52' style={{backgroundColor: "#ff9b9b", fontFamily: "monospace"}}>KNOW MORE</button>
            </div>
          </div>
        </div>

        
        

      </div>

      <div className=' w-full flex flex-col justify-center items-center' style={{height:"100vh"}}>
        <img src={Flow.src} alt="" className=' w-4/6' style={{filter: "brightness(70%) contrast(1) blur(0.2px)", marginLeft: "-100px"}}></img>
        <div className='absolute'>
          <div className=' flex gap-5 items-center'>
            <p className='text-8xl' style={{fontFamily: "WaterLily", textShadow: " -5px 0 1px #00ffff, 5px 0 1px #ff00ff"}}>1000</p>
            <p className='text-6xl' style={{fontFamily: "WaterLily"}}>Events Registered</p>
          </div>
          <div className='w-full flex justify-center mt-10'>
              <button className='btn rounded-full border-0 text-black w-52' style={{backgroundColor: "#ff9b9b", fontFamily: "monospace"}}>REGISTER NOW</button>
          </div>
        </div>
      </div>

      <div className=' w-full flex flex-col justify-center items-center' style={{height:"100vh"}}>
        <p className='text-6xl' style={{fontFamily: "WaterLily"}}>WHEN?</p>

        <div className='flex gap-10 mt-20'>
          <p className='text-7xl px-10 py-6 bg-white text-black' style={{fontFamily: "WaterLily"}}>20</p>
          <p className='text-7xl px-20 py-6 bg-white text-black' style={{fontFamily: "WaterLily"}}>DECEMBER</p>
          <p className='text-7xl px-14 py-6 bg-white text-black' style={{fontFamily: "WaterLily"}}>2023</p>
        </div>
      </div>

      <div className=' w-full flex flex-col justify-center items-center' style={{height:"100vh"}}>
        <p className='text-6xl' style={{fontFamily: "WaterLily"}}>WHERE?</p>

        <div className='flex flex-col gap-10 mt-20 w-full'>
          <img className='w-full h-96 object-cover' src="/images/college.jpeg" alt=""></img>
          <p className='w-full text-center text-3xl' style={{fontFamily: "futura"}}>SHRI MADHWA VADIRAJA INSTITUTE OF TECHNOLOGY AND MANAGEMENT</p>
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Docs{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>
        {/* {Form(NovusBase)} */}
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Learn{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Templates{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Explore the Next.js 13 playground.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Deploy{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  )
}
