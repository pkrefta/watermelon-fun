import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = { count: 0 }

  constructor(props){
    super(props)
    this.db = props.database
  }

  componentWillMount(){
    setTimeout(() => {
      this.fetchCount()

      setTimeout(() => {
        this.addNote()
      }, 1500);
    }, 1500)
  }

  async addNote(){
    const notesCollection = this.db.collections.get('notes')

    await this.db.action(async () => {
      const newNote = await notesCollection.create(note => {
        note.title = 'New post'
        note.body = 'Lorem ipsum...'
      })

      this.fetchCount()
    })
  }

  fetchCount(){
    const notes = this.db.collections.get('notes')

    notes.query().fetchCount().then((count) => {
      this.setState({ count })
    })
  }

  render() {
    return <div>
      {this.state.count}
    </div>
  }
}

export default App;
