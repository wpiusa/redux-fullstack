"use strict"
import { createStore } from 'redux';

//STEP 3
const reducer = function(state=0,action) {
  switch(action.type) {
  	case "INCREMENT":
  	  return state + action.payload  ;
  	case "DECREMENT" :
  	  return state -1;
  }

  return state
}
//STEP 1
const store = createStore(reducer);
store.subscribe(function(){
	console.log('current state:'+store.getState());
})
//STEP 2
store.dispatch({type: "INCREMENT",	payload: 1});
store.dispatch({type: "INCREMENT",	payload: 1});
store.dispatch({type: "INCREMENT",	payload: 1});
store.dispatch({type: "DECREMENT", payload:1});