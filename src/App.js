import React, {Component} from 'react';
import {connect} from 'react-redux';
import './App.css';
import  Nav from './Nav';
import NoteList from './NoteList'
import NoteForm from './NoteForm';
import AlertInfo from './AlertInfo';

class App extends Component {
  // noteData.once('value').then(function(snapshot) {
  //   console.log(snapshot.val());
    
  showForm = () => {
    if(this.props.isEdit) {
      return <NoteForm />
    }
  }
  
  render() {
    return (
    <div className="App">
      <Nav />
      <AlertInfo />
      <div className="container">
        <div className="row">
          <NoteList />
          {
            this.showForm()
          }
        </div>
      </div>
    </div>
  );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    isEdit: state.isEdit
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    // changeEditStatus: () => {
    //   dispatch(
    //     {type: "CHANGE_EDIT_STATUS"},
    //   )
    // }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
