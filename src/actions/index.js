export default selectVideo(book){
  return{
    type: 'BOOK_SELECTED',
    payload: book
  };
}
