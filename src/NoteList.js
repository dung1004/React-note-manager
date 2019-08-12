import React, { Component } from 'react';
import {noteData} from './firebaseConnect';
import NoteItem from './NoteItem';

export default class NoteList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dataFirebase: [],
    }
  }
  
  componentWillMount() {
    noteData.on('value', (notes) => {
      const arrData = [];
      notes.forEach(element => {
        const id = element.key;
        const noteTitle = element.val().title;
        const noteContent = element.val().content;
        arrData.push({
          id: id,
          noteTitle: noteTitle,
          noteContent: noteContent,
        })
      })
      this.setState({
        dataFirebase: arrData,
      });
    })
  }
  
  
  getData = () => {
    return this.state.dataFirebase.map((value, key) => {
      return <NoteItem
            key={key}
            i={key}
            note={value}
            noteTitle = {value.noteTitle}
            noteContent = {value.noteContent}
          />
    })
  }
    render() {
        return (
            <div className="col">
            <div id="note" role="tablist" aria-multiselectable="true">
              {
                this.getData()
              }
            </div>
          </div>
        )
    }
}
