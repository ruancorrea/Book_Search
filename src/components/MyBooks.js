import React, { Component } from "react";

import apiBook from '../services/apiBook';

class MyBooks extends Component{
    state = {
        books: []
    }

    async componentDidMount(){
        const response = await apiBook.get('/book');
        //console.log(response.data);

        this.setState({books: response.data});
    }

    async removeBookSubmit(book, e) {
        await apiBook.delete('/book/' + book._id, )
        .then(result =>{
          }).catch(err =>{
            console.log("erro ao tentar deletar o book")
          });

    }

    render(){
        const {books} = this.state;
        console.log(books);
        return (
            <div>
                <div class="container">
                    <h1 class="mt-5">Livros adicionados</h1>
                    <div class='row'>
                        {this.state.books.map( book =>{
                            return(
                                <div class="col-6 col-sm-3 mt-5" key={book.id}>
                                    <a href={book.previewLink} target="_blank">
                                        <img src={book.thumbnail} alt={book.title} />
                                    </a>
                                    <br/><p class="text-start">{book.title}</p>
                                    <form onSubmit={this.removeBookSubmit.bind(this, book)}>
                                        <button type="submit" class="btn btn-danger">Del</button>
                                    </form>
                                </div>
                            )
                        }

                        )}
                    </div>
                </div>
            </div>
        )
    }
}

export default MyBooks;