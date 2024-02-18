export default function todoReducer(todos, action) {

    if (action.type === 'DELETE') {
        if (confirm('are u sure')) {
            return todos.filter(todo => todo.id !== action.id);
        }
    }

    else if (action.type === 'TOGGLE') {

        return todos.map(todo => {
            if (todo.id === action.id) {
                todo.isDone = !todo.isDone;
                return todo
            } else {
                return todo;
            }
        })

    }
}


