import logo from './logo.svg';
import './App.css';

import axios from 'axios';
import { useState } from 'react';

import keyAPI from './services/api'

function App() {

  const [book, setBook] = useState("")
  const [result, setResult] = useState([])
  const [apiKey, setApiKey] = useState(keyAPI)
  
  function handleChange(e) {
    const book = e.target.value;
    setBook(book);
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log(apiKey)
    axios.get("https://www.googleapis.com/books/v1/volumes?q=" + book + "&key=" + apiKey + "&maxResults=20")
    .then(data => {
      console.log(data.data.items)
      setResult(data.data.items);
    })
  }
  return (
    <div class="container">
      <h1>Book Search App React</h1>
      <form onSubmit={handleSubmit}>
        <div class="form-group">
          <input
            type="text" onChange={handleChange}
            className="form-control mt-10"
            placeholder="Search for Books"
            autoComplete="off" />
        </div>
        <button type="submit" className="btn btn-danger">Search</button>
      </form>
      {result.map(book =>{
        const thumbnail = book.volumeInfo.imageLinks === undefined ? "" : `${book.volumeInfo.imageLinks.thumbnail}`
    
        console.log("thumb = " + thumbnail)
        console.log("tipo = " + typeof thumbnail)
        return <a href={book.volumeInfo.previewLink} target="_blank">
          <img src={thumbnail} alt={book.title} />
        </a>
      })}
    </div>
  );
}

export default App;
