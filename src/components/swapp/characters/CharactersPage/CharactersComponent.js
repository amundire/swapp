import React from 'react';
import Character from '../Character/Character';

//todo: load more button

const CharactersPage = ({allPeople, loadMore}) => {

  return (<section id="charactersList ">
    {allPeople.edges.map(({ node }) => <Character id={node.id} image={node.image} name={node.name}/>)}
    <button onClick={loadMore}>Load More</button>
  </section>
  )
}

export default CharactersPage;