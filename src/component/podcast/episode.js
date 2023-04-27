import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';

function EpisodePodcast() {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    fetch('https://anchor.fm/s/602b72e8/podcast/rss')
      .then(response => response.text())
      .then(data => {
        const parser = new DOMParser();
        const xml = parser.parseFromString(data, 'application/xml');
        const items = xml.querySelectorAll('item');
        const episodeData = Array.from(items).map(item => {
          return {
            title: item.querySelector('title').textContent,
            description: item.querySelector('description').textContent,
            audio: item.querySelector('enclosure').getAttribute('url'),
            spotify: item.querySelector('guid').textContent,
            itunes: item.querySelector('link').textContent
          }
        });
        setEpisodes(episodeData);
      });
  }, []);

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        {episodes.map((episode, index) => (
          <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={index}>
            <Card>
              <Card.Body>
                <Card.Title>{episode.title}</Card.Title>
                <Card.Text className="text-truncate" style={{maxHeight: '3em', overflow: 'hidden'}}>{episode.description}</Card.Text>
                <audio controls src={episode.audio} preload="none" />
              </Card.Body>
              <Card.Footer>
                <Button className='btn-lg' href={episode.itunes} target="_blank" rel="noopener noreferrer">Listen on Spotify</Button>
                <Button variant="secondary" href={episode.spotify} target="_blank" rel="noopener noreferrer">Listen on iTunes</Button>
              </Card.Footer>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EpisodePodcast;
