import { BrowserRouter, Switch, Route } from "react-router-dom"
import React from 'react';

import Login from '../screens/login/Login'
import Signup from '../screens/signup/Signup'
import InsertImage from '../screens/insertImage/InsertImage'
import ViewImage from '../screens/viewImage/ViewImage'

function Router () {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Login/>
        </Route>
        <Route exact path="/signup">
          <Signup/>
        </Route>
        <Route exact path="/insert">
          <InsertImage/>
        </Route>
        <Route exact path="/view">
          <ViewImage/>
        </Route>
        <Route>
          <div>ERRO 404 - Página não encontrada</div>
        </Route>

      </Switch>  
    </BrowserRouter>
  )
}
export default Router