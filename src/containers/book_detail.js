import React, {Component} from 'react';
import {connect} from 'react-redux';

class BookDetail extends Component{
  render(){
    if(!this.props.book){
      return <div>Please select book to get started</div>
    }
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
