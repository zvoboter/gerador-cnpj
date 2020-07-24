import React from 'react';

import { Switch, Route } from 'react-router-dom';
import Main from '../pages/Main';
import Rut from '../pages/Rut';
import Nick from '../pages/Nick';
import Hash from '../pages/Hash';

const Routes = () => (
    <Switch>
        <Route path="/" exact={true} component={Main}></Route>

        <Route path="/cnpj" component={Main}></Route>
        <Route path="/rut" component={Rut}></Route>
        <Route path="/nick" component={Nick}></Route>
        <Route path="/hash" component={Hash}></Route>
    </Switch>
);

export default Routes;