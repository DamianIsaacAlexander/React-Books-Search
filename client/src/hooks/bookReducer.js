let previousState = [];

const sortByDate = (state) => {
    const books = state.books.map(book => {return book.volumeInfo ? book.volumeInfo : book});
    return books.sort((a, b) => {
        if(a.publishedDate > b.publishedDate){
            return -1 
        } else {
            return 1
        }
    });
}

const sortByTitle = (state) => {
    const books = state.books.map(book => {return book.volumeInfo ? book.volumeInfo : book});
    return books.sort((a, b) => {
        if(a.title > b.title){
            return 1 
        } else {
            return -1
        }
    }); 
}

const clearOne = (state, id) => {
    const updatedState = state.books.filter((book) => {
        return book._id !== id;
    });
    previousState = updatedState;
    return updatedState;
}


function sortByInput(term) {
    if(term){
        return previousState.filter(book => {
            const title = book.title.toLowerCase();
            return title.includes(term.toLowerCase());
        });
    } else {
        return previousState
    }
}

const bookReducer = (state, action) => {
    switch(action.type){
        case "setBooks": previousState = action.payload; return {books: [...state.books,...action.payload]};
        case "clear": return {books: []};
        case "clearOne": return {books: clearOne(state, action.id)};
        case "sortByInput": return {books: sortByInput(action.input)}
        case "sortByDate": return {books: sortByDate(state)};
        case "sortByTitle": return {books: sortByTitle(state)};
        default: return state;
    }
};

export default bookReducer;