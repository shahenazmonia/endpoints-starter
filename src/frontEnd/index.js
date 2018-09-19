import React from 'react';
import reactDom from 'react-dom';
import App from './components/app';
import store from './store';
import {Provider} from 'react-redux';


const Main = ()=>{
  return(
    <Provider store={store}>
      <App> </App>
    </Provider>
  );
};

reactDom.render(
  <Main/ >, document.getElementById('myApp')
);
