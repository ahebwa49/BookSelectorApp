import React, {Component} from 'react';

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
