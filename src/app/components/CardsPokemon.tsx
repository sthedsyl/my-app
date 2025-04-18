import React from 'react';
import Image from 'next/image';

interface CardsPokemonProps {
  props: {
    name: string;
    id: number;
    type: string;
    imageUrl: string;

  }
    
}

const CardsPokemon = ({props}: CardsPokemonProps) => {
  return (
    <div className="cards-pokedex w-  border-1 rounded-lg p-10 bg-white flex flex-row">
      <div className="cards-pokemons border-1 rounded-lg border-none p-18 bg-gray-300">

      <Image src={props.imageUrl} alt={props.name} width={100} height={100} className="rounded-full" />
      <h3 className='font-medium text-gray-500 '>{props.id}</h3>
      <h2 className="text-2xl font-bold text-gray-700 ">{props.name}</h2>
      <button className='border-1 border-none rounded-sm w-full bg-[#fd7d24] text-white text-sm'>{props.type}</button>
      </div>
      
    </div>

  )

}

    export default CardsPokemon
