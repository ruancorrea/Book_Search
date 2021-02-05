import React, { Component } from 'react';
import axios from 'axios';
import keyAPI from '../services/apiGoogle';
import apiBook from '../services/apiBook';

class GoogleBooks extends Component{
  constructor(props) {
		super(props)
		this.state = {
			books: [],
      search: ''
		}
	}

  handleChange(e){
    const book = e.target.value;
    this.setState({search: book});
  }

  handleSubmit(e){
    e.preventDefault();
    axios.get("https://www.googleapis.com/books/v1/volumes?q=" + this.state.search + "&key=" + keyAPI + "&maxResults=40")
    .then(data => {
      console.log(data.data.items)
      this.setState({books: data.data.items})
    });
  }

  async addBookSubmit(book, e) {
    e.preventDefault();
    const dados = {
      "id": book.id,
      "selfLink": book.selfLink,
      "thumbnail": book.volumeInfo.imageLinks.thumbnail === undefined ? "" : `${book.volumeInfo.imageLinks.thumbnail}`,
      "title": book.volumeInfo.title,
      "subtitle": book.volumeInfo.subtitle,
      "description": book.volumeInfo.description,
      "previewLink": book.volumeInfo.previewLink,
      "authors": book.volumeInfo.authors,
      "etag": book.etag
    }

    const axiosConfig = {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': "*",
      }
    }


    await apiBook.post('/book',  dados, axiosConfig)
      .then(result =>{
        console.log(result);
      }).catch(err =>{
        console.log("erro ao tentar salvar o book " + err)
      });


  }

  render(){
    return(
      <div>
        <h1>Search Books App</h1>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div class="form-group">
            <input
              type="text" onChange={this.handleChange.bind(this)}
              className="form-control mt-10"
              placeholder="Search for Books"
              autoComplete="off" />
            </div>
          <button type="submit" className="btn btn-danger mt-3">Search</button>
        </form>
        <div class='row'>
        {this.state.books.map(book =>{
          const thumbnail = book.volumeInfo.imageLinks === undefined ? "" : `${book.volumeInfo.imageLinks.thumbnail}`;
          return (
              <div class="col-6 col-sm-3 mt-3" key={book.id}>
                  <a href={book.volumeInfo.previewLink} target="_blank">
                    <img src={thumbnail} alt={book.title} />
                  </a>
                  <form onSubmit={this.addBookSubmit.bind(this, book)}>
                    <button type="submit" class="btn btn-success">Add</button>
                  </form>
            </div>
            )
          })}
          </div>
      </div>
    )
  }

}

export default GoogleBooks;
