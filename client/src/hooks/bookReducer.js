const sortByDate = (state) => {
    const books = state.books.volumeInfo ? state.books.volumeInfo : state.books;
    return books.sort((a, b) => {
        if(a.publishedDate > b.publishedDate){
            return -1 
        } else {
            return 1
        }
    }); 
}

const sortByTitle = (state) => {
    const books = state.books.volumeInfo ? state.books.volumeInfo : state.books;
    return books.sort((a, b) => {
        if(a.title > b.title){
            return 1 
        } else {
            return -1
        }
    }); 
}

const clearOne = (state, id) => {
    return state.books.filter((book) => {
        return book._id !== id;
    })
}

const bookReducer = (state, action) => {
    switch(action.type){
        case "setBooks": return {books: [...state.books,...action.payload]};
        case "clear": return {books: []};
        case "clearOne": return {books: clearOne(state, action.id)};
        case "sortByDate": return {books: sortByDate(state)};
        case "sortByTitle": return {books: sortByTitle(state)};
        default: return state;
    }
};

export default bookReducer;