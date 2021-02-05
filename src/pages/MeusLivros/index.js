import React, { Component } from 'react';

import Navbar from '../../components/Navbar';

import MyBooks from '../../components/MyBooks';

class MeusLivros extends Component{
    render(){
        return (
            <div>
                <Navbar />
                <div class="container">
                    <MyBooks />
                </div>
            </div>
        )
    }
}

export default MeusLivros;