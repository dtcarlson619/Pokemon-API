import React, { useState} from 'react';

export default function Pokemon()
{
    const[pokemonState, setPokemonState] = useState([])
    async function handleClick()
    {
        await fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=807")
            .then(res => res.json())
            .then(res => setPokemonState(res.results))
            .catch(err => console.log(err))
    }
    return (
        <div>
            <button onClick= {handleClick}>Fetch Pokemon</button>
            <ol>
                {pokemonState.map((pokemon, i) =>
                (
                    <li key={i}>{pokemon.name}</li>
                ))}
            </ol>
        </div>
    )
}
