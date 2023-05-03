import React, { useState, useEffect } from 'react';
import { Card, Button, Form, Modal} from 'react-bootstrap';
import {BiChevronsRight} from "react-icons/bi";
import AppleLogo from "../img/apple-podcasts-2447894.png";
import SpotifyLogo from "../img/spotify-2447904.png";
import GpodcastLogo from "../img/google-podcasts.png"

const EpisodePodcast = () => {
  const [episodes, setEpisodes] = useState([]);
  const [currentEpisode, setCurrentEpisode] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

  const episodesPerPage = 6;

  useEffect(() => {
    fetch('https://anchor.fm/s/602b72e8/podcast/rss')
      .then(response => response.text())
      .then(data => {
        const parser = new DOMParser();
        const xml = parser.parseFromString(data, 'application/xml');
        const items = xml.querySelectorAll('item');
        const episodeData = Array.from(items).map(item => {
          const spotifyImage = item.querySelector('spotify\\:image') ? item.querySelector('spotify\\:image').textContent : null;
          const image = spotifyImage ? spotifyImage : xml.querySelector('image url').textContent;
          return {
            title: item.querySelector('title').textContent,
            description: item.querySelector('description').textContent,
            audio: item.querySelector('enclosure').getAttribute('url'),
            spotify: 'https://open.spotify.com/show/42YnMzOWb923EkxZ8kU0RV',
            itunes: "https://podcasts.apple.com/ng/podcast/kurious-k/id1573065694",
            google: "https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy82MDJiNzJlOC9wb2RjYXN0L3Jzcw==",
            image,
            fullInfo: item.querySelector('link').textContent
          }
        });
        setEpisodes(episodeData);
      });
  }, []);

  const indexOfLastEpisode = currentPage * episodesPerPage;
  const indexOfFirstEpisode = indexOfLastEpisode - episodesPerPage;
  const currentEpisodes = episodes.filter(episode =>
  episode.title.toLowerCase().includes(searchTerm.toLowerCase())
  ).slice(indexOfFirstEpisode, indexOfLastEpisode);

  

  const renderEpisodes = () => {
    return currentEpisodes.map((episode, index) => (
      <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={index} >
        <Card className='h-100'>
          <Card.Img variant="top" src={episode.image} />
          <Card.Body>
            <Card.Title>{episode.title}</Card.Title>
            <Card.Text className="text-truncate" style={{maxHeight: '3em', overflow: 'hidden'}}>{episode.description}</Card.Text>
            <Button variant="outline-info" className='mb-2' onClick={() => handleLearnMore(episode)}>Read More <BiChevronsRight/></Button>
            <audio controls src={episode.audio} preload="none" />
            
          </Card.Body>
          <Card.Footer>
          {episode.spotify && <a  href={episode.spotify} target='_blank' rel="noreferrer"><img src={SpotifyLogo} alt='spotify logo' width={50} /></a>}
          {episode.itunes && <a href={episode.itunes} target='_blank' rel="noreferrer"><img src={AppleLogo} alt='logo' width={50} /></a>}
            {episode.google && <a href={episode.google} target='_blank' rel="noreferrer"><img src={GpodcastLogo} alt='logo' width={40} /></a>}

          </Card.Footer>
          <Modal show={currentEpisode !== null} onHide={handleClose} style={{backgroundImage: `url(${currentEpisode && currentEpisode.image})`, backgroundSize: '100%', Height: '100vh', objectFit: 'cover', opacity: '0.4'}}>
  <Modal.Header closeButton>
    <Modal.Title>{currentEpisode && currentEpisode.title}</Modal.Title>
  </Modal.Header>
  <Modal.Body >
    {currentEpisode && currentEpisode.description}
  </Modal.Body>
  <Modal.Footer>
    <Button variant="info" onClick={handleClose} >
      Close
    </Button>
  </Modal.Footer>
</Modal>

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

  const handleLearnMore = (episode) => {
       setCurrentEpisode(episode);
   }
    
     const handleClose = () => {
        setCurrentEpisode(null);
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
