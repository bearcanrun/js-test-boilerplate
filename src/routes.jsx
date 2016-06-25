import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import React from 'react';
import {
  Router,
  Route,
  browserHistory,
} from 'react-router';

import {default as App} from './imports/client';

Meteor.startup(() => {
  render(
      <Router history={browserHistory}>
        <Route path="/" component={App}>
            <App />
        </Route>
      </Router>
    , document.getElementById('root')
  );
});
