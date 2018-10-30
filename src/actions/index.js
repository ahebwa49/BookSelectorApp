export default selectBook(book){
  return{
    type: 'BOOK_SELECTED',
    payload: book
  };
}
