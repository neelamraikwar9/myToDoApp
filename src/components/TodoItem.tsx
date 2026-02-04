
type TodoProp = {
    todo: {
        id: number;
        text: string; 
        completed: boolean; 
    }; 

    onToggle: (id: string | number) => void; 

}

const TodoItem : React.FC<TodoProp> = ( { todo, onToggle } ) => {
    return (
        <div>
            <ul>
                <li>
                    <input type="checkbox" checked={todo.completed} onChange={() => onToggle(todo.id)}/>
                    {todo.text} 
                    {todo.completed && <span style={{color: 'green'}}>  Done </span>}
                </li>
            </ul>
        </div>
    )
}

export default TodoItem; 