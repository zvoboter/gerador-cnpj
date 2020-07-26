import React from 'react';

import { Switch, Route } from 'react-router-dom';
import Main from '../pages/Main';
import Rut from '../pages/Rut';
import Nick from '../pages/Nick';
import Hash from '../pages/Hash';

const Routes = () => (
    <Switch>
        <Route path={["/cnpj", "/"]} exact component={Main}></Route>
        <Route path="/rut" exact component={Rut}></Route>
        <Route path="/nick" exact component={Nick}></Route>
        <Route path="/hash" exact component={Hash}></Route>
    </Switch>
);

export default Routes;