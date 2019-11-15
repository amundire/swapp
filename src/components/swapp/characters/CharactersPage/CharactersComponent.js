import React from 'react';
import Character from '../Character/Character';

//todo: load more button

const CharactersPage = ({ allPeople, loadMore }) => {

  return (<section id="charactersPage">
    <div className="charactersList">
      {allPeople.edges.map(({ node }) => <Character id={node.id} image={node.image} name={node.name} />)}
    </div>
    <button className="loadMoreButton" onClick={loadMore}>Load More</button>
  </section>
  )
}

export default CharactersPage;