
import Image from 'next/image'

export default function Home() {
  return (

  <div className="flex flex-col items-center justify-center min-h-screen bg-gray-700 gap-2">
    <h1 className="text-4xl font-bold text-amber-50 ">POKEDEX</h1>
    <p className="text-2xl text-gray-300">A simple Pokedex app</p>

    <div className="cards-pokedex w-  border-1 rounded-lg p-10 bg-white flex flex-row">
      <div className="cards-pokemons border-1 rounded-lg border-none p-18 bg-gray-300">

      <Image
        src="/charmander.png"
        alt="charmander"
        width={100}
        height={100}
        className="rounded-lg"
      />
      <h3 className='font-medium text-gray-500 '>N° 004</h3>
      <h2 className="text-2xl font-bold text-gray-700 ">Charmander</h2>
      <button className='border-1 border-none rounded-sm w-full bg-[#fd7d24] text-white text-sm'>Fogo</button>
      </div>
      
    </div>
  </div>
  
  
  )
}
