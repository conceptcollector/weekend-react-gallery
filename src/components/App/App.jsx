import {useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';

function App() {
  useEffect(() => {
    getGallery();
  }, [])

  const [galleryList, setGalleryList] = useState([]);

  const getGallery = () => {
    axios({
        method: 'GET',
        url: '/gallery'
    }).then((response) => {
        setGalleryList(response.data)
    }).catch((error) => {
        console.log('GET /gallery broke:', error);
    })
}

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <GalleryList galleryList={galleryList}/>
      </div>
    );
}

export default App;
