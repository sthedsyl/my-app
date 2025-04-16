
import Image from 'next/image'

export default function Home() {
  return (

  <div className="flex flex-col items-center justify-center min-h-screen bg-gray-700 gap-2">
    <h1 className="text-4xl font-bold text-amber-50 ">POKEDEX</h1>
    <p className="text-2xl text-gray-300">A simple Pokedex app</p>

    <div className="cards-pokedex border-1 rounded-lg p-30 bg-white">
      <div className="cards-pokedex border-1 rounded-lg p-30 bg-gray-300">
      <Image
        src="/charmander.png"
        alt="charmander"
        width={100}
        height={100}
        className="rounded-lg"
      />
      </div>
      
      

    </div>
  </div>
  
  
  )
}
