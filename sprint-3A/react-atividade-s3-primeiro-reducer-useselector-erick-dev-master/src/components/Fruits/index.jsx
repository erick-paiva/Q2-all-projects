//importando useSelector do react-redux
import { useState } from "react";
import { useSelector } from "react-redux";
import "./styles.css"
const FruitsPage = () => {
	//acessando o estado global e pegando o state fruits
  const fruits = useSelector((state) => state.fruits);
  const [imgsFruits] = useState(["https://www.educolorir.com/imagem-banana-dm23207.jpg",
"https://www.educolorir.com/imagem-mac-dm19842.jpg","https://i.pinimg.com/736x/46/bf/f6/46bff62f79c94a853c074c968ed533d5.jpg"])
  return (
    <div>
      {fruits.map((fruit,i) => (
          <div className="fruits">
        <p key={fruit}> {fruit} </p>
        <img src={imgsFruits[i]} alt="frutas" />
        </div>
      ))}
    </div>
  );
}

export default FruitsPage;