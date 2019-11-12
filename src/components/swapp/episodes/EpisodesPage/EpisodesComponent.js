import React from 'react';
import Episode from '../Episode/Episode';

const EpisodesComponent = ({data}) => {
  return (<section id="episodesList ">
    {data.allEpisodes.edges.map(({ node }) => <Episode id={node.id} image={node.image} title={node.title}/>)}
  </section>
  )
}

export default EpisodesComponent;