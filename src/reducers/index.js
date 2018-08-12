//a reducer takes in two things

//1. the action (info about what happened)
//2. a copy of the current state

//give action, store > let me work > return store

//take a copy of the state, and return modifyed state
import { combineReducers } from 'redux'

import entries from './entries'
// import postEntry from './postEntry'
// import publishEntry from './publishEntry'
// import authors from './authors'
// import deletedEntry from './deleteEntry'
// import unpublishedEntry from './unpublishEntry'

const rootReducer = combineReducers({
  entries,
  // postEntry,
  // publishEntry,
  // authors,
  // deletedEntry,
  // unpublishedEntry,
});

export default rootReducer

