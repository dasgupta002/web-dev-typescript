import React, { ReactElement } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import GlobalStyle from './hoc/provider'
import Home from './pages/home'
import Detail from './pages/detail'

const App = () : ReactElement => {
  return <>
    <GlobalStyle />
    <BrowserRouter>
      <Switch>
        <Route path = '/' exact>
          <Home />
        </Route>
        <Route path = '/game/:id' exact>
          <Detail />
        </Route>
      </Switch>
    </BrowserRouter>
  </>
}

export default App