import React from 'react';
import GoogleBooks from '../../components/GoogleBooks';
import Navbar from '../../components/Navbar';

function PesquisarLivros(){
    return (
        <div>
            <Navbar />
            <div class="container mt-5">
                <GoogleBooks/>
            </div>
        </div>
    )
}

export default PesquisarLivros;