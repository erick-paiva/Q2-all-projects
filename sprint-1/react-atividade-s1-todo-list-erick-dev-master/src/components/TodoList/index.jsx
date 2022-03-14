import "./style.css"
const TodoList = ({arr,handleTodo}) =>{

    return(
        <ul>
            {arr.map((item,index) => (<li key={index}>{item} <button onClick={(e) => handleTodo(item)}>concluido</button></li>))}
        </ul>
    )
}
export default TodoList