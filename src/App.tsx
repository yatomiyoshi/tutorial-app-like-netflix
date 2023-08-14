import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Row } from './components/Row';
import { requests } from './request';

function App() {
  return (
    <div className="App">
      <Row title='NETFLIX ORIGUINALS' fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentMovies} />
    </div>
  );
}

export default App;
