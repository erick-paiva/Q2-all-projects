import { useSelector } from "react-redux";
import kenzie from "../../assets/kenzie.jpeg"
import "./styles.css"
const User = () => {
  const { comments } = useSelector((state) => state.user);
  return (
    <div>
        <figure>
        <img src={kenzie} alt="kenzie" />
        <figcaption>Kenzie</figcaption>
        </figure>
        
      <ul>
        {comments.map((e,i) => (
          <li key={i}> {e} </li>
        ))}
      </ul>
    </div>
  );
};

export default User;
