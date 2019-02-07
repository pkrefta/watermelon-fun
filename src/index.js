// import React from 'react';
// import ReactDOM from 'react-dom';

import { Database, Model } from '@nozbe/watermelondb'
import LokiJSAdapter from '@nozbe/watermelondb/adapters/lokijs'
import { field } from '@nozbe/watermelondb/decorators'
import { appSchema, tableSchema } from '@nozbe/watermelondb'

class Note extends Model {
  static table = 'notes'

  @field('title') title
  @field('body') body
}


const schema = appSchema({
  version: 1,
  tables: [
    tableSchema({
      name: 'notes',
      columns: [
        { name: 'title', type: 'string' },
        { name: 'body', type: 'string' },
      ]
    }),
  ]
})

const adapter = new LokiJSAdapter({
  schema,
})

let database = new Database({
  adapter,
  modelClasses: [
    Note
  ],
  // actionsEnabled: true,
})

const notes = database.collections.get('notes')

notes.query().fetchCount().then((count) => {
  console.log('count ' + count)
})


// ReactDOM.render(
//   <App database={ database }/>,
//   document.getElementById('root')
// );