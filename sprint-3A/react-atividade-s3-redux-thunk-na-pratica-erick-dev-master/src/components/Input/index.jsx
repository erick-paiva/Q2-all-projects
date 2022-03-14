import { useState } from "react";
import { useDispatch } from "react-redux";
import { addCommentThunk } from "../../store/modules/user/thunks";
import "./styles.css"
const Input = () => {
    const [comment, setComment] = useState("")
    const dispatch = useDispatch()

  return (
    <div>
      <input placeholder="Comment..." onChange={e => setComment(e.target.value)} />
      <button onClick={() => dispatch(addCommentThunk(comment))}>
        new comment
      </button>
    </div>
  );
};

export default Input;
