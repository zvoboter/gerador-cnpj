import React from 'react';

import { Switch, Route } from 'react-router-dom';
import Main from '../pages/Main';
import RutGenerator from '../pages/RutGenerator';
import RutValidator from '../pages/RutValidator';
import Hash from '../pages/Hash';
import ValidateCnpj from '../pages/ValidateCnpj';
import CharacterCounter from '../pages/CharacterCounter';

const Routes = () => (
        <Switch>
                <Route path={["/cnpj", "/"]} exact component={Main}></Route>
                <Route path="/rutGenerator" exact component={RutGenerator}></Route>
                <Route path="/rutValidator" exact component={RutValidator}></Route>
                <Route path="/hash" exact component={Hash}></Route>
                <Route path="/validatecnpj" exact component={ValidateCnpj}></Route>
                <Route path="/characterCounter" exact component={CharacterCounter}></Route>
        </Switch>
);

export default Routes;