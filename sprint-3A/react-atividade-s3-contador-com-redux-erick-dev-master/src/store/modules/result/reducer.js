const resultReducer = (state = 0, action) => {
  console.log(action)
	switch (action.type) {
	  case "AUMENTAR_NUM":

      return state + action.num;
    case "DIMINUIR_NUM":

      return state - action.num;
    default:
      return state;
  }
}

export default resultReducer;