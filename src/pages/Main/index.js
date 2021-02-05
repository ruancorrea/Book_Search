import React from 'react';
import GoogleBooks from '../../components/GoogleBooks';

import MyBooks from '../../components/MyBooks';
import Navbar from '../../components/Navbar';

function Main(){
    return (
        <div>
            <Navbar />
            <div class="container">
                <div class="row mt-5">
                    <GoogleBooks />
                </div>
                <div class="row justify-content-center mt-5">
                    <div class="col-8">
                        <MyBooks />
                        <br />
                        <br />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;