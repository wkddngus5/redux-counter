import { createStore } from 'redux';
import React from 'react';
import ReactDOM from 'react-dom'

import rootReducer from './reducers';
import {increase, decrease} from "./actions";
import Counter from "./components/Counter";


const store = createStore(rootReducer);

const render = () => ReactDOM.render(
  <Counter
    value={store.getState()}
    onIncrease={() => store.dispatch(increase())}
    onDecrease={() => store.dispatch(decrease())}
  />,
  document.querySelector('#root')
);

render();
store.subscribe(render);
