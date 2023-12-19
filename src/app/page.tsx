'use client'
import { TextArea } from '@radix-ui/themes'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-2 bg-white">
      <h1 className='text-xl font-semibold text-black'>Pixel Tales Story Generator</h1>
      <div className="border-[#7967f4] border-2 rounded-lg opacity-100"><TextArea variant='soft' className='text-black radius-sm p-2' placeholder="Enter your story idea" /></div>      <button className='cursor-pointer rounded-full bg-[#7967f4] radius-sm p-3 font-bold' type="button" onClick={() => {console.log('clicked')}}>Get your story!</button>
    </main>
  )
}
