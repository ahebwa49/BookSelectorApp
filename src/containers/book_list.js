import React, {Component} from 'react';
import {connect} from 'react-redux';

class BookList extends Component{
  renderList(){
      this.props.books.map((book) => {
        return(
          <li
          key={book.title}
          classname="list-group-item">{book.title}</li>
        );
      })
    );
  }
  render(){
    return(
      <ul classname="group-list col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}
function mapStateToProps(state){
  return{
    books: state.books
  };
}
export default connect(mapStateToProps)(BookList);
