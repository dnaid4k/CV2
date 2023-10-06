import Image from 'next/image';
import Hero from './Components/Hero';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#796c6c] container mx-auto px-12 py-4">
      <Hero />
    </main>
  )
}
