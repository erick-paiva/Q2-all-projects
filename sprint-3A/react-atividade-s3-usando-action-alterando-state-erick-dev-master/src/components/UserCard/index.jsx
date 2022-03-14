import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeName } from "../../store/modules/user/actions";
import "./styles.css"
const UserCard = () => {
  const dispatch = useDispatch();
  const [newName, setNewName] = useState("")
  const handleClick = () => {
    dispatch(changeName(newName));
  }
  const {name} = useSelector((state) => state.user);

  return (
    <div>
      <h3>User Name: {name} </h3>
      <input placeholder="newuser" onChange={(e) => setNewName(e.target.value)} type="text"/>
      <button onClick={handleClick}>Change</button>
    </div>
  )
}

export default UserCard;