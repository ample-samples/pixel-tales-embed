'use client'
import { TextArea } from '@radix-ui/themes'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <h1 className='text-xl'>Pixel Tales Story Generator</h1>
      <TextArea placeholder="Enter your story idea" />
      <button className='cursor-pointer' type="button" onClick={() => {console.log('clicked')}}>Get your story!</button>
    </main>
  )
}
