import CardsPokemon from './components/CardsPokemon'

export default function Home() {
  const pokemons = [
    { name: 'Bulbasaur', id: 1, type: 'Planta', imageUrl: '/bulbasaur.png' },
    { name: 'Charmander', id: 2, type: 'Fogo', imageUrl: '/charmander.png' },
    { name: 'Squirtle', id: 3, type: 'Agua', imageUrl: '/squirtle.png' },
    { name: 'Pidgey', id: 16, type: 'Normal/Flying', imageUrl: '/pidgey.png' },
  ]

  return (

  <div className="flex flex-col items-center justify-center min-h-screen bg-gray-700 gap-2">
    <h1 className="text-4xl font-bold text-amber-50 ">POKEDEX</h1>
    <p className="text-2xl text-gray-300">A simple Pokedex app</p>

    <div className="flex w-full h-full gap-8">
      {
        pokemons.map((pokemon,index) => (
          <CardsPokemon
          key={index}
          props={pokemon}
          
        />
      ))}
  

  </div>
  </div>
  
  )
}
