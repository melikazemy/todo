import Header from './components/Header.jsx';
import Home from './views/Home.jsx';
import './App.scss';
import { useReducer } from 'react';
import todoReducer from './todosReducer.js';
import { contextam } from './todosContext.js';
// import { useState } from 'react';
const initialTodos = [
  {
    id: 0, description: 'gym ,dog groccery', title: 'Saturday', isDone: true
  },
  {
    id: 1, description: 'gym ,dog groccery', title: 'Sunday', isDone: true
  },
  {
    id: 2, description: 'gym ,dog groccery', title: 'Monday', isDone: true
  },
  {
    id: 3, description: 'gym ,dog groccery', title: 'Thursday', isDone: true
  },
]
function App() {
  // const [todos, setTodos] = useState(initialTodos)
  const [todos, dispatch] = useReducer(todoReducer, initialTodos)
  return (
    <>
      <main>

        {/* <contextam.Provider value={{ todos, setTodos }}>
          <Header appName="To-Do List with React" />

          <Home />
        </contextam.Provider> */}

        <contextam.Provider value={{ todos, dispatch }}>
          <Header appName="To-Do List with React" />
          <Home />
        </contextam.Provider>
      </main>
    </>
  )
}

export default App
