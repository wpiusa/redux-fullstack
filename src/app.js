// IMPORT ACTIONS
import {addToCart} from './actions/cartActions';
import {postBooks, deleteBooks, updateBooks} from './actions/booksActions';

import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';

const middleware =applyMiddleware(logger());
const store = createStore(reducers,middleware);
// STEP 2 create and dispatch actions
store.dispatch(postBooks(
	[{
		id: 1,
		title:'this is the book title',
		description: 'this is the book description',
		price: 33.33
	},
	{
		id: 2,
		title:'this is the second book title',
		description: 'this is the second bookdescription',
		price: 50
	}]
))
// DELETE a book
store.dispatch(deleteBooks(	{id: 1}))

// UPDATE a book
store.dispatch(updateBooks(
	{
		id: 2,
		title:'Learn React in 24h'
	}
))

//-->> CART ACTIONS <<--
// ADD to cart
store.dispatch(addToCart([{id: 1}]))
//-------------------------------------------