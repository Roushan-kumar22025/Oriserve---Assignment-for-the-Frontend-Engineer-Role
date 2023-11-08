import React, { useState, useEffect } from 'react';
import ImageDisplay from './Components/ImageDisplay'; 
import SearchBar from './Components/SearchBar'; 
import PreviewModal from './Components/PreviewModal'; 


const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    // Fetch recent images from Flickr when the component mounts
    fetchRecentImages();
  }, []);

  const fetchRecentImages = async () => {
    try {
      // Make an API call to fetch recent images from Flickr with safe_search parameter
      const response = await fetch(
        'https://www.flickr.com/services/api/flickr.photos.getRecent.html?safe_search=1'
      );
      const data = await response.json();
      setImages(data);
    } catch (error) {
      console.error('Error fetching recent images:', error);
    }
  };

  const handleSearch = async (newQuery) => {
    setQuery(newQuery);

    try {
      // Make an API call to search for images based on the query
      const response = await fetch(
        `https://www.flickr.com/services/api/flickr.photos.search.html?safe_search=1&text=${newQuery}`
      );
      const data = await response.json();
      setImages(data);
    } catch (error) {
      console.error('Error searching for images:', error);
    }

    // Save the search query in suggestions
    setSuggestions([...suggestions, newQuery]);
  };

  const openPreview = (image) => {
    setSelectedImage(image);
  };

  const closePreview = () => {
    setSelectedImage(null);
  };

  return (
    <div className="App">
      <h1>Flickr Image Search</h1>
      <SearchBar onSearch={handleSearch} suggestions={suggestions} />
      <ImageDisplay images={images} onImageClick={openPreview} />
      {selectedImage && <PreviewModal image={selectedImage} onClose={closePreview} />}
    </div>
  );
};

export default App;
