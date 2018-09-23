import { createStore } from 'redux';
import rootReducer from './reducers';
import { increase, decrease } from './actions';

const store = createStore(rootReducer);
const valueEl = document.querySelector('#value');

function render() {
  valueEl.innerHTML = store.getState().toString();
}

render();
store.subscribe(render);

document.querySelector('#increase').addEventListener('click', () => {
  store.dispatch(increase())
});

document.querySelector('#decrease').addEventListener('click', () => {
  store.dispatch(decrease())
});

document.querySelector('#increaseIfOdd').addEventListener('click', () => {
  if(store.getState() % 2 === 0) {
    return;
  }
  store.dispatch(increase())
});

document.querySelector('#increaseAsync').addEventListener('click', () => {
  setTimeout(function() {
    store.dispatch(increase());
  }, 1000);
});
