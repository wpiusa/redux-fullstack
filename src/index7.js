//UPDATE

"use strict"
import {createStore} from 'redux';
//STEP 3 define reducers
const reducer = function(state={books:[]}, action){
	
	switch(action.type){
		case "POST_BOOK":
		  //let books=state.concat(action.payload);
		  //return books;
		  return {books:[...state.books,...action.payload]}
		  break;
		case "DELETE_BOOK":
		  const currentBookToDelete = [...state.books];
		  const indexToDelete = currentBookToDelete.findIndex(function(book){
             return book.id === action.payload.id ;
		  })
		  return {
		  	books:[...currentBookToDelete.slice(0,indexToDelete), ...currentBookToDelete.slice(indexToDelete + 1)]
		   }
		   break;
		case "UPDATE_BOOK" :
		   const currentBookToUpdate = [...state.books] ;
		   const indexToUpdate = currentBookToUpdate.findIndex(function(book){
		   	 return book.id === action.payload.id;
		   });

			// Create a new book object with the new values and with the same array index of the
			//item we want to replace. To achieve this we will use ...spread but we could use concat
			//methos too

			const newBookToUpdate = {
			  ...currentBookToUpdate[indexToUpdate],
			  title: action.payload.title
			}  

			// This Log has the purpose to show you how newBookToUpdate looks like
            console.log("what is it newBookToUpdate",newBookToUpdate);
            //use slice to remove the book at the specified index, replace with the new object
            //and concatenate witht he rest of items in the array
			return {
				    books:
				      [
				        ...currentBookToUpdate.slice(0,indexToUpdate), newBookToUpdate,
				        ...currentBookToUpdate.slice(indexToUpdate +1)
				      ]
				   }
			break;
	}
		return state
}


// STEP 1 create the store
const store = createStore(reducer);
store.subscribe(function(){
	console.log('current state is: ',store.getState());
	//console.log('current price: ',store.getState()[1].price);
})

// STEP 2 create and dispatch actions
store.dispatch({
	//console.log("3")
	type:"POST_BOOK",
	payload: [{
	    id: 1,
		title:'this is the book title',
		description: 'this is the book description',
		price: 33.33	
	},{
		id: 2,
		title:'this is the second book title',
		description: 'this is the second book description',
		price: 50
	}]
})

//-------------------------------------------
//UPDATE a book
store.dispatch({
	type: 'UPDATE_BOOK',
	payload: {
     id:2,
     title: 'Learn React in 24h'
    }
})