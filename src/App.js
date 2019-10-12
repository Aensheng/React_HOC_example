import React from 'react'
import './App.scss'

import UserProfile from './components/user-profile/user-profie.component.jsx'
import UserList from './components/user-list/user-list.component.jsx'

function App() {
  return (
    <div className="App">
      <UserList dataSource='https://jsonplaceholder.typicode.com/users' />
      <UserProfile 
      dataSource='https://jsonplaceholder.typicode.com/posts'
      name='Allen'
      email='aensheng@gmail.com'
      />
    </div>
  )
}

export default App
