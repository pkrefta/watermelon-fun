import React, { Component, Children } from 'react'
import PropTypes from 'prop-types'
import { appSchema, tableSchema } from '@nozbe/watermelondb'

class Note extends Model {
  static table = 'notes'

  @field('title') title
  @field('body') body
}

const createDatabase = () => {
  return new Database({
    adapter,
    modelClasses: [
      Note
    ],
    // actionsEnabled: true,
  })
}

export {
  createDatabase,
  Note
}
