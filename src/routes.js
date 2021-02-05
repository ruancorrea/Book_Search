import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import MeusLivros from './pages/MeusLivros';

import PesquisarLivros from './pages/PesquisarLivros';

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Main}/>
                <Route path="/search" component={PesquisarLivros}/>
                <Route path="/mybooks" component={MeusLivros}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;