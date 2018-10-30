import React, {Component} from 'react';
import {connect} from 'react-redux';

class BookDetail extends Component{
  render(){
    return(
        <div>Details for:</div>
        Title: {this.props.book.title}
    );
  }
}
function mapStateToProps(state){
    return{
      book: state.activeBook
    }
}
