import React from 'react';
import { render } from 'react-dom';

// Import css
import css from './styles/style.styl';

// Import components
import Main from './components/Main';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

// Import react-router dependencies
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from "react-redux";

// Use {} for "history" because it's a NAMED export. Don't use {} for "store" since it's DEFAULT export.
import store, { history } from "./store";

// if url = "/", show main PhotoGrid
// if url = "/view/:postId", show Single (child of Main)
const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Main}>
        <IndexRoute component={PhotoGrid}></IndexRoute>
        <Route path="/view/:postId" component={Single}></Route>
      </Route>
    </Router>
  </Provider>
);

render(router, document.getElementById('root'));
