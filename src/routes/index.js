import React from 'react';

import { Switch, Route } from 'react-router-dom';
import Main from '../pages/Main';
import Rut from '../pages/Rut';
import Hash from '../pages/Hash';
import ValidateCnpj from '../pages/ValidateCnpj';
import CharacterCounter from '../pages/CharacterCounter';

const Routes = () => (
        <Switch>
                <Route path={["/cnpj", "/"]} exact component={Main}></Route>
                <Route path="/rut" exact component={Rut}></Route>
                <Route path="/hash" exact component={Hash}></Route>
                <Route path="/validatecnpj" exact component={ValidateCnpj}></Route>
                <Route path="/characterCounter" exact component={CharacterCounter}></Route>
        </Switch>
);

export default Routes;