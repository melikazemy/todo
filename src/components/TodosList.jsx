import { useContext } from 'react';
import { contextam } from '../todosContext.js';
import Todo from './Todo.jsx';


function TodosList() {
  const store = useContext(contextam)
  const eraseHandler = (id) => {
    store.dispatch({
      type: 'DELETE',
      id
    })

  }
  const checkHandler = (id) => {
    store.dispatch({
      type: 'TOGGLE',
      id
    })
  
  }
  return (
    <>
      <div className="todos">
        {store.todos.map(todoe =>
          <Todo todo={todoe} key={todoe.id} eraser={() => eraseHandler(todoe.id)} checker={() => checkHandler(todoe.id)} />

        )}

        {/* <Todo
          title="Study React"
          description="Understand context, reducers and state management with Redux."
          isDone={false}
        /> */}

      </div>
    </>
  )
}

export default TodosList