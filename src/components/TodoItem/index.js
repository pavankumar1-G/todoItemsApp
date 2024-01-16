// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoItemDetails, onDeleteItem} = props
  const {title, id} = todoItemDetails

  const onDelete = () => {
    onDeleteItem(id)
  }
  return (
    <li className="simple-todo-item">
      <p className="todo-item">{title}</p>
      <div>
        <button className="delete-btn" type="button" onClick={onDelete}>
          Delete
        </button>
      </div>
    </li>
  )
}
export default TodoItem
