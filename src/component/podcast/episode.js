import React, { useState, useEffect } from 'react';
import { Card, Button, Form } from 'react-bootstrap';

function EpisodePodcast() {
  const [episodes, setEpisodes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [episodesPerPage] = useState(6);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('https://anchor.fm/s/602b72e8/podcast/rss')
      .then(response => response.text())
      .then(data => {
        const parser = new DOMParser();
        const xml = parser.parseFromString(data, 'application/xml');
        const items = xml.querySelectorAll('item');
        const episodeData = Array.from(items).map(item => {
          const image = item.querySelector('itunes\\:image') ? item.querySelector('itunes\\:image').getAttribute('href') : xml.querySelector('channel image url').textContent;
          return {
            title: item.querySelector('title').textContent,
            description: item.querySelector('description').textContent,
            audio: item.querySelector('enclosure').getAttribute('url'),
            spotify: item.querySelector('link').textContent,
            itunes: item.querySelector('guid').textContent,
            google: item.querySelector('google\\:play') ? item.querySelector('google\\:play').getAttribute('url') : null,
            image: image
          }
        });
        setEpisodes(episodeData);
      });
  }, []);

  const openLink = (link) => {
    window.location.href = link;
  }

  const indexOfLastEpisode = currentPage * episodesPerPage;
  const indexOfFirstEpisode = indexOfLastEpisode - episodesPerPage;
  const currentEpisodes = episodes.filter(episode =>
    episode.title.toLowerCase().includes(searchTerm.toLowerCase())
  ).slice(indexOfFirstEpisode, indexOfLastEpisode);

  const renderEpisodes = () => {
    return currentEpisodes.map((episode, index) => (
      <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={index} >
        <Card>
          <Card.Img variant="top" src={episode.image} />
          <Card.Body>
            <Card.Title>{episode.title}</Card.Title>
            <Card.Text className="text-truncate" style={{maxHeight: '3em', overflow: 'hidden'}}>{episode.description}</Card.Text>
            <audio controls src={episode.audio} preload="none" />
          </Card.Body>
          <Card.Footer>
            <Button variant="info" onClick={() => openLink(episode.spotify)}>Listen on Spotify</Button>{' '}
            <Button variant="secondary" onClick={() => openLink(episode.itunes)}>Listen on iTunes</Button>
            {episode.google && <Button variant="success" onClick={() => openLink(episode.google)}>Listen on Google Podcasts</Button>}
          </Card.Footer>
        </Card>
      </div>
    ));
  }

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  }

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  }

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  }

  return (
    <div className="container " id='episodes'>
      <div className="row justify-content-center mt-4 mb-3">
        <Form.Group controlId="searchEpisodes">
          <Form.Control type="text" placeholder="Search Episodes" value={searchTerm} onChange={handleSearch} />
        </Form.Group>
      </div>
      <div className="row justify-content-center">
        {renderEpisodes()}
      </div>
      <div className=" justify-content-center mb-5">
        <Button className='btn-lg' onClick={handlePrevPage} disabled={currentPage === 1}>Previous</Button>{' '}
        <Button className="btn-lg" onClick={handleNextPage} disabled={currentEpisodes.length < episodesPerPage}>Next</Button>
      </div>
    </div>
  );
}

export default EpisodePodcast;




